import { useState } from 'react';
import Box from './Box';
import MovieList from './MovieList';
import Stats from './Stats';

export default function Main({ average, movies, watched }) {

  const [isOpen1, setIsOpen1] = useState(true);
  const [isOpen2, setIsOpen2] = useState(true);



  return (
    <main className="main container flex justify-center gap-6 m-auto p-6 text-white">
      <Box setIsOpen={setIsOpen1} isOpen={isOpen1}>
        {isOpen1 && (
          <MovieList movies={movies} />
        )}
      </Box>

      <Box setIsOpen={setIsOpen2} isOpen={isOpen2}>
        {isOpen2 && (
          <>
            <Stats average={average} watched={watched} />

            <ul className="list">
              {watched.map((movie) => (
                <li key={movie.imdbID}>
                  <img src={movie.Poster} alt={`${movie.Title} poster`} />
                  <h3>{movie.Title}</h3>
                  <div>
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
              ))}
            </ul>
          </>
        )}
      </Box>
    </main>
  )
}

