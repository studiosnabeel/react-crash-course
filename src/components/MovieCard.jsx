import React from 'react';

const MovieCard = ({ movie }) => {
  return (
    <div className="">
      <div className="relative mt-8">
        <div className="absolute top-0 bg-transparent font-semibold text-gray-700">
          {movie.Year}
        </div>
        <div>
          <img
            className="w-[400px] h-[400px]"
            alt={movie.Title}
            src={
              movie.Poster !== 'N/A'
                ? movie.Poster
                : 'https://via.placeholder.com/400'
            }
          />
        </div>
        <div className=" text-white font-semibold text-lg">
          <span className="absolute bottom-14 bg-transparent text-gray-700">
            {movie.Type}
          </span>
          <h3 className="absolute bottom-0 bg-gray-700 font-bold text-white">
            {movie.Title}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
