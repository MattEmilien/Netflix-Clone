import { useState, useEffect } from "react";
import requests from "../../lib/Requests";
import axios from "axios";
import truncateString from "../../lib/TruncateString";

const Content = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [movie, setMovie] = useState<Movie | undefined>(undefined);

  useEffect(() => {
    axios.get(requests.requestPopular).then((response) => {
      setMovies(response.data.results);
    });
  }, []);

  useEffect(() => {
    if (movies.length > 0) {
      const randomMovie = movies[Math.floor(Math.random() * movies.length)];
      setMovie(randomMovie);
    }
  }, [movies]);

  return (
    <div className="">
      {movie && (
        <div className="w-full h-[550px] text-white">
          {/* Display movie backdrop image */}
          <div className="absolute w-full h-[550px] bg-gradient-to-r from-black"></div>

          <img
            className="w-full h-full object-cover text-white"
            src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
            alt={movie.title}
          />
          {/* Display movie buttons and title */}
          <div className="absolute w-full top-[20%] p-4 md:p-8">
            <h1 className="text-3xl md:text-5xl my-4">{movie.title}</h1>

            <button className="border bg-gray-300 text-black border-gray-300 py-2 px-5">
              Play
            </button>
            <button className="border text-white border-gray-300 py-2 px-5 ml-4">
              Watch Later
            </button>
            <p className="text-gray-400 text-sm my-3">
              {" "}
              Released: {movie.release_date}
            </p>
            <p className="w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-200">
              {" "}
              {truncateString(movie.overview, 200)}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Content;
