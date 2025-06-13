import { performance } from "node:perf_hooks";

const start = performance.now();
// code to benchmark
for (let i = 0; i < 1_000_000; i++) {}
const end = performance.now();

console.log(`Took ${end - start}ms`);
