import { Button } from "@components/atoms/Button/Button"
import { Text } from "@components/atoms/Text/Text"
import { Card } from "@components/molecules/Card/Card"
import { DynamicRoutePaths } from "@models/routes/type"
import classNames from "classnames"
import { useState } from "react"
import SectionLink from "./SectionLink/SectionLink"
import { useLocation } from "react-router-dom"

export const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  const sections: {
    label: string
    labelMobile: string
    linkTo: DynamicRoutePaths
  }[] = [
    { label: "Home", labelMobile: "YTS", linkTo: "/" },
    { label: "Components", labelMobile: "YT", linkTo: "/components" },
  ]

  return (
    <div
      className={classNames(
        "p-4 justify-between h-full flex flex-col shadow-sm transition-all",
        {
          "items-center": !isOpen,
          "w-[300px]": isOpen,
          "w-[80px]": !isOpen,
        },
      )}
    >
      <div>
        <Card
          variant="CardProfile"
          style={[isOpen ? "py-12" : "p-0"]}
          imageSrc="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=2487&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          imageSize={isOpen ? "xl" : "md"}
          title={isOpen ? <>Welcome ,</> : <></>}
          subtitle={isOpen ? <>User</> : <></>}
          button={{
            variant: "b-transparent-dark-md",
            icon: "settings",
            square: true,
            onClick: () => alert("You clicked the button"),
          }}
        />
        <div className="flex flex-col gap-2">
          {isOpen && (
            <Text
              variant="p-sm"
              weight="font-bold"
              style={["w-full text-left"]}
            >
              Generators
            </Text>
          )}
          <hr />
          <ul>
            {sections.map(({ label, labelMobile, linkTo }, index) => (
              <SectionLink
                key={index}
                label={label}
                labelMobile={labelMobile}
                isOpen={isOpen}
                linkTo={linkTo}
                isActive={location.pathname === linkTo}
              />
            ))}
          </ul>
        </div>
      </div>
      <div
        className={classNames("w-full flex", {
          "justify-end": isOpen,
          "justify-center": !isOpen,
        })}
      >
        <Button
          style={["!p-0"]}
          variant="b-transparent-dark-md"
          icon={isOpen ? "expand-close" : "expand-open"}
          onClick={() => setIsOpen(!isOpen)}
        />
      </div>
    </div>
  )
}
