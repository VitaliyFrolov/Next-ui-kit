import type { Meta, StoryObj } from "@storybook/react";
import { Icon, IconProps } from "../ui/Icon";


const meta: Meta<IconProps> = {
    title: "UI/Icon",
    component: Icon,
    argTypes: {
        id: {
            type: "string",
            description: "icon id"
        },
        spriteURL: {
            type: "string",
            description: "path to svg sprite"
        },
        width: {
            type: "number",
            description: "width"
        },
        height: {
            type: "number",
            description: "height"
        }
    },
};

export default meta;
type Story = StoryObj<IconProps>;

export const Default: Story = {
    args: {
        id: "sun",
        spriteURL: "/images/svg/sprite.svg",
        width: 50,
        height: 50
    }
}

Default.storyName = "Icon"