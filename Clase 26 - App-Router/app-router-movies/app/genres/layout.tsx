import SideBar from "@/components/SideBar";
import { getMovieGenres } from "@/lib/movies";

type LayoutProps = {
  children: React.ReactNode;
};

export default async function Layout({ children }: LayoutProps) {
  const genres = await getMovieGenres();
  return (
    <div className="flex flex-row items-stretch ">
      <SideBar genres={genres} />
      <div>{children}</div>
    </div>
  );
}
