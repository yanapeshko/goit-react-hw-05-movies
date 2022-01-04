import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Container from '../Container';
import AppBar from '../AppBar';
import Loading from '../Loading';
import './App.module.css';

const HomePage = lazy(() => import('../../pages/HomePage/HomePage.jsx'));
const MoviesPage = lazy(() => import('../../pages/MoviesPage/MoviesPage.jsx'));
const MovieDetailsPage = lazy(() =>
  import('../../pages/MovieDetailsPage/MovieDetailsPage.jsx'),
);

export default function App() {
  return (
    <Container>
      <AppBar />

      <Suspense fallback={<Loading timeout={3000} />}>
        <Routes>
          <Route path="/*" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:movieId/*" element={<MovieDetailsPage />} />
        </Routes>
      </Suspense>

      <ToastContainer />
    </Container>
  );
}
