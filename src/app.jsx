import { useState, useEffect } from 'react';
import MovieCard from './components/MovieCard';

const API_KEY = 'www.omdbapi.com?apikey=44ac0d39';

const movie1 = {
  Title: 'Fighting, Flying and Driving: The Stunts of Spiderman 3',
  Year: '2007',
  imdbID: 'tt1132238',
  Type: 'movie',
  Poster:
    'https://m.media-amazon.com/images/M/MV5BNTI3NDE1ZmEtMTRiMS00YTY4LTk0OGItNjY4YmI0MDM4OGM4XkEyXkFqcGdeQXVyODE2NDgwMzM@._V1_SX300.jpg',
};

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const searchMovies = async (title) => {
    const response = await fetch(`https://${API_KEY}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
  };

  useEffect(() => {
    searchMovies('Spiderman');
  }, []);

  return (
    <>
      <div className="w-full flex flex-col justify-center items-center">
        <div>
          <h1 className="text-2xl font-bold text-[#b2ff33]">Movie App</h1>
        </div>
        <div className="mt-6 py-2  w-[300px] flex justify-center items-center gap-4 border border-white rounded-full">
          <input
            type="text"
            value={searchTerm}
            className="text-white border-none outline-none"
            placeholder="search by name"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <img
            className="w-[20px]"
            src="./search.svg"
            alt="search-logo"
            onClick={() => searchMovies(searchTerm)}
          />
        </div>
        {movies?.length > 0 ? (
          <div className="w-full flex flex-wrap justify-center items-center gap-8">
            {movies.map((movie) => (
              <MovieCard movie={movie} />
            ))}
          </div>
        ) : (
          <div>
            <h2>No movies found</h2>
          </div>
        )}
      </div>
    </>
  );
};

export default App;
