import UserList from "@/components/UserList";

export default function Home() {
  return (
    <main className="p-2">
      <h1 className="font-bold text-3xl mb-3">User list</h1>
      <UserList />
    </main>
  );
}
