import { getSupabaseAdmin } from "~/integrations/supabase";
import { SERVER_URL } from "~/utils/env";

type SignUpArgs = {
  /** Mandatory email address for signup */
  email: string;
  /** mandatory password for signup */
  password: string;
  /** (optional)  */
  redirectTo?: string;
};

/** Sign up a user with Supabase
 *
 * On a sign up event we need to redirect to the propper environment. For this
 * to work we have to consider a couple of things:
 * - redirectTo, you guessed it, must point to the correct environment
 * - the _complete_ redirect URL must be whitelisted in Supabase
 *
 * NOTE: if we want to be able to send magic links, invitations, reset password
 * emails from the Supabase UI, we need to specify the repsective endpoints
 * (/oauth/callback for signup, signin, maybe /reset-password for, well
 * password reset...) in the corresponding email templates in the Supabase UI!
 * Otherwise we would loose this flexibilty/convenience.
 *
 * TL;DR: for singup we here `redirectTo` to the `SERVER_URL`(aka env) which
 * gets appended with the correct oauth endpoint in the email template which in
 * turn forms a whitelisted redirect url in the Supabase UI!
 */
export async function signUpUser({ email, password, redirectTo }: SignUpArgs) {
  const response = await getSupabaseAdmin().auth.signUp({
    email,
    password,
    options: {
      // we always want to redirect here to the correct environment. The
      // corresponding endpoint is specified in the email template in supabase
      // which together form a whitelisted
      emailRedirectTo: redirectTo || `${SERVER_URL}/oauth/callback`,
    },
  });

  if (response.error) {
    console.error(
      `-> signUpUser.ApiError (${response.error.status}): ${response.error.message}`,
    );
  }

  if (response.data) {
    console.debug(`-> signUpUser.data: ${response.data}`);
  }

  return response;
}
