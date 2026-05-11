$t = "$env:VERCEL_TOKEN"
$scope = "conneqtcar-5232s-projects"
$headers = @{ Authorization = "Bearer $t"; "Content-Type" = "application/json" }

$apps = @(
    @{ id = "prj_WGNtDrXA8CnUvm4RAggzabM9X8pa"; name = "web";    pkg = "@conneqtcar/web";    outDir = "apps/web/.next" }
    @{ id = "prj_CcJoWnSQc80Y624vfF8VLu8l4lOt"; name = "seller"; pkg = "@conneqtcar/seller"; outDir = "apps/seller/.next" }
    @{ id = "prj_GB0rSjvNcPtvOhBXDaOLaOCSyEVO"; name = "admin";  pkg = "@conneqtcar/admin";  outDir = "apps/admin/.next" }
)

foreach ($app in $apps) {
    Write-Host "Atualizando $($app.name)..." -ForegroundColor Cyan
    $body = @{
        rootDirectory    = $null
        installCommand   = "pnpm install --frozen-lockfile"
        buildCommand     = "pnpm turbo run build --filter=$($app.pkg)"
        outputDirectory  = $app.outDir
        framework        = "nextjs"
    } | ConvertTo-Json

    $r = Invoke-RestMethod -Uri "https://api.vercel.com/v9/projects/$($app.id)?teamId=$scope" -Method PATCH -Body $body -Headers $headers
    Write-Host "  rootDirectory=$($r.rootDirectory) buildCommand=$($r.buildCommand)"
}
Write-Host "`nConcluido!" -ForegroundColor Green
