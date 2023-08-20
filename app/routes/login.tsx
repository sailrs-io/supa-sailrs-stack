import type { ActionArgs, LoaderArgs, V2_MetaFunction } from "@remix-run/node";
import { json, redirect } from "@remix-run/node";
import { useTranslation } from "react-i18next";
import { parseFormAny } from "react-zorm";

import { i18nextServer } from "~/integrations/i18n";
import {
  createAuthSession,
  getAuthSession,
  signInWithEmail,
} from "~/integrations/supabase/auth";
import { assertIsPost } from "~/utils/http.server";
import { ContinueWithEmailForm } from "~/view/auth/ContinueWithEmailForm";
import { LoginForm, LoginFormSchema } from "~/view/auth/LoginForm";

export async function loader({ request }: LoaderArgs) {
  const authSession = await getAuthSession(request);
  if (authSession) return redirect("/notes");
  const t = await i18nextServer.getFixedT(request, "auth");
  const title = t("login.title");
  return json({ title });
}

export const meta: V2_MetaFunction = ({ data }) => [
  {
    title: data.title,
  },
];

export async function action({ request }: ActionArgs) {
  assertIsPost(request);
  const formData = await request.formData();
  const result = await LoginFormSchema.safeParseAsync(parseFormAny(formData));

  if (!result.success) {
    return json(
      {
        errors: result.error,
      },
      { status: 400 },
    );
  }

  const { email, password, redirectTo } = result.data;

  const authSession = await signInWithEmail(email, password);

  if (!authSession) {
    return json(
      { errors: { email: "invalid-email-password", password: null } },
      { status: 400 },
    );
  }

  return createAuthSession({
    request,
    authSession,
    redirectTo: redirectTo || "/notes",
  });
}

export default function LoginPage() {
  const { t } = useTranslation("auth");

  return (
    <div className="flex flex-col justify-center min-h-full">
      <div className="px-8 mx-auto w-full max-w-md">
        <LoginForm />
        <div className="mt-6">
          <div className="relative">
            <div className="flex absolute inset-0 items-center">
              <div className="w-full border-t border-gray-300" />
            </div>
            <div className="flex relative justify-center text-sm">
              <span className="px-2 text-gray-500 bg-white">
                {t("login.orContinueWith")}
              </span>
            </div>
          </div>
          <div className="mt-6">
            <ContinueWithEmailForm />
          </div>
        </div>
      </div>
    </div>
  );
}
