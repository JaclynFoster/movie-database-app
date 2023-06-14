import React from 'react'
import MovieCard from '../MovieCard/MovieCard'
import './WatchList.css'

const WatchList = ({ list, removeMovie }) => {
  const movieDisplay = list.map(movie => {
    return <MovieCard removeMovie={removeMovie} list={list} movie={movie} />
  })
  return (
    <div className="watchlist">
      <h1>My Watchlist</h1>
      <h3>Movies I have seen:</h3>
      <br />
      <br />
      <div className="movie-container">{movieDisplay}</div>
    </div>
  )
}

export default WatchList



