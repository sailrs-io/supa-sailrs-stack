import { Form, Link, useNavigation, useSearchParams } from "@remix-run/react";
import { useTranslation } from "react-i18next";
import { useZorm } from "react-zorm";

import { isFormProcessing } from "~/utils/form";

import { LoginFormSchema } from "./schema";

export function LoginForm() {
  const zo = useZorm("NewQuestionWizardScreen", LoginFormSchema);
  const [searchParams] = useSearchParams();
  const redirectTo = searchParams.get("redirectTo") ?? undefined;
  const navigation = useNavigation();
  const disabled = isFormProcessing(navigation.state);
  const { t } = useTranslation("auth");
  return (
    <Form ref={zo.ref} method="post" className="space-y-6" replace>
      <div>
        <label
          htmlFor={zo.fields.email()}
          className="block text-sm font-medium text-gray-700"
        >
          {t("login.email")}
        </label>

        <div className="mt-1">
          <input
            data-test-id="email"
            required
            autoFocus={true}
            name={zo.fields.email()}
            type="email"
            autoComplete="email"
            className="py-1 px-2 w-full text-lg rounded border border-gray-500"
            disabled={disabled}
          />
          {zo.errors.email()?.message && (
            <div className="pt-1 text-red-700" id="email-error">
              {zo.errors.email()?.message}
            </div>
          )}
        </div>
      </div>

      <div>
        <label
          htmlFor={zo.fields.password()}
          className="block text-sm font-medium text-gray-700"
        >
          {t("register.password")}
        </label>
        <div className="mt-1">
          <input
            data-test-id="password"
            name={zo.fields.password()}
            type="password"
            autoComplete="new-password"
            className="py-1 px-2 w-full text-lg rounded border border-gray-500"
            disabled={disabled}
          />
          {zo.errors.password()?.message && (
            <div className="pt-1 text-red-700" id="password-error">
              {zo.errors.password()?.message}
            </div>
          )}
        </div>
      </div>

      <input type="hidden" name={zo.fields.redirectTo()} value={redirectTo} />
      <button
        data-test-id="login"
        type="submit"
        className="py-2 px-4 w-full text-white bg-blue-500 rounded hover:bg-blue-600 focus:bg-blue-400"
        disabled={disabled}
      >
        {t("login.action")}
      </button>
      <div className="flex justify-center items-center">
        <div className="text-sm text-center text-gray-500">
          <Link className="text-blue-500 underline" to="/forgot-password">
            {t("login.forgotPassword")}?
          </Link>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <div className="text-sm text-center text-gray-500">
          {t("login.dontHaveAccount")}{" "}
          <Link
            className="text-blue-500 underline"
            to={{
              pathname: "/join",
              search: searchParams.toString(),
            }}
          >
            {t("login.signUp")}
          </Link>
        </div>
      </div>
    </Form>
  );
}
