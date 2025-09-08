import express from 'express';
import Player from '../models/Player.js';
import TrophyWinner from '../models/TrophyWinner.js';
import CaptainRecord from '../models/CaptainRecord.js';
import { authenticateToken } from '../middleware/auth.js';
import { validateTrophyWinner, validateCaptainRecord } from '../middleware/validation.js';

const router = express.Router();

// Get PPL players
router.get('/players', async (req, res) => {
  try {
    const players = await Player.find({ league: 'PPL', isActive: true })
      .sort({ matches: -1 });
    res.json(players);
  } catch (error) {
    console.error('Get PPL players error:', error);
    res.status(500).json({ message: 'Failed to fetch PPL players' });
  }
});

// Get PPL trophy winners
router.get('/trophies', async (req, res) => {
  try {
    const trophies = await TrophyWinner.find({ league: 'PPL' })
      .sort({ year: -1 });
    res.json(trophies);
  } catch (error) {
    console.error('Get PPL trophies error:', error);
    res.status(500).json({ message: 'Failed to fetch PPL trophies' });
  }
});

// Get PPL captain records
router.get('/captains', async (req, res) => {
  try {
    const captains = await CaptainRecord.find({ league: 'PPL' })
      .sort({ winPercent: -1 });
    res.json(captains);
  } catch (error) {
    console.error('Get PPL captains error:', error);
    res.status(500).json({ message: 'Failed to fetch PPL captains' });
  }
});


// Create trophy winner (admin only)
router.post('/trophies', authenticateToken, validateTrophyWinner, async (req, res) => {
  try {
    const trophy = new TrophyWinner({ ...req.body, league: 'PPL' });
    await trophy.save();
    res.status(201).json({
      message: 'Trophy winner created successfully',
      trophy
    });
  } catch (error) {
    console.error('Create trophy error:', error);
    res.status(500).json({ message: 'Failed to create trophy winner' });
  }
});

// Update trophy winner (admin only)
router.put('/trophies/:id', authenticateToken, validateTrophyWinner, async (req, res) => {
  try {
    const trophy = await TrophyWinner.findByIdAndUpdate(
      req.params.id,
      { ...req.body, league: 'PPL' },
      { new: true, runValidators: true }
    );
    
    if (!trophy) {
      return res.status(404).json({ message: 'Trophy winner not found' });
    }
    
    res.json({
      message: 'Trophy winner updated successfully',
      trophy
    });
  } catch (error) {
    console.error('Update trophy error:', error);
    res.status(500).json({ message: 'Failed to update trophy winner' });
  }
});

// Delete trophy winner (admin only)
router.delete('/trophies/:id', authenticateToken, async (req, res) => {
  try {
    const trophy = await TrophyWinner.findByIdAndDelete(req.params.id);
    
    if (!trophy) {
      return res.status(404).json({ message: 'Trophy winner not found' });
    }
    
    res.json({
      message: 'Trophy winner deleted successfully',
      trophy
    });
  } catch (error) {
    console.error('Delete trophy error:', error);
    res.status(500).json({ message: 'Failed to delete trophy winner' });
  }
});

// Create captain record (admin only)
router.post('/captains', authenticateToken, validateCaptainRecord, async (req, res) => {
  try {
    const captain = new CaptainRecord({ ...req.body, league: 'PPL' });
    await captain.save();
    res.status(201).json({
      message: 'Captain record created successfully',
      captain
    });
  } catch (error) {
    console.error('Create captain error:', error);
    res.status(500).json({ message: 'Failed to create captain record' });
  }
});

// Update captain record (admin only)
router.put('/captains/:id', authenticateToken, validateCaptainRecord, async (req, res) => {
  try {
    const captain = await CaptainRecord.findByIdAndUpdate(
      req.params.id,
      { ...req.body, league: 'PPL' },
      { new: true, runValidators: true }
    );
    
    if (!captain) {
      return res.status(404).json({ message: 'Captain record not found' });
    }
    
    res.json({
      message: 'Captain record updated successfully',
      captain
    });
  } catch (error) {
    console.error('Update captain error:', error);
    res.status(500).json({ message: 'Failed to update captain record' });
  }
});

// Delete captain record (admin only)
router.delete('/captains/:id', authenticateToken, async (req, res) => {
  try {
    const captain = await CaptainRecord.findByIdAndDelete(req.params.id);
    
    if (!captain) {
      return res.status(404).json({ message: 'Captain record not found' });
    }
    
    res.json({
      message: 'Captain record deleted successfully',
      captain
    });
  } catch (error) {
    console.error('Delete captain error:', error);
    res.status(500).json({ message: 'Failed to delete captain record' });
  }
});


export default router;
