import React, { useEffect, useState } from "react";
import Request from "@/Request";
import axios from "axios";

const Main = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        axios.get(Request.requestTrendingMovie).then((response) => {
            setMovies(response.data.results);
        });
    }, []);
    const randomMovie = movies.length && movies[Math.floor(Math.random() * movies.length)];


    const truncateString = (str, num) => {
        return str.length > num ? str.substr(0, num) + "..." : str;
    }


    return (
        <div className='w-full h-[850px] text-white'>
            <div className='w-full h-full'>
                <div className="absolute w-full h-[850px] bg-gradient-to-r from-black"></div>
                <img className="w-full h-full object-fit" src={randomMovie?.backdrop_path ? `https://image.tmdb.org/t/p/original${randomMovie?.backdrop_path}` : ""} alt={randomMovie?.media_type === "movie" ? randomMovie?.title : randomMovie?.name} />
                <div className="absolute w-full top-[30%] p-4 md:p-8">
                    <h1 className="text-3xl md:text-5xl font-bold mb-3">
                        {randomMovie?.media_type === "movie" ? randomMovie?.title : randomMovie?.name}
                    </h1>
                    <div>
                        <button className="border bg-gray-300 text-black border-gray-300 py-2 px-5 rounded-md">Play</button>
                        <button className="border text-white border-gray-300 py-2 px-5 ml-4 rounded-md">More Info</button>
                    </div>
                    <p className="w-full md:max-w-[70%] text-gray-200 lg:max-w-[50%] xl:max-w-[35%] mt-4">
                        {randomMovie?.overview ? truncateString(randomMovie?.overview, 255) : ""}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Main;
