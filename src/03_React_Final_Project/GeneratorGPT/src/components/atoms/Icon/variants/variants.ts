import {
  IIconProps,
  IconVariantsDictionary,
  IconVariantsProps,
} from "@models/components/atoms/Icon/types"
import { ReactComponent as ArrowsMaximize } from "./arrows-maximize.svg"

import { ThemeColors } from "@models/theme"

export const variantPicker = ({
  variant,
  size,
  color,
  style = [],
}: IIconProps): Required<IconVariantsProps> => {
  const iconVariants: IconVariantsDictionary = {
    "arrows-maximize": {},
    "arrow-maximize-light": {},
  }
  const { ...selectedVariant } = iconVariants[variant]
  return {
    size: size || "md",
    color: [...(color as ThemeColors[])] || [selectedVariant.color] || [
        "text-neutral-900",
      ],
    style: [...style],
  }
}
