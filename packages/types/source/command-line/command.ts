import { type Arg } from "./args.js";
import { type CLIContext } from "./context.js";
import { type Flag } from "./flags.js";
import { type CommandHooks } from "./hook.js";

/**
 * Represents a command definition for a CLI application.
 *
 * @typeParam TFlags - A record of flag names to their corresponding `Flag` definitions.
 */
export type Command<
  TFlags extends Record<string, Flag<any>> = Record<string, Flag<any>>,
> = {
  /** The name of the command, which can be a string or a regular expression. */
  name: string;

  /** A brief description of what the command does. */
  description?: string;

  /** Alternative names or patterns for the command. Optional. */
  aliases?: ReadonlyArray<string>;

  /** The list of positional arguments accepted by the command. Optional. */
  args?: ReadonlyArray<Arg>;

  /** A record of flag definitions for the command. Optional. */
  flags?: TFlags;

  /** Example usages of the command. Optional. */
  examples?: ReadonlyArray<string>;

  /** If true, the command is hidden from help output. Optional. */
  hidden?: boolean;

  /** The list of subcommands under this command. */
  subcommands?: ReadonlyArray<Command>;

  /** Hook functions for command lifecycle events. Optional. */
  hooks?: CommandHooks<TFlags>;

  /**
   * A function that determines if the command should be available, based on the CLI context. Optional.
   * @param ctx - The CLI context.
   * @returns A boolean or a promise resolving to a boolean.
   */
  condition?: (ctx: CLIContext) => boolean | Promise<boolean>;

  /**
   * The function to execute when the command is invoked.
   * @param args - The parsed arguments.
   * @param flags - The parsed flags (with their default values).
   * @param ctx - The CLI context.
   * @returns void or a promise resolving to void.
   */
  execute: (
    args: ReadonlyArray<Arg>,
    flags: { [K in keyof TFlags]: TFlags[K]["default"] },
    ctx: CLIContext,
  ) => void | Promise<void>;
};
