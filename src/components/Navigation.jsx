import Logo from "./Logo";

export default function Navigation({ children }) {
  return (
    <nav className="nav-bar bg-indigo-700 text-white py-5 px-3  flex items-center justify-between rounded-md">
      <Logo />
      {children}
    </nav>
  )
}
