export type Genre = {
  id: number;
  name: string;
};

export const getMovieGenres = async () => {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.TMDB_TOKEN}`,
    },
  };

  const response = await fetch(
    "https://api.themoviedb.org/3/genre/movie/list?language=en",
    options
  );

  const { genres } = await response.json();

  return genres as Genre[];
};
