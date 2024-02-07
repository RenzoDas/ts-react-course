export type ButtonVariants =
  | "b-primary-lg"
  | "b-primary-md"
  | "b-primary-sm"
  | "b-secondary-lg"
  | "b-secondary-sm"
  | "b-secondary-md"
  | "b-primary-outline-lg"
  | "b-primary-outline-md"
  | "b-primary-outline-sm"
  | "b-secondary-outline-lg"
  | "b-secondary-outline-md"
  | "b-secondary-outline-sm"
  | "b-transparent-lg"
  | "b-transparent-md"
  | "b-transparent-sm"

export type IButtonProps = {
  variant: ButtonVariants
  onClick: () => void //TODO gestire i tipi con generics
  label?: string
  icon?: unknown //TODO assegnare tipo giusto
  style?: string[]
}

export type ButtonVariantDictionary = {
  [key in ButtonVariants]: Pick<IButtonProps, "style">
}
