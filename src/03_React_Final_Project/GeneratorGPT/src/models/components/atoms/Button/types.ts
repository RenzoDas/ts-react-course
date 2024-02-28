import { TextVariants, TextWeights } from "../Text/types"
import { ThemeColors } from "@models/theme/color"
import { IIconProps, IconVariantsProps } from "../Icon/types"
import { DynamicRoutePaths } from "@models/routes/type"

export type ButtonVariants =
  | "b-primary-lg"
  | "b-primary-md"
  | "b-primary-sm"
  | "b-secondary-lg"
  | "b-secondary-sm"
  | "b-secondary-md"
  | "b-primary-outline-lg"
  | "b-primary-outline-md"
  | "b-primary-outline-sm"
  | "b-secondary-outline-lg"
  | "b-secondary-outline-md"
  | "b-secondary-outline-sm"
  | "b-transparent-light-lg"
  | "b-transparent-light-md"
  | "b-transparent-light-sm"
  | "b-transparent-dark-lg"
  | "b-transparent-dark-md"
  | "b-transparent-dark-sm"

export type ButtonVariantProps = {
  buttonSize?: string
  fontVariant?: TextVariants
  fontWeight?: TextWeights
  fontColor?: ThemeColors<"text">[]
  style?: string[]
  iconProps?: IconVariantsProps
  square?: boolean
  full?: boolean
}

export type ButtonVariantDictionary = {
  [key in ButtonVariants]: ButtonVariantProps
}

export type IconPosition = "left" | "right"

export interface IButtonProps extends ButtonVariantProps {
  variant: ButtonVariants
  onClick?: () => void
  label?: string
  icon?: IIconProps["variant"]
  iconPosition?: IconPosition
  isLink?: boolean
  linkTo?: DynamicRoutePaths
}
