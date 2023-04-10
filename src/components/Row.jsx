import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {MdChevronLeft, MdChevronRight} from 'react-icons/md';

const Row = ({ title, fetchUrl }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get(fetchUrl).then((response) => {
      // shuffle the array of movies
      const shuffledMovies = response.data.results.sort(() => Math.random() - 0.5);
      setMovies(shuffledMovies);
    });
  }, [fetchUrl]);

  const slideLeft = () =>{
    var slider = document.getElementById('slider');
    slider.scrollLeft = slider.scrollLeft-500;
  }
  const slideRight = () =>{
    var slider = document.getElementById('slider');
    slider.scrollLeft = slider.scrollLeft+500;
  }

  return (
    <>
      <h3 className='text-white font-bold md:text-xl p4'>{title}</h3>
      <div className='flex flex-col md:flex-row justify-center items-center group'>
        <MdChevronLeft size={40} onClick={slideLeft} className='bg-white left-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block' />
        <div id={'slider'} className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative'>
          {movies.map((item, id) => {
            return (
              <div
                className='w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2'
                key={id}
              >
                <img
                  src={`https://image.tmdb.org/t/p/w500${item?.backdrop_path}`}
                  alt={item?.title}
                />
                <div className='absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white'>
                  <p className='white-space-normal text-base md:text-sm font-bold flex justify-center items-center h-full text-center'>{item?.name || item?.title}</p>
                </div>
              </div>
            );
          })}
        </div>
        <MdChevronRight size={40} onClick={slideRight} className='bg-white right-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block' />
      </div>
    </>
  );
};

export default Row;