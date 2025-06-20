/**
 * Represents the context in which a CLI (Command Line Interface) command is executed.
 *
 * @remarks
 * This type provides essential information about the execution environment,
 * including the current working directory, environment variables, and the raw input arguments.
 */
export type CLIContext = {
  /**
   * The current working directory from which the CLI command is executed.
   */
  readonly cwd: string;

  /**
   * The environment variables available to the process at execution time.
   */
  readonly env: NodeJS.ProcessEnv;

  /**
   * The raw input arguments passed to the CLI, as a read-only array of strings.
   */
  readonly rawInput: ReadonlyArray<string>;
};
