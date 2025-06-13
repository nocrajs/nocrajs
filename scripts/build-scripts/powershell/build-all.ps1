$Commands = @(
  "pnpm --filter @nocra/colors run build",
  "pnpm --filter @nocra/config run build",
  "pnpm --filter @nocra/core run build",
  "pnpm --filter @nocra/errors run build",
  "pnpm --filter @nocra/hooks run build",
  "pnpm --filter @nocra/logger run build",
  "pnpm --filter @nocra/middleware run build",
  "pnpm --filter @nocra/parser run build",
  "pnpm --filter @nocra/prompts run build",
  "pnpm --filter @nocra/theme run build",
  "pnpm --filter @nocra/types run build",
  "pnpm --filter @nocra/utils run build"
)

try {
  foreach ($Command in $Commands) {
    Write-Host "`nRunning and building: $Command"
    Invoke-Expression $Command
    if ($LASTEXITCODE -ne 0) {
      throw "Building failed: $Command"
    }
  }
  Write-Host "`nAll builds completed successfully."
} catch {
  Write-Error "`nBuild failed: $_"
  exit 1
}