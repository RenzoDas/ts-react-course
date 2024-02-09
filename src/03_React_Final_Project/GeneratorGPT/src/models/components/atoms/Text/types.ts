import { ReactNode } from "react"
import { ThemeColors } from "@models/theme"

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
  size?: TextVariants | string
  color?: ThemeColors[]
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

/** Props interface for the Text component */
export interface ITextProps extends TextVariantProps {
  children?: ReactNode
  variant: TextVariants
}
