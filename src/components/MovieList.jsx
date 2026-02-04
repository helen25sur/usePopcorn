import MovieListItem from "./MovieListItem";

export default function MovieList({ movies }) {
  return (
    <ul className="list flex flex-col gap-4">
      {movies?.map((movie) => (
        <MovieListItem key={movie.imdbID} movie={movie} />
      ))}
    </ul>
  )
}
