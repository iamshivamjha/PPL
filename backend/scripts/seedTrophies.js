import mongoose from 'mongoose';
import dotenv from 'dotenv';
import TrophyWinner from '../models/TrophyWinner.js';

// Load environment variables
dotenv.config();

const trophyData = [
  { trophy: 'Parariya', year: '1999', MOTM: 'Mantu', MOTS: 'N/A', captain: 'Mantu', league: 'PCA' },
  { trophy: 'Parariya', year: '2000', MOTM: 'Mantu', MOTS: 'Mantu', captain: 'Mantu', league: 'PCA' },
  { trophy: 'Barahara', year: '2003', MOTM: 'Bablu', MOTS: 'Mantu', captain: 'Mantu', league: 'PCA' },
  { trophy: 'Chatar', year: '2006', MOTM: 'Bablu', MOTS: 'Mantu', captain: 'Mantu', league: 'PCA' },
  { trophy: 'Kuiya', year: '2010', MOTM: 'Mantu', MOTS: 'N/A', captain: 'Mantu', league: 'PCA' },
  { trophy: 'Kuiya', year: '2012', MOTM: 'Mantu', MOTS: 'Sandip', captain: 'Mantu', league: 'PCA' },
  { trophy: 'Pararia', year: '2013', MOTM: 'Bholu', MOTS: 'Kundan', captain: 'Bholu', league: 'PCA' },
  { trophy: 'Matukpur', year: '2014', MOTM: 'Bikas', MOTS: 'Bikas', captain: 'Mantu', league: 'PCA' },
  { trophy: 'Turki', year: '2016', MOTM: 'Senli', MOTS: 'N/A', captain: 'Mantu', league: 'PCA' }
];

async function seedTrophies() {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/pararia-cricket');
    console.log('✅ Connected to MongoDB');

    // Clear existing trophy data
    await TrophyWinner.deleteMany({ league: 'PCA' });
    console.log('🗑️ Cleared existing PCA trophy data');

    // Insert new trophy data
    const insertedTrophies = await TrophyWinner.insertMany(trophyData);
    console.log(`✅ Inserted ${insertedTrophies.length} trophy records`);

    // Display inserted data
    console.log('\n📊 Trophy Data:');
    insertedTrophies.forEach(trophy => {
      console.log(`${trophy.trophy} (${trophy.year}) - MOTM: ${trophy.MOTM}, MOTS: ${trophy.MOTS}, Captain: ${trophy.captain}`);
    });

    console.log('\n🎉 Trophy seeding completed successfully!');
  } catch (error) {
    console.error('❌ Error seeding trophies:', error);
  } finally {
    await mongoose.connection.close();
    console.log('✅ Database connection closed');
    process.exit(0);
  }
}

seedTrophies();
