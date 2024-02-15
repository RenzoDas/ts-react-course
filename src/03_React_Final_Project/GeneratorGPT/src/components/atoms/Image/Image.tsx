import { IImageProps } from "@models/components/atoms/Image/type"
import classNames from "classnames"

export const Image = ({
  src,
  style,
  height,
  rounded,
  position,
  size,
  width,
}: IImageProps): JSX.Element => {
  const roundedStyle = (roundedType: IImageProps["rounded"]) => {
    switch (roundedType) {
      case "lg":
        return "rounded-lg"
      case "md":
        return "rounded-md"
      case "sm":
        return "rounded-sm"
      case "circle":
        return "rounded-full aspect-square"
      default:
        return ""
    }
  }

  const positionStyle = (positionType: IImageProps["position"]) => {
    switch (positionType) {
      case "top":
        return "object-top"
      case "bottom":
        return "object-bottom"
      case "left":
        return "object-left"
      case "right":
        return "object-right"
      case "center":
        return "object-center"
      default:
        return ""
    }
  }

  const sizePicker = (size: IImageProps["size"]) => {
    switch (size) {
      case "3xl":
        return "max-w-[120px]"
      case "2xl":
        return "max-w-[100px]"
      case "xl":
        return "max-w-[80px]"
      case "lg":
        return "max-w-[60px]"
      case "md":
        return "max-w-[40px]"
      case "sm":
        return "max-w-[20px]"
      default:
        ""
    }
  }
  return (
    <img
      src={src}
      width={width}
      height={height}
      className={classNames(
        style,
        roundedStyle(rounded),
        positionStyle(position),
        sizePicker(size),
        size ? "object-cover" : "",
      )}
    />
  )
}
