import express from 'express';
import Player from '../models/Player.js';
import TrophyWinner from '../models/TrophyWinner.js';
import CaptainRecord from '../models/CaptainRecord.js';
import PCASuperOver from '../models/PCASuperOver.js';
import PCAGrade from '../models/PCAGrade.js';
import PCACoach from '../models/PCACoach.js';
import { authenticateToken } from '../middleware/auth.js';
import { validateTrophyWinner, validateCaptainRecord, validatePCASuperOver, validatePCAGrade, validatePCACoach } from '../middleware/validation.js';

const router = express.Router();

// Get PCA players
router.get('/players', async (req, res) => {
  try {
    const players = await Player.find({ league: 'PCA', isActive: true })
      .sort({ matches: -1 });
    res.json(players);
  } catch (error) {
    console.error('Get PCA players error:', error);
    res.status(500).json({ message: 'Failed to fetch PCA players' });
  }
});

// Get PCA trophy winners
router.get('/trophies', async (req, res) => {
  try {
    const trophies = await TrophyWinner.find({ league: 'PCA' })
      .sort({ year: -1 });
    res.json(trophies);
  } catch (error) {
    console.error('Get PCA trophies error:', error);
    res.status(500).json({ message: 'Failed to fetch PCA trophies' });
  }
});

// Get PCA captain records
router.get('/captains', async (req, res) => {
  try {
    const captains = await CaptainRecord.find({ league: 'PCA' })
      .sort({ winPercent: -1 });
    res.json(captains);
  } catch (error) {
    console.error('Get PCA captains error:', error);
    res.status(500).json({ message: 'Failed to fetch PCA captains' });
  }
});

// Get PCA SuperOver tournament winners
router.get('/superover', async (req, res) => {
  try {
    const superOver = await PCASuperOver.find()
      .sort({ createdAt: -1 });
    res.json(superOver);
  } catch (error) {
    console.error('Get PCA SuperOver error:', error);
    res.status(500).json({ message: 'Failed to fetch PCA SuperOver' });
  }
});

// Get PCA grade list
router.get('/grades', async (req, res) => {
  try {
    const grades = await PCAGrade.find()
      .sort({ grade: 1, score: -1 });
    res.json(grades);
  } catch (error) {
    console.error('Get PCA grades error:', error);
    res.status(500).json({ message: 'Failed to fetch PCA grades' });
  }
});

// Get PCA coaches
router.get('/coaches', async (req, res) => {
  try {
    const coaches = await PCACoach.find()
      .sort({ score: -1 });
    res.json(coaches);
  } catch (error) {
    console.error('Get PCA coaches error:', error);
    res.status(500).json({ message: 'Failed to fetch PCA coaches' });
  }
});


// Create trophy winner (admin only)
router.post('/trophies', authenticateToken, validateTrophyWinner, async (req, res) => {
  try {
    const trophy = new TrophyWinner({ ...req.body, league: 'PCA' });
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
      { ...req.body, league: 'PCA' },
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
    const captain = new CaptainRecord({ ...req.body, league: 'PCA' });
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
      { ...req.body, league: 'PCA' },
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

// ===== PCA SUPEROVER CRUD =====

// Create SuperOver winner (admin only)
router.post('/superover', authenticateToken, validatePCASuperOver, async (req, res) => {
  try {
    const superOver = new PCASuperOver(req.body);
    await superOver.save();
    res.status(201).json({
      message: 'SuperOver winner created successfully',
      superOver
    });
  } catch (error) {
    console.error('Create SuperOver error:', error);
    res.status(500).json({ message: 'Failed to create SuperOver winner' });
  }
});

// Update SuperOver winner (admin only)
router.put('/superover/:id', authenticateToken, validatePCASuperOver, async (req, res) => {
  try {
    const superOver = await PCASuperOver.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    
    if (!superOver) {
      return res.status(404).json({ message: 'SuperOver winner not found' });
    }
    
    res.json({
      message: 'SuperOver winner updated successfully',
      superOver
    });
  } catch (error) {
    console.error('Update SuperOver error:', error);
    res.status(500).json({ message: 'Failed to update SuperOver winner' });
  }
});

// Delete SuperOver winner (admin only)
router.delete('/superover/:id', authenticateToken, async (req, res) => {
  try {
    const superOver = await PCASuperOver.findByIdAndDelete(req.params.id);
    
    if (!superOver) {
      return res.status(404).json({ message: 'SuperOver winner not found' });
    }
    
    res.json({
      message: 'SuperOver winner deleted successfully',
      superOver
    });
  } catch (error) {
    console.error('Delete SuperOver error:', error);
    res.status(500).json({ message: 'Failed to delete SuperOver winner' });
  }
});

// ===== PCA GRADE CRUD =====

// Create grade (admin only)
router.post('/grades', authenticateToken, validatePCAGrade, async (req, res) => {
  try {
    const grade = new PCAGrade(req.body);
    await grade.save();
    res.status(201).json({
      message: 'Grade created successfully',
      grade
    });
  } catch (error) {
    console.error('Create grade error:', error);
    res.status(500).json({ message: 'Failed to create grade' });
  }
});

// Update grade (admin only)
router.put('/grades/:id', authenticateToken, validatePCAGrade, async (req, res) => {
  try {
    const grade = await PCAGrade.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    
    if (!grade) {
      return res.status(404).json({ message: 'Grade not found' });
    }
    
    res.json({
      message: 'Grade updated successfully',
      grade
    });
  } catch (error) {
    console.error('Update grade error:', error);
    res.status(500).json({ message: 'Failed to update grade' });
  }
});

// Delete grade (admin only)
router.delete('/grades/:id', authenticateToken, async (req, res) => {
  try {
    const grade = await PCAGrade.findByIdAndDelete(req.params.id);
    
    if (!grade) {
      return res.status(404).json({ message: 'Grade not found' });
    }
    
    res.json({
      message: 'Grade deleted successfully',
      grade
    });
  } catch (error) {
    console.error('Delete grade error:', error);
    res.status(500).json({ message: 'Failed to delete grade' });
  }
});

// ===== PCA COACH CRUD =====

// Create coach (admin only)
router.post('/coaches', authenticateToken, validatePCACoach, async (req, res) => {
  try {
    const coach = new PCACoach(req.body);
    await coach.save();
    res.status(201).json({
      message: 'Coach created successfully',
      coach
    });
  } catch (error) {
    console.error('Create coach error:', error);
    res.status(500).json({ message: 'Failed to create coach' });
  }
});

// Update coach (admin only)
router.put('/coaches/:id', authenticateToken, validatePCACoach, async (req, res) => {
  try {
    const coach = await PCACoach.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    
    if (!coach) {
      return res.status(404).json({ message: 'Coach not found' });
    }
    
    res.json({
      message: 'Coach updated successfully',
      coach
    });
  } catch (error) {
    console.error('Update coach error:', error);
    res.status(500).json({ message: 'Failed to update coach' });
  }
});

// Delete coach (admin only)
router.delete('/coaches/:id', authenticateToken, async (req, res) => {
  try {
    const coach = await PCACoach.findByIdAndDelete(req.params.id);
    
    if (!coach) {
      return res.status(404).json({ message: 'Coach not found' });
    }
    
    res.json({
      message: 'Coach deleted successfully',
      coach
    });
  } catch (error) {
    console.error('Delete coach error:', error);
    res.status(500).json({ message: 'Failed to delete coach' });
  }
});

export default router;
