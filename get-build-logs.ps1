$t = "$env:VERCEL_TOKEN"
$scope = "conneqtcar-5232s-projects"
$headers = @{ Authorization = "Bearer $t" }

# Pegar logs do ultimo deployment do web
$deployId = "web-ia0aid41f-conneqtcar-5232s-projects" # slug do deployment

# Buscar o deployment real pelo URL
$deps = Invoke-RestMethod -Uri "https://api.vercel.com/v6/deployments?projectId=prj_WGNtDrXA8CnUvm4RAggzabM9X8pa&teamId=$scope&limit=1" -Headers $headers
$depId = $deps.deployments[0].uid
Write-Host "Deployment ID: $depId"

# Pegar logs de build
$logs = Invoke-RestMethod -Uri "https://api.vercel.com/v2/deployments/$depId/events?teamId=$scope" -Headers $headers
$logs | Where-Object { $_.type -eq "stdout" -or $_.type -eq "stderr" -or $_.type -eq "command" } | 
    Select-Object -Last 50 |
    ForEach-Object { Write-Host "$($_.type): $($_.payload.text)" }
