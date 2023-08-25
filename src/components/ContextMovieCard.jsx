import { useEffect, useState } from "react";
import { get } from "../data/httpClient";
import { MovieCard } from "../components/MovieCard";
import "../components/ContextMovieCard.css"

export function ContextMovieCard() {
  const [movies, Setmovies] = useState([]);
  useEffect(() => {
    get("/discover/movie").then((data) => {
      Setmovies(data.results);
      console.log(data);
    });
  }, []);
  return (
    <ul className="container">
      {movies.map((item) => (
        <MovieCard key={item.id} movie={item}/>
      ))}
    </ul>
  );
}
