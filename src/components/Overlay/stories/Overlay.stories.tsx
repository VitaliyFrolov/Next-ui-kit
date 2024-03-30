import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test"
import { Overlay } from "..";
import { OverlayProps } from "../ui/Overlay";

const meta: Meta<OverlayProps> = {
    title: "UI/Overlay",
    component: Overlay,
    argTypes: {
        root: {
            type: "string",
            description: "root element"
        },
        active: {
            type: "boolean",
            description: "activity states overlay",
            defaultValue: false,
        },
        close: {
            type: "function",
            description: "function to close overlay. Handles outside clicks and pressing the esc key"
        }
    },
};

export default meta;
type Story = StoryObj<OverlayProps>;

export const Primary: Story = {
    args: {
        root: "#storybook-root",
        active: false,
        close: fn(() => "close")
    }
}

Primary.storyName = "Modal"