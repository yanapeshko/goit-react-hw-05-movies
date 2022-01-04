import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { movieApiService } from 'services/api-service';
import s from './Reviews.module.css';

export default function Reviews() {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    movieApiService('/reviews', movieId).then(data => setReviews(data.results));
  }, [movieId]);

  if (reviews.length === 0) {
    return <p>We don't have any reviews for this movie.</p>;
  }

  return (
    <ul>
      {reviews.map(review => (
        <li key={review.id} className={s.item}>
          <h3>Author: {review.author}</h3>
          <p>{review.content}</p>
        </li>
      ))}
    </ul>
  );
}
