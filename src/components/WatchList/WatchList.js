import React from 'react'
import MovieCard from '../MovieCard/MovieCard'

const WatchList = props => {
  const movieDisplay = props.list.map(movie => {
    return <MovieCard addMovie={props.addMovie} movie={movie} />
  })
  return (
    <div className="watchlist">
      <h1>My Watchist</h1>
      <div className="movie-container">{movieDisplay}</div>
    </div>
  )
}

export default WatchList
