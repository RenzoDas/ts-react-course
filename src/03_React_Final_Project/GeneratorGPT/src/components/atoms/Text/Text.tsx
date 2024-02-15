import classNames from "classnames"
import { ITextProps } from "@models/components/atoms/Text/types"
import { variantPicker } from "./variants/variants"

export const Text = ({ children, ...variantProps }: ITextProps) => {
  const { tag, weight, color, size, style, align } = variantPicker(variantProps)

  const TextTag = tag || "p"
  const variantStyles = [weight, color, size, style, align]

  return <TextTag className={classNames(variantStyles)}>{children}</TextTag>
}
