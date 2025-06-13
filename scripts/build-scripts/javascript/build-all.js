import { execSync } from "node:child_process";
import process from "node:process";

const Commands = [
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
  "pnpm --filter @nocra/utils run build",
];

try {
  for (const command of Commands) {
    console.log(`\nRunning: ${command}`);
    execSync(command, { stdio: "inherit" });
  }
  console.log("\nAll builds completed successfully.");
} catch (error) {
  console.error(`\nBuild failed: ${error}`);
  process.exit(1);
}
