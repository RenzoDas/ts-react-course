import { DynamicRoutePaths } from "@models/routes/type"

export type SidebarVariants = "SidebarMain" | "SidebarUserSettings"

export type SidebarVariantsProps = {
  title?: string
  links?: { label: string; labelMobile: string; linkTo: DynamicRoutePaths }[]
}

export type SidebarVariantDictionary = {
  [key in SidebarVariants]: SidebarVariantsProps
}

export interface ISidebarProps extends SidebarVariantsProps {
  variant: SidebarVariants
}
