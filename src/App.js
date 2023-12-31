import './App.css'
import Header from './components/Header/Header'
import MovieScreen from './components/MovieScreen/MovieScreen'
import WatchList from './components/WatchList/WatchList'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { Alert } from 'react-bootstrap'

function App () {
  const [movieList, setMovieList] = useState([])
  const [list, setList] = useState([])
  const [page, setPage] = useState(1)

  const getData = () => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=${
          process.env.REACT_APP_API_KEY
        }&language=en-US&page=${page}`
      )
      .then(res => {
        console.log(res.data)
        setMovieList(res.data.results)
      })
      .catch(error => {
        console.log('error', error)
      })
  }

  const addMovie = movie => {
    console.log('movie added to watchlist')
    setList([...list, movie])
  }

  const removeMovie = movie => {
    const newState = list.filter(item => {
      return item !== movie
    })

    setList(newState)
  }

  useEffect(
    () => {
      getData()
    },
    [page]
  )
  return (
    <div className="App">
      <Header />
      <main>
        <MovieScreen
          list={list}
          page={page}
          setPage={setPage}
          movieList={movieList}
          addMovie={addMovie}
          removeMovie={removeMovie}
        />
        <WatchList setList={setList} list={list} removeMovie={removeMovie} />
      </main>
    </div>
  )
}

export default App





