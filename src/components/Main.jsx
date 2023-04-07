import React, { useEffect, useState } from "react";
import Request from "@/Request";
import axios from "axios";

const Main = () => {
  const [movies, setMovies] = useState();

  const randomMovie =
    movies && movies.length > 0
      ? movies[Math.floor(Math.random() * movies.length)]
      : null;

  console.log(randomMovie);

  useEffect(() => {
    axios.get(Request.requestPopularMovie).then((response) => {
      setMovies(response.data.results);
    });
  }, []);

  return (
    <div className='w-full h-[550px] text-white'>
      <div className='w-full h-full'>
        <img className="w-full h-full" src={`https://image.tmdb.org/t/p/original${randomMovie?.backdrop_path}`} alt={randomMovie?.title} />
      </div>
    </div>
  );
};

export default Main;
