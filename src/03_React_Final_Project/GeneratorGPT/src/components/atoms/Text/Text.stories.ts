import type { Meta, StoryObj } from "@storybook/react"
import { Text } from "./Text"

const meta = {
  title: "Atoms/Text",
  component: Text,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    color: {
      control: "color",
    },
  },
} satisfies Meta<typeof Text>

export default meta

type Story = StoryObj<typeof meta>

export const Header1: Story = {
  args: {
    children: "Header 1",
    variant: "h-xl",
  },
}
export const Header2: Story = {
  args: {
    children: "Header 2",
    variant: "h-lg",
  },
}
