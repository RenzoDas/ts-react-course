import { colors } from "src/styles/theme/colors"
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
export type ThemeColors = `${TextOrBg}-${ColorType}-${ColorWeight}`

export function getColorNames(type: TextOrBg): ThemeColors[] {
  const colorNames: ThemeColors[] = []

  for (const [groupKey, shades] of Object.entries(colors)) {
    for (const shadeKey of Object.keys(shades)) {
      colorNames.push(`${type}-${groupKey}-${shadeKey}` as ThemeColors)
    }
  }
  return colorNames
}
