import UserList from "@/components/UserList";
import Link from "next/link";

export default function Page() {
  return (
    <main className="p-2">
      <h1>User list - Rendered on server</h1>
      <div>
        <Link className=" text-blue-600" href="/">
          Home
        </Link>
      </div>
      <UserList />
    </main>
  );
}
