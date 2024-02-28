import { ILayoutProps } from "@models/components/layouts/type"
import { LayoutMain } from "./variant/LayoutMain"
import { LayoutUserSettings } from "./variant/LayoutUserSettings"

export const Layout = ({ variant }: ILayoutProps) => {
  return (
    <>
      {variant === "LayoutMain" && <LayoutMain />}
      {variant === "LayoutUserSettings" && <LayoutUserSettings />}
    </>
  )
}
