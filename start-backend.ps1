Write-Host "🚀 Starting Pararia Cricket Backend Server..." -ForegroundColor Green
Write-Host ""
Write-Host "📁 Changing to backend directory..." -ForegroundColor Yellow
Set-Location "E:\PPL\PPL\backend"
Write-Host "📁 Working Directory: $(Get-Location)" -ForegroundColor Yellow
Write-Host ""
Write-Host "🔄 Starting with auto-restart enabled..." -ForegroundColor Cyan
Write-Host "💡 The server will automatically restart when you make changes to any .js files" -ForegroundColor Yellow
Write-Host "💡 Press Ctrl+C to stop the server" -ForegroundColor Yellow
Write-Host ""
Write-Host "🚀 Running: npm run dev" -ForegroundColor Green
npm run dev
