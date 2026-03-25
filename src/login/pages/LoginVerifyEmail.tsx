import type { PageProps } from "keycloakify/login/pages/PageProps";
import type { KcContext } from "../KcContext";
import type { I18n } from "../i18n";

export default function LoginVerifyEmail(
    props: PageProps<Extract<KcContext, { pageId: "login-verify-email.ftl" }>, I18n>
) {
    const { kcContext, i18n, doUseDefaultCss, Template, classes } = props;

    const { msg } = i18n;
    const { url, user } = kcContext;

    return (
        <Template
            kcContext={kcContext}
            i18n={i18n}
            doUseDefaultCss={doUseDefaultCss}
            classes={classes}
            displayInfo={false}
            headerNode={msg("emailVerifyTitle")}
        >
            <section className="inmo-page-shell">
                <div className="inmo-card inmo-card-compact">
                    <h2 className="inmo-card-title">Verificación de correo</h2>
                    <p className="inmo-subtitle">{msg("emailVerifyInstruction1", user?.email ?? "")}</p>

                    <div className="inmo-help-box">
                        <h3 className="inmo-help-title">Sigue estos pasos</h3>
                        <ul className="inmo-help-list">
                            <li>Abre tu correo y busca el mensaje de confirmación.</li>
                            <li>Revisa spam o promociones si no lo encuentras.</li>
                            <li>Haz clic en el enlace y vuelve a esta pantalla.</li>
                        </ul>
                    </div>

                    <p className="instruction inmo-inline-action">
                        {msg("emailVerifyInstruction2")}
                        <a href={url.loginAction} className="inmo-link-action">
                            {msg("doClickHere")}
                        </a>
                        {msg("emailVerifyInstruction3")}
                    </p>
                </div>
            </section>
        </Template>
    );
}
