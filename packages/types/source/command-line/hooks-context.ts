import { type Arg } from "./args.js";
import { type Command } from "./command.js";
import { type CLIContext } from "./context.js";
import { type Flag } from "./flags.js";

/**
 * Hook context passed to all hook functions.
 */
export type HookContext<
  TFlags extends Record<string, Flag<any>> = Record<string, Flag<any>>,
> = {
  /** The parsed arguments */
  args: ReadonlyArray<Arg>;
  /** The parsed flags (with their default values) */
  flags: { [K in keyof TFlags]: TFlags[K]["default"] };
  /** The CLI context */
  ctx: CLIContext;
  /** The command being executed */
  command: Command<TFlags>;
};
