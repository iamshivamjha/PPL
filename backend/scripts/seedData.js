import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Player from '../models/Player.js';
import TrophyWinner from '../models/TrophyWinner.js';
import CaptainRecord from '../models/CaptainRecord.js';
import HallOfFame from '../models/HallOfFame.js';
import Admin from '../models/Admin.js';

dotenv.config();

const seedData = async () => {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/pararia-cricket');
    console.log('✅ Connected to MongoDB');

    // Clear existing data
    await Player.deleteMany({});
    await TrophyWinner.deleteMany({});
    await CaptainRecord.deleteMany({});
    await HallOfFame.deleteMany({});
    console.log('🗑️ Cleared existing data');

    // Seed PCA Players
    const pcaPlayers = [
      { name: "Bholu", matches: 106, runs: 2787, wickets: 3, battingAverage: 26.3, bowlingAverage: 0, winPercentage: 78.1, matchesAsCaptain: 85, league: "PCA" },
      { name: "Mantu", matches: 100, runs: 1235, wickets: 0, battingAverage: 12.4, bowlingAverage: 0, winPercentage: 75.0, matchesAsCaptain: 60, league: "PCA" },
      { name: "Pintu", matches: 99, runs: 377, wickets: 46, battingAverage: 3.8, bowlingAverage: 21.5, winPercentage: 0, matchesAsCaptain: 0, league: "PCA" },
      { name: "Golu", matches: 98, runs: 1605, wickets: 59, battingAverage: 16.4, bowlingAverage: 16.6, winPercentage: 57.7, matchesAsCaptain: 24, league: "PCA" },
      { name: "Senli", matches: 93, runs: 342, wickets: 97, battingAverage: 3.7, bowlingAverage: 9.6, winPercentage: 60, matchesAsCaptain: 5, league: "PCA" },
      { name: "Ajit", matches: 90, runs: 900, wickets: 103, battingAverage: 10.0, bowlingAverage: 8.7, winPercentage: 0, matchesAsCaptain: 0, league: "PCA" },
      { name: "Chuhi", matches: 90, runs: 360, wickets: 72, battingAverage: 4.0, bowlingAverage: 12.5, winPercentage: 80, matchesAsCaptain: 5, league: "PCA" },
      { name: "Goluc", matches: 89, runs: 855, wickets: 63, battingAverage: 9.6, bowlingAverage: 14.1, winPercentage: 0, matchesAsCaptain: 0, league: "PCA" },
      { name: "Himanshu", matches: 89, runs: 533, wickets: 18, battingAverage: 6.0, bowlingAverage: 49.4, winPercentage: 63.3, matchesAsCaptain: 30, league: "PCA" },
      { name: "Binit", matches: 88, runs: 107, wickets: 117, battingAverage: 1.2, bowlingAverage: 7.5, winPercentage: 0, matchesAsCaptain: 0, league: "PCA" },
      { name: "Siva", matches: 88, runs: 477, wickets: 10, battingAverage: 5.4, bowlingAverage: 88.0, winPercentage: 80, matchesAsCaptain: 5, league: "PCA" },
      { name: "Chhotu", matches: 86, runs: 587, wickets: 11, battingAverage: 6.8, bowlingAverage: 78.2, winPercentage: 100, matchesAsCaptain: 2, league: "PCA" },
      { name: "Bhuar", matches: 74, runs: 20, wickets: 70, battingAverage: 0.3, bowlingAverage: 10.6, winPercentage: 0, matchesAsCaptain: 0, league: "PCA" },
      { name: "Joni", matches: 72, runs: 158, wickets: 87, battingAverage: 2.2, bowlingAverage: 8.3, winPercentage: 72.7, matchesAsCaptain: 33, league: "PCA" },
      { name: "RihitL", matches: 66, runs: 60, wickets: 90, battingAverage: 0.9, bowlingAverage: 7.3, winPercentage: 0, matchesAsCaptain: 0, league: "PCA" },
      { name: "Akasc", matches: 57, runs: 175, wickets: 81, battingAverage: 3.1, bowlingAverage: 7.0, winPercentage: 0, matchesAsCaptain: 0, league: "PCA" },
      { name: "Bhodu", matches: 55, runs: 694, wickets: 14, battingAverage: 12.6, bowlingAverage: 39.3, winPercentage: 78.6, matchesAsCaptain: 14, league: "PCA" },
      { name: "Rohitk", matches: 53, runs: 353, wickets: 50, battingAverage: 7.1, bowlingAverage: 10.6, winPercentage: 0, matchesAsCaptain: 0, league: "PCA" },
      { name: "Priyanshu", matches: 41, runs: 195, wickets: 5, battingAverage: 4.8, bowlingAverage: 82.0, winPercentage: 0, matchesAsCaptain: 1, league: "PCA" },
      { name: "Sudhir", matches: 38, runs: 185, wickets: 31, battingAverage: 6.0, bowlingAverage: 12.3, winPercentage: 53.8, matchesAsCaptain: 13, league: "PCA" },
      { name: "Satendra", matches: 38, runs: 50, wickets: 52, battingAverage: 1.3, bowlingAverage: 7.3, winPercentage: 0, matchesAsCaptain: 0, league: "PCA" },
      { name: "Shankar", matches: 38, runs: 30, wickets: 50, battingAverage: 0.8, bowlingAverage: 7.6, winPercentage: 0, matchesAsCaptain: 0, league: "PCA" },
      { name: "BikashC", matches: 37, runs: 48, wickets: 40, battingAverage: 1.3, bowlingAverage: 9.3, winPercentage: 0, matchesAsCaptain: 0, league: "PCA" },
      { name: "Sivam", matches: 37, runs: 152, wickets: 50, battingAverage: 4.1, bowlingAverage: 7.4, winPercentage: 0, matchesAsCaptain: 0, league: "PCA" },
      { name: "Raju", matches: 34, runs: 351, wickets: 39, battingAverage: 10.3, bowlingAverage: 8.7, winPercentage: 0, matchesAsCaptain: 0, league: "PCA" },
      { name: "Bhola", matches: 34, runs: 151, wickets: 1, battingAverage: 4.4, bowlingAverage: 340.0, winPercentage: 0, matchesAsCaptain: 0, league: "PCA" },
      { name: "Tarun", matches: 31, runs: 133, wickets: 17, battingAverage: 4.3, bowlingAverage: 18.2, winPercentage: 0, matchesAsCaptain: 0, league: "PCA" },
      { name: "Citu", matches: 29, runs: 158, wickets: 17, battingAverage: 5.4, bowlingAverage: 17.1, winPercentage: 0, matchesAsCaptain: 0, league: "PCA" },
      { name: "Pritam", matches: 28, runs: 213, wickets: 34, battingAverage: 7.6, bowlingAverage: 8.2, winPercentage: 0, matchesAsCaptain: 0, league: "PCA" },
      { name: "Kunal", matches: 28, runs: 34, wickets: 27, battingAverage: 1.2, bowlingAverage: 10.4, winPercentage: 0, matchesAsCaptain: 0, league: "PCA" },
      { name: "RahulE", matches: 26, runs: 300, wickets: 2, battingAverage: 11.5, bowlingAverage: 130.0, winPercentage: 0, matchesAsCaptain: 0, league: "PCA" },
      { name: "SonuR", matches: 25, runs: 220, wickets: 22, battingAverage: 8.8, bowlingAverage: 11.4, winPercentage: 0, matchesAsCaptain: 0, league: "PCA" },
      { name: "Bikas", matches: 23, runs: 519, wickets: 11, battingAverage: 22.6, bowlingAverage: 20.9, winPercentage: 0, matchesAsCaptain: 0, league: "PCA" },
      { name: "Sandip", matches: 21, runs: 190, wickets: 23, battingAverage: 9.0, bowlingAverage: 9.1, winPercentage: 68, matchesAsCaptain: 15, league: "PCA" },
      { name: "Sunmun", matches: 20, runs: 200, wickets: 8, battingAverage: 10.0, bowlingAverage: 25.0, winPercentage: 0, matchesAsCaptain: 0, league: "PCA" },
      { name: "Amar", matches: 19, runs: 350, wickets: 0, battingAverage: 18.4, bowlingAverage: 0, winPercentage: 0, matchesAsCaptain: 0, league: "PCA" },
      { name: "Bablu Singh", matches: 100, runs: 500, wickets: 300, battingAverage: 5.0, bowlingAverage: 0.6, winPercentage: 0, matchesAsCaptain: 0, league: "PCA" }
    ];

    await Player.insertMany(pcaPlayers);
    console.log('✅ Seeded PCA players');

    // Seed PPL Players (some PCA players also play in PPL)
    const pplPlayers = [
      { name: "Bholu", matches: 50, runs: 1500, wickets: 15, battingAverage: 30.0, bowlingAverage: 25.0, winPercentage: 85.0, matchesAsCaptain: 30, league: "PPL" },
      { name: "Mantu", matches: 45, runs: 1200, wickets: 5, battingAverage: 26.7, bowlingAverage: 0, winPercentage: 80.0, matchesAsCaptain: 25, league: "PPL" },
      { name: "Golu", matches: 48, runs: 800, wickets: 20, battingAverage: 16.7, bowlingAverage: 20.0, winPercentage: 75.0, matchesAsCaptain: 35, league: "PPL" },
      { name: "Senli", matches: 42, runs: 200, wickets: 35, battingAverage: 4.8, bowlingAverage: 12.0, winPercentage: 70.0, matchesAsCaptain: 20, league: "PPL" },
      { name: "Ajit", matches: 40, runs: 400, wickets: 45, battingAverage: 10.0, bowlingAverage: 8.9, winPercentage: 78.0, matchesAsCaptain: 15, league: "PPL" }
    ];

    await Player.insertMany(pplPlayers);
    console.log('✅ Seeded PPL players');

    // Seed Trophy Winners
    const trophyWinners = [
      { trophy: 'Parariya', year: '1999', MOTM: 'Mantu', MOTS: ' ', captain: 'Mantu', league: 'PCA' },
      { trophy: 'Parariya', year: '2000', MOTM: 'Mantu', MOTS: 'Mantu', captain: 'Mantu', league: 'PCA' },
      { trophy: 'Barahara', year: '2003', MOTM: 'Bablu', MOTS: 'Mantu', captain: 'Mantu', league: 'PCA' },
      { trophy: 'Chatar', year: '2006', MOTM: 'Bablu', MOTS: 'Mantu', captain: 'Mantu', league: 'PCA' },
      { trophy: 'Kuiya', year: '2010', MOTM: 'Mantu', MOTS: ' ', captain: 'Mantu', league: 'PCA' },
      { trophy: 'Kuiya', year: '2012', MOTM: 'Mantu', MOTS: 'Sandip', captain: 'Mantu', league: 'PCA' },
      { trophy: 'Pararia', year: '2013', MOTM: 'Bholu', MOTS: 'Kundan', captain: 'Bholu', league: 'PCA' },
      { trophy: 'Matukpur', year: '2014', MOTM: 'Bikas', MOTS: 'Bikas', captain: 'Mantu', league: 'PCA' },
      { trophy: 'Turki', year: '2016', MOTM: 'Senli', MOTS: " ", captain: 'Mantu', league: 'PCA' }
    ];

    await TrophyWinner.insertMany(trophyWinners);
    console.log('✅ Seeded trophy winners');

    // Seed Captain Records
    const captainRecords = [
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
    ];

    await CaptainRecord.insertMany(captainRecords);
    console.log('✅ Seeded captain records');

    // Seed Hall of Fame
    const hallOfFameMembers = [
      {
        name: "Mantu",
        achievements: [
          "Led PCA to multiple trophy victories",
          "Outstanding leadership and captaincy",
          "Consistent performer across all formats",
          "75.0% win rate as captain",
          "1235 runs in 100 PPL matches"
        ],
        stats: {
          matches: 100,
          runs: 1235,
          wickets: 0,
          battingAverage: 12.4,
          bowlingAverage: 0,
          winPercentage: 75.0,
          matchesAsCaptain: 60
        },
        league: 'PCA'
      },
      {
        name: "Bablu Singh",
        achievements: [
          "Legendary PCA player",
          "Outstanding bowling with 300 wickets",
          "Consistent all-round contributions",
          "Led PCA to multiple victories"
        ],
        stats: {
          matches: 100,
          runs: 500,
          wickets: 300,
          battingAverage: 5.0,
          bowlingAverage: 0.6,
          winPercentage: 0,
          matchesAsCaptain: 0
        },
        league: 'PCA'
      }
    ];

    await HallOfFame.insertMany(hallOfFameMembers);
    console.log('✅ Seeded hall of fame members');

    // Create default admin
    const existingAdmin = await Admin.findOne({ email: 'admin@pararia-cricket.com' });
    if (!existingAdmin) {
      const admin = new Admin({
        name: 'System Administrator',
        email: 'admin@pararia-cricket.com',
        password: 'admin123',
        role: 'super-admin'
      });
      await admin.save();
      console.log('✅ Created default admin (admin@pararia-cricket.com / admin123)');
    } else {
      console.log('ℹ️ Admin already exists');
    }

    console.log('🎉 Database seeding completed successfully!');
    process.exit(0);

  } catch (error) {
    console.error('❌ Seeding failed:', error);
    process.exit(1);
  }
};

seedData();
