import type { Meta, StoryObj } from "@storybook/react";
import { action } from '@storybook/addon-actions';
import { RadioCheckbox } from "..";
import { RadioCheckboxProps } from "../ui/RadioCheckbox";


const meta: Meta<RadioCheckboxProps> = {
    title: "UI/Radio checkbox",
    component: RadioCheckbox,
    argTypes: {
        label: {
            type: 'string',
        },
        onClick: {
            type: "function",
        }
    }
};

export default meta;
type Story = StoryObj<RadioCheckboxProps>;

export const Default: Story = {
    args: {
        label: "",
        onClick: action('clicked')
    }
}