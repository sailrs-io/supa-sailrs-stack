import { Form, useNavigation } from "@remix-run/react";
import { useZorm } from "react-zorm";

import { isFormProcessing } from "~/utils/form";

import { CreateNoteFormSchema } from "./schema";

export function CreateNoteForm() {
  const zo = useZorm("NewQuestionWizardScreen", CreateNoteFormSchema);
  const navigation = useNavigation();
  const disabled = isFormProcessing(navigation.state);

  return (
    <Form
      ref={zo.ref}
      method="post"
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 8,
        width: "100%",
      }}
    >
      <div>
        <label className="flex flex-col gap-1 w-full">
          <span>Title: </span>
          <input
            name={zo.fields.title()}
            className="flex-1 px-3 text-lg leading-loose rounded-md border-2 border-blue-500"
            disabled={disabled}
          />
        </label>
        {zo.errors.title()?.message && (
          <div className="pt-1 text-red-700" id="title-error">
            {zo.errors.title()?.message}
          </div>
        )}
      </div>

      <div>
        <label className="flex flex-col gap-1 w-full">
          <span>Body: </span>
          <textarea
            name={zo.fields.body()}
            rows={8}
            className="flex-1 py-2 px-3 w-full text-lg leading-6 rounded-md border-2 border-blue-500"
            disabled={disabled}
          />
        </label>
        {zo.errors.body()?.message && (
          <div className="pt-1 text-red-700" id="body-error">
            {zo.errors.body()?.message}
          </div>
        )}
      </div>

      <div className="text-right">
        <button
          type="submit"
          className="py-2 px-4 text-white bg-blue-500 rounded hover:bg-blue-600 focus:bg-blue-400"
          disabled={disabled}
        >
          Save
        </button>
      </div>
    </Form>
  );
}
