import type { Meta, StoryObj } from "@storybook/react";
import { List, mokaDataProps, mokaData } from "..";
import { Card } from "../ui/Card";
import { ListProps } from "../ui/List";

const templateCard = (item: mokaDataProps) => (
    <Card title={item.title} description={item.description} id={item.id} />
)

const meta: Meta<ListProps<mokaDataProps>> = {
    title: "UI/List",
    component: List,
    argTypes: {
        template: {
            type: "function",
            description: "List item template"
        },
        isLoading: {
            type: "boolean",
            description: "Loading state"
        }
    }
};

export default meta;

type Story = StoryObj<ListProps<mokaDataProps>>;

export const Default: Story = (args: ListProps<mokaDataProps>) => <List {...args} />;
Default.args = {
    data: mokaData,
    template: templateCard,
    isLoading: false,
};