$t = "$env:VERCEL_TOKEN"
$scope = "conneqtcar-5232s-projects"
$headers = @{ Authorization = "Bearer $t" }

$apps = @(
    @{ name = "web";    id = "prj_WGNtDrXA8CnUvm4RAggzabM9X8pa" }
    @{ name = "seller"; id = "prj_CcJoWnSQc80Y624vfF8VLu8l4lOt" }
    @{ name = "admin";  id = "prj_GB0rSjvNcPtvOhBXDaOLaOCSyEVO" }
)

foreach ($app in $apps) {
    $deps = Invoke-RestMethod -Uri "https://api.vercel.com/v6/deployments?projectId=$($app.id)&teamId=$scope&limit=1" -Headers $headers
    $d = $deps.deployments[0]
    Write-Host "$($app.name): state=$($d.state) url=https://$($d.url)"
}
