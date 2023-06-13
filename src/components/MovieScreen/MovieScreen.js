import React from 'react'
import MovieCard from '../MovieCard/MovieCard'

const MovieScreen = props => {
  const movieDisplay = props.movieList.map(movie => {
    return <MovieCard movie={movie}/>
  })
  return (
    <div className="page">
      <h1>Jaclyn's Movie Theatre</h1>
      <h3>Add a Movie to your Watchlist</h3>
      <div className="movie-container">{movieDisplay}</div>
    </div>
  )
}

export default MovieScreen
