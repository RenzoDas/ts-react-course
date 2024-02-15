import { variantPicker } from "./variants/variants"
import { IButtonProps } from "@models/components/atoms/Button/types"
import { Text } from "../Text/Text"
import { Icon } from "../Icon/Icon"
import classNames from "classnames"
import { Link } from "react-router-dom"
import { DynamicRoutePaths } from "@models/routes/type"

export const Button = ({
  onClick,
  icon,
  iconPosition = "right",
  label,
  full,
  isLink,
  linkTo,
  ...variantProps
}: IButtonProps) => {
  const { style, fontVariant, fontWeight, fontColor, buttonSize, iconProps } =
    variantPicker(variantProps)

  const InnerButton = () => {
    return (
      <>
        <Text
          variant={fontVariant}
          color={fontColor}
          weight={fontWeight}
          style={[buttonSize, ...style, full ? "w-full" : ""]}
        >
          {icon && iconPosition === "left" && (
            <Icon variant={icon} {...iconProps} />
          )}
          {label}
          {icon && iconPosition === "right" && (
            <Icon variant={icon} {...iconProps} />
          )}
        </Text>
      </>
    )
  }

  return (
    <>
      {isLink ? (
        <Link
          to={linkTo as DynamicRoutePaths}
          className={classNames([full ? "w-full" : ""])}
          onClick={() => onClick()}
        >
          <InnerButton />
        </Link>
      ) : (
        <button
          className={classNames([full ? "w-full" : ""])}
          onClick={() => onClick()}
        >
          <InnerButton />
        </button>
      )}
    </>
  )
}
