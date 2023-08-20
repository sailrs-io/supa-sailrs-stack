import type { ActionArgs, LoaderArgs } from "@remix-run/node";
import { json, redirect } from "@remix-run/node";
import { Form, useActionData, useNavigation } from "@remix-run/react";
import { useTranslation } from "react-i18next";
import { parseFormAny, useZorm } from "react-zorm";
import { z } from "zod";

import { i18nextServer } from "~/integrations/i18n";
import {
  getAuthSession,
  sendResetPasswordLink,
} from "~/integrations/supabase/auth";
import { assertIsPost } from "~/utils/http.server";
import { isFormProcessing } from "~/utils/form";
import { tw } from "~/utils/tw-classes";

export async function loader({ request }: LoaderArgs) {
  const authSession = await getAuthSession(request);
  const t = await i18nextServer.getFixedT(request, "auth");
  const title = t("login.forgotPassword");

  if (authSession) return redirect("/notes");

  return json({ title });
}

const ForgotPasswordSchema = z.object({
  email: z
    .string()
    .email("invalid-email")
    .transform((email) => email.toLowerCase()),
});

export async function action({ request }: ActionArgs) {
  assertIsPost(request);

  const formData = await request.formData();
  const result = await ForgotPasswordSchema.safeParseAsync(
    parseFormAny(formData),
  );

  if (!result.success) {
    return json(
      {
        message: "invalid-request",
      },
      { status: 400 },
    );
  }

  const { email } = result.data;

  const { error } = await sendResetPasswordLink(email);

  if (error) {
    return json(
      {
        message: "unable-to-send-reset-password-link",
      },
      { status: 500 },
    );
  }

  return json({ message: null });
}

export default function ForgotPassword() {
  const zo = useZorm("ForgotPasswordForm", ForgotPasswordSchema);
  const { t } = useTranslation("auth");
  const actionData = useActionData<typeof action>();
  const navigation = useNavigation();
  const disabled = isFormProcessing(navigation.state);

  return (
    <div className="flex flex-col justify-center min-h-full">
      <div className="px-8 mx-auto w-full max-w-md">
        {!actionData ? (
          <Form ref={zo.ref} method="post" className="space-y-6" replace>
            <div>
              <label
                htmlFor={zo.fields.email()}
                className="block text-sm font-medium text-gray-700"
              >
                {t("register.email")}
              </label>
              <div className="mt-1">
                <input
                  data-test-id="email"
                  name={zo.fields.email()}
                  type="email"
                  autoComplete="email"
                  className="py-1 px-2 w-full text-lg rounded border border-gray-500"
                  disabled={disabled}
                />
                {zo.errors.email()?.message && (
                  <div className="pt-1 text-red-700" id="password-error">
                    {zo.errors.email()?.message}
                  </div>
                )}
              </div>
            </div>

            <button
              data-test-id="send-password-reset-link"
              type="submit"
              className="py-2 px-4 w-full text-white bg-blue-500 rounded hover:bg-blue-600 focus:bg-blue-400"
              disabled={disabled}
            >
              {t("register.sendLink")}
            </button>
          </Form>
        ) : (
          <div
            className={tw(
              `mb-2 h-6 text-center`,
              actionData.message ? "text-red-600" : "text-green-600",
            )}
          >
            {actionData.message || t("register.checkEmail")}
          </div>
        )}
      </div>
    </div>
  );
}
