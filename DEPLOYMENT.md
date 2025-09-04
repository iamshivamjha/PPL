# PCA Hub - Deployment Guide

## 🚀 Production Deployment

This is a production-ready React application with admin panel for managing cricket statistics.

### 📋 Prerequisites
- Node.js 18+ installed
- npm or yarn package manager
- Vercel/Netlify account (for hosting)

### 🛠️ Local Development

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Start Development Server**
   ```bash
   npm run dev
   ```

3. **Build for Production**
   ```bash
   npm run build
   ```

4. **Preview Production Build**
   ```bash
   npm run preview
   ```

### 🌐 Deployment Options

#### Option 1: Vercel (Recommended)

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Deploy**
   ```bash
   vercel
   ```

3. **Or connect GitHub repository to Vercel dashboard**

#### Option 2: Netlify

1. **Install Netlify CLI**
   ```bash
   npm i -g netlify-cli
   ```

2. **Deploy**
   ```bash
   netlify deploy --prod --dir=dist
   ```

3. **Or drag & drop dist folder to Netlify dashboard**

### 🔐 Admin Access

- **URL**: `your-domain.com/login`
- **Password**: `pca2024`
- **Features**: Full CRUD operations for all data

### 💾 Data Persistence

- **Current**: localStorage (browser-based)
- **Production**: Consider upgrading to database for multi-user access
- **Backup**: Data automatically saved to browser storage

### 🔧 Environment Variables

No environment variables required for basic deployment.

### 📱 Features

- ✅ Responsive design (mobile-first)
- ✅ Dark/Light theme toggle
- ✅ Admin panel with full CRUD
- ✅ Real-time data updates
- ✅ Player statistics management
- ✅ Hall of Fame management
- ✅ Records management
- ✅ Head-to-head comparisons
- ✅ Contact form with SMS integration

### 🚨 Important Notes

1. **Data Storage**: Currently uses localStorage - data persists per browser
2. **Admin Password**: Change default password in production
3. **SMS Integration**: TextBelt API has daily limits
4. **Performance**: Optimized for production with code splitting

### 🔄 Updates

To update the deployed site:
1. Make changes locally
2. Run `npm run build`
3. Deploy new build to hosting platform

### 📞 Support

For technical support or feature requests, contact the development team.
