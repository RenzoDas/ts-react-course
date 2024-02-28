import { Button } from "@components/atoms/Button/Button"
import { Image } from "@components/atoms/Image/Image"
import { Text } from "@components/atoms/Text/Text"
import { CardVariantsProps } from "@models/components/molecules/Card/type"
import classNames from "classnames"

export const CardProfile = ({
  title,
  subtitle,
  imageSrc,
  imageSize,
  style = [""],
}: CardVariantsProps) => {
  return (
    <div
      className={classNames([
        "flex items-center justify-center gap-2 flex-col",
        ...style,
      ])}
    >
      <Image
        position="center"
        rounded="circle"
        size={imageSize}
        src={imageSrc || ""}
      />
      <div className="flex flex-col items-center justify-center">
        <Text color={["text-primary-black"]} variant="p-md" weight="font-bold">
          {title}
        </Text>
        <Text variant="p-sm" weight="font-regular">
          {subtitle}
        </Text>
        <Button
          variant="b-transparent-dark-md"
          icon="home"
          square
          isLink
          linkTo="/"
        />
        <Button
          variant="b-transparent-dark-md"
          icon="settings"
          square
          isLink
          linkTo="/settings"
        />
      </div>
    </div>
  )
}
