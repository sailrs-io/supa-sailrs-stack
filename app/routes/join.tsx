import type { ActionArgs, LoaderArgs, V2_MetaFunction } from "@remix-run/node";
import { redirect, json } from "@remix-run/node";
import { useTranslation } from "react-i18next";
import { parseFormAny } from "react-zorm";

import { getUserByEmail } from "~/features/user";
import { i18nextServer } from "~/integrations/i18n";
import { getAuthSession, signUpUser } from "~/integrations/supabase/auth";
import { assertIsPost } from "~/utils/http.server";
import { ContinueWithEmailForm } from "~/view/auth/ContinueWithEmailForm";
import { JoinForm, JoinFormSchema } from "~/view/auth/JoinForm";

/** GET /join handler
 *
 * - redirects to /notes if the user is logged in
 * - sends translated title
 * */
export async function loader({ request }: LoaderArgs) {
  const authSession = await getAuthSession(request);
  if (authSession) return redirect("/notes");
  const t = await i18nextServer.getFixedT(request, "auth");
  const title = t("register.title");
  return json({ title });
}

/** Create the <title> tag in the <head> based on the loader's data
 * */
export const meta: V2_MetaFunction = ({ data }) => [
  {
    title: data.title,
  },
];

/** POST /join handler
 *
 * - handles the POST request from the <OAuthCallback /> component
 * */
export async function action({ request }: ActionArgs) {
  assertIsPost(request);
  const formData = await request.formData();
  const result = await JoinFormSchema.safeParseAsync(parseFormAny(formData));

  if (!result.success) {
    return json(
      {
        errors: result.error.issues,
      },
      { status: 400 },
    );
  }

  const { email, password, redirectTo } = result.data;

  // TODO: do we need this really?
  //
  // This checks if we have a user in the public schema and could potentially
  // prevent a user from being created on the auth schema.
  const existingUser = await getUserByEmail(email);
  if (existingUser) {
    return json({ errors: [{ code: "user-already-exist" }] }, { status: 400 });
  }

  const { data, error } = await signUpUser({ email, password, redirectTo });

  if (error) {
    return json(
      { errors: [{ code: error.name, message: error.message }] },
      { status: 400 },
    );
  }

  // TODO: check if the user actually has confirmed his email or not
  return json(
    {
      errors: [{ code: "email-not-confirmed", message: "Email not confirmed" }],
    },
    { status: 200 },
  );
}

export default function Join() {
  const { t } = useTranslation("auth");

  return (
    <div className="flex flex-col justify-center min-h-full">
      <div className="px-8 mx-auto w-full max-w-md">
        <JoinForm />
        <div className="mt-6">
          <div className="relative">
            <div className="flex absolute inset-0 items-center">
              <div className="w-full border-t border-gray-300" />
            </div>
            <div className="flex relative justify-center text-sm">
              <span className="px-2 text-gray-500 bg-white">
                {t("register.orContinueWith")}
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
