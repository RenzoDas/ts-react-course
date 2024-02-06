import {
  ITextProps,
  TextTags,
  TextVariantDictionary,
  TextVariantProps,
  TextWeights,
} from "@models/components/atoms/Text/types"

/**
 * Selects and returns the text variant properties based on the provided text properties.
 *
 * @param {string} params.variant - The variant of the text.
 * @param {TextTags} params.textTag - The HTML tag to be used for the text.
 * @param {TextWeights} params.weight - The font weight of the text.
 * @param {Colors} params.color - The color of the text.
 * @param {string[]} params.style - Additional styles to be applied to the text using tailwind.
 * @returns {TextVariantProps} The properties for the specified text variant.
 */
export const variantPicker = ({
  variant,
  textTag,
  weight,
  color,
  style = [],
}: Pick<
  ITextProps,
  "textTag" | "color" | "style" | "variant" | "weight"
>): TextVariantProps => {
  // Functions to provide default values if specific properties are not defined.
  const weightDefault = (defaultWeight: TextWeights) =>
    weight ? weight : defaultWeight
  const tagDefault = (defaultTag: TextTags) => (textTag ? textTag : defaultTag)

  // Common default properties applied to all text variants.
  const commonDefault = {
    color: color || "text-neutral-900", // Default color if not specified
    style: ["font-base", ...style], // Default font base with additional styles
  }

  // Definition of text variant properties.

  const textVariants: TextVariantDictionary = {
    "h-xl": {
      size: "text-h-lg lg:text-h-xl",
      tag: tagDefault("h1"),
      weight: weightDefault("font-bold"),
      ...commonDefault,
    },
    "h-lg": {
      size: "text-h-md lg:text-h-lg",
      tag: tagDefault("h2"),
      weight: weightDefault("font-semibold"),
      ...commonDefault,
    },
    "h-md": {
      size: "text-h-sm lg:text-h-md",
      tag: tagDefault("h3"),
      weight: weightDefault("font-light"),
      ...commonDefault,
    },
    "h-sm": {
      size: "text-p-md lg:text-h-sm",
      tag: tagDefault("h4"),
      weight: weightDefault("font-semibold"),
      ...commonDefault,
    },
    "p-md": {
      size: "text-p-sm lg:text-p-md",
      tag: tagDefault("p"),
      weight: weightDefault("font-regular"),
      ...commonDefault,
    },
    "p-sm": {
      size: "text-p-xs lg:text-p-sm",
      tag: tagDefault("p"),
      weight: weightDefault("font-regular"),
      ...commonDefault,
    },
    "p-xs": {
      size: "text-p-xs",
      tag: tagDefault("p"),
      weight: weightDefault("font-regular"),
      ...commonDefault,
    },
  }

  return textVariants[variant]
}
