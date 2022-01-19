import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Container from '../Container';
import AppBar from '../AppBar';
import Loading from '../Loading';

const AsyncHomePage = lazy(() => import('../../pages/HomePage/HomePage.jsx'));
const AsyncMoviesPage = lazy(() =>
  import('../../pages/MoviesPage/MoviesPage.jsx'),
);
const AsyncMovieDetailsPage = lazy(() =>
  import('../../pages/MovieDetailsPage/MovieDetailsPage.jsx'),
);

export default function App() {
  return (
    <Container>
      <AppBar />

      <Suspense fallback={<Loading timeout={3000} />}>
        <Routes>
          <Route path="/*" element={<AsyncHomePage />} />
          <Route path="/movies" element={<AsyncMoviesPage />} />
          <Route
            path="/movies/:movieId/*"
            element={<AsyncMovieDetailsPage />}
          />
        </Routes>
      </Suspense>

      <ToastContainer />
    </Container>
  );
}
