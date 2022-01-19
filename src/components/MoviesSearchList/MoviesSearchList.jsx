import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { searchApiService } from 'services/api-service';

export default function MoviesSearchList({ search }) {
  const location = useLocation();
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function getSearch() {
      try {
        if (!search) {
          return;
        }

        const data = await searchApiService(search);
        setMovies(data);
      } catch (e) {
        console.error(e);
      }
    }
    getSearch();
  }, [search]);

  return (
    <ul>
      {movies.map(movie => (
        <li key={movie.id}>
          <Link
            to={`${movie.id}`}
            state={{ from: location, label: 'Go to Search' }}
          >
            {movie.title}
          </Link>
        </li>
      ))}
    </ul>
  );
}
