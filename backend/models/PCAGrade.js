import mongoose from 'mongoose'

const pcaGradeSchema = new mongoose.Schema({
  playerName: {
    type: String,
    required: true,
    trim: true
  },
  grade: {
    type: String,
    required: true,
    enum: ['A+', 'A', 'B', 'C'],
    trim: true
  },
  points: {
    type: Number,
    required: true,
    min: 0
  },
  score: {
    type: Number,
    required: true,
    min: 0
  }
}, {
  timestamps: true
})

export default mongoose.model('PCAGrade', pcaGradeSchema)
