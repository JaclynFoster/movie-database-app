import React from 'react'
import './MovieCard.css'

const MovieCard = ({ list, removeMovie, addMovie, movie }) => {
  console.log('Movie Card props', list)
  const inWatchList = list.filter(mov => {
    return mov.id === movie.id
  })
  const button =
    inWatchList.length === 0 ? (
      <button onClick={() => addMovie(movie)}>Add To List</button>
    ) : (
      <button onClick={() => removeMovie(movie)}>Remove</button>
    )
  return (
    <div className="movie-card">
      <div>
        <img
          className="movie-poster"
          src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
        />
        <h3>{movie.original_title}</h3>
      </div>
      {button}
    </div>
  )
}

export default MovieCard



