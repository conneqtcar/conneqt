$t = "$env:VERCEL_TOKEN"
$scope = "conneqtcar-5232s-projects"
$headers = @{ Authorization = "Bearer $t" }

# Listar todos os projetos
$r = Invoke-RestMethod -Uri "https://api.vercel.com/v9/projects?teamId=$scope&limit=20" -Headers $headers
Write-Host "Total projetos: $($r.projects.Count)"
$r.projects | ForEach-Object {
    Write-Host "  $($_.id) | $($_.name) | root=$($_.rootDirectory)"
}
