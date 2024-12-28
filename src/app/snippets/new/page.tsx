import React from "react";
import { db } from "@/db";
import { redirect } from "next/navigation";

export default function page() {
  async function createSnippet(formData: FormData) {
    "use server";
    const title = formData.get("title") as string;
    const code = formData.get("code") as string;

    console.log("formData", formData);

    const snippet = await db.snippet.create({
      data: {
        title,
        code,
      },
    });
    redirect("/");
  }
  return (
    <form action={createSnippet}>
      <h3 className="font-bold m-3 text-center">Create a Snippet</h3>
      <div className="flex flex-col gap-4">
        <div className="flex gap-4">
          <label className="w-12" htmlFor="title">
            Title
          </label>
          <input
            name="title"
            className="w-full border border-teal-500 p-2 rounded"
            placeholder="xxxx"
            type="text"
            id="title"
          />
        </div>
        <div className="flex gap-4">
          <label className="w-12" htmlFor="code">
            Code
          </label>
          <input
            name="code"
            className="w-full border border-teal-500 p-2 rounded"
            placeholder="xxxx"
            type="text"
            id="code"
          />
        </div>
        <button className="bg-blue-200 rounded p-2" type="submit">
          Create
        </button>
      </div>
    </form>
  );
}
