export default function Navigation({ query, onQuery, length }) {
  return (
    <nav className="nav-bar bg-indigo-700 text-white py-5 px-3  flex items-center justify-between rounded-md">
      <div className="logo flex text-2xl font-bold">
        <span role="img">🍿</span>
        <h1>usePopcorn</h1>
      </div>
      <input
        className="search bg-indigo-600 px-3 py-2 w-2xs rounded-sm"
        type="text"
        placeholder="Search movies..."
        value={query}
        onChange={(e) => onQuery(e.target.value)}
      />
      <p className="num-results text-xl">
        Found <strong>{length}</strong> results
      </p>
    </nav>
  )
}
