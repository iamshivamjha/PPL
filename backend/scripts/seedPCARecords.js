import mongoose from 'mongoose'
import dotenv from 'dotenv'
import CaptainRecord from '../models/CaptainRecord.js'
import PCASuperOver from '../models/PCASuperOver.js'
import PCAGrade from '../models/PCAGrade.js'
import PCACoach from '../models/PCACoach.js'

dotenv.config()

const captainData = [
  { captain: 'Bholu', m: 155, w: 121, l: 41, winPercent: 78.1, league: 'PCA' },
  { captain: 'Sandip', m: 75, w: 51, l: 24, winPercent: 68, league: 'PCA' },
  { captain: 'Joni', m: 33, w: 24, l: 9, winPercent: 72.7, league: 'PCA' },
  { captain: 'Himnsu', m: 30, w: 19, l: 11, winPercent: 63.3, league: 'PCA' },
  { captain: 'Golu', m: 24, w: 15, l: 9, winPercent: 57.7, league: 'PCA' },
  { captain: 'Bhadhu', m: 14, w: 11, l: 3, winPercent: 78.6, league: 'PCA' },
  { captain: 'Sudhir', m: 13, w: 7, l: 6, winPercent: 53.8, league: 'PCA' },
  { captain: 'Siva', m: 5, w: 4, l: 1, winPercent: 80, league: 'PCA' },
  { captain: 'Chuhi', m: 5, w: 4, l: 1, winPercent: 80, league: 'PCA' },
  { captain: 'Senli', m: 5, w: 3, l: 2, winPercent: 60, league: 'PCA' },
  { captain: 'Chhotu', m: 2, w: 2, l: 0, winPercent: 100, league: 'PCA' },
  { captain: 'Priynsu', m: 1, w: 0, l: 1, winPercent: 0, league: 'PCA' },
  { captain: 'Total', m: 362, w: 260, l: 102, winPercent: 71.8, league: 'PCA' }
]

const superOverData = [
  { winner: 'Bholu', runnerUp: 'Golu' },
  { winner: 'Bholu', runnerUp: 'GoluC' }
]

const gradeData = [
  // A+ Grade (700)
  { playerName: 'BHOLU', grade: 'A+', points: 700, score: 38 },
  { playerName: 'GOLUC', grade: 'A+', points: 700, score: 36 },
  { playerName: 'SANDIP', grade: 'A+', points: 700, score: 24 },
  { playerName: 'HIMANSHU', grade: 'A+', points: 700, score: 23 },
  
  // A Grade (500)
  { playerName: 'SENLI', grade: 'A', points: 500, score: 20 },
  { playerName: 'GOLUB', grade: 'A', points: 500, score: 16 },
  { playerName: 'AJIT', grade: 'A', points: 500, score: 12 },
  { playerName: 'BHODU', grade: 'A', points: 500, score: 10 },
  { playerName: 'CHUHI', grade: 'A', points: 500, score: 10 },
  { playerName: 'JONI', grade: 'A', points: 500, score: 9 },
  
  // B Grade (300)
  { playerName: 'SIVA', grade: 'B', points: 300, score: 8 },
  { playerName: 'CHHOTU', grade: 'B', points: 300, score: 7 },
  { playerName: 'SUDHIR', grade: 'B', points: 300, score: 6 },
  { playerName: 'MOHIT', grade: 'B', points: 300, score: 5 },
  { playerName: 'RAJU', grade: 'B', points: 300, score: 4 },
  { playerName: 'LALU', grade: 'B', points: 300, score: 4 },
  { playerName: 'BINIT', grade: 'B', points: 300, score: 4 },
  { playerName: 'BIKASC', grade: 'B', points: 300, score: 3 },
  { playerName: 'SUNIL', grade: 'B', points: 300, score: 3 },
  
  // C Grade (100)
  { playerName: 'AKAS', grade: 'C', points: 100, score: 2 },
  { playerName: 'BIKAS', grade: 'C', points: 100, score: 2 },
  { playerName: 'AMAR', grade: 'C', points: 100, score: 2 },
  { playerName: 'GOLUM', grade: 'C', points: 100, score: 2 },
  { playerName: 'PRIYANSU', grade: 'C', points: 100, score: 2 },
  { playerName: 'PAWAN', grade: 'C', points: 100, score: 1 },
  { playerName: 'MPAKHA', grade: 'C', points: 100, score: 1 },
  { playerName: 'SUDHNSU', grade: 'C', points: 100, score: 1 },
  { playerName: 'PANDYA', grade: 'C', points: 100, score: 1 },
  { playerName: 'BHIM', grade: 'C', points: 100, score: 1 },
  { playerName: 'CHANDAN', grade: 'C', points: 100, score: 1 },
  { playerName: 'SUMANTH', grade: 'C', points: 100, score: 1 }
]

const coachData = [
  { name: 'MANTU SINGH', position: 'Coach / Mentor / Manager', score: 1 }
]

async function seedPCARecords() {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGODB_URI)
    console.log('Connected to MongoDB')

    // Clear existing data
    await CaptainRecord.deleteMany({ league: 'PCA' })
    await PCASuperOver.deleteMany({})
    await PCAGrade.deleteMany({})
    await PCACoach.deleteMany({})
    console.log('Cleared existing PCA records data')

    // Insert captain records
    await CaptainRecord.insertMany(captainData)
    console.log('Inserted captain records')

    // Insert SuperOver data
    await PCASuperOver.insertMany(superOverData)
    console.log('Inserted SuperOver data')

    // Insert grade data
    await PCAGrade.insertMany(gradeData)
    console.log('Inserted grade data')

    // Insert coach data
    await PCACoach.insertMany(coachData)
    console.log('Inserted coach data')

    console.log('✅ PCA Records seeding completed successfully!')
  } catch (error) {
    console.error('❌ Error seeding PCA records:', error)
  } finally {
    await mongoose.disconnect()
    console.log('Disconnected from MongoDB')
  }
}

seedPCARecords()
