# Usage: powershell -ExecutionPolicy Bypass -File scripts\deploy-local.ps1
$ErrorActionPreference = 'Stop'
Set-StrictMode -Version Latest

$ScriptDir   = Split-Path -Parent $MyInvocation.MyCommand.Path
$ProjectRoot = Split-Path -Parent $ScriptDir
Set-Location $ProjectRoot

$Url = 'http://localhost:3000/api'

Write-Host '==> Installing dependencies (npm install)...'
npm install
if ($LASTEXITCODE -ne 0) { throw "npm install failed ($LASTEXITCODE)" }

Write-Host '==> Building (npm run build)...'
npm run build
if ($LASTEXITCODE -ne 0) { throw "Build failed ($LASTEXITCODE)" }

Write-Host ''
Write-Host '==> Build complete. Starting server...'
Write-Host "==> Running server URL: $Url"
Write-Host '==> Press Ctrl+C to stop.'
Write-Host ''

npm run start:prod
