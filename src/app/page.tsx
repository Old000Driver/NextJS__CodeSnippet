import Link from "next/link";
import { db } from "@/db";

export default async function Page() {
  const snippets = await db.snippet.findMany();
  const snippetsRender = snippets.map((snippet) => {
    return (
      <Link
        key={snippet.id}
        href={`/snippets/${snippet.id}`}
        className="flex items-center justify-between mt-5 border border-teal-500 p-2 rounded"
      >
        <span>{snippet.title}</span>
        <span>View</span>
      </Link>
    );
  });
  // console.log(snippets);
  return (
    <>
      <div className="flex items-center justify-between mt-5">
        <h1 className="font-bold text-lg">Snippet</h1>
        <Link
          className="p-2 border border-teal-500 rounded"
          href="/snippets/new"
        >
          New
        </Link>
      </div>
      <div className="flex flex-col gap-2 mt-5">{snippetsRender}</div>
    </>
  );
}
