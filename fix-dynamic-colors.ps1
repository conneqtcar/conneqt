$dynamicFiles = @(
  "C:\Users\Hp User\ProjetosVSCODE\Conneqtcar\conneqt\apps\web\src\app\veiculo\[id]\page.tsx",
  "C:\Users\Hp User\ProjetosVSCODE\Conneqtcar\conneqt\apps\web\src\app\vender\inspecao\[vehicleId]\page.tsx",
  "C:\Users\Hp User\ProjetosVSCODE\Conneqtcar\conneqt\apps\web\src\app\vender\publicar\[vehicleId]\page.tsx",
  "C:\Users\Hp User\ProjetosVSCODE\Conneqtcar\conneqt\apps\seller\src\app\inspecao\[vehicleId]\page.tsx",
  "C:\Users\Hp User\ProjetosVSCODE\Conneqtcar\conneqt\apps\seller\src\app\publicar\[vehicleId]\page.tsx",
  "C:\Users\Hp User\ProjetosVSCODE\Conneqtcar\conneqt\apps\admin\src\app\inspecoes\[id]\page.tsx"
)

$replacements = @(
  @{ From = 'bg-blue-600'; To = 'bg-brand-gold' },
  @{ From = 'bg-blue-500'; To = 'bg-brand-gold' },
  @{ From = 'hover:bg-blue-700'; To = 'hover:bg-brand-gold-dark' },
  @{ From = 'hover:bg-blue-600'; To = 'hover:bg-brand-gold' },
  @{ From = 'text-blue-600'; To = 'text-brand-gold' },
  @{ From = 'text-blue-700'; To = 'text-brand-gold' },
  @{ From = 'text-blue-500'; To = 'text-brand-gold' },
  @{ From = 'bg-blue-50';  To = 'bg-amber-50' },
  @{ From = 'bg-blue-100'; To = 'bg-amber-100' },
  @{ From = 'hover:bg-blue-100'; To = 'hover:bg-amber-100' },
  @{ From = 'ring-blue-200'; To = 'ring-amber-200' },
  @{ From = 'border-blue-500'; To = 'border-brand-gold' },
  @{ From = '#2563eb'; To = '#D4A217' },
  @{ From = '#1d4ed8'; To = '#8A6400' }
)

foreach ($path in $dynamicFiles) {
  if (Test-Path -LiteralPath $path) {
    $content = Get-Content -LiteralPath $path -Raw
    $newContent = $content
    foreach ($r in $replacements) {
      $newContent = $newContent -replace [regex]::Escape($r.From), $r.To
    }
    if ($newContent -ne $content) {
      Set-Content -LiteralPath $path $newContent -NoNewline
      Write-Host "Updated: $path"
    } else {
      Write-Host "No changes: $path"
    }
  } else {
    Write-Host "Not found: $path"
  }
}
Write-Host "Done."
