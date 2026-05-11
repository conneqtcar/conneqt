$t = "$env:VERCEL_TOKEN"
$scope = "conneqtcar-5232s-projects"
$headers = @{ Authorization = "Bearer $t"; "Content-Type" = "application/json" }

$projects = @(
    @{ name = "web";    id = "prj_WGNtDrXA8CnUvm4RAggzabM9X8pa" }
    @{ name = "seller"; id = "prj_CcJoWnSQc80Y624vfF8VLu8l4lOt" }
    @{ name = "admin";  id = "prj_GB0rSjvNcPtvOhBXDaOLaOCSyEVO" }
)

$envVars = @(
    @{ key = "NEXT_PUBLIC_API_URL"; value = "https://conneqt-api.onrender.com/api/v1"; type = "plain"; target = @("production", "preview", "development") }
    @{ key = "NEXT_PUBLIC_WS_URL";  value = "https://conneqt-api.onrender.com";         type = "plain"; target = @("production", "preview", "development") }
)

foreach ($proj in $projects) {
    Write-Host "`n=== $($proj.name) ===" -ForegroundColor Cyan
    
    # Deployments
    $deps = Invoke-RestMethod -Uri "https://api.vercel.com/v6/deployments?projectId=$($proj.id)&teamId=$scope&limit=2" -Headers $headers
    $deps.deployments | ForEach-Object {
        Write-Host "  state=$($_.state)  url=https://$($_.url)"
    }
    
    # Adicionar env vars
    foreach ($env in $envVars) {
        $body = $env | ConvertTo-Json
        $res = Invoke-RestMethod -Uri "https://api.vercel.com/v10/projects/$($proj.id)/env?teamId=$scope" -Method POST -Body $body -Headers $headers -ErrorAction SilentlyContinue
    }
    Write-Host "  Env vars adicionadas"
}
