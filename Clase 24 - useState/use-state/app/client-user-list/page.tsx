"use client";
import UserComponent from "@/components/UserComponent";
import { loadUsers, User } from "@/lib/users";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Page() {
  const [userList, setUserList] = useState<User[] | null>(null);

  const renderLoading = () => {
    if (userList === null) {
      return <div>Loading user list...</div>;
    } else {
      return (
        <div>
          {userList?.map((user) => (
            <UserComponent key={user.email} user={user} />
          ))}
        </div>
      );
    }
  };

  useEffect(() => {
    loadUsers().then(setUserList);
  }, []);

  return (
    <main className="p-2">
      <h1>User list - Rendered on client</h1>
      <div>
        <Link className=" text-blue-600" href="/">
          Home
        </Link>
      </div>
      <div>{renderLoading()}</div>
    </main>
  );
}
