import { ReactNode } from "react"
import { ThemeColors } from "@models/theme"

// Define text-related types for clarity and reusability

/** Variants of text for styling purposes */
export type TextVariants =
  | "h-xl"
  | "h-lg"
  | "h-md"
  | "h-sm"
  | "p-md"
  | "p-sm"
  | "p-xs"

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

/** Properties for defining text variants */
export type TextVariantProps = {
  tag: TextTags
  weight: TextWeights
  color: ThemeColors
  size: string
  style?: string[]
}

/** Dictionary mapping text variants to their respective properties */
export type TextVariantDictionary = {
  [key in TextVariants]: TextVariantProps
}

/** Props interface for the Text component */
export interface ITextProps {
  children: ReactNode
  variant: TextVariants
  weight?: TextWeights
  color?: ThemeColors
  textTag?: TextTags
  style?: string[]
}
