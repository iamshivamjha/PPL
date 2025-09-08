import mongoose from 'mongoose';

const playerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    unique: true
  },
  matches: {
    type: Number,
    required: true,
    min: 0
  },
  runs: {
    type: Number,
    required: true,
    min: 0
  },
  wickets: {
    type: Number,
    required: true,
    min: 0
  },
  battingAverage: {
    type: Number,
    required: true,
    min: 0
  },
  bowlingAverage: {
    type: Number,
    required: true,
    min: 0
  },
  winPercentage: {
    type: Number,
    required: true,
    min: 0,
    max: 100
  },
  matchesAsCaptain: {
    type: Number,
    required: true,
    min: 0
  },
  league: {
    type: String,
    enum: ['PCA', 'PPL'],
    default: 'PCA'
  },
  isActive: {
    type: Boolean,
    default: true
  }
}, {
  timestamps: true
});

// Indexes for better query performance
// Note: name index is already created by unique: true above
playerSchema.index({ league: 1 });
playerSchema.index({ matches: -1 });
playerSchema.index({ runs: -1 });
playerSchema.index({ wickets: -1 });

const Player = mongoose.model('Player', playerSchema);

export default Player;
