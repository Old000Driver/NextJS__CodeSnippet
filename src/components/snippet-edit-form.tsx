"use client";
import Editor from "@monaco-editor/react";
import type { Snippet } from "@prisma/client";
import { useState } from "react";
import { editSnippet } from "@/actions";
import BackHome from "./backHome-button";

export default function SnippetEditForm({ snippet }: { snippet: Snippet }) {
  const [code, setCode] = useState(snippet.code);

  const editSnippetWithOthers = editSnippet.bind(null, snippet.id, code);
  const handleChange = (code: string = "") => {
    setCode(code);
  };
  return (
    <>
      <Editor
      className="mt-4"
        height="90vh"
        defaultLanguage="javascript"
        defaultValue={snippet.code}
        theme="vs-dark"
        options={{
          minimap: { enabled: false },
        }}
        onChange={handleChange}
      />

      <form action={editSnippetWithOthers}>
        <button className="mt-3 p-2 border border-teal-500 rounded">Save</button>
      </form>
      <BackHome />
    </>
  );
}
