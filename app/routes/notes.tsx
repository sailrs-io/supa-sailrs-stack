import type { LoaderArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData, Outlet, Link, NavLink } from "@remix-run/react";

import { getNotesByUserId } from "~/features/notes/getNotesByUserId.server";
import { requireAuthSession } from "~/integrations/supabase/auth";
import { LogoutButton } from "~/view/auth/LogoutButton";

export async function loader({ request }: LoaderArgs) {
  const { userId, email } = await requireAuthSession(request);
  const notes = await getNotesByUserId({ userId });
  return json({ email, notes });
}

export default function NotesPage() {
  const data = useLoaderData<typeof loader>();

  return (
    <div className="flex flex-col h-full min-h-screen">
      <header className="flex justify-between items-center p-4 text-white bg-slate-800">
        <h1 className="text-3xl font-bold">
          <Link to=".">Notes</Link>
        </h1>
        <p>{data.email}</p>
        <LogoutButton />
      </header>

      <main className="flex h-full bg-white">
        <div className="w-80 h-full bg-gray-50 border-r">
          <Link to="new" className="block p-4 text-xl text-blue-500">
            + New Note
          </Link>

          <hr />

          {data.notes.length === 0 ? (
            <p className="p-4">No notes yet</p>
          ) : (
            <ol>
              {data.notes.map((note) => (
                <li key={note.id}>
                  <NavLink
                    className={({ isActive }) =>
                      `block border-b p-4 text-xl ${isActive ? "bg-white" : ""}`
                    }
                    to={note.id}
                  >
                    📝 {note.title}
                  </NavLink>
                </li>
              ))}
            </ol>
          )}
        </div>

        <div className="flex-1 p-6">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
