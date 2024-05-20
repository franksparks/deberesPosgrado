"use client";
import { Genre } from "@/lib/movies";
import { cn } from "@/lib/utils";
import Link from "next/link";

type SideBarProps = {
  className?: string;
  genres: Genre[];
};

export default function SideBar({
  className,
  genres,
}: SideBarProps) {
  return (
    <div className={cn("bg-stone-200 w-28 px-2", className)}>
      {genres.map((genre) => (
        <Link
          key={genre.id}
          href={`/genres/${genre.id}`}
          className={cn(
            "line-clamp-1",
            " p-1 px-3",
            "text-foreground"
          )}
        >
          {genre.name}
        </Link>
      ))}
    </div>
  );
}
