import {
  IButtonProps,
  ButtonVariantProps,
  ButtonVariantDictionary,
} from "@models/components/atoms/Button/types"

export const variantPicker = ({
  variant,
  style = [],
}: Pick<IButtonProps, "variant" | "style">): ButtonVariantProps => {
  const baseStyle = ["btn-base", ...style]

  const buttonVariants: ButtonVariantDictionary = {
    "b-primary-lg": {
      style: ["bg-primary-500 p-2 rounded-lg"],
      size: "",
    },
    "b-primary-md": {
      size: "",
      style: [],
    },
    "b-primary-sm": {
      size: "",
      style: [],
    },
    "b-secondary-lg": {
      size: "",
      style: [],
    },
    "b-secondary-sm": {
      size: "",
      style: [],
    },
    "b-secondary-md": {
      size: "",
      style: [],
    },
    "b-primary-outline-lg": {
      size: "",
      style: [],
    },
    "b-primary-outline-md": {
      size: "",
      style: [],
    },
    "b-primary-outline-sm": {
      size: "",
      style: [],
    },
    "b-secondary-outline-lg": {
      size: "",
      style: [],
    },
    "b-secondary-outline-md": {
      size: "",
      style: [],
    },
    "b-secondary-outline-sm": {
      size: "",
      style: [],
    },
    "b-transparent-lg": {
      size: "",
      style: [],
    },
    "b-transparent-md": {
      size: "",
      style: [],
    },
    "b-transparent-sm": {
      size: "",
      style: [],
    },
  }

  const { ...selectedVariant } = buttonVariants[variant]

  return {
    style: [...baseStyle],
    size: selectedVariant.size,
  }
}
