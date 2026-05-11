$t = "$env:VERCEL_TOKEN"
$scope = "conneqtcar-5232s-projects"
$headers = @{ Authorization = "Bearer $t" }

# Pegar URL de producao de cada projeto pelo ID
$projects = @(
    @{ name = "conneqt-web";    id = "prj_LawltmlANgKhfkpcaUm1mTvPoVPN" }
    @{ name = "conneqt-seller"; id = "prj_yghzMHPACWm4kNSgZZgr3TQZTt7f" }
    @{ name = "conneqt-admin";  id = "prj_8lo07NaNr3sIwpawGhxgX0nByYqt" }
)
foreach ($proj in $projects) {
    $p = Invoke-RestMethod -Uri "https://api.vercel.com/v9/projects/$($proj.id)?teamId=$scope" -Headers $headers
    Write-Host "$($proj.name):"
    Write-Host "  latestDeployments: $($p.latestDeployments | ConvertTo-Json -Depth 2 | Select-Object -First 5)"
    $p.alias | ForEach-Object { Write-Host "  alias: $_" }
}
