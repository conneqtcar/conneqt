$t = "$env:VERCEL_TOKEN"
$scope = "conneqtcar-5232s-projects"
$headers = @{ Authorization = "Bearer $t"; "Content-Type" = "application/json" }

# Buscar projeto conneqt-web
$web = Invoke-RestMethod -Uri "https://api.vercel.com/v9/projects/conneqt-web?teamId=$scope" -Headers $headers
Write-Host "web id: $($web.id) | root: $($web.rootDirectory)"

# Adicionar env vars ao web
$envVars = @(
    @{ key = "NEXT_PUBLIC_API_URL"; value = "https://conneqt-api.onrender.com/api/v1"; type = "plain"; target = @("production", "preview", "development") }
    @{ key = "NEXT_PUBLIC_WS_URL";  value = "https://conneqt-api.onrender.com";         type = "plain"; target = @("production", "preview", "development") }
)
foreach ($env in $envVars) {
    $body = $env | ConvertTo-Json
    Invoke-RestMethod -Uri "https://api.vercel.com/v10/projects/$($web.id)/env?teamId=$scope" -Method POST -Body $body -Headers $headers -ErrorAction SilentlyContinue | Out-Null
}
Write-Host "Env vars adicionadas ao web"

# Listar todos os projetos
$projects = Invoke-RestMethod -Uri "https://api.vercel.com/v9/projects?teamId=$scope&limit=20" -Headers $headers
$projects.projects | ForEach-Object { "$($_.id) | $($_.name) | root=$($_.rootDirectory)" }
