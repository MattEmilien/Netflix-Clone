import { useState, useCallback } from "react";
import { motion } from "framer-motion";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { axiosClient } from "../../client";
const Movie = ({ movie }) => {
  const [like, setLike] = useState(false);
  const handleClick = useCallback(async () => {
    try {
      const email = JSON.parse(localStorage.getItem("email"));

      // Fetch the user's data
      // TODO: fix this method as it only allows one movie to be liked at a time
      const res = await axiosClient.patch(`/api/users?email=${email}`, {
        movies: movie.title,
      });
      setLike(true);
    } catch (error) {
      console.error(error);
    }
  }, [like, movie, setLike]);

  return (
    <div className="w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2">
      <img
        src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
        alt={movie.title}
      />
      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white">
        <p className="text-xs md:text-sm font-bold flex justify-center items-center h-full text-center">
          {movie?.title}
        </p>
        <motion.span
          whileHover={{ scale: 1.1 }} // Scale to 110% on hover
          onClick={handleClick} // Call handleClick when clicked
        >
          {like ? (
            // TODO: Add animation when selected
            <FaHeart className="absolute top-4 left-4 text-red-600" />
          ) : (
            <FaRegHeart className="absolute top-4 left-4 text-gray-300" />
          )}
        </motion.span>
      </div>
    </div>
  );
};

export default Movie;
