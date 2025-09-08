# Pararia Cricket Hub - Complete Setup Guide

## 🚀 Quick Start (Complete MERN Stack)

This guide will help you set up the complete MERN stack application with admin functionality.

### Prerequisites
- Node.js (v18 or higher)
- MongoDB (v6 or higher) or MongoDB Atlas account
- Git

## 📁 Project Structure
```
PPL/
├── ipl-app/                 # Frontend (React + TypeScript)
│   ├── src/
│   ├── package.json
│   └── ...
├── backend/                 # Backend (Node.js + Express + MongoDB)
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   ├── scripts/
│   ├── server.js
│   └── package.json
└── SETUP_GUIDE.md
```

## 🔧 Backend Setup

### 1. Navigate to Backend Directory
```bash
cd backend
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Set Up Environment Variables
```bash
# Copy the example file
cp env.example .env

# Edit .env file with your configuration
```

**For Local Development (.env):**
```env
MONGODB_URI=mongodb://localhost:27017/pararia-cricket
JWT_SECRET=your-super-secret-jwt-key-change-this-in-production
PORT=5000
NODE_ENV=development
FRONTEND_URL=http://localhost:5173
ADMIN_EMAIL=admin@pararia-cricket.com
ADMIN_PASSWORD=admin123
```

**For Production (.env):**
```env
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/pararia-cricket
JWT_SECRET=your-super-secret-production-key
PORT=5000
NODE_ENV=production
FRONTEND_URL=https://your-frontend-domain.com
ADMIN_EMAIL=admin@pararia-cricket.com
ADMIN_PASSWORD=admin123
```

### 4. Start MongoDB
**Option A: Local MongoDB**
```bash
# Start MongoDB service
mongod
```

**Option B: MongoDB Atlas (Recommended)**
1. Go to [MongoDB Atlas](https://www.mongodb.com/atlas)
2. Create a free account
3. Create a new cluster
4. Get your connection string
5. Update MONGODB_URI in .env file

### 5. Start the Backend Server
```bash
# Development mode (with auto-restart)
npm run dev

# Production mode
npm start
```

### 6. Seed the Database
```bash
# This will populate the database with sample data
npm run seed
```

**Default Admin Credentials:**
- Email: `admin@pararia-cricket.com`
- Password: `admin123`

## 🎨 Frontend Setup

### 1. Navigate to Frontend Directory
```bash
cd ipl-app
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Set Up Environment Variables
Create a `.env` file in the `ipl-app` directory:

```env
VITE_API_URL=http://localhost:5000/api
```

**For Production:**
```env
VITE_API_URL=https://your-backend-domain.com/api
```

### 4. Start the Frontend Development Server
```bash
npm run dev
```

The frontend will be available at `http://localhost:5173`

## 🌐 Access Points

### Public Website
- **URL:** `http://localhost:5173`
- **Features:** View cricket statistics, records, player data
- **No authentication required**

### Admin Panel
- **URL:** `http://localhost:5173/admin/login`
- **Credentials:** 
  - Email: `admin@pararia-cricket.com`
  - Password: `admin123`
- **Features:** 
  - Manage players
  - Edit records
  - Update statistics
  - Add/remove data

## 🔄 Data Management Process

### How to Update Data Permanently

1. **Login to Admin Panel**
   - Go to `/admin/login`
   - Use admin credentials

2. **Navigate to Management Section**
   - Players: `/admin/players`
   - Trophies: `/admin/dashboard` → Manage Trophies
   - Captains: `/admin/dashboard` → Manage Captains
   - Hall of Fame: `/admin/dashboard` → Manage Hall of Fame

3. **Make Changes**
   - Add new players
   - Edit existing data
   - Delete records
   - Update statistics

4. **Changes are Permanent**
   - All changes are saved to MongoDB
   - No deployment needed
   - Changes appear immediately on the website
   - Data persists across server restarts

### Admin Features

#### Player Management
- ✅ Add new players
- ✅ Edit player statistics
- ✅ Delete players
- ✅ Search and filter players
- ✅ View by league (PCA, PPL, PSL)

#### Records Management
- ✅ Manage trophy winners
- ✅ Update captain records
- ✅ Edit hall of fame members
- ✅ League-specific data management

#### Dashboard Features
- ✅ Real-time statistics
- ✅ Quick access to all management tools
- ✅ Data overview and insights

## 🚀 Deployment

### Backend Deployment (Railway/Render)

#### Option A: Railway
1. Go to [Railway](https://railway.app)
2. Connect your GitHub repository
3. Select the `backend` folder
4. Set environment variables in Railway dashboard
5. Deploy automatically

#### Option B: Render
1. Go to [Render](https://render.com)
2. Connect your GitHub repository
3. Select the `backend` folder
4. Set environment variables in Render dashboard
5. Deploy automatically

### Frontend Deployment (Netlify)

1. Go to [Netlify](https://netlify.com)
2. Connect your GitHub repository
3. Select the `ipl-app` folder
4. Set build command: `npm run build`
5. Set publish directory: `dist`
6. Set environment variable: `VITE_API_URL=https://your-backend-url.com/api`
7. Deploy automatically

### Environment Variables for Production

**Backend (.env):**
```env
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/pararia-cricket
JWT_SECRET=your-super-secret-production-key
PORT=5000
NODE_ENV=production
FRONTEND_URL=https://your-frontend-domain.com
```

**Frontend (.env):**
```env
VITE_API_URL=https://your-backend-domain.com/api
```

## 📱 Responsive Design

The application is fully responsive and optimized for:
- **Mobile:** < 640px
- **Tablet:** 640px - 1024px
- **Desktop:** > 1024px

### Mobile Features
- Touch-friendly interface
- Optimized navigation
- Responsive tables and cards
- Mobile-first design approach

## 🔐 Security Features

- JWT-based authentication
- Password hashing with bcrypt
- Input validation and sanitization
- CORS protection
- Rate limiting
- Protected admin routes

## 🧪 Testing

### Backend Testing
```bash
cd backend
npm test
```

### Frontend Testing
```bash
cd ipl-app
npm test
```

## 🐛 Troubleshooting

### Common Issues

1. **Backend won't start**
   - Check if MongoDB is running
   - Verify MONGODB_URI in .env
   - Check if port 5000 is available

2. **Frontend can't connect to backend**
   - Verify VITE_API_URL in frontend .env
   - Check if backend is running
   - Verify CORS settings

3. **Admin login fails**
   - Check if database is seeded
   - Verify admin credentials
   - Check JWT_SECRET in backend .env

4. **Data not updating**
   - Check if changes are saved to database
   - Verify API endpoints are working
   - Check browser console for errors

### Debug Mode

**Backend:**
```bash
NODE_ENV=development npm run dev
```

**Frontend:**
```bash
npm run dev
```

## 📊 Database Schema

### Collections
- `players` - Player statistics
- `trophywinners` - Tournament winners
- `captainrecords` - Captain performance
- `halloffames` - Hall of fame members
- `admins` - Admin users

### Indexes
- Player name (unique)
- League type
- Performance metrics
- Search optimization

## 🔄 Data Backup

### Export Data
```bash
# Export all collections
mongodump --uri="your-mongodb-uri" --out=backup/

# Export specific collection
mongoexport --uri="your-mongodb-uri" --collection=players --out=players.json
```

### Import Data
```bash
# Import from backup
mongorestore --uri="your-mongodb-uri" backup/

# Import specific collection
mongoimport --uri="your-mongodb-uri" --collection=players --file=players.json
```

## 📈 Performance Optimization

### Backend
- Database indexing
- Query optimization
- Response caching
- Connection pooling

### Frontend
- Code splitting
- Image optimization
- Bundle optimization
- Lazy loading

## 🆘 Support

### Getting Help
1. Check this documentation
2. Review error logs
3. Check browser console
4. Verify environment variables

### Common Commands
```bash
# Backend
npm run dev          # Start development server
npm run seed         # Seed database
npm start            # Start production server

# Frontend
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
```

## 🎯 Next Steps

After setup:
1. ✅ Test admin login
2. ✅ Add some test data
3. ✅ Verify data persistence
4. ✅ Test responsive design
5. ✅ Deploy to production
6. ✅ Set up custom domain
7. ✅ Configure SSL certificates

---

**Congratulations!** You now have a fully functional MERN stack cricket statistics management system with admin capabilities. The admin can manage all data through the web interface, and changes are permanent without requiring deployment.

*Last Updated: [Current Date]*
*Version: 1.0.0*
