$t = "$env:VERCEL_TOKEN"
$team = "team_7usnIjpe1DmzNyAPp2WhvWHI"
$webId = "prj_WGNtDrXA8CnUvm4RAggzabM9X8pa"
$sellerId = "prj_CcJoWnSQc80Y624vfF8VLu8l4lOt"
$adminId = "prj_GB0rSjvNcPtvOhBXDaOLaOCSyEVO"

function List-Domains($projectId, $name) {
    Write-Host "=== $name ===" -ForegroundColor Cyan
    $resp = curl.exe -s "https://api.vercel.com/v9/projects/$projectId/domains?teamId=$team" -H "Authorization: Bearer $t"
    $resp | python -c "import sys,json; [print(' ', d['name'], 'verified='+str(d.get('verified'))) for d in json.load(sys.stdin).get('domains',[])]"
}

function Add-Domain($projectId, $domain) {
    $tmpFile = [System.IO.Path]::GetTempFileName()
    '{"name":"' + $domain + '"}' | Set-Content $tmpFile -Encoding UTF8
    $resp = curl.exe -s -X POST "https://api.vercel.com/v10/projects/$projectId/domains?teamId=$team" -H "Authorization: Bearer $t" -H "Content-Type: application/json" --data-binary "@$tmpFile"
    Remove-Item $tmpFile -Force
    $result = $resp | python -c "import sys,json; d=json.load(sys.stdin); print(d.get('name','') or d.get('error',{}).get('message','?') or d.get('error',{}).get('code','?'))"
    Write-Host "  ADD $domain -> $result"
}

Write-Host "`n--- Estado atual ---"
List-Domains $webId "web"
List-Domains $sellerId "seller"
List-Domains $adminId "admin"

Write-Host "`n--- Adicionando dominios ---"
Add-Domain $webId "conneqtcar.com"
Add-Domain $webId "www.conneqtcar.com"
Add-Domain $sellerId "vendedor.conneqtcar.com"
Add-Domain $adminId "admin.conneqtcar.com"

Write-Host "`n--- Estado final ---"
List-Domains $webId "web"
List-Domains $sellerId "seller"
List-Domains $adminId "admin"
