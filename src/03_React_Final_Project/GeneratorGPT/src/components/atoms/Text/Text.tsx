import classNames from "classnames"
import { ReactNode } from "react"
import { IThemeColors } from "../../../models/theme"

export interface ITextProps {
  variant: "h-xl" | "h-lg" | "h-md" | "h-sm" | "p-md" | "p-sm" | "p-xs"
  children: ReactNode
  weight?: "100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900"
  color?: IThemeColors
}

export const Text = ({ variant, children }: ITextProps) => {
  const variantStyle: string[] = []
  switch (variant) {
    case "h-xl":
      variantStyle.push("font-700", "text-h-xl")
      break
    case "h-lg":
      variantStyle.push("font-600", "text-h-lg")
      break
    default:
      break
  }
  return <div className={classNames("font-base", variantStyle)}>{children}</div>
}
