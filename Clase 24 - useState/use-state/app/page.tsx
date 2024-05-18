import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col gap-2 p-6">
      <h1>Main page</h1>
      <Link className=" text-blue-600 hover:" href="/server-user-list">
        Lista de usuarios renderizada en <strong>servidor</strong>.
      </Link>

      <Link className=" text-blue-600 hover:" href="/client-user-list">
        Lista de usuarios renderizada en <strong>cliente</strong>.
      </Link>

      <Link className=" text-blue-600 hover:" href="/search-products">
        Búsqueda de productos en <strong>cliente</strong>.
      </Link>
    </main>
  );
}
