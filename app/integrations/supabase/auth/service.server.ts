import { getSupabaseAdmin } from "~/integrations/supabase";
import { SERVER_URL } from "~/utils/env";

import { mapAuthSession } from "./mappers";
import type { AuthSession } from "./types";

/** create a new account with email and password
 *
 * @deprecated use signUpUser instead
 * @returns User the created account
 * */
export async function createEmailAuthAccount(email: string, password: string) {
  const { data, error } = await getSupabaseAdmin().auth.admin.createUser({
    email,
    password,
  });

  if (!data.user || error) return null;

  return data.user;
}

/** Login via email and password
 *
 * @throws Error if the user does not have a refresh token or email
 * */
export async function signInWithEmail(email: string, password: string) {
  const { data, error } = await getSupabaseAdmin().auth.signInWithPassword({
    email,
    password,
  });

  if (!data.session || error) return null;

  return mapAuthSession(data.session);
}

export async function sendMagicLink(email: string) {
  return getSupabaseAdmin().auth.signInWithOtp({
    email,
    options: {
      emailRedirectTo: `${SERVER_URL}/oauth/callback`,
    },
  });
}

export async function sendResetPasswordLink(email: string) {
  return getSupabaseAdmin().auth.resetPasswordForEmail(email, {
    redirectTo: `${SERVER_URL}/reset-password`,
  });
}

export async function updateAccountPassword(id: string, password: string) {
  const { data, error } = await getSupabaseAdmin().auth.admin.updateUserById(
    id,
    { password },
  );

  if (!data.user || error) return null;

  return data.user;
}

export async function deleteAuthAccount(userId: string) {
  const { error } = await getSupabaseAdmin().auth.admin.deleteUser(userId);

  if (error) return null;

  return true;
}

export async function getAuthAccountByAccessToken(accessToken: string) {
  const { data, error } = await getSupabaseAdmin().auth.getUser(accessToken);

  if (!data.user || error) return null;

  return data.user;
}

export async function refreshAccessToken(refreshToken?: string) {
  if (!refreshToken) return null;
  console.debug("-> refreshAccessToken.refreshToken", refreshToken);

  const { data, error } = await getSupabaseAdmin().auth.refreshSession({
    refresh_token: refreshToken,
  });

  if (error) {
    console.error(`-> refreshAccessToken (${error.name}): ${error.message}`);
    return null;
  }

  console.debug("-> refreshAccessToken.session", data.session);
  if (!data.session) {
    return null;
  }

  return mapAuthSession(data.session);
}

export async function verifyAuthSession(authSession: AuthSession) {
  const authAccount = await getAuthAccountByAccessToken(
    authSession.accessToken,
  );

  return Boolean(authAccount);
}
