import React from 'react'
import './MovieCard.css'

const MovieCard = props => {
  return (
    <div className="movie-card">
      <div>
        <img
          className="movie-poster"
          src={`https://image.tmdb.org/t/p/original${props.movie.poster_path}`}
        />
        <h3>{props.movie.original_title}</h3>
        <button onClick={() => props.addMovie(props.movie)}>Add To List</button>
      </div>
    </div>
  )
}

export default MovieCard

