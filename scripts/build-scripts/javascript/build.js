import { execSync } from "node:child_process";
import process from "node:process";

function BuildPackage(PackageName) {
  const command = `pnpm --filter @nocra/${PackageName} run build`;
  console.log(`\nBuilding @nocra/${PackageName}: ${command}`);

  try {
    execSync(command, { stdio: "inherit" });
    console.log(`\nBuild completed successfully for @nocra/${PackageName}.`);
  } catch (error) {
    console.log(`\nBuild failed for @nocra/${PackageName} : ${command}`);
    process.exit(1);
  }
}

export { BuildPackage };
