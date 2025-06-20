import { type CLIContext } from "./context.js";
import { type Flag } from "./flags.js";
import { type HookContext } from "./hooks-context.js";

/**
 * Hook functions for command lifecycle events.
 */
export type CommandHooks<
  TFlags extends Record<string, Flag<any>> = Record<string, Flag<any>>,
> = {
  /**
   * Executed before the command runs.
   * Can be used for validation, setup, or preprocessing.
   * If it throws an error or returns false, the command execution will be aborted.
   */
  beforeRun?: (
    context: HookContext<TFlags>,
  ) => void | boolean | Promise<void | boolean>;

  /**
   * Executed after the command runs successfully.
   * Can be used for cleanup, logging, or post-processing.
   */
  afterRun?: (context: HookContext<TFlags>) => void | Promise<void>;

  /**
   * Executed when the command throws an error.
   * Can be used for error handling, logging, or cleanup.
   * If it returns true, the error is considered handled and won't be re-thrown.
   */
  onError?: (
    error: Error,
    context: HookContext<TFlags>,
  ) => void | boolean | Promise<void | boolean>;

  /**
   * Executed regardless of whether the command succeeds or fails.
   * Can be used for cleanup operations that should always run.
   */
  finally?: (context: HookContext<TFlags>) => void | Promise<void>;

  /**
   * Executed before parsing arguments and flags.
   * Can be used to modify or validate raw input.
   */
  beforeParse?: (
    rawArgs: string[],
    ctx: CLIContext,
  ) => void | string[] | Promise<void | string[]>;

  /**
   * Executed after parsing but before validation.
   * Can be used to transform or validate parsed data.
   */
  afterParse?: (context: HookContext<TFlags>) => void | Promise<void>;
};
