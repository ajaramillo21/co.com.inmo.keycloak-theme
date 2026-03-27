/* eslint-disable @typescript-eslint/no-unused-vars */
import { i18nBuilder } from "keycloakify/login";
import type { ThemeName } from "../kc.gen";

/** @see: https://docs.keycloakify.dev/features/i18n */
const { useI18n, ofTypeI18n } = i18nBuilder
	.withThemeName<ThemeName>()
	.withCustomTranslations({
		en: {
			doLogIn: "Ingresar",
			loginAccountTitle: "Inicia sesión en tu cuenta",
			username: "Usuario",
			usernameOrEmail: "Usuario o correo",
			email: "Correo electrónico",
			password: "Contraseña",
			rememberMe: "Recuérdame",
			doForgotPassword: "¿Olvidaste tu contraseña?",
			showPassword: "Mostrar contraseña",
			hidePassword: "Ocultar contraseña",
			noAccount: "¿No tienes cuenta?",
			doRegister: "Regístrate",
			"identity-provider-login-label": "O inicia sesión con",
			"passkey-doAuthenticate": "Continuar con passkey",
			updatePasswordTitle: "Cambio de contraseña",
			passwordNew: "Nueva contraseña",
			passwordConfirm: "Confirmar contraseña",
			doSubmit: "Guardar",
			updatePasswordMessage: "Debes cambiar tu contraseña para activar tu cuenta.",
			accountUpdatedMessage: "Tu cuenta se ha actualizado.",
			accountPasswordUpdatedMessage: "Tu contraseña se ha actualizado.",
			confirmExecutionOfActions: "Completa las siguientes acciones",
			proceedWithAction: "Continuar",
			backToApplication: "Volver a la aplicación",
			"requiredAction.UPDATE_PASSWORD": "Actualizar contraseña",
			"requiredAction.VERIFY_EMAIL": "Verificar correo electrónico",
			emailVerifyTitle: "Verificar correo electrónico",
			emailVerifyInstruction2: "Si ya verificaste tu correo,",
			emailVerifyInstruction3: " para continuar."
		},
		es: {
			doLogIn: "Ingresar",
			loginAccountTitle: "Inicia sesión en tu cuenta",
			username: "Usuario",
			usernameOrEmail: "Usuario o correo",
			email: "Correo electrónico",
			password: "Contraseña",
			rememberMe: "Recuérdame",
			doForgotPassword: "¿Olvidaste tu contraseña?",
			showPassword: "Mostrar contraseña",
			hidePassword: "Ocultar contraseña",
			noAccount: "¿No tienes cuenta?",
			doRegister: "Regístrate",
			"identity-provider-login-label": "O inicia sesión con",
			"passkey-doAuthenticate": "Continuar con passkey",
			updatePasswordTitle: "Cambio de contraseña",
			passwordNew: "Nueva contraseña",
			passwordConfirm: "Confirmar contraseña",
			doSubmit: "Guardar",
			updatePasswordMessage: "Debes cambiar tu contraseña para activar tu cuenta.",
			accountUpdatedMessage: "Tu cuenta se ha actualizado.",
			accountPasswordUpdatedMessage: "Tu contraseña se ha actualizado.",
			confirmExecutionOfActions: "Completa las siguientes acciones",
			proceedWithAction: "Continuar",
			backToApplication: "Volver a la aplicación",
			"requiredAction.UPDATE_PASSWORD": "Actualizar contraseña",
			"requiredAction.VERIFY_EMAIL": "Verificar correo electrónico",
			emailVerifyTitle: "Verificar correo electrónico",
			emailVerifyInstruction2: "Si ya verificaste tu correo,",
			emailVerifyInstruction3: " para continuar."
		}
	})
	.build();

type I18n = typeof ofTypeI18n;

export { useI18n, type I18n };
