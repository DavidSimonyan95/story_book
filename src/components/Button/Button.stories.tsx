import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "./Button";
const meta: Meta<typeof Button> = {
  component: Button,
  title: "Example/Button",
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: "primary",
  },
};

export const Success: Story = {
  args: {
    variant: "success",
    label: "Success",
  },
};
export const Danger: Story = {
  args: {
    variant: "danger",
    label: "Danger",
  },
};
