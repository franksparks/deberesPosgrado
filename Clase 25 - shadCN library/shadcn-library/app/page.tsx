import Link from "next/link";

export default function page() {
  return (
    <main className="p-4">
      <div className="flex flex-col">
        <Link href="/button-demo">Button Demo</Link>
        <Link href="/login-form">Login form</Link>
      </div>
      <h1>Main</h1>
    </main>
  );
}
