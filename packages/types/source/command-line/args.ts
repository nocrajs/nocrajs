/**
 * Represents an argument definition with its name, type, requirement status, and description.
 */
export type Arg = {
  /** The name of the argument, which can be a string or a regular expression. */
  name: string;
  /** The expected type of the argument value. Can be "string" or "number". Optional. */
  type?: "string" | "number";
  /** Indicates whether the argument is required. Optional. */
  required?: boolean;
  /** A description of the argument for documentation or help purposes. Optional. */
  description?: string;
};
