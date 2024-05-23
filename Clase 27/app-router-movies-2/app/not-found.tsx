import { cn } from "@/lib/utils";

export default function notfound() {
  return (
    <main
      className={cn(
        "justify-center items-center",
        "flex flex-col flex-1",

        "text-slate-500"
      )}
    >
      <p className="font-bold text-4xl">Error 404</p>
      <p>Page not found</p>
    </main>
  );
}
