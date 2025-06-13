interface LogFunction {
  <T extends string[]>(...args: T): void;
}
declare const log: LogFunction;

export { type LogFunction, log };
