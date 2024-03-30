import type { Meta, StoryObj } from "@storybook/react";
import { RadioCheckbox } from "..";
import { RadioCheckboxProps } from "../ui/RadioCheckbox";


const meta: Meta<RadioCheckboxProps> = {
    title: "UI/Radio Checkbox",
    component: RadioCheckbox
};

export default meta;
type Story = StoryObj<RadioCheckboxProps>;

export const Primary: Story = {
    args: {
       label: "Click me!"
    }
}