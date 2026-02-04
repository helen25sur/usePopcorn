import WatchedListItem from "./WatchedListItem";

export default function WatchedList({ watched }) {
  return (
    <ul className="list">
      {watched.map((movie) => (
        <WatchedListItem key={movie.imdbID} movie={movie} />
      ))}
    </ul>
  )
}
