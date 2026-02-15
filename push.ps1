# Push script - opens GitHub token page, you paste token, then pushes
$ErrorActionPreference = "Stop"
$remote = "https://github.com/bulebananaofficial-del/kriengsak-law-office-websitexxxxxxxxxxxxxxxxxxxx.git"
$repoPath = Split-Path -Parent $MyInvocation.MyCommand.Path
Set-Location $repoPath

$token = $env:GITHUB_TOKEN
if (-not $token) { $token = $env:GH_TOKEN }

if (-not $token) {
    Write-Host ""
    Write-Host "No token found. Opening GitHub to create Personal Access Token..." -ForegroundColor Cyan
    $tokenUrl = "https://github.com/settings/tokens/new?description=kriengsaklaw-push&scopes=repo"
    Start-Process $tokenUrl
    Write-Host ""
    Write-Host "Steps:" -ForegroundColor Green
    Write-Host "  1. Create token in the opened page (login as repo owner first)"
    Write-Host "  2. Choose Expiration (e.g. 30 days)"
    Write-Host "  3. Click Generate token"
    Write-Host "  4. Copy the token (starts with ghp_)"
    Write-Host ""
    $token = Read-Host "Paste your token here"
    if ([string]::IsNullOrWhiteSpace($token)) {
        Write-Host "Cancelled - no token provided" -ForegroundColor Red
        exit 1
    }
}

Write-Host ""
Write-Host "Pushing to GitHub..." -ForegroundColor Green
$urlWithToken = "https://x-access-token:$token@github.com/bulebananaofficial-del/kriengsak-law-office-websitexxxxxxxxxxxxxxxxxxxx.git"
git remote set-url origin $urlWithToken
git push -u origin main
$exitCode = $LASTEXITCODE
git remote set-url origin $remote

if ($exitCode -eq 0) {
    Write-Host ""
    Write-Host "Push successful!" -ForegroundColor Green
} else {
    Write-Host ""
    Write-Host "Push failed - check token and repo permissions" -ForegroundColor Red
}

exit $exitCode
