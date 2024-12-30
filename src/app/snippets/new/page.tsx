"use client";
import React from "react";
import { createSnippet } from "@/actions";
import { useFormState } from "react-dom";

const initState = {
  message: "",
};
export default function page() {
  const [state, formAction] = useFormState(createSnippet, initState);
  return (
    <form action={formAction}>
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
        {state.message && (
          <div className="my-2 p-2 bg-red-200 rounded border-red-500">
            {state.message}
          </div>
        )}
        <button className="bg-blue-200 rounded p-2" type="submit">
          Create
        </button>
      </div>
    </form>
  );
}
