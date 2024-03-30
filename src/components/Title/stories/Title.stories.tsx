import type { Meta, StoryObj } from "@storybook/react";
import { Title } from "..";
import { TitleProps } from "../ui/Title";

const meta: Meta<TitleProps> = {
    title: "UI/Title",
    component: Title
};

export default meta;
type Story = StoryObj<TitleProps>;

export const Primary: Story = {
    args: {
        children: "Title",
        tag: "h2",
        size: "m",
    }
}