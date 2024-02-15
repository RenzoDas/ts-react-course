import { Text } from "@components/atoms/Text/Text"

export const Home = () => {
  return (
    <>
      <div className="bg-primary-500 py-10 rounded-xl font-bold text-white text-center shadowLg">
        <Text
          variant="h-xl"
          align="text-center"
          color={["text-primary-700"]}
          style={["cursor-pointer"]}
        >
          Home
        </Text>
      </div>
    </>
  )
}
