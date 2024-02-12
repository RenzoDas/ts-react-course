import type { Meta, StoryObj } from "@storybook/react"
import { Image as ImageComponent } from "./Image"
// Define the meta configuration for the Image component
const meta: Meta<typeof ImageComponent> = {
  title: "Atoms/Image",
  component: ImageComponent,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
}

export default meta

export const Image: StoryObj<typeof meta> = {
  args: {
    src: "https://images.unsplash.com/photo-1682687220795-796d3f6f7000?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rounded: "circle",
    size: "3xl",
    position: "center",
  },
}
