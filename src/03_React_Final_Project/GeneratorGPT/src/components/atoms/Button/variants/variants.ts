import {
  IButtonProps,
  ButtonVariantProps,
  ButtonVariantDictionary,
} from "@models/components/atoms/Button/types"
import { ThemeColors } from "@models/theme"

export const variantPicker = ({
  variant,
  style = [],
}: Pick<IButtonProps, "variant" | "style">): Required<ButtonVariantProps> => {
  // Size Styles
  const sizeLg = "px-8 py-2.5"
  const sizeMd = "px-7 py-2"
  const sizeSm = "px-6 py-1.5"
  // Gradient Styles
  const primaryGradient =
    "bg-gradient-to-t from-primary-500 to-primary-700 hover:bg-gradient-to-t hover:from-primary-500 hover:to-primary-800"
  const secondaryGradient =
    "bg-gradient-to-t from-secondary-500 to-secondary-700 hover:bg-gradient-to-t hover:from-secondary-500 hover:to-secondary-800"
  // Border Styles
  const primaryBorder = "border-primary-500 border-2 hover:bg-primary-500"
  const secondaryBorder = "border-secondary-500 border-2 hover:bg-secondary-500"
  // Common Styles
  const buttonCommonStyle = "transition-all rounded-lg"

  const buttonVariants: ButtonVariantDictionary = {
    "b-primary-lg": {
      buttonSize: sizeLg,
      fontColor: ["text-base-white"],
      fontVariant: "p-sm",
      fontWeight: "font-bold",
      style: [primaryGradient],
    },
    "b-primary-md": {
      buttonSize: sizeMd,
      fontColor: ["text-base-white"],
      fontVariant: "p-sm",
      fontWeight: "font-regular",
      style: [primaryGradient],
    },
    "b-primary-sm": {
      buttonSize: sizeSm,
      fontColor: ["text-base-white"],
      fontVariant: "p-xs",
      fontWeight: "font-light",
      style: [primaryGradient],
    },
    "b-secondary-lg": {
      buttonSize: sizeLg,
      fontColor: ["text-base-white"],
      fontVariant: "p-sm",
      fontWeight: "font-bold",
      style: [secondaryGradient],
    },
    "b-secondary-md": {
      buttonSize: sizeMd,
      fontColor: ["text-base-white"],
      fontVariant: "p-sm",
      fontWeight: "font-regular",
      style: [secondaryGradient],
    },
    "b-secondary-sm": {
      buttonSize: sizeSm,
      fontColor: ["text-base-white"],
      fontVariant: "p-xs",
      fontWeight: "font-light",
      style: [secondaryGradient],
    },
    "b-primary-outline-lg": {
      buttonSize: sizeLg,
      fontColor: ["text-primary-500", "hover:text-base-white"],
      fontVariant: "p-sm",
      fontWeight: "font-bold",
      style: [primaryBorder],
    },
    "b-primary-outline-md": {
      buttonSize: sizeMd,
      fontColor: ["text-primary-500", "hover:text-base-white"],
      fontVariant: "p-sm",
      fontWeight: "font-regular",
      style: [primaryBorder],
    },
    "b-primary-outline-sm": {
      buttonSize: sizeSm,
      fontColor: ["text-primary-500", "hover:text-base-white"],
      fontVariant: "p-xs",
      fontWeight: "font-light",
      style: [primaryBorder],
    },
    "b-secondary-outline-lg": {
      buttonSize: sizeLg,
      fontColor: ["text-secondary-500", "hover:text-base-white"],
      fontVariant: "p-sm",
      fontWeight: "font-bold",
      style: [secondaryBorder],
    },
    "b-secondary-outline-md": {
      buttonSize: sizeMd,
      fontColor: ["text-secondary-500", "hover:text-base-white"],
      fontVariant: "p-sm",
      fontWeight: "font-regular",
      style: [secondaryBorder],
    },
    "b-secondary-outline-sm": {
      buttonSize: sizeSm,
      fontColor: ["text-secondary-500", "hover:text-base-white"],
      fontVariant: "p-xs",
      fontWeight: "font-light",
      style: [secondaryBorder],
    },
    "b-transparent-light-lg": {
      buttonSize: sizeLg,
      fontColor: ["text-base-white"],
      fontVariant: "p-sm",
      fontWeight: "font-bold",
      style: [],
    },
    "b-transparent-light-md": {
      buttonSize: sizeMd,
      fontColor: ["text-base-white"],
      fontVariant: "p-sm",
      fontWeight: "font-regular",
      style: [],
    },
    "b-transparent-light-sm": {
      buttonSize: sizeSm,
      fontColor: ["text-base-white"],
      fontVariant: "p-xs",
      fontWeight: "font-light",
      style: [],
    },
    "b-transparent-dark-lg": {
      buttonSize: sizeLg,
      fontColor: ["text-base-black"],
      fontVariant: "p-sm",
      fontWeight: "font-bold",
      style: [],
    },
    "b-transparent-dark-md": {
      buttonSize: sizeMd,
      fontColor: ["text-base-black"],
      fontVariant: "p-sm",
      fontWeight: "font-regular",
      style: [],
    },
    "b-transparent-dark-sm": {
      buttonSize: sizeSm,
      fontColor: ["text-base-black"],
      fontVariant: "p-xs",
      fontWeight: "font-light",
      style: [],
    },
  }

  const selectedVariant = buttonVariants[variant]

  return {
    buttonSize: selectedVariant.buttonSize || sizeMd,
    style: [
      buttonCommonStyle,
      ...(selectedVariant.style as string[]),
      ...style,
    ],
    fontColor: [...(selectedVariant.fontColor as ThemeColors[])] || [
      "text-neutral-900",
    ],
    fontVariant: selectedVariant.fontVariant || "p-md",
    fontWeight: selectedVariant.fontWeight || "font-regular",
  }
}
