$t = "$env:VERCEL_TOKEN"
$scope = "conneqtcar-5232s-projects"
$orgId  = "team_RhgMTNpPpyCnnEuFhFqaLwPB"  # sera preenchido abaixo
$root = "c:\Users\Hp User\ProjetosVSCODE\Conneqtcar\conneqt"

$apps = @(
    @{ name = "web";    projectId = "prj_WGNtDrXA8CnUvm4RAggzabM9X8pa" }
    @{ name = "seller"; projectId = "prj_CcJoWnSQc80Y624vfF8VLu8l4lOt" }
    @{ name = "admin";  projectId = "prj_GB0rSjvNcPtvOhBXDaOLaOCSyEVO" }
)

# Descobrir o orgId do team
$headers = @{ Authorization = "Bearer $t" }
$teams = Invoke-RestMethod -Uri "https://api.vercel.com/v2/teams" -Headers $headers
$team = $teams.teams | Where-Object { $_.slug -eq $scope }
if ($team) { $orgId = $team.id } else { $orgId = $scope }
Write-Host "OrgId: $orgId"

# Criar diretorio .vercel se nao existir
$vercelDir = "$root\.vercel"
if (-not (Test-Path $vercelDir)) { New-Item -ItemType Directory $vercelDir | Out-Null }

foreach ($app in $apps) {
    Write-Host "`n=== Deploying $($app.name) ===" -ForegroundColor Cyan
    
    # Criar .vercel/project.json apontando para o projeto correto
    @{ orgId = $orgId; projectId = $app.projectId } | ConvertTo-Json | Set-Content "$vercelDir\project.json"
    
    Set-Location $root
    $output = vercel deploy --prod --token $t --scope $scope --yes 2>&1
    $url = $output | Where-Object { $_ -match "^https://" } | Select-Object -Last 1
    $errors = $output | Where-Object { $_ -match "error|Error|ERROR" } | Select-Object -First 3
    Write-Host "URL: $url"
    if ($errors) { Write-Host "Errors: $errors" -ForegroundColor Red }
}

# Limpar .vercel/project.json
Remove-Item "$vercelDir\project.json" -Force -ErrorAction SilentlyContinue
Write-Host "`nConcluido!" -ForegroundColor Green
