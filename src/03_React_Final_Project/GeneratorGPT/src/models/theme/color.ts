import config from "../../../tailwind.config"
import { TwProps } from "./theme"

type ColorCategory = "primary" | "secondary" | "neutral" | "feedback"
type ColorWeight =
  | "50"
  | "100"
  | "200"
  | "300"
  | "400"
  | "500"
  | "600"
  | "700"
  | "800"
  | "900"
  | "950"
  | "success"
  | "error"
  | "warning"
  | "white"
  | "black"

type TextColors = `text-${ColorCategory}-${ColorWeight}`
type BgColors = `bg-${ColorCategory}-${ColorWeight}`
type BorderColors = `border-${ColorCategory}-${ColorWeight}`
type FillColors = `fill-${ColorCategory}-${ColorWeight}`

type ColorType = "text" | "bg" | "border" | "fill"
type ThemeColorTypes = {
  text: TextColors
  bg: BgColors
  border: BorderColors
  fill: FillColors
}

export type ThemeColors<T extends ColorType> =
  | ThemeColorTypes[T]
  | `${TwProps}${ThemeColorTypes[T]}`

export function getColorNames<T extends ColorType>(type: T): ThemeColors<T>[] {
  const colorNames: ThemeColors<T>[] = []
  Object.entries(config.theme?.extend?.colors || {}).forEach(
    ([groupKey, shades]) => {
      Object.keys(shades).forEach((shadeKey) => {
        const colorName = `${type}-${groupKey}-${shadeKey}` as ThemeColors<T>
        colorNames.push(colorName)
      })
    }
  )
  console.log(colorNames)

  return colorNames
}
