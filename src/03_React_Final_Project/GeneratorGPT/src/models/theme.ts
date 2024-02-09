import { colors } from "src/styles/theme/colors"
type TwProps = "hover:" | "sm:" | "md:" | "lg:"
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

type BaseThemeColors =
  | `${TextOrBg}-${ColorType}-${ColorWeight}`
  | `${TextOrBg}-base-${"white" | "black"}`

export type ThemeColors = BaseThemeColors | `${TwProps}${BaseThemeColors}`

export function getColorNames(type: TextOrBg): ThemeColors[] {
  const colorNames: ThemeColors[] = []

  for (const [groupKey, shades] of Object.entries(colors)) {
    for (const shadeKey of Object.keys(shades)) {
      colorNames.push(`${type}-${groupKey}-${shadeKey}` as ThemeColors)
    }
  }
  return colorNames
}
