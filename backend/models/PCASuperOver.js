import mongoose from 'mongoose'

const pcaSuperOverSchema = new mongoose.Schema({
  winner: {
    type: String,
    required: true,
    trim: true
  },
  runnerUp: {
    type: String,
    required: true,
    trim: true
  }
}, {
  timestamps: true
})

export default mongoose.model('PCASuperOver', pcaSuperOverSchema)
