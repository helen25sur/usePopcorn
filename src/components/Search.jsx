export default function Search({ query, onQuery }) {
  return (
    <>
      <input
        className="search bg-indigo-600 px-3 py-2 w-80 rounded-sm"
        type="text"
        placeholder="Search movies..."
        value={query}
        onChange={(e) => onQuery(e.target.value)}
      />
    </>
  )
}
