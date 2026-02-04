import WatchedListItem from "./WatchedListItem";

export default function WatchedList({ watched }) {
  return (
    <ul className="list flex flex-col gap-4 pt-4">
      {watched.map((movie) => (
        <WatchedListItem key={movie.imdbID} movie={movie} />
      ))}
    </ul>
  )
}
