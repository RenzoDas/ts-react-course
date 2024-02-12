import { ICardProps } from "@models/components/molecules/Card/type"
import { CardProfile } from "./variants/CardProfile"

export const Card = ({ variant, ...cardProps }: ICardProps) => {
  return (
    <>
      {variant && variant === "CardProfile" && <CardProfile {...cardProps} />}
    </>
  )
}
