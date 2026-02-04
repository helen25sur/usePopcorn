import Logo from "./Logo";
import NumResults from "./NumResults";
import Search from "./Search";

export default function Navigation({ query, onQuery, length }) {
  return (
    <nav className="nav-bar bg-indigo-700 text-white py-5 px-3  flex items-center justify-between rounded-md">
      <Logo />
      <Search query={query} onQuery={onQuery} />
      <NumResults length={length} />
    </nav>
  )
}
