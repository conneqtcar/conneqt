$t = "$env:VERCEL_TOKEN"
$scope = "conneqtcar-5232s-projects"
$root = "c:\Users\Hp User\ProjetosVSCODE\Conneqtcar\conneqt"

$apps = @(
    @{ name = "web";    projectId = "prj_WGNtDrXA8CnUvm4RAggzabM9X8pa" }
    @{ name = "seller"; projectId = "prj_CcJoWnSQc80Y624vfF8VLu8l4lOt" }
    @{ name = "admin";  projectId = "prj_GB0rSjvNcPtvOhBXDaOLaOCSyEVO" }
)

foreach ($app in $apps) {
    Write-Host "`n=== Deploying $($app.name) from root ===" -ForegroundColor Cyan
    Set-Location $root
    
    # Usar vercel deploy com --cwd na raiz e --archive=tgz
    $output = vercel deploy `
        --token $t `
        --scope $scope `
        --yes `
        --archive=tgz `
        2>&1

    $url = $output | Where-Object { $_ -match "^https://" } | Select-Object -Last 1
    Write-Host "URL: $url"
}
