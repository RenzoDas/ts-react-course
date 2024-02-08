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
  variant: ButtonVariants
): StoryObj<typeof meta> => ({
  args: {
    label,
    variant,
  },
})

export const ButtonPrimaryLg = createStory("Button lg", "b-primary-lg")
export const ButtonPrimaryMd = createStory("Button MD", "b-primary-md")
export const ButtonPrimarySm = createStory("Button sm", "b-primary-sm")
