import classNames from "classnames"
import { variantPicker } from "./variants/variants"
import { IButtonProps } from "@models/components/atoms/Button/types"
import { Text } from "../Text/Text"

export const Button = ({
  onClick,
  icon,
  label,
  ...variantProps
}: IButtonProps) => {
  const { style, fontVariant, fontWeight, fontColor, buttonSize } =
    variantPicker(variantProps)

  console.log(icon)

  const variantStyles = [...style]

  console.log(variantStyles)
  return (
    <button onClick={onClick} className={classNames(variantStyles)}>
      <Text
        style={[buttonSize]}
        variant={fontVariant}
        color={fontColor}
        weight={fontWeight}
      >
        {label}
      </Text>
    </button>
  )
}
