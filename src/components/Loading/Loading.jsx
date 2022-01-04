import Loader from 'react-loader-spinner';
import PropTypes from 'prop-types';
import s from './Loading.module.css';

export default function Loading({ timeout }) {
  return (
    <div className={s.box}>
      <Loader
        className={s.spinner}
        type="Puff"
        color="#00BFFF"
        height={300}
        width={300}
        timeout={timeout}
      />
    </div>
  );
}

Loading.propTypes = {
  timeout: PropTypes.number.isRequired,
};
