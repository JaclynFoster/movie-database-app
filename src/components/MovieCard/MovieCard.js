import React from 'react'
import { Button, Card, CardTitle } from 'react-bootstrap'
import './MovieCard.css'

const MovieCard = ({ list, removeMovie, addMovie, movie }) => {
  console.log('Movie Card props', list)
  const inWatchList = list.filter(mov => {
    return mov.id === movie.id
  })
  const button =
    inWatchList.length === 0 ? (
      <Button variant="info" onClick={() => addMovie(movie)}>
        Add To List
      </Button>
    ) : (
      <Button variant="warning" onClick={() => removeMovie(movie)}>
        Remove
      </Button>
    )
  return (
    <Card className="movie-card">
      <Card.Body>
        <img
          className="movie-poster"
          src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
        />
        <Card.Title>{movie.original_title}</Card.Title>
      </Card.Body>
      {button}
    </Card>
  )
}

export default MovieCard




