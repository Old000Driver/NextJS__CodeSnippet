import React from "react";
import { db } from "@/db";
import { notFound } from "next/navigation";
import SnippetEditForm from "@/components/snippet-edit-form";
export default async function page({ params }: { params: { id: string } }) {
  const id = parseInt(params.id);
  const snippet = await db.snippet.findFirst({
    where: { id },
  });

  // console.log("🔥 snippet：", snippet);

  if (!snippet) return notFound();
  return (
    <div>
      <SnippetEditForm snippet={snippet} />
    </div>
  );
}
