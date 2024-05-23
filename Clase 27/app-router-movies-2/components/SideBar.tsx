"use client";
import { Genre } from "@/lib/movies";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

type SideBarProps = {
  className?: string;
  genres: Genre[];
};

export default function SideBar({ className, genres }: SideBarProps) {
  const curPath = usePathname();
  const Option = ({ id, name }: { id: string; name: string }) => {
    const path = `/genres/${id}`;
    return (
      <Link
        key={id}
        href={`/genres/${id}`}
        className={cn(
          "line-clamp-1",
          " p-1 px-3",
          "text-foreground",
          "hover:outline rounded-full",
          path === curPath ? "bg-black text-white" : ""
        )}
      >
        {name}
      </Link>
    );
  };
  return (
    <div className={cn("bg-stone-200 w-28 px-2", className)}>
      <Option id={"all"} name="All" />
      {genres.map((genre) => (
        <Option
          key={genre.id}
          id={String(genre.id)}
          name={genre.name}
        />
      ))}
    </div>
  );
}
