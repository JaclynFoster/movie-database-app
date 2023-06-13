import React from 'react'

const MovieCard = props => {
  return (
    <div className="movie-card">
      <div>
        <img
          src={`https://image.tmdb.org/t/p/original${props.movie.poster_path}`}
        />
        <h3>{props.movie.original_title}</h3>
        <button>Add To List</button>
      </div>
    </div>
  )
}

export default MovieCard
