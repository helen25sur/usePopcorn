export default function Box({ setIsOpen, isOpen, children }) {
  return (
    <div className="box bg-neutral-700 w-[45%] rounded-md p-4">
      <button
        className="btn-toggle"
        onClick={() => setIsOpen((open) => !open)}
      >
        {isOpen ? "–" : "+"}
      </button>

      {children}
    </div>
  )
}
