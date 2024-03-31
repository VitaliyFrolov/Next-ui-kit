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
            description: "Root element"
        },
        active: {
            type: "boolean",
            description: "Activity states overlay",
            defaultValue: false,
        },
        shading: {
            type: "number",
            description: "shading"
        },
        close: {
            type: "function",
            description: "Function to close overlay. Handles outside clicks and pressing the esc key"
        }
    },
};

export default meta;
type Story = StoryObj<OverlayProps>;

export const Default: Story = {
    args: {
        root: "#storybook-root",
        active: false,
        close: fn(() => "close")
    }
}

Default.storyName = "Modal"