import { useState, useEffect, lazy, Suspense } from 'react';
import {
  Routes,
  Route,
  Link,
  useParams,
  useLocation,
  useNavigate,
} from 'react-router-dom';
import { ImArrowLeft } from 'react-icons/im';
import { movieApiService, URL } from 'services/api-service';
import Loading from 'components/Loading';
import Button from 'components/Button';
import s from './MovieDetailsPage.module.css';

const Cast = lazy(() => import('components/Cast/Cast.jsx'));
const Reviews = lazy(() => import('components/Reviews/Reviews.jsx'));

export default function MovieDetailsPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    movieApiService(null, movieId).then(setMovie);
  }, [movieId]);

  const onGoBack = () => {
    navigate(
      location.state?.from?.pathname
        ? `${location.state?.from?.pathname}${location.state?.from?.search}`
        : '/',
    );
  };

  return (
    <>
      {movie && (
        <>
          <Button type="button" forClick={onGoBack}>
            <ImArrowLeft style={{ marginRight: 8, marginBottom: -2 }} />
            {location?.state?.label ?? 'Go Back'}
          </Button>
          <div className={s.box}>
            <img src={`${URL.IMG}/${movie.poster_path}`} alt={movie.title} />

            <div className={s.description}>
              <h2>{movie.title}</h2>
              <p>User Score: {movie.vote_average * 10}%</p>
              <h3>Overview</h3>
              <p>{movie.overview}</p>
              <h4>Genres</h4>
              <p>{movie.genres.map(genre => genre.name + ' ')}</p>
            </div>
          </div>

          <div className={s.additional}>
            <h5>Additional information</h5>
            <ul>
              <li>
                <Link
                  to={`/movies/${movieId}/cast`}
                  state={{
                    from: location.state.from,
                    label: location.state.label,
                  }}
                >
                  Cast
                </Link>
              </li>

              <li>
                <Link
                  to={`/movies/${movieId}/reviews`}
                  state={{
                    from: location.state.from,
                    label: location.state.label,
                  }}
                >
                  Reviews
                </Link>
              </li>
            </ul>
          </div>

          <Suspense fallback={<Loading timeout={3000} />}>
            <Routes>
              <Route path="/cast" element={<Cast />} />
              <Route path="/reviews" element={<Reviews />} />
            </Routes>
          </Suspense>
        </>
      )}
    </>
  );
}
