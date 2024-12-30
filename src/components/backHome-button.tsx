import React from "react";
import Link from "next/link";

export default function backHome() {
  return (
    <div className="mt-5 flex justify-end items-center">
      <Link href={"/"} className="p-2 border bg-black text-white rounded">
        Back Home
      </Link>
    </div>
  );
}
