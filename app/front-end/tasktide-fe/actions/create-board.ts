"use server";

import { z } from "zod";
import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export type State = {
  errors?: {
    title?: string[];
  };
  message?: string | null;
};

const CreateBoard = z.object({
  title: z.string().min(3, { message: "Minimum 3 characters" }),
});

export async function create(previousState: State, formData: FormData) {
  const fields = CreateBoard.safeParse({
    title: formData.get("title"),
  });

  if (!fields.success) {
    return {
      errors: fields.error.flatten().fieldErrors,
      message: "Missing fields",
    };
  }

  const { title } = fields.data;

  try {
    await db.board.create({
      data: {
        title,
      },
    });
  } catch (error) {
    return {
      message: "db error",
    };
  }

  revalidatePath("/organization/org_2h72rAFBybHdppnopDzjMVfdGSn");
  redirect("/organization/org_2h72rAFBybHdppnopDzjMVfdGSn");
}
