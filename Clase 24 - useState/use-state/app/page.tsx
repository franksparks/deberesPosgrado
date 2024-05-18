import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col gap-2 p-6">
      <Link className=" text-blue-600 hover:" href="/server-user-list">
        Lista de usuarios renderizada en <strong>servidor</strong>.
      </Link>

      <Link className=" text-blue-600 hover:" href="/client-user-list">
        Lista de usuarios renderizada en <strong>cliente</strong>.
      </Link>
    </main>
  );
}
