import {
  IIconProps,
  IconVariantsProps,
} from "@models/components/atoms/Icon/types"
import IconPaths from "./variants/iconPaths"
import classNames from "classnames"

export const Icon = ({ variant, size, color, style }: IIconProps) => {
  const sizePicker = (size: IconVariantsProps["size"]): string =>
    size === "lg" ? "24" : size === "md" ? "20" : size === "sm" ? "16" : "16"
  return (
    <svg
      width={sizePicker(size)}
      height={sizePicker(size)}
      viewBox="0 0 24 24"
      className={classNames(color, style)}
      xmlns="http://www.w3.org/2000/svg"
    >
      <IconPaths variant={variant} />
    </svg>
  )
}
