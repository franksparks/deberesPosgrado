"use client";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function HeaderComponent() {
  const router = useRouter();
  return (
    <header
      className={cn(
        "h-12 bg-stone-700 text-white",
        "flex flex-row items-center p-4"
      )}
    >
      <Link
        className="text-white hover:no-underline hover:text-white"
        href="/"
      >
        <div
          id="logo"
          className="font-extrabold text-xl mr-4"
        >
          Movies!
        </div>
      </Link>
      <Button
        variant="link"
        className="text-white"
        onClick={() => router.push("/genres")}
      >
        Genres
      </Button>
      <Button
        variant="link"
        className="text-white"
        onClick={() => router.push("/movies")}
      >
        Movies
      </Button>
    </header>
  );
}
