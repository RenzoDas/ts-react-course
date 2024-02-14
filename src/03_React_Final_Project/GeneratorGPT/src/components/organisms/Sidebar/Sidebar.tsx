import { Button } from "@components/atoms/Button/Button"
import { Text } from "@components/atoms/Text/Text"
import { Card } from "@components/molecules/Card/Card"
import classNames from "classnames"
import { useState } from "react"

export const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div
      className={classNames([
        "p-4 justify-between absolute top-0 left-0 h-full flex flex-col shadow-sm transition-all",
        isOpen ? "" : "items-center",
        isOpen ? "w-[300px]" : "w-16",
      ])}
    >
      <div>
        <Card
          style={[isOpen ? "py-12" : "p-0"]}
          variant="CardProfile"
          title={isOpen ? <>Welcome ,</> : <></>}
          subtitle={isOpen ? <>User</> : <></>}
          button={{
            variant: "b-transparent-dark-md",
            icon: "settings",
            onClick() {
              alert("You clicked the button")
            },
          }}
          imageSrc="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=2487&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
        {/* //TODO : Aggiungere text-align al componente Text come opzione*/}
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
            <li>
              <Button
                square={!isOpen}
                fontWeight="font-bold"
                label={isOpen ? "Youtube" : "YT"}
                variant="b-transparent-dark-sm"
                onClick={() => console.log()}
                full={isOpen}
              />
            </li>
            <li>
              <Button
                square={!isOpen}
                fontWeight="font-bold"
                full={isOpen}
                label={isOpen ? "Youtube Shorts" : "YTS"}
                variant="b-primary-sm"
                onClick={() => console.log()}
              />
            </li>
          </ul>
        </div>
      </div>

      <div
        className={classNames([
          "w-full flex",
          isOpen ? "justify-end" : "justify-center",
        ])}
      >
        <Button
          style={["!p-0 "]}
          variant="b-transparent-dark-md"
          icon={isOpen ? "expand-close" : "expand-open"}
          onClick={() => setIsOpen(!isOpen)}
        />
      </div>
    </div>
  )
}
