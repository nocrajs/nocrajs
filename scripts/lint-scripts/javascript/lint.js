import { execSync } from "node:child_process";
import process from "node:process";

function TestPackage(PackageName) {
  const command = `pnpm --filter @nocra/${PackageName} run lint`;
  console.log(`\nBuilding @nocra/${PackageName}: ${command}`);

  try {
    execSync(command, { stdio: "inherit" });
    console.log(`\nLint completed successfully for @nocra/${PackageName}.`);
  } catch (error) {
    console.log(`\nLint failed for @nocra/${PackageName} : ${Command}`);
    process.exit(1);
  }
}

export { TestPackage };
