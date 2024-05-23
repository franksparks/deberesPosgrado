import { getMoviePosterPath, Movie } from "@/lib/movies";
import Image from "next/image";

type MovieCardProps = {
  movie: Movie;
};

export default function MovieCard({ movie }: MovieCardProps) {
  return (
    <div>
      <div className="font-bold rounded w-24 h-36 border bg-stone-900 relative overflow-clip">
        <Image
          src={getMoviePosterPath(movie)}
          alt={`Cartel de la película ${movie.original_title}`}
          fill={true}
        />
      </div>
    </div>
  );
}
