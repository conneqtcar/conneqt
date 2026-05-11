$t = "$env:VERCEL_TOKEN"
$scope = "conneqtcar-5232s-projects"
$headers = @{ Authorization = "Bearer $t" }

$projects = @(
    @{ name = "conneqt-web";    id = "prj_LawltmlANgKhfkpcaUm1mTvPoVPN" }
    @{ name = "conneqt-seller"; id = "prj_yghzMHPACWm4kNSgZZgr3TQZTt7f" }
    @{ name = "conneqt-admin";  id = "prj_8lo07NaNr3sIwpawGhxgX0nByYqt" }
)

foreach ($proj in $projects) {
    $deps = Invoke-RestMethod -Uri "https://api.vercel.com/v6/deployments?projectId=$($proj.id)&teamId=$scope&limit=3" -Headers $headers
    Write-Host "$($proj.name):"
    $deps.deployments | ForEach-Object {
        Write-Host "  state=$($_.state) url=https://$($_.url)"
    }
}
