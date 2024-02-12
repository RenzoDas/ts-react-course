import { ThemeColors } from "@models/theme/color"

export type IconVariants = "arrows-maximize" | "arrow-maximize-light"

export type IconVariantsProps = {
  size?: "lg" | "md" | "sm"
  style?: string[]
  color?: ThemeColors<"fill">[]
}

export type IconVariantsDictionary = {
  [key in IconVariants]: IconVariantsProps
}

export interface IIconProps extends IconVariantsProps {
  variant?: IconVariants
}
