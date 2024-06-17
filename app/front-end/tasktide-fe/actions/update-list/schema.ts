import { z } from "zod";

export const UpdateList = z.object({
  title: z
    .string({
      required_error: "Title is required",
      invalid_type_error: "Title must be a string",
    })
    .min(2, "Title must be at least 2 character long"),
  id: z.string(),
  boardId: z.string(),
});
