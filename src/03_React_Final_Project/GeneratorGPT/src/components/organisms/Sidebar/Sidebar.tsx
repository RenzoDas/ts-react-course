import { Button } from "@components/atoms/Button/Button"
import { Text } from "@components/atoms/Text/Text"
import { Card } from "@components/molecules/Card/Card"
import classNames from "classnames"
import SectionLink from "./SectionLink/SectionLink"
import { useLocation } from "react-router-dom"
import { ISidebarProps } from "@models/components/organisms/Sidebar/type"
import { variantPicker } from "./variants/variant"
import { useContext } from "react"
import { GlobalContext } from "src/context/GlobalContext"

export const Sidebar = ({ variant }: ISidebarProps) => {
  const location = useLocation()

  const { isSidebarOpened, setIsSidebarOpened } = useContext(GlobalContext)

  const { links, title } = variantPicker({ variant })
  return (
    <div
      className={classNames(
        "p-4 justify-between h-full flex flex-col shadow-sm transition-all",
        {
          "items-center": !isSidebarOpened,
          "w-[300px]": isSidebarOpened,
          "w-[80px]": !isSidebarOpened,
        },
      )}
    >
      <div>
        <Card
          variant="CardProfile"
          style={[isSidebarOpened ? "py-12" : "p-0"]}
          imageSrc="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=2487&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          imageSize={isSidebarOpened ? "xl" : "md"}
          title={isSidebarOpened ? <>Welcome ,</> : <></>}
          subtitle={isSidebarOpened ? <>User</> : <></>}
        />
        <div className="flex flex-col gap-2">
          {isSidebarOpened && (
            <Text
              variant="p-sm"
              weight="font-bold"
              style={["w-full text-left"]}
            >
              {title}
            </Text>
          )}
          <hr />
          <ul>
            {links?.map(({ label, labelMobile, linkTo }, index) => (
              <SectionLink
                key={index}
                label={label}
                labelMobile={labelMobile}
                isOpen={!!isSidebarOpened}
                linkTo={linkTo}
                isActive={location.pathname === linkTo}
              />
            ))}
          </ul>
        </div>
      </div>
      <div
        className={classNames("w-full flex", {
          "justify-end": isSidebarOpened,
          "justify-center": !isSidebarOpened,
        })}
      >
        <Button
          style={["!p-0"]}
          variant="b-transparent-dark-md"
          icon={isSidebarOpened ? "expand-close" : "expand-open"}
          onClick={
            setIsSidebarOpened
              ? () => setIsSidebarOpened(!isSidebarOpened)
              : undefined
          }
        />
      </div>
    </div>
  )
}
