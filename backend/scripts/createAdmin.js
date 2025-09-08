import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Admin from '../models/Admin.js';

dotenv.config();

const createAdmin = async () => {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('✅ Connected to MongoDB');

    // Check if admin already exists
    const existingAdmin = await Admin.findOne({ email: 'admin@pararia-cricket.com' });
    if (existingAdmin) {
      console.log('ℹ️ Admin already exists');
      process.exit(0);
    }

    // Create admin user
    const admin = new Admin({
      name: 'System Administrator',
      email: 'admin@pararia-cricket.com',
      password: 'admin123',
      role: 'super-admin'
    });

    await admin.save();
    console.log('✅ Admin user created successfully');
    console.log('📧 Email: admin@pararia-cricket.com');
    console.log('🔑 Password: admin123');
    
    process.exit(0);
  } catch (error) {
    console.error('❌ Error creating admin:', error);
    process.exit(1);
  }
};

createAdmin();
