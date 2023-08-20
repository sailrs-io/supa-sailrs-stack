import type { ActionArgs } from "@remix-run/node";
import { redirect } from "@remix-run/node";

import { destroyAuthSession } from "~/integrations/supabase/auth";
import { assertIsPost } from "~/utils/http.server";

export async function action({ request }: ActionArgs) {
  assertIsPost(request);

  return destroyAuthSession(request);
}

export async function loader() {
  return redirect("/");
}
