import { useEffect } from 'react';
import MovieCard from './components/MovieCard';

const API_KEY = 'www.omdbapi.com?apikey=44ac0d39';

const App = () => {
  const searchMovies = async (title) => {
    const response = await fetch(`https://${API_KEY}&s=${title}`);
    const data = await response.json();

    console.log(data.Search);
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
            className="text-white border-none outline-none"
            placeholder="search by name"
            onChange={() => {}}
          />
          <img className="w-[20px]" src="./search.svg" alt="search-logo" />
        </div>
        <div className="">
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
        </div>
      </div>
    </>
  );
};

export default App;
