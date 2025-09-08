# 🚀 How to Start the Backend Server

## ❌ WRONG - Don't do this:
```bash
# This will FAIL because there's no dev script in root package.json
cd E:\PPL\PPL
npm run dev
```

## ✅ CORRECT - Do this instead:

### Option 1: Direct Command
```bash
cd E:\PPL\PPL\backend
npm run dev
```

### Option 2: Use the Batch File
```bash
# Double-click this file or run:
E:\PPL\PPL\start-backend.bat
```

### Option 3: Use PowerShell
```powershell
E:\PPL\PPL\start-backend.ps1
```

## 📁 Directory Structure:
```
E:\PPL\PPL\
├── backend\          ← Backend server is HERE
│   ├── package.json  ← Contains "dev" script
│   ├── server.js
│   └── ...
├── ipl-app\          ← Frontend React app
│   ├── package.json  ← Contains "dev" script for frontend
│   └── ...
└── package.json      ← Root package.json (no dev script)
```

## 🔄 Auto-Restart Features:
- ✅ Watches all `.js` files in backend
- ✅ Automatically restarts on file changes
- ✅ Graceful shutdown handling
- ✅ Verbose logging

## 🎯 Quick Start:
1. Open terminal
2. Run: `cd E:\PPL\PPL\backend`
3. Run: `npm run dev`
4. Server will start and auto-restart on changes!
