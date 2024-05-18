"use client";
import SearchBox from "@/components/SearchBox";
import Link from "next/link";
import { useState } from "react";

export default function Page() {
  const [search, setSearch] = useState("");
  return (
    <div>
      <h1>Search page</h1>
      <div>
        <Link className=" text-blue-600" href="/">
          Home
        </Link>
      </div>
      <SearchBox onChange={setSearch} />
      <p>{search}</p>{" "}
    </div>
  );
}
