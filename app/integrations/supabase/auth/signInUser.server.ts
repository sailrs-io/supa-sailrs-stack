import { getSupabaseAdmin } from "~/integrations/supabase";

import { mapAuthSession } from "./mappers";

type SignInProps = {
  /** Mandatory email address for signing in */
  email: string;
  /** (optional) If not provided the user receives a magic link via email */
  password: string;
};

/**
 * Sign in with Supabase with either email or email and password.
 *
 * If only email is provided and `shouldCreateUser` is set to `true` (default),
 * Supabase will actually signUp(!) the user and send an email for confirmation
 * (which is pretty weird). In any of the given API responses we have no
 * information about the user having set a password or not. Since we want to
 * enforce setting up a password, we must ensure, that the user doesn't
 * _register_ without a password like described above.
 *
 * Hence we set `shouldCreateUser` to `false`. This way we get an error from
 * the API if the user doesn't exist and the registration flow ensures, that the
 * users has to provide a password 🎉
 *
 * In addition to that we set the `redirectTo` to the `SERVER_URL` when only the
 * email is given (user wants to get a magic link) which also needs to be
 * whitelisted in the Supabase UI. The email template in Supabase makes sure to
 * append the /oauth/callback endpoint to the redirectTo URL. This way we can
 * both, get magic links in each environment and also send magic links from the
 * Supabase UI.
 */
export async function signInUser({ email, password }: SignInProps) {
  const response = await getSupabaseAdmin().auth.signInWithPassword({
    email,
    password,
  });

  if (response.error) {
    console.error(
      `-> signIn.ApiError (${response.error.status}): ${response.error.message}`,
    );
  }

  if (response.data.user) {
    console.debug(
      `-> signIn.user: ${response.data.user?.email} (${response.data.user?.id})`,
    );
  }

  return {
    ...response,
    authSession: mapAuthSession(response.data.session),
  };
}
