import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>Main page</h1>
      <div className="flex flex-col">
        <Link href={"/genres"}>Genres page</Link>
        <Link href={"/movies"}>Movies page</Link>
        <Link href={"/404"}>Missing page</Link>
      </div>
    </main>
  );
}
