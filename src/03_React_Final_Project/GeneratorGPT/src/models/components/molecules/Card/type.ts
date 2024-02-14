import { IButtonProps } from "@models/components/atoms/Button/types"

export type CardVariants = "CardProfile" | "CardInfo"

export type CardVariantsProps = {
  imageSrc?: string
  title?: string | JSX.Element
  subtitle?: string | JSX.Element
  style?: string[]
  button?: IButtonProps
}

export interface ICardProps extends CardVariantsProps {
  variant: CardVariants
}
