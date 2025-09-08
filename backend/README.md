# Pararia Cricket Hub - Backend API

## 🚀 Quick Start

### Prerequisites
- Node.js (v18 or higher)
- MongoDB (v6 or higher) or MongoDB Atlas account

### Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Set up environment variables:**
   ```bash
   cp env.example .env
   ```
   
   Edit `.env` file with your configuration:
   ```env
   MONGODB_URI=mongodb://localhost:27017/pararia-cricket
   JWT_SECRET=your-super-secret-jwt-key
   PORT=5000
   NODE_ENV=development
   FRONTEND_URL=http://localhost:5173
   ```

3. **Start the server:**
   ```bash
   # Development mode
   npm run dev
   
   # Production mode
   npm start
   ```

4. **Seed the database:**
   ```bash
   npm run seed
   ```

## 📊 API Endpoints

### Authentication
- `POST /api/auth/login` - Admin login
- `GET /api/auth/verify` - Verify token
- `POST /api/auth/logout` - Logout
- `GET /api/auth/profile` - Get admin profile

### Players
- `GET /api/players` - Get all players (with filters)
- `GET /api/players/:id` - Get single player
- `POST /api/players` - Create player (admin only)
- `PUT /api/players/:id` - Update player (admin only)
- `DELETE /api/players/:id` - Delete player (admin only)
- `GET /api/players/stats/overview` - Get player statistics

### PCA League
- `GET /api/pca/players` - Get PCA players
- `GET /api/pca/trophies` - Get PCA trophy winners
- `GET /api/pca/captains` - Get PCA captain records
- `GET /api/pca/hall-of-fame` - Get PCA hall of fame
- `POST /api/pca/trophies` - Create trophy winner (admin only)
- `PUT /api/pca/trophies/:id` - Update trophy winner (admin only)
- `DELETE /api/pca/trophies/:id` - Delete trophy winner (admin only)

### PPL League
- `GET /api/ppl/players` - Get PPL players
- `GET /api/ppl/trophies` - Get PPL trophy winners
- `GET /api/ppl/captains` - Get PPL captain records
- `GET /api/ppl/hall-of-fame` - Get PPL hall of fame

### PSL League
- `GET /api/psl/players` - Get PSL players
- `GET /api/psl/trophies` - Get PSL trophy winners
- `GET /api/psl/captains` - Get PSL captain records
- `GET /api/psl/hall-of-fame` - Get PSL hall of fame

## 🔐 Authentication

### Default Admin Credentials
- **Email:** admin@pararia-cricket.com
- **Password:** admin123

### Using the API

1. **Login to get token:**
   ```bash
   curl -X POST http://localhost:5000/api/auth/login \
     -H "Content-Type: application/json" \
     -d '{"email":"admin@pararia-cricket.com","password":"admin123"}'
   ```

2. **Use token in subsequent requests:**
   ```bash
   curl -X GET http://localhost:5000/api/players \
     -H "Authorization: Bearer YOUR_TOKEN_HERE"
   ```

## 🗄️ Database Models

### Player
```javascript
{
  name: String (required, unique)
  matches: Number (required, min: 0)
  runs: Number (required, min: 0)
  wickets: Number (required, min: 0)
  battingAverage: Number (required, min: 0)
  bowlingAverage: Number (required, min: 0)
  winPercentage: Number (required, min: 0, max: 100)
  matchesAsCaptain: Number (required, min: 0)
  league: String (enum: ['PCA', 'PPL', 'PSL'])
  isActive: Boolean (default: true)
}
```

### TrophyWinner
```javascript
{
  trophy: String (required)
  year: String (required)
  MOTM: String (required)
  MOTS: String (required)
  captain: String (required)
  league: String (enum: ['PCA', 'PPL', 'PSL'])
}
```

### CaptainRecord
```javascript
{
  captain: String (required)
  m: Number (required, min: 0) // matches
  w: Number (required, min: 0) // wins
  l: Number (required, min: 0) // losses
  winPercent: Number (required, min: 0, max: 100)
  league: String (enum: ['PCA', 'PPL', 'PSL'])
}
```

### HallOfFame
```javascript
{
  name: String (required, unique)
  achievements: [String] (required)
  stats: {
    matches: Number (required, min: 0)
    runs: Number (required, min: 0)
    wickets: Number (required, min: 0)
    battingAverage: Number (required, min: 0)
    bowlingAverage: Number (optional, min: 0)
    winPercentage: Number (required, min: 0, max: 100)
    matchesAsCaptain: Number (required, min: 0)
  }
  league: String (enum: ['PCA', 'PPL', 'PSL'])
  isActive: Boolean (default: true)
}
```

## 🚀 Deployment

### Railway
1. Connect your GitHub repository
2. Set environment variables in Railway dashboard
3. Deploy automatically on push

### Render
1. Connect your GitHub repository
2. Set environment variables in Render dashboard
3. Deploy automatically on push

### Environment Variables for Production
```env
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/pararia-cricket
JWT_SECRET=your-super-secret-production-key
PORT=5000
NODE_ENV=production
FRONTEND_URL=https://your-frontend-domain.com
```

## 🧪 Testing

```bash
# Run tests
npm test

# Run tests in watch mode
npm run test:watch
```

## 📝 API Documentation

The API follows RESTful conventions and returns JSON responses. All admin endpoints require authentication via JWT token in the Authorization header.

### Response Format
```javascript
// Success response
{
  "message": "Operation successful",
  "data": { ... }
}

// Error response
{
  "message": "Error description",
  "errors": [ ... ] // for validation errors
}
```

### Pagination
For list endpoints, use query parameters:
- `page` - Page number (default: 1)
- `limit` - Items per page (default: 50)
- `sortBy` - Field to sort by
- `order` - Sort order (asc/desc)

### Filtering
- `league` - Filter by league (PCA, PPL, PSL)
- `search` - Search by player name

## 🔧 Development

### Project Structure
```
backend/
├── models/          # Database models
├── routes/          # API routes
├── middleware/      # Custom middleware
├── scripts/         # Utility scripts
├── server.js        # Main server file
└── package.json
```

### Adding New Features
1. Create model in `models/`
2. Add routes in `routes/`
3. Add validation in `middleware/validation.js`
4. Update documentation

## 🐛 Troubleshooting

### Common Issues

1. **MongoDB Connection Error**
   - Check if MongoDB is running
   - Verify MONGODB_URI in .env file

2. **JWT Token Error**
   - Check JWT_SECRET in .env file
   - Ensure token is sent in Authorization header

3. **CORS Error**
   - Check FRONTEND_URL in .env file
   - Ensure frontend URL matches exactly

### Logs
Check console output for detailed error messages. In production, consider using a logging service like Winston.

## 📞 Support

For issues and questions:
- Check the documentation
- Review error logs
- Contact the development team

---

*Last Updated: [Current Date]*
*Version: 1.0.0*
