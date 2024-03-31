import type { Meta, StoryObj } from "@storybook/react";
import { Title } from "..";
import { TitleProps } from "../ui/Title";

const meta: Meta<TitleProps> = {
    title: "UI/Title",
    component: Title,
    argTypes: {
        children: {
            type: "string",
            description: "Content"
        },
        tag: {
            type: "string",
            description: "Html tag"
        },
        size: {
            type: "string",
            description: "Font size"
        }
    }
};

export default meta;
type Story = StoryObj<TitleProps>;

export const Default: Story = {
    args: {
        children: "Title",
        tag: "h2",
        size: "m",
    }
}