import {
  IButtonProps,
  ButtonVariantProps,
  ButtonVariantDictionary,
} from "@models/components/atoms/Button/types"

export const variantPicker = ({
  variant,
  style = [],
}: Pick<IButtonProps, "variant" | "style">): Required<ButtonVariantProps> => {
  // Size Styles
  const sizeLg = "px-8 py-2.5 rounded-lg"
  const sizeMd = "px-7 py-2 rounded-lg"
  const sizeSm = "px-6 py-1.5 rounded-lg"
  // Gradient Styles
  const primaryGradient =
    "bg-gradient-to-t from-primary-500 to-primary-700 hover:bg-gradient-to-t hover:from-primary-500 hover:to-primary-800"
  const secondaryGradient =
    "bg-gradient-to-t from-secondary-500 to-secondary-700 hover:bg-gradient-to-t hover:from-secondary-500 hover:to-secondary-800"
  // Border Styles
  const primaryBorder =
    "bg-gradient-to-t from-primary-500 to-primary-700 hover:bg-gradient-to-t hover:from-primary-500 hover:to-primary-800"
  const secondaryBorder =
    "bg-gradient-to-t from-secondary-500 to-secondary-700 hover:bg-gradient-to-t hover:from-secondary-500 hover:to-secondary-800"
  // Common Styles
  const buttonCommonStyle = "transition-all tracking-wide"

  const buttonVariants: ButtonVariantDictionary = {
    "b-primary-lg": {
      fontColor: "text-base-white",
      fontVariant: "p-sm",
      fontWeight: "font-bold",
      style: [sizeLg, primaryGradient, buttonCommonStyle],
    },
    "b-primary-md": {
      fontColor: "text-base-white",
      fontVariant: "p-sm",
      fontWeight: "font-regular",
      style: [sizeMd, primaryGradient, buttonCommonStyle],
    },
    "b-primary-sm": {
      fontColor: "text-base-white",
      fontVariant: "p-xs",
      fontWeight: "font-light",
      style: [sizeSm, primaryGradient, buttonCommonStyle],
    },
    "b-secondary-lg": {
      fontColor: "text-base-white",
      fontVariant: "p-sm",
      fontWeight: "font-bold",
      style: [sizeLg, secondaryGradient, buttonCommonStyle],
    },
    "b-secondary-md": {
      fontColor: "text-base-white",
      fontVariant: "p-sm",
      fontWeight: "font-regular",
      style: [sizeMd, secondaryGradient, buttonCommonStyle],
    },
    "b-secondary-sm": {
      fontColor: "text-base-white",
      fontVariant: "p-xs",
      fontWeight: "font-light",
      style: [sizeSm, secondaryGradient, buttonCommonStyle],
    },
    "b-primary-outline-lg": {
      fontColor: "text-primary-500",
      fontVariant: "p-sm",
      fontWeight: "font-regular",
      style: [],
    },
    "b-primary-outline-md": {
      fontColor: "text-primary-500",
      fontVariant: "p-sm",
      fontWeight: "font-regular",
      style: [],
    },
    "b-primary-outline-sm": {
      fontColor: "text-primary-500",
      fontVariant: "p-sm",
      fontWeight: "font-regular",
      style: [],
    },
    "b-secondary-outline-lg": {
      fontColor: "text-base-white",
      fontVariant: "p-sm",
      fontWeight: "font-regular",
      style: [],
    },
    "b-secondary-outline-md": {
      fontColor: "text-base-white",
      fontVariant: "p-sm",
      fontWeight: "font-regular",
      style: [],
    },
    "b-secondary-outline-sm": {
      fontColor: "text-base-white",
      fontVariant: "p-sm",
      fontWeight: "font-regular",
      style: [],
    },
    "b-transparent-lg": {
      fontColor: "text-base-white",
      fontVariant: "p-sm",
      fontWeight: "font-regular",
      style: [],
    },
    "b-transparent-md": {
      fontColor: "text-base-white",
      fontVariant: "p-sm",
      fontWeight: "font-regular",
      style: [],
    },
    "b-transparent-sm": {
      fontColor: "text-base-white",
      fontVariant: "p-sm",
      fontWeight: "font-regular",
      style: [],
    },
  }

  const selectedVariant = buttonVariants[variant]

  return {
    style: ["", ...(selectedVariant.style as string[]), ...style],
    fontColor: selectedVariant.fontColor || "text-neutral-900",
    fontVariant: selectedVariant.fontVariant || "p-md",
    fontWeight: selectedVariant.fontWeight || "font-regular",
  }
}
