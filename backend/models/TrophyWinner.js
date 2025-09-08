import mongoose from 'mongoose';

const trophyWinnerSchema = new mongoose.Schema({
  trophy: {
    type: String,
    required: true,
    trim: true
  },
  year: {
    type: String,
    required: true,
    trim: true
  },
  MOTM: {
    type: String,
    required: true,
    trim: true
  },
  MOTS: {
    type: String,
    required: true,
    trim: true
  },
  captain: {
    type: String,
    required: true,
    trim: true
  },
  league: {
    type: String,
    enum: ['PCA', 'PPL'],
    default: 'PCA'
  }
}, {
  timestamps: true
});

// Indexes
trophyWinnerSchema.index({ year: -1 });
trophyWinnerSchema.index({ league: 1 });
trophyWinnerSchema.index({ trophy: 1 });

const TrophyWinner = mongoose.model('TrophyWinner', trophyWinnerSchema);

export default TrophyWinner;
