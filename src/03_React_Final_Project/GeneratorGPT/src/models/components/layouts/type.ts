export type LayoutVariants = "LayoutMain" | "LayoutUserSettings"

export type LayoutVariantsProps = object

export interface ILayoutProps extends LayoutVariantsProps {
  variant: LayoutVariants
}
