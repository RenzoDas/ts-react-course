export type CardVariants = "CardProfile" | "CardInfo"

export type CardVariantsProps = {
  imageSrc?: string
  title?: string
  subtitle?: string
}

export interface ICardProps extends CardVariantsProps {
  variant: CardVariants
}
