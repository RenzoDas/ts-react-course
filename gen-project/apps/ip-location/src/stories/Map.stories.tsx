import { Map } from "../components/Map";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  component: Map,
} satisfies Meta<typeof Map>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    coordinate: [51.505, -0.09],
    zoom: 13,
    popupContent: <div>Hi popup</div>,
  },
};

export const Secondary: Story = {
  args: {
    coordinate: [53, -0.09],
    zoom: 10,
    popupContent: <div>Hi 2</div>,
  },
};
