import type { Meta, StoryObj } from "@storybook/react";
import { Modal } from "..";
import { ModalProps } from "../ui/Modal";
import { fn } from "@storybook/test";
import { FC } from "react";

const ModalView:FC = () => {
    return (
        <div style={{
            border: "1px solid black",
            borderRadius: "10px",
            padding: "40px 80px"
        }}>
            <h2 style={{
                marginBottom: "19px",
                textAlign: "center"
            }}>
                Заявка заполнина
            </h2>
            <p
                style={{
                    marginBottom: "40px",
                    textAlign: "center"
                }}
            >
                Мы перезвоним в течении 10 минут
            </p>
        </div>
    )
};

const meta: Meta<ModalProps> = {
    title: "UI/Modal",
    component: Modal,
    argTypes: {
        root: {
            type: "string",
            description: "root element",
        },
        active: {
            type: "boolean",
            description: "activity states modal view",
            defaultValue: false
        },
        children: {
            type: "function",
            description: "HTML element"
        },
        onClise: {
            type: "function",
            description: "function to close modal view. Handles outside clicks"
        }
    },
};

export default meta;
type Story = StoryObj<ModalProps>;

export const Primary: Story = {
    args: {
        root: "#storybook-root",
        active: false,
        children: <ModalView />,
        onClise: fn(() => "close"),
    }
}