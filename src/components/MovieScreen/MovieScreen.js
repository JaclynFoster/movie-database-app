import React from 'react'
import MovieCard from '../MovieCard/MovieCard'

const MovieScreen = ({
  list,

  page,
  setPage,
  movieList,
  addMovie
}) => {
  const movieDisplay = movieList.map(movie => {
    return (
      <MovieCard
        movieList={movieList}
        list={list}
        addMovie={addMovie}
        movie={movie}
      />
    )
  })

  const increment = () => {
    setPage(page + 1)
  }

  const decrement = () => {
    if (page !== 1) {
      setPage(page - 1)
    }
  }

  return (
    <div className="page">
      <h1>Jaclyn's Movie Theatre</h1>
      <h3>Add a Movie to your Watchlist</h3>
      <div className="btn-container">
        <button onClick={() => decrement()}>Previous</button>
        <button onClick={() => increment()}>Next</button>
      </div>
      <div className="movie-container">{movieDisplay}</div>
    </div>
  )
}

export default MovieScreen



