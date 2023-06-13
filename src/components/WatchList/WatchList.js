import React from 'react'
import MovieCard from '../MovieCard/MovieCard'

const WatchList = ({ list, removeMovie }) => {
  const movieDisplay = list.map(movie => {
    return <MovieCard removeMovie={removeMovie} list={list} movie={movie} />
  })
  return (
    <div className="watchlist">
      <h1>My Watchist</h1>
      <div className="movie-container">{movieDisplay}</div>
    </div>
  )
}

export default WatchList


