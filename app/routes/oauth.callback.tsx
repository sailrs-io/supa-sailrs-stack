import { json, redirect } from "@remix-run/node";
import type { LoaderArgs, ActionArgs } from "@remix-run/node";
import { parseFormAny } from "react-zorm";
import { z } from "zod";

import { tryCreateUser, getUserByEmail } from "~/features/user";
import {
  refreshAccessToken,
  commitAuthSession,
  getAuthSession,
} from "~/integrations/supabase/auth";
import { assertIsPost, safeRedirect } from "~/utils/http.server";
import { OAuthCallback } from "~/view/auth/OAuthCallback";

// imagine a user go back after OAuth login success or type this URL
// we don't want him to fall in a black hole 👽
export async function loader({ request }: LoaderArgs) {
  const authSession = await getAuthSession(request);

  if (authSession) return redirect("/notes");

  return json({});
}

export async function action({ request }: ActionArgs) {
  assertIsPost(request);

  const formData = await request.formData();
  const result = await z
    .object({
      refreshToken: z.string(),
      redirectTo: z.string().optional(),
    })
    .safeParseAsync(parseFormAny(formData));

  if (!result.success) {
    return json(
      {
        message: "invalid-request",
      },
      { status: 400 },
    );
  }

  const { redirectTo, refreshToken } = result.data;
  const safeRedirectTo = safeRedirect(redirectTo, "/notes");

  // We should not trust what is sent from the client
  // https://github.com/rphlmr/supa-fly-stack/issues/45
  const authSession = await refreshAccessToken(refreshToken);

  if (!authSession) {
    return json(
      {
        message: "invalid-refresh-token",
      },
      { status: 401 },
    );
  }

  const user =
    (await getUserByEmail(authSession.email)) ||
    (await tryCreateUser(authSession));

  if (!user) {
    return json(
      {
        message: "create-user-error",
      },
      { status: 500 },
    );
  }

  return redirect(safeRedirectTo, {
    headers: {
      "Set-Cookie": await commitAuthSession(request, {
        authSession,
      }),
    },
  });
}

export default OAuthCallback;
