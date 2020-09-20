import React, { useState, useEffect } from 'react'
import axios from './axios'
import './Row.css'

const baseUrl = 'https://image.tmdb.org/t/p/original/'

const Row = ({ title, fetchUrl, isLargeRow }) => {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const request = await axios.get(fetchUrl)
      setMovies(request.data.results)
      return request
    }
    fetchData()
  }, [fetchUrl])

  console.log(movies.map((movie) => movie))

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row__posters">
        {movies.map((movie) => (
          <div className={`row__poster ${isLargeRow && 'row__posterLarge'}`}>
            <img
              key={movie.id}
              src={`${baseUrl}${
                isLargeRow ? movie.poster_path : movie.backdrop_path
              }`}
              alt={movie.name}
            />
            <div className={`movie__title ${isLargeRow && 'movie__titleLarge'}`}>
              <p>{movie.name ? movie.name : movie.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Row
