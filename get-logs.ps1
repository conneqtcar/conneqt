$t = "$env:VERCEL_TOKEN"
$scope = "conneqtcar-5232s-projects"
$headers = @{ Authorization = "Bearer $t" }

$param = $args[0]  # "web" ou "seller"

$ids = @{
    web    = "prj_WGNtDrXA8CnUvm4RAggzabM9X8pa"
    seller = "prj_CcJoWnSQc80Y624vfF8VLu8l4lOt"
    admin  = "prj_GB0rSjvNcPtvOhBXDaOLaOCSyEVO"
}
$projectId = $ids[$param]

$deps = Invoke-RestMethod -Uri "https://api.vercel.com/v6/deployments?projectId=$projectId&teamId=$scope&limit=1" -Headers $headers
$depId = $deps.deployments[0].uid
Write-Host "Deployment: $depId"

$events = Invoke-RestMethod -Uri "https://api.vercel.com/v2/deployments/$depId/events?teamId=$scope&limit=200" -Headers $headers
$events | Where-Object { $_.payload.text -match "error|Error|Type error|Cannot|failed|FAILED|\.tsx|\.ts" } |
    ForEach-Object { Write-Host "$($_.type): $($_.payload.text)" }
