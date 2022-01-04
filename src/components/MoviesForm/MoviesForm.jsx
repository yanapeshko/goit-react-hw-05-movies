import { useState } from 'react';
import { ImSearch } from 'react-icons/im';
import Button from '../Button';

export default function MoviesForm({ forSearch, search }) {
  const [input, setInput] = useState('');

  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        forSearch(input);
      }}
    >
      <input
        placeholder={search ?? 'Look for a movie...'}
        onChange={e => setInput(e.target.value)}
      />
      <Button type="submit">
        <ImSearch style={{ marginRight: 8, marginBottom: -1 }} />
        Search
      </Button>
    </form>
  );
}
