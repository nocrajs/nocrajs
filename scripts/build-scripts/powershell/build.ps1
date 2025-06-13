function Build-Package {
  param (
    [Parameter(Mandatory)]
    [string]$PackageName
  )

  [string]$Command = "pnpm --filter @nocra/$PackageName run build"
  Write-Host "`nBuilding @nocra/${PackageName}: $Command"

  try {
    Invoke-Expression $Command ; Write-Host "`nBuild completed successfully for @nocra/$PackageName."
  } catch {
    Write-Error "`nBuild failed for @nocra/$PackageName : $Command" ; exit 1
  }
}