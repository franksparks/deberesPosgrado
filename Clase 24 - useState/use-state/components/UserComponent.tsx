import { User } from "@/lib/users";
import Image from "next/image";

type UserComponentProps = {
  user: User;
};

export default function UserComponent({ user }: UserComponentProps) {
  const { email, name } = user;
  return (
    <div className="p-1.5 border border-slate-950 rounded shadow flex flex-row gap-2 items-center">
      <Image
        src={user.picture.thumbnail}
        width={42}
        height={42}
        alt="user avatar"
        className="rounded-full"
      />
      <div className="flex flex-col">
        <div className="  font-bold">
          {name.last}, {name.first}
        </div>
        <div className=" font-mono text-xs text-gray-400">{email} </div>
      </div>
    </div>
  );
}
