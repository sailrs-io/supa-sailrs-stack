import { useEffect } from "react";

import { useActionData, useFetcher, useSearchParams } from "@remix-run/react";

import { supabaseClient } from "~/integrations/supabase";

export function OAuthCallback() {
  const error = useActionData();
  const fetcher = useFetcher();
  const [searchParams] = useSearchParams();
  const redirectTo = searchParams.get("redirectTo") ?? "/notes";

  useEffect(() => {
    const {
      data: { subscription },
    } = supabaseClient.auth.onAuthStateChange((event, session) => {
      console.debug("onAuthStateChange", event, session);

      // TODO: comment
      if (["INITIAL_SESSION", "SIGNED_IN"].includes(event)) {
        // supabase sdk has ability to read url fragment that contains your token after third party provider redirects you here
        // this fragment url looks like https://.....#access_token=evxxxxxxxx&refresh_token=xxxxxx, and it's not readable server-side (Oauth security)
        // supabase auth listener gives us a user session, based on what it founds in this fragment url
        // we can't use it directly, client-side, because we can't access sessionStorage from here

        // we should not trust what's happen client side
        // so, we only pick the refresh token, and let's back-end getting user session from it
        const refreshToken = session?.refresh_token;
        if (!refreshToken) return;

        const formData = new FormData();
        formData.append("refreshToken", refreshToken);
        formData.append("redirectTo", redirectTo);
        fetcher.submit(formData, { method: "post", replace: true });
      }
    });

    return () => {
      // prevent memory leak. Listener stays alive 👨‍🎤
      subscription.unsubscribe();
    };
    // FALSE POSITIVE: we need INITIAL_SESSION but we only want to invoke this
    // effect only ONCE!
    //
    // Otherwise we end up a a loop @ refreshAccessToken and this can cause
    // a tremendous amount of auth requests and rate limit
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return error ? <div>{error.message}</div> : null;
}
