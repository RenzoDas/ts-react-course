import type { Meta, StoryObj } from "@storybook/react"
import { getColorNames } from "@models/theme"
import { Text } from "./Text"
import { TextVariants } from "@models/components/atoms/Text/types"
import React from "react"

// Define the meta configuration for the Text component
const meta: Meta<typeof Text> = {
  title: "Atoms/Text",
  component: Text,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    color: {
      control: "select",
      options: getColorNames("text"),
    },
  },
}

export default meta

const createStory = (
  children: React.ReactNode,
  variant: TextVariants
): StoryObj<typeof meta> => ({
  args: {
    children,
    variant,
  },
})

export const HeaderXl = createStory("Header XL", "h-xl")
export const HeaderLg = createStory("Header LG", "h-lg")
export const HeaderMd = createStory("Header MD", "h-md")
export const HeaderSm = createStory("Header SM", "h-sm")
export const ParagraphMd = createStory("Paragraph MD", "p-md")
export const ParagraphSm = createStory("Paragraph SM", "p-sm")
export const ParagraphXs = createStory("Paragraph XS", "p-xs")
export const SpanMd = createStory("SpanMd", "span-md")
