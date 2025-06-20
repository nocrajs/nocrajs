/**
 * Represents the possible types of flags that can be used.
 * - `"string"`: Indicates the flag expects a string value.
 * - `"boolean"`: Indicates the flag expects a boolean value.
 */
export type FlagType = "string" | "boolean";

/**
 * Represents a command-line flag with configurable options.
 *
 * @typeParam T - The type of the flag's default value.
 */
export type Flag<T = unknown> = {
  /**
   * The type of the flag (e.g., string, boolean, etc.).
   */
  type: FlagType;

  /**
   * An optional description of the flag's purpose.
   */
  description?: string;

  /**
   * An optional alias or list of aliases for the flag.
   */
  alias?: string | ReadonlyArray<string>;

  /**
   * Indicates whether the flag is required.
   */
  required?: boolean;

  /**
   * The default value for the flag if not provided.
   */
  default?: T;

  /**
   * Whether the flag should be hidden from help output.
   */
  hidden?: boolean;
};
