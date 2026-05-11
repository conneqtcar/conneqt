param(
    [string]$Token = "$env:VERCEL_TOKEN",
    [string]$TeamId = "conneqtcar-5232s-projects"
)

$ApiUrl = "https://api.vercel.com"
$headers = @{ Authorization = "Bearer $Token"; "Content-Type" = "application/json" }

function Create-VercelProject($name, $rootDir) {
    $body = @{
        name = $name
        framework = "nextjs"
        rootDirectory = $rootDir
    } | ConvertTo-Json -Depth 5

    $r = Invoke-RestMethod -Uri "$ApiUrl/v9/projects?teamId=$TeamId" -Method POST -Body $body -Headers $headers -ErrorAction SilentlyContinue
    return $r
}

function Add-EnvVars($projectId) {
    $envVars = @(
        @{ key = "NEXT_PUBLIC_API_URL"; value = "https://conneqt-api.onrender.com/api/v1"; type = "plain"; target = @("production", "preview", "development") }
        @{ key = "NEXT_PUBLIC_WS_URL";  value = "https://conneqt-api.onrender.com";         type = "plain"; target = @("production", "preview", "development") }
    )

    foreach ($env in $envVars) {
        $body = $env | ConvertTo-Json
        Invoke-RestMethod -Uri "$ApiUrl/v10/projects/$projectId/env?teamId=$TeamId" -Method POST -Body $body -Headers $headers -ErrorAction SilentlyContinue | Out-Null
    }
}

# --- conneqt-web ---
Write-Host "`n=== Criando conneqt-web ===" -ForegroundColor Cyan
$web = Create-VercelProject "conneqt-web" "apps/web"
if ($web.id) {
    Write-Host "OK  id=$($web.id)"
    Add-EnvVars $web.id
    Write-Host "Env vars adicionadas"
} elseif ($web.error.code -eq "project_already_exists") {
    Write-Host "Projeto ja existe"
} else {
    Write-Host "ERRO: $($web | ConvertTo-Json -Depth 3)"
}

# --- conneqt-seller ---
Write-Host "`n=== Criando conneqt-seller ===" -ForegroundColor Cyan
$seller = Create-VercelProject "conneqt-seller" "apps/seller"
if ($seller.id) {
    Write-Host "OK  id=$($seller.id)"
    Add-EnvVars $seller.id
    Write-Host "Env vars adicionadas"
} elseif ($seller.error.code -eq "project_already_exists") {
    Write-Host "Projeto ja existe"
} else {
    Write-Host "ERRO: $($seller | ConvertTo-Json -Depth 3)"
}

# --- conneqt-admin ---
Write-Host "`n=== Criando conneqt-admin ===" -ForegroundColor Cyan
$admin = Create-VercelProject "conneqt-admin" "apps/admin"
if ($admin.id) {
    Write-Host "OK  id=$($admin.id)"
    Add-EnvVars $admin.id
    Write-Host "Env vars adicionadas"
} elseif ($admin.error.code -eq "project_already_exists") {
    Write-Host "Projeto ja existe"
} else {
    Write-Host "ERRO: $($admin | ConvertTo-Json -Depth 3)"
}

Write-Host "`nConcluido!" -ForegroundColor Green
