import {
  ButtonVariantDictionary,
  IButtonProps,
} from "@models/components/atoms/Button/types"

export const variantPicker = ({
  variant,
  style = [],
}: Pick<IButtonProps, "variant" | "style">): Pick<IButtonProps, "style"> => {
  const buttonVariants: ButtonVariantDictionary = {
    "b-primary-lg": {
      style: ["bg-primary-500 p-2 rounded-lg", ...style],
    },
    "b-primary-md": {
      style: ["", ...style],
    },
    "b-primary-sm": {
      style: ["", ...style],
    },
    "b-secondary-lg": {
      style: ["", ...style],
    },
    "b-secondary-sm": {
      style: ["", ...style],
    },
    "b-secondary-md": {
      style: ["", ...style],
    },
    "b-primary-outline-lg": {
      style: ["", ...style],
    },
    "b-primary-outline-md": {
      style: ["", ...style],
    },
    "b-primary-outline-sm": {
      style: ["", ...style],
    },
    "b-secondary-outline-lg": {
      style: ["", ...style],
    },
    "b-secondary-outline-md": {
      style: ["", ...style],
    },
    "b-secondary-outline-sm": {
      style: ["", ...style],
    },
    "b-transparent-lg": {
      style: ["", ...style],
    },
    "b-transparent-md": {
      style: ["", ...style],
    },
    "b-transparent-sm": {
      style: ["", ...style],
    },
  }

  return buttonVariants[variant]
}
