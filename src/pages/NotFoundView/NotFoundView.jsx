import errorImage from './error.jpg';

export default function NotFoundView({ message }) {
  return (
    <div role="alert">
      <img src={errorImage} alt="404 Page not found" />
      <p>{message}</p>
    </div>
  );
}
