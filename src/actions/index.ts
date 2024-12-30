"use server";

import { db } from "@/db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function deleteSnippet(id: number) {
  await db.snippet.delete({
    where: { id },
  });
  revalidatePath("/");
  redirect("/");
}

export async function editSnippet(id: number, code: string) {
  await db.snippet.update({
    where: { id },
    data: { code },
  });

  revalidatePath("/snippets/" + id);
  redirect("/snippets/" + id);
}

export async function createSnippet(
  prevState: { message: string },
  formData: FormData
) {
  "use server";
  try {
    const title = formData.get("title") as string;
    const code = formData.get("code") as string;

    if (typeof title !== "string" || title.length < 3) {
      return {
        message: "Title must be at least 3 characters",
      };
    }

    if (typeof code !== "string" || code.length < 3) {
      return {
        message: "Code must be at least 3 characters",
      };
    }
    await db.snippet.create({
      data: {
        title,
        code,
      },
    });
  } catch (err) {
    if (err instanceof Error) {
      return {
        message: err.message,
      };
    } else {
      return {
        message: "Something went wrong",
      };
    }
  }

  revalidatePath("/");
  redirect("/");
}
