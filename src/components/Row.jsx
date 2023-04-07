import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Row = ({ title, fetchUrl }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get(fetchUrl).then((response) => {
      setMovies(response.data.results);
    });
  }, [fetchUrl]);

  return (
    <>
      <h3 className='text-white font-bold md:text-xl p4'>{title}</h3>
      <div className='flex flex-col md:flex-row justify-center items-center'>
        <div>
          {movies.map((item, id) => {
            const title = item.media_type === 'tv' ? item.name : item.title;
            return (
              <div
                className='w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2'
                key={id}
              >
                <img
                  src={`https://image.tmdb.org/t/p/w500${item?.backdrop_path}`}
                  alt={title}
                />
                <div className='absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white'>
                  <p>{title}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Row;
