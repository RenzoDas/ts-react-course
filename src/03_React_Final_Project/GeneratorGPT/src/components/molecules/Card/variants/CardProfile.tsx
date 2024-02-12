import { Image } from "@components/atoms/Image/Image"
import { Text } from "@components/atoms/Text/Text"
import { CardVariantsProps } from "@models/components/molecules/Card/type"

export const CardProfile = ({
  title,
  subtitle,
  imageSrc,
}: CardVariantsProps) => {
  return (
    <div className="flex items-center gap-6 flex-col">
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
        <Text variant="p-md" weight="font-regular">
          {subtitle}
        </Text>
      </div>
    </div>
  )
}
