import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';

const Row = ({ title, fetchUrl }) => {
  const [movies, setMovies] = useState([]);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [containerWidth, setContainerWidth] = useState(0);
  const sliderRef = useRef(null);

  useEffect(() => {
    axios.get(fetchUrl).then((response) => {
      // shuffle the array of movies
      const shuffledMovies = response.data.results.sort(() => Math.random() - 0.5);
      setMovies(shuffledMovies);
    });
  }, [fetchUrl]);

  useEffect(() => {
    if (sliderRef.current) {
      setContainerWidth(sliderRef.current.offsetWidth);
    }
  }, [sliderRef]);

  const handleScrollLeft = () => {
    sliderRef.current.scrollLeft -= containerWidth;
    setScrollPosition(sliderRef.current.scrollLeft);
  };

  const handleScrollRight = () => {
    sliderRef.current.scrollLeft += containerWidth;
    setScrollPosition(sliderRef.current.scrollLeft);
  };

  return (
    <>
      <h3 className='text-white font-bold md:text-xl p4'>{title}</h3>
      <div className='flex flex-col md:flex-row justify-center items-center'>
        <div
          id='slider'
          ref={sliderRef}
          className='w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide'
        >
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
                  <p className='white-space-normal text-base md:text-sm font-bold flex justify-center items-center h-full text-center'>
                    {item?.name || item?.title}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        <div
          className='absolute top-0 bottom-0 left-0 flex items-center justify-center'
          onClick={handleScrollLeft}
          style={{ width: '40px' }}
        >
          <i className='fas fa-chevron-left text-2xl text-gray-500 hover:text-white transition-colors duration-300'></i>
        </div>
        <div
          className='absolute top-0 bottom-0 right-0 flex items-center justify-center'
          onClick={handleScrollRight}
          style={{ width: '40px' }}
        >
          <i className='fas fa-chevron-right text-2xl text-gray-500 hover:text-white transition-colors duration-300'></i>
        </div>
      </div>
    </>
  );
};

export default Row;
