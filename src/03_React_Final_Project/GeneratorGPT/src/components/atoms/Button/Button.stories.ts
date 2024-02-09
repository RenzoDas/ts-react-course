import type { Meta, StoryObj } from "@storybook/react"
import { Button } from "./Button"
import {
  ButtonVariants,
  IButtonProps,
} from "@models/components/atoms/Button/types"

// Define the meta configuration for the Button component
const meta: Meta<typeof Button> = {
  title: "Atoms/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    variant: {
      control: "select",
      options: [
        "b-primary-lg",
        "b-primary-md",
        "b-primary-sm",
        "b-secondary-lg",
        "b-secondary-sm",
        "b-secondary-md",
        "b-primary-outline-lg",
        "b-primary-outline-md",
        "b-primary-outline-sm",
        "b-secondary-outline-lg",
        "b-secondary-outline-md",
        "b-secondary-outline-sm",
        "b-transparent-lg",
        "b-transparent-md",
        "b-transparent-sm",
      ] as ButtonVariants[],
    },
  },
  tags: ["autodocs"],
}

export default meta

const createStory = (
  label: IButtonProps["label"],
  variant: ButtonVariants,
): StoryObj<typeof meta> => ({
  args: {
    label,
    variant,
  },
})

export const PrimaryLg = createStory("Button", "b-primary-lg")
export const PrimaryMd = createStory("Button", "b-primary-md")
export const PrimarySm = createStory("Button", "b-primary-sm")
export const PrimaryOutlineLg = createStory("Button", "b-primary-outline-lg")
export const PrimaryOutlineMd = createStory("Button", "b-primary-outline-md")
export const PrimaryOutlineSm = createStory("Button", "b-primary-outline-sm")
export const SecondaryLg = createStory("Button", "b-secondary-lg")
export const SecondaryMd = createStory("Button", "b-secondary-md")
export const SecondarySm = createStory("Button", "b-secondary-sm")
export const SecondaryOutlineLg = createStory(
  "Button",
  "b-secondary-outline-lg",
)
export const SecondaryOutlineMd = createStory(
  "Button",
  "b-secondary-outline-md",
)
export const SecondaryOutlineSm = createStory(
  "Button",
  "b-secondary-outline-sm",
)
