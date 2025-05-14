/**
 * Converts boolean to string or string to boolean.
 * @param value boolean or "true"/"false"
 * @returns "true" | "false" if boolean input, boolean if string input
 */
export function toggleBooleanString(value: boolean | string): boolean | "true" | "false" {
  if (typeof value === "boolean") {
    return value ? "true" : "false";
  }

  if (typeof value === "string") {
    return value.toLowerCase() === "true";
  }

  throw new Error("Invalid input: must be a boolean or 'true'/'false' string.");
}
