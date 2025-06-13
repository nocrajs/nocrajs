// source/index.ts
import process from "process";
process.stdout.write("\nHello world!");
var log = (...T) => {
  process.stdout.write(T.join(" "));
};
export { log };
