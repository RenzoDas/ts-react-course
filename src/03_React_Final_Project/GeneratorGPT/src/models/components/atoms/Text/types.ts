import { ThemeColors } from "@models/theme/color"
import { TwProps } from "@models/theme/theme"
import { ReactNode } from "react"

/** Variants of text for styling purposes */
export type TextVariants =
  | "h-xl"
  | "h-lg"
  | "h-md"
  | "h-sm"
  | "p-md"
  | "p-sm"
  | "p-xs"

/** Properties for defining text variants */
export type TextVariantProps = {
  tag?: TextTags
  weight?: TextWeights
  size?: ThemeFonts[]
  color?: ThemeColors<"text">[]
  align?: TextAlign
  style?: string[]
}

/** Dictionary mapping text variants to their respective properties */
export type TextVariantDictionary = {
  [key in TextVariants]: TextVariantProps
}

/** HTML tags associated with text elements */
export type TextTags = keyof Pick<
  JSX.IntrinsicElements,
  "h1" | "h2" | "h3" | "h4" | "p"
>
/** Weight options for text styling */
export type TextWeights =
  | "font-bold"
  | "font-semibold"
  | "font-regular"
  | "font-light"
export type TextAlign =
  | "text-left"
  | "text-center"
  | "text-right"
  | "text-justify"
  | "text-start"
  | "text-end"

export type ThemeFonts =
  | `text-${TextVariants}`
  | `${TwProps}text-${TextVariants}`

/** Props interface for the Text component */
export interface ITextProps extends TextVariantProps {
  children?: ReactNode
  variant: TextVariants
}
