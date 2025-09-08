import mongoose from 'mongoose'

const captainRecordSchema = new mongoose.Schema({
  captain: {
    type: String,
    required: true,
    trim: true
  },
  m: {
    type: Number,
    required: true,
    min: 0
  },
  w: {
    type: Number,
    required: true,
    min: 0
  },
  l: {
    type: Number,
    required: true,
    min: 0
  },
  winPercent: {
    type: Number,
    required: true,
    min: 0,
    max: 100
  },
  league: {
    type: String,
    required: true,
    default: 'PCA'
  }
}, {
  timestamps: true
})

export default mongoose.model('CaptainRecord', captainRecordSchema)