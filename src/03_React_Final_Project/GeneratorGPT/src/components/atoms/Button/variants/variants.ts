import {
  IButtonProps,
  ButtonVariantProps,
  ButtonVariantDictionary,
} from "@models/components/atoms/Button/types"
import { IconVariantsProps } from "@models/components/atoms/Icon/types"
import { ThemeColors } from "@models/theme/color"

export const variantPicker = ({
  variant,
  square,
  style = [],
}: Pick<IButtonProps, "variant" | "style" | "square" | "full">): Required<
  Omit<ButtonVariantProps, "square" | "full">
> => {
  // Size Styles
  const sizeLg = "px-8 py-2.5"
  const sizeMd = "px-7 py-2"
  const sizeSm = "px-6 py-1.5"
  const squareLg = "p-2.5"
  const squareMd = "p-2"
  const squareSm = "p-1.5"
  // Gradient Styles
  const primaryGradient =
    "bg-gradient-to-t from-primary-500 to-primary-700 hover:bg-gradient-to-t hover:from-primary-500 hover:to-primary-800 active:bg-gradient-to-t active:from-primary-800 active:to-primary-900"
  const secondaryGradient =
    "bg-gradient-to-t from-secondary-500 to-secondary-700 hover:bg-gradient-to-t hover:from-secondary-500 hover:to-secondary-800 active:bg-gradient-to-t active:from-secondary-800 active:to-secondary-900"
  // Border Styles
  const primaryBorder =
    "shadow-border-inner-primary hover:bg-primary-500 active:bg-primary-800 active:shadow-border-inner-primary-800"
  const secondaryBorder =
    "shadow-border-inner-secondary hover:bg-secondary-500 active:bg-secondary-800 active:shadow-border-inner-secondary-800"
  // Transparent Styles
  const transparentHover = "hover:opacity-50 active:opacity-100"
  // Icon Styles
  const iconStyle = "transition-all"
  // IconProps Styles
  const mainIconProps = {
    color: ["fill-neutral-white"],
    style: [iconStyle],
    size: "md",
  } as IconVariantsProps
  const mainDarkIconProps = {
    color: ["fill-neutral-black"],
    style: [iconStyle],
    size: "md",
  } as IconVariantsProps
  const outlinePrimaryIconProps = {
    color: ["fill-primary-500", "group-hover:fill-neutral-white"],
    style: [iconStyle],
    size: "md",
  } as IconVariantsProps
  const outlineSecondaryIconProps = {
    color: ["fill-secondary-500", "group-hover:fill-neutral-white"],
    style: [iconStyle],
    size: "md",
  } as IconVariantsProps
  // Common Styles
  const buttonCommonStyle =
    "transition-all rounded-lg flex items-center gap-2 group"

  const buttonVariants: ButtonVariantDictionary = {
    "b-primary-lg": {
      buttonSize: square ? squareLg : sizeLg,
      fontColor: ["text-neutral-white"],
      fontVariant: "p-sm",
      fontWeight: "font-regular",
      style: [primaryGradient],
      iconProps: mainIconProps,
    },
    "b-primary-md": {
      buttonSize: square ? squareMd : sizeMd,
      fontColor: ["text-neutral-white"],
      fontVariant: "p-sm",
      fontWeight: "font-regular",
      style: [primaryGradient],
      iconProps: mainIconProps,
    },
    "b-primary-sm": {
      buttonSize: square ? squareLg : sizeSm,
      fontColor: ["text-neutral-white"],
      fontVariant: "p-xs",
      fontWeight: "font-light",
      style: [primaryGradient],
      iconProps: {
        ...mainIconProps,
        size: "sm",
      },
    },
    "b-secondary-lg": {
      buttonSize: square ? squareLg : sizeLg,
      fontColor: ["text-neutral-white"],
      fontVariant: "p-sm",
      fontWeight: "font-regular",
      style: [secondaryGradient],
      iconProps: mainIconProps,
    },
    "b-secondary-md": {
      buttonSize: square ? squareMd : sizeMd,
      fontColor: ["text-neutral-white"],
      fontVariant: "p-sm",
      fontWeight: "font-regular",
      style: [secondaryGradient],
      iconProps: mainIconProps,
    },
    "b-secondary-sm": {
      buttonSize: square ? squareLg : sizeSm,
      fontColor: ["text-neutral-white"],
      fontVariant: "p-xs",
      fontWeight: "font-light",
      style: [secondaryGradient],
      iconProps: { ...mainIconProps, size: "sm" },
    },
    "b-primary-outline-lg": {
      buttonSize: square ? squareLg : sizeLg,
      fontColor: ["text-primary-500", "hover:text-neutral-white"],
      fontVariant: "p-sm",
      fontWeight: "font-regular",
      style: [primaryBorder],
      iconProps: outlinePrimaryIconProps,
    },
    "b-primary-outline-md": {
      buttonSize: square ? squareMd : sizeMd,
      fontColor: ["text-primary-500", "hover:text-neutral-white"],
      fontVariant: "p-sm",
      fontWeight: "font-regular",
      style: [primaryBorder],
      iconProps: outlinePrimaryIconProps,
    },
    "b-primary-outline-sm": {
      buttonSize: square ? squareLg : sizeSm,
      fontColor: ["text-primary-500", "hover:text-neutral-white"],
      fontVariant: "p-xs",
      fontWeight: "font-light",
      style: [primaryBorder],
      iconProps: { ...outlinePrimaryIconProps, size: "sm" },
    },
    "b-secondary-outline-lg": {
      buttonSize: square ? squareLg : sizeLg,
      fontColor: ["text-secondary-500", "hover:text-neutral-white"],
      fontVariant: "p-sm",
      fontWeight: "font-regular",
      style: [secondaryBorder],
      iconProps: outlineSecondaryIconProps,
    },
    "b-secondary-outline-md": {
      buttonSize: square ? squareMd : sizeMd,
      fontColor: ["text-secondary-500", "hover:text-neutral-white"],
      fontVariant: "p-sm",
      fontWeight: "font-regular",
      style: [secondaryBorder],
      iconProps: outlineSecondaryIconProps,
    },
    "b-secondary-outline-sm": {
      buttonSize: square ? squareLg : sizeSm,
      fontColor: ["text-secondary-500", "hover:text-neutral-white"],
      fontVariant: "p-xs",
      fontWeight: "font-light",
      style: [secondaryBorder],
      iconProps: { ...outlineSecondaryIconProps, size: "sm" },
    },
    "b-transparent-light-lg": {
      buttonSize: square ? squareLg : sizeLg,
      fontColor: ["text-neutral-white"],
      fontVariant: "p-sm",
      fontWeight: "font-regular",
      style: [transparentHover],
      iconProps: mainIconProps,
    },
    "b-transparent-light-md": {
      buttonSize: square ? squareMd : sizeMd,
      fontColor: ["text-neutral-white"],
      fontVariant: "p-sm",
      fontWeight: "font-regular",
      style: [transparentHover],
      iconProps: mainIconProps,
    },
    "b-transparent-light-sm": {
      buttonSize: square ? squareLg : sizeSm,
      fontColor: ["text-neutral-white"],
      fontVariant: "p-xs",
      fontWeight: "font-light",
      style: [transparentHover],
      iconProps: { ...mainIconProps, size: "sm" },
    },
    "b-transparent-dark-lg": {
      buttonSize: square ? squareLg : sizeLg,
      fontColor: ["text-neutral-black"],
      fontVariant: "p-sm",
      fontWeight: "font-regular",
      style: [transparentHover],
      iconProps: mainDarkIconProps,
    },
    "b-transparent-dark-md": {
      buttonSize: square ? squareMd : sizeMd,
      fontColor: ["text-neutral-black"],
      fontVariant: "p-sm",
      fontWeight: "font-regular",
      style: [transparentHover],
      iconProps: mainDarkIconProps,
    },
    "b-transparent-dark-sm": {
      buttonSize: square ? squareSm : sizeSm,
      fontColor: ["text-neutral-black"],
      fontVariant: "p-xs",
      fontWeight: "font-light",
      style: [transparentHover],
      iconProps: { ...mainDarkIconProps, size: "sm" },
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
    fontColor:
      [...(selectedVariant.fontColor as ThemeColors<"text">[])] ||
      (["text-neutral-900"] as ThemeColors<"text">[]),
    fontVariant: selectedVariant.fontVariant || "p-md",
    fontWeight: selectedVariant.fontWeight || "font-regular",
    iconProps: selectedVariant.iconProps || {},
  }
}
