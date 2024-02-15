import { IButtonProps } from "@models/components/atoms/Button/types"
import { IImageProps } from "@models/components/atoms/Image/type"

export type CardVariants = "CardProfile" | "CardInfo"

export type CardVariantsProps = {
  imageSrc?: IImageProps["src"]
  imageSize?: IImageProps["size"]
  title?: string | JSX.Element
  subtitle?: string | JSX.Element
  style?: string[]
  button?: IButtonProps
}

export interface ICardProps extends CardVariantsProps {
  variant: CardVariants
}
