export type ImageProps = {
  size?: "3xl" | "2xl" | "xl" | "lg" | "md" | "sm"
  width?: string | number
  height?: string | number
  rounded?: "lg" | "md" | "sm" | "circle"
  position?: "top" | "center" | "bottom" | "left" | "right"
  style?: string[]
}

export interface IImageProps extends ImageProps {
  src: string
}
