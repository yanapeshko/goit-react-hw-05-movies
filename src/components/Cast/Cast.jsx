import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { movieApiService, URL } from 'services/api-service';
import s from './Cast.module.css';

export default function Cast() {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    movieApiService('/credits', movieId).then(data => setCast(data.cast));
  }, [movieId]);

  return (
    <ul>
      {cast.map(actor => (
        <li key={actor.id} className={s.item}>
          <img
            src={`${URL.IMG}/${actor.profile_path}`}
            alt={actor.name}
            className={s.photo}
          />
          <h3>{actor.name}</h3>
          <h4>Character: {actor.character}</h4>
        </li>
      ))}
    </ul>
  );
}
