import mongoose from 'mongoose'

const pcaCoachSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  position: {
    type: String,
    required: true,
    trim: true
  },
  score: {
    type: Number,
    required: true,
    min: 0
  }
}, {
  timestamps: true
})

export default mongoose.model('PCACoach', pcaCoachSchema)
