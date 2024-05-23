import MovieCard from "@/components/MovieCard";
import {
  getAllMovies,
  getMovieGenres,
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
        Id de la categoría seleccionada: <strong>{genreId}</strong>
      </div>
      <div className="flex flex-wrap gap-2">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </main>
  );
}

export async function generateStaticParams() {
  const genres = await getMovieGenres();

  return genres.map((genre) => ({ genreId: String(genre.id) }));
}
