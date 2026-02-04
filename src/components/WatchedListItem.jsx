import React from 'react'

export default function WatchedListItem({ movie }) {
  return (
    <li className='grid grid-flow-col grid-rows-2 grid-cols-5 gap-4 items-center' key={movie.imdbID}>
      <img className='row-span-2 w-16' src={movie.Poster} alt={`${movie.Title} poster`} />
      <h3 className='self-end col-span-4'>{movie.Title}</h3>
      <div className="self-start col-span-4 flex gap-4">
        <p>
          <span>⭐️</span>
          <span>{movie.imdbRating}</span>
        </p>
        <p>
          <span>🌟</span>
          <span>{movie.userRating}</span>
        </p>
        <p>
          <span>⏳</span>
          <span>{movie.runtime} min</span>
        </p>
      </div>
    </li>
  )
}
