import classNames from "classnames"
import { variantPicker } from "./variants/variants"
import { IButtonProps } from "@models/components/atoms/Button/types"

export const Button = ({
  onClick,
  icon,
  label,
  ...variantProps
}: IButtonProps) => {
  const { style } = variantPicker(variantProps)

  const variantStyles = [style]
  console.log(icon)
  return (
    <button onClick={onClick} className={classNames(variantStyles)}>
      {label}
    </button>
  )
}
