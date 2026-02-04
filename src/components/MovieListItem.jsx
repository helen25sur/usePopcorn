export default function MovieListItem({ movie }) {
  return (
    <li key={movie.imdbID} className="grid grid-flow-col grid-rows-2 grid-cols-4 gap-4 items-center">
      <img className="row-span-2 w-16" src={movie.Poster} alt={`${movie.Title} poster`} />
      <h3 className="self-end col-span-3">{movie.Title}</h3>
      <div className="self-start col-span-3">
        <p>
          <span>🗓</span>
          <span>{movie.Year}</span>
        </p>
      </div>
    </li>
  )
}
