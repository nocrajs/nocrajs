function Test-Package {
  param (
    [Parameter(Mandatory)]
    [string]$PackageName
  )

  [string]$Command = "pnpm --filter @nocra/$PackageName run lint"
  Write-Host "`nLinting @nocra/${PackageName}: $Command"

  try {
    Invoke-Expression $Command ; Write-Host "`nLint completed successfully for @nocra/$PackageName."
  } catch {
    Write-Error "`nLint failed for @nocra/$PackageName : $Command" ; exit 1
  }
}