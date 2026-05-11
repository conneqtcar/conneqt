$t = "$env:VERCEL_TOKEN"
$scope = "conneqtcar-5232s-projects"
$root = "c:\Users\Hp User\ProjetosVSCODE\Conneqtcar\conneqt"

function Deploy-App($appName) {
    Write-Host "`n=== Deploying $appName ===" -ForegroundColor Cyan
    Set-Location "$root\apps\$appName"
    $output = vercel deploy --token $t --scope $scope --yes 2>&1
    $url = $output | Where-Object { $_ -match "^https://" } | Select-Object -Last 1
    Write-Host "URL: $url"
    Write-Host "Status: Done"
}

Deploy-App "web"
Deploy-App "seller"  
Deploy-App "admin"

Write-Host "`n=== Todos os deploys concluidos ===" -ForegroundColor Green
