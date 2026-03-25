import type { Meta, StoryObj } from "@storybook/react";
import { createKcPageStory } from "../KcPageStory";

const { KcPageStory } = createKcPageStory({ pageId: "login-verify-email.ftl" });

const meta = {
    title: "login/login-verify-email.ftl",
    component: KcPageStory
} satisfies Meta<typeof KcPageStory>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: () => (
        <KcPageStory
            kcContext={{
                message: {
                    summary: "Debes verificar tu correo para activar tu cuenta.",
                    type: "warning"
                },
                user: {
                    email: "usuario@correo.com"
                }
            }}
        />
    )
};

export const WithSuccessMessage: Story = {
    render: () => (
        <KcPageStory
            kcContext={{
                message: {
                    summary: "Tu correo fue verificado correctamente.",
                    type: "success"
                },
                user: {
                    email: "usuario@correo.com"
                },
                url: {
                    loginAction: "/mock-login-action"
                }
            }}
        />
    )
};
