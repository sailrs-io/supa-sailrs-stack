import type { LoaderArgs } from "@remix-run/node";
import { json, redirect } from "@remix-run/node";
import { parseFormAny } from "react-zorm";

import { createNote } from "~/features/notes/createNote.server";
import {
  requireAuthSession,
  commitAuthSession,
} from "~/integrations/supabase/auth";
import { assertIsPost } from "~/utils/http.server";
import {
  CreateNoteForm,
  CreateNoteFormSchema,
} from "~/view/notes/CreateNoteForm";

export async function action({ request }: LoaderArgs) {
  assertIsPost(request);
  const authSession = await requireAuthSession(request);
  const formData = await request.formData();
  const result = await CreateNoteFormSchema.safeParseAsync(
    parseFormAny(formData),
  );

  if (!result.success) {
    return json(
      {
        errors: result.error.issues,
      },
      {
        status: 400,
        headers: {
          "Set-Cookie": await commitAuthSession(request, { authSession }),
        },
      },
    );
  }

  const { title, body } = result.data;

  const note = await createNote({ title, body, user_id: authSession.userId });

  if (note) {
    return redirect(`/notes/${note.id}`, {
      headers: {
        "Set-Cookie": await commitAuthSession(request, { authSession }),
      },
    });
  }

  return json(
    {
      errors: [
        { code: "error-creating-note", message: "Failed to create note" },
      ],
    },
    { status: 500 },
  );
}

export default function NewNotePage() {
  return <CreateNoteForm />;
}
