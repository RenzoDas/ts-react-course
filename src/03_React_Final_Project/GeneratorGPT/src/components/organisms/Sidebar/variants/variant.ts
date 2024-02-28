import {
  ISidebarProps,
  SidebarVariantDictionary,
  SidebarVariantsProps,
} from "@models/components/organisms/Sidebar/type"

export const variantPicker = ({
  variant,
}: ISidebarProps): Required<SidebarVariantsProps> => {
  const sidebarVariants: SidebarVariantDictionary = {
    SidebarMain: {
      title: "Links",
      links: [
        { label: "Home", labelMobile: "YTS", linkTo: "/" },
        { label: "Components", labelMobile: "YT", linkTo: "/components" },
      ],
    },
    SidebarUserSettings: {
      title: "Settings",
      links: [
        { label: "Details", labelMobile: "DTL", linkTo: "/settings" },
        { label: "API Key", labelMobile: "API", linkTo: "/settings/api" },
      ],
    },
  }
  const { ...selectedVariant } = sidebarVariants[variant]

  return {
    title: selectedVariant.title || "Generators",
    links: selectedVariant.links || [],
  }
}
