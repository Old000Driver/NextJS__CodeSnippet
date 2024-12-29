"use client";
import Editor from "@monaco-editor/react";
import type { Snippet } from "@prisma/client";

export default function snippetEditForm({ snippet }: { snippet: Snippet }) {
  return (
    <Editor
      height="90vh"
      defaultLanguage="javascript"
      defaultValue={snippet.code}
      theme="vs-dark"
      options={{
        minimap: { enabled: false },
      }}
    />
  );
}
