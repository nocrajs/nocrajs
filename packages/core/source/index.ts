import process from "node:process";

process.stdout.write("\nHello world!");

export interface LogFunction {
  <T extends string[]>(...args: T): void;
}

export const log: LogFunction = (...T) => {
  process.stdout.write(T.join(" "));
};

const test = "ts";

let test2;
