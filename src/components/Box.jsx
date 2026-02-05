import { useState } from 'react';

export default function Box({ children }) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="box flex flex-col bg-neutral-700 w-[45%] rounded-md p-4">
      <button
        className="btn-toggle flex items-center justify-center self-end text-xl w-6 h-6 rounded-full bg-neutral-800 cursor-pointer"
        onClick={() => setIsOpen((open) => !open)}
      >
        {isOpen ? "-" : "+"}
      </button>

      {isOpen && children}
    </div>
  )
}
