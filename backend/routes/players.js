import express from 'express';
import Player from '../models/Player.js';
import { authenticateToken } from '../middleware/auth.js';
import { validatePlayer } from '../middleware/validation.js';

const router = express.Router();

// Get all players (public)
router.get('/', async (req, res) => {
  try {
    const { league, search, sortBy = 'matches', order = 'desc', page = 1, limit = 50 } = req.query;
    
    let query = { isActive: true };
    
    // Filter by league
    if (league && ['PCA', 'PPL', 'PSL'].includes(league)) {
      query.league = league;
    }
    
    // Search by name
    if (search) {
      query.name = { $regex: search, $options: 'i' };
    }
    
    // Pagination
    const skip = (parseInt(page) - 1) * parseInt(limit);
    
    // Sort options
    const sortOptions = {};
    sortOptions[sortBy] = order === 'desc' ? -1 : 1;
    
    const players = await Player.find(query)
      .sort(sortOptions)
      .skip(skip)
      .limit(parseInt(limit));
    
    const total = await Player.countDocuments(query);
    
    res.json({
      players,
      pagination: {
        current: parseInt(page),
        pages: Math.ceil(total / parseInt(limit)),
        total
      }
    });
  } catch (error) {
    console.error('Get players error:', error);
    res.status(500).json({ message: 'Failed to fetch players' });
  }
});

// Get single player (public)
router.get('/:id', async (req, res) => {
  try {
    const player = await Player.findById(req.params.id);
    if (!player || !player.isActive) {
      return res.status(404).json({ message: 'Player not found' });
    }
    res.json(player);
  } catch (error) {
    console.error('Get player error:', error);
    res.status(500).json({ message: 'Failed to fetch player' });
  }
});

// Create player (admin only)
router.post('/', authenticateToken, validatePlayer, async (req, res) => {
  try {
    const player = new Player(req.body);
    await player.save();
    res.status(201).json({
      message: 'Player created successfully',
      player
    });
  } catch (error) {
    if (error.code === 11000) {
      return res.status(400).json({ message: 'Player with this name already exists' });
    }
    console.error('Create player error:', error);
    res.status(500).json({ message: 'Failed to create player' });
  }
});

// Update player (admin only)
router.put('/:id', authenticateToken, validatePlayer, async (req, res) => {
  try {
    const player = await Player.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    
    if (!player) {
      return res.status(404).json({ message: 'Player not found' });
    }
    
    res.json({
      message: 'Player updated successfully',
      player
    });
  } catch (error) {
    if (error.code === 11000) {
      return res.status(400).json({ message: 'Player with this name already exists' });
    }
    console.error('Update player error:', error);
    res.status(500).json({ message: 'Failed to update player' });
  }
});

// Delete player (admin only)
router.delete('/:id', authenticateToken, async (req, res) => {
  try {
    const player = await Player.findByIdAndUpdate(
      req.params.id,
      { isActive: false },
      { new: true }
    );
    
    if (!player) {
      return res.status(404).json({ message: 'Player not found' });
    }
    
    res.json({
      message: 'Player deleted successfully',
      player
    });
  } catch (error) {
    console.error('Delete player error:', error);
    res.status(500).json({ message: 'Failed to delete player' });
  }
});

// Get player statistics (public)
router.get('/stats/overview', async (req, res) => {
  try {
    const { league } = req.query;
    
    let matchQuery = { isActive: true };
    if (league && ['PCA', 'PPL', 'PSL'].includes(league)) {
      matchQuery.league = league;
    }
    
    const stats = await Player.aggregate([
      { $match: matchQuery },
      {
        $group: {
          _id: null,
          totalPlayers: { $sum: 1 },
          totalMatches: { $sum: '$matches' },
          totalRuns: { $sum: '$runs' },
          totalWickets: { $sum: '$wickets' },
          avgBattingAverage: { $avg: '$battingAverage' },
          avgBowlingAverage: { $avg: '$bowlingAverage' },
          avgWinPercentage: { $avg: '$winPercentage' }
        }
      }
    ]);
    
    res.json(stats[0] || {
      totalPlayers: 0,
      totalMatches: 0,
      totalRuns: 0,
      totalWickets: 0,
      avgBattingAverage: 0,
      avgBowlingAverage: 0,
      avgWinPercentage: 0
    });
  } catch (error) {
    console.error('Get stats error:', error);
    res.status(500).json({ message: 'Failed to fetch statistics' });
  }
});

export default router;
