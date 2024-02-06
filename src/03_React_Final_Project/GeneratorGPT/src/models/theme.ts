// Import the Tailwind CSS configuration file.
import tailwindConfig from "../../tailwind.config.js"

// Define type aliases for better readability and maintainability.
type TextOrBg = "text" | "bg"
type ColorType = "primary" | "secondary" | "neutral" | "feedback"
type ColorWeight =
  | "100"
  | "300"
  | "500"
  | "700"
  | "900"
  | "success"
  | "error"
  | "warning"

// Define a type for theme colors, which follows the pattern `${TextOrBg}-${ColorType}-${ColorWeight}`.
export type ThemeColors = `${TextOrBg}-${ColorType}-${ColorWeight}`

/**
 * Extracts color names from the Tailwind configuration based on a specified type (text or bg).
 * @param {TextOrBg} type - The type of color (text or bg).
 * @returns {ThemeColors[]} An array of color names.
 */
export function getColorNames(type: TextOrBg): ThemeColors[] {
  // Access the color groups defined in the Tailwind configuration.
  const colorGroups = tailwindConfig.theme.extend.colors
  // Initialize an array to hold the resulting color names.
  const colorNames: ThemeColors[] = []

  // Iterate over each color group and its respective shades.
  for (const [groupKey, shades] of Object.entries(colorGroups)) {
    for (const shadeKey of Object.keys(shades)) {
      // Construct the color name and add it to the colorNames array.
      // This assumes the constructed string matches the ThemeColors pattern.
      colorNames.push(`${type}-${groupKey}-${shadeKey}` as ThemeColors)
    }
  }

  // Return the array of constructed color names.
  return colorNames
}
