import { kcSanitize } from "keycloakify/lib/kcSanitize";
import type { PageProps } from "keycloakify/login/pages/PageProps";
import type { KcContext } from "../KcContext";
import type { I18n } from "../i18n";

export default function Info(props: PageProps<Extract<KcContext, { pageId: "info.ftl" }>, I18n>) {
    const { kcContext, i18n, doUseDefaultCss, Template, classes } = props;

    const { advancedMsgStr, msg } = i18n;
    const { messageHeader, message, requiredActions, skipLink, pageRedirectUri, actionUri, client } = kcContext;

    const requiredActionLabels = (requiredActions ?? []).map(requiredAction => advancedMsgStr(`requiredAction.${requiredAction}`));

    return (
        <Template
            kcContext={kcContext}
            i18n={i18n}
            doUseDefaultCss={doUseDefaultCss}
            classes={classes}
            displayMessage={false}
            headerNode={
                <span
                    dangerouslySetInnerHTML={{
                        __html: kcSanitize(messageHeader ? advancedMsgStr(messageHeader) : message.summary)
                    }}
                />
            }
        >
            <section className="inmo-page-shell">
                <div className="inmo-card inmo-card-compact">
                    <h2 className="inmo-card-title">Acciones pendientes</h2>

                    <p
                        className="inmo-subtitle"
                        dangerouslySetInnerHTML={{
                            __html: kcSanitize(message.summary)
                        }}
                    />

                    {requiredActionLabels.length > 0 && (
                        <div className="inmo-help-box">
                            <h3 className="inmo-help-title">Debes completar lo siguiente</h3>
                            <ul className="inmo-help-list">
                                {requiredActionLabels.map(label => (
                                    <li key={label}>{label}</li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {(() => {
                        if (skipLink) {
                            return null;
                        }

                        if (pageRedirectUri) {
                            return (
                                <a href={pageRedirectUri} className="inmo-cta-link">
                                    {msg("backToApplication")}
                                </a>
                            );
                        }

                        if (actionUri) {
                            return (
                                <a href={actionUri} className="inmo-cta-link">
                                    Continuar
                                </a>
                            );
                        }

                        if (client.baseUrl) {
                            return (
                                <a href={client.baseUrl} className="inmo-cta-link">
                                    {msg("backToApplication")}
                                </a>
                            );
                        }

                        return null;
                    })()}
                </div>
            </section>
        </Template>
    );
}
