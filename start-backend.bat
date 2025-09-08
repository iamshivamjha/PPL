@echo off
echo 🚀 Starting Pararia Cricket Backend Server...
echo.
echo 📁 Changing to backend directory...
cd /d "E:\PPL\PPL\backend"
echo 📁 Working Directory: %CD%
echo.
echo 🔄 Starting with auto-restart enabled...
echo 💡 The server will automatically restart when you make changes to any .js files
echo 💡 Press Ctrl+C to stop the server
echo.
echo 🚀 Running: npm run dev
npm run dev
pause
