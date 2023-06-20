import React from 'react';

const MovieCard = ({ movie: { Year, Title, Poster, Type, imdbID } }) => {
  return (
    <div className="relative mt-8" key={imdbID}>
      <div className="absolute top-0 bg-transparent font-semibold text-gray-700">
        {Year}
      </div>
      <div>
        <img
          className="w-[400px] h-[400px]"
          alt={Title}
          src={Poster !== 'N/A' ? Poster : 'https://via.placeholder.com/400'}
        />
      </div>
      <div className=" text-white font-semibold text-lg">
        <span className="absolute bottom-14 bg-transparent text-gray-700">
          {Type}
        </span>
        <h3 className="absolute bottom-0 bg-gray-700 font-bold text-[#b2ff33]">
          {Title}
        </h3>
      </div>
    </div>
  );
};

export default MovieCard;
