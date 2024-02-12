import { variantPicker } from "./variants/variants"
import { IButtonProps } from "@models/components/atoms/Button/types"
import { Text } from "../Text/Text"
import { Icon } from "../Icon/Icon"
import classNames from "classnames"

export const Button = ({
  onClick,
  icon,
  iconPosition = "right",
  label,
  full,
  ...variantProps
}: IButtonProps) => {
  const { style, fontVariant, fontWeight, fontColor, buttonSize, iconProps } =
    variantPicker(variantProps)

  return (
    <button onClick={onClick} className={classNames([full ? "w-full" : ""])}>
      <Text
        variant={fontVariant}
        color={fontColor}
        weight={fontWeight}
        style={[buttonSize, ...style, full ? "w-full text-left" : ""]}
      >
        {icon && iconPosition === "left" && (
          <Icon variant={icon} {...iconProps} />
        )}
        {label}
        {icon && iconPosition === "right" && (
          <Icon variant={icon} {...iconProps} />
        )}
      </Text>
    </button>
  )
}
