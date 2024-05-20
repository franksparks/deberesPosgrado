import { cn } from "@/lib/utils";

export default function FooterComponent() {
  return (
    <footer
      className={cn(
        " bg-stone-200 h-16 text-xs text-center",
        "pt-2 opacity-40"
      )}
    >
      &copy; Ferran Bals Moreno
    </footer>
  );
}
