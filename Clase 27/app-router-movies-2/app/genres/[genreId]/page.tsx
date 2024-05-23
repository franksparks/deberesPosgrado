import {
  getAllMovies,
  getMoviesWithGenre,
  Movie,
} from "@/lib/movies";
import { notFound } from "next/navigation";

type PageProps = {
  params: {
    genreId: string;
  };
};

export default async function page({ params }: PageProps) {
  const { genreId } = params;

  let movies: Movie[] = [];
  if (genreId === "all") {
    movies = await getAllMovies();
  } else {
    const genreNum = Number(genreId);
    if (Number.isNaN(genreNum)) {
      notFound();
    }
    movies = await getMoviesWithGenre([genreNum]);
  }

  return (
    <main>
      <div className="underline">
        Id de la categoría seleccionada:{" "}
        <strong>{genreId}</strong>
      </div>
      <div>
        {movies.map((movie) => (
          <div key={movie.id}>{movie.original_title}</div>
        ))}
      </div>
    </main>
  );
}
