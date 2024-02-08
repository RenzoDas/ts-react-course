import {
  ITextProps,
  TextVariantProps,
  TextVariantDictionary,
} from "@models/components/atoms/Text/types"

export const variantPicker = ({
  variant,
  tag,
  weight,
  color,
  style = [],
}: ITextProps): TextVariantProps => {
  const baseStyle = ["font-base", ...style]

  const textVariants: TextVariantDictionary = {
    "h-xl": {
      tag: "h1",
      weight: "font-bold",
      size: "text-h-lg lg:text-h-xl",
    },
    "h-lg": {
      tag: "h2",
      weight: "font-semibold",
      size: "text-h-md lg:text-h-lg",
    },
    "h-md": {
      tag: "h3",
      weight: "font-light",
      size: "text-h-sm lg:text-h-md",
    },
    "h-sm": {
      tag: "h4",
      weight: "font-semibold",
      size: "text-p-md lg:text-h-sm",
    },
    "p-md": {
      tag: "p",
      weight: "font-regular",
      size: "text-p-sm lg:text-p-md",
    },
    "p-sm": {
      tag: "p",
      weight: "font-regular",
      size: "text-p-xs lg:text-p-sm",
    },
    "p-xs": {
      tag: "p",
      weight: "font-regular",
      size: "text-p-xs",
    },
  }
  const { ...selectedVariant } = textVariants[variant]
  return {
    size: selectedVariant.size,
    tag: tag || selectedVariant.tag || "p",
    weight: weight || selectedVariant.weight || "font-regular",
    color: color || selectedVariant.color || "text-neutral-900",
    style: baseStyle,
  }
}
