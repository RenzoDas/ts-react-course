import { Button } from "@components/atoms/Button/Button"
import { Image } from "@components/atoms/Image/Image"
import { Text } from "@components/atoms/Text/Text"
import { CardVariantsProps } from "@models/components/molecules/Card/type"
import classNames from "classnames"

export const CardProfile = ({
  title,
  subtitle,
  imageSrc,
  button,
  style = [""],
}: CardVariantsProps) => {
  return (
    <div className={classNames(["flex items-center gap-6 flex-col", ...style])}>
      <Image
        position="center"
        rounded="circle"
        size="2xl"
        src={imageSrc || ""}
      />
      <div>
        <Text color={["text-primary-black"]} variant="p-md" weight="font-bold">
          {title}
        </Text>
        <Text variant="p-sm" weight="font-regular">
          {subtitle}
        </Text>
        {button && <Button {...button} />}
      </div>
    </div>
  )
}
