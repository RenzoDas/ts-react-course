import CurrentIp from "../components/CurrentIp";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  component: CurrentIp,
} satisfies Meta<typeof CurrentIp>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    city_name: "Napoli",
    country: {
      code: "IT",
      name: "Italy",
    },
    ip: "000.000.000.000",
    coordinate: [0, 0],
  },
};

export const Secondary: Story = {
  args: {
    city_name: "London",
    country: {
      code: "UK",
      name: "United Kingdom",
    },
    ip: "129.161.111.111",
    coordinate: [0, 0],
  },
};
