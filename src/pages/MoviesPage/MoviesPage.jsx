import { useSearchParams } from 'react-router-dom';
import MoviesForm from 'components/MoviesForm';
import MoviesSearchList from 'components/MoviesSearchList';

export default function MoviesPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get('search');

  return (
    <div>
      <MoviesForm
        forSearch={search => setSearchParams({ search })}
        search={search}
      />
      <MoviesSearchList search={search} />
    </div>
  );
}
