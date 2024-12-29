"use server";

import { db } from "@/db";
import { redirect } from "next/navigation";

export async function deleteSnippet(id: number) {
  await db.snippet.delete({
    where: { id },
  });

  redirect("/");
}
