export type Genre = {
  id: number;
  name: string;
};

export type Movie = {
  id: number;
  original_title: string;
  overview: string;
  release_date: Date;
};

const tmdbFetch = async (path: string) => {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.TMDB_TOKEN}`,
    },
  };

  const response = await fetch(
    `https://api.themoviedb.org/3${path}`,
    options
  );

  return await response.json();
};
export const getMovieGenres = async () => {
  const { genres } = await tmdbFetch(
    "/genre/movie/list?language=en"
  );
  return genres as Genre[];
};

export const getMoviesWithGenre = async (genreIds: number[]) => {
  const genres = genreIds;
  const { results: resultsList } = await tmdbFetch(
    `/discover/movie?with_genres=${genres.map(String).join(",")}`
  );

  const movies = resultsList.map((result: any) => ({
    ...result,
    release_date: new Date(result.release_date),
  }));
  return movies as Movie[];
};

export const getAllMovies = async () => {
  return getMoviesWithGenre([]);
};
