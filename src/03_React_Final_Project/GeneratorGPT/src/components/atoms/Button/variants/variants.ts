import {
  IButtonProps,
  ButtonVariantProps,
  ButtonVariantDictionary,
} from "@models/components/atoms/Button/types"

export const variantPicker = ({
  variant,
  style = [],
}: Pick<IButtonProps, "variant" | "style">): Required<ButtonVariantProps> => {
  const buttonVariants: ButtonVariantDictionary = {
    "b-primary-lg": {
      fontColor: "text-base-white",
      fontVariant: "p-sm",
      fontWeight: "font-bold",
      style: ["bg-primary-500 p-2 rounded-lg"],
    },
    "b-primary-md": {
      fontColor: "text-base-white",
      fontVariant: "p-sm",
      fontWeight: "font-regular",
      style: ["bg-primary-500 p-2 rounded-lg"],
    },
    "b-primary-sm": {
      fontColor: "text-base-white",
      fontVariant: "p-xs",
      fontWeight: "font-regular",
      style: ["bg-primary-500 p-2 rounded-lg"],
    },
    "b-secondary-lg": {
      style: [],
    },
    "b-secondary-sm": {
      style: [],
    },
    "b-secondary-md": {
      style: [],
    },
    "b-primary-outline-lg": {
      style: [],
    },
    "b-primary-outline-md": {
      style: [],
    },
    "b-primary-outline-sm": {
      style: [],
    },
    "b-secondary-outline-lg": {
      style: [],
    },
    "b-secondary-outline-md": {
      style: [],
    },
    "b-secondary-outline-sm": {
      style: [],
    },
    "b-transparent-lg": {
      style: [],
    },
    "b-transparent-md": {
      style: [],
    },
    "b-transparent-sm": {
      style: [],
    },
  }

  const selectedVariant = buttonVariants[variant]

  return {
    style: ["", ...selectedVariant.style, ...style],
    fontColor: selectedVariant.fontColor || "text-neutral-900",
    fontVariant: selectedVariant.fontVariant || "p-md",
    fontWeight: selectedVariant.fontWeight || "font-regular",
  }
}
