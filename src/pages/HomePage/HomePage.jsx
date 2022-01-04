import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { trendingApiService } from 'services/api-service';
import PageHeading from 'components/PageHeading';

export default function HomePage() {
  const location = useLocation();
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    trendingApiService('day').then(setMovies);
  }, []);

  return (
    <>
      <PageHeading text="Trending today" />

      {movies && (
        <ul>
          {movies.map(movie => (
            <li key={movie.id}>
              <Link
                to={`movies/${movie.id}`}
                state={{ from: location, label: 'Go to Home' }}
              >
                {movie.title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
