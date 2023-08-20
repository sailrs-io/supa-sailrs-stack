import { z } from "zod";

export const CreateNoteFormSchema = z.object({
  title: z.string().min(1, "require-title"),
  body: z.string().min(1, "require-body"),
});
