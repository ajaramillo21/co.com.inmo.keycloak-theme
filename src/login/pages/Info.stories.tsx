import type { Meta, StoryObj } from "@storybook/react";
import { createKcPageStory } from "../KcPageStory";

const { KcPageStory } = createKcPageStory({ pageId: "info.ftl" });

const meta = {
    title: "login/info.ftl",
    component: KcPageStory
} satisfies Meta<typeof KcPageStory>;

export default meta;

type Story = StoryObj<typeof meta>;

export const WithRequiredActions: Story = {
    render: () => (
        <KcPageStory
            kcContext={{
                messageHeader: "confirmExecutionOfActions",
                message: {
                    summary: "Para continuar con tu acceso debes completar las siguientes acciones:"
                },
                requiredActions: ["VERIFY_EMAIL", "UPDATE_PASSWORD"],
                actionUri: "/mock-action-uri"
            }}
        />
    )
};
