import PropTypes from 'prop-types';
import s from './Button.module.css';

export default function Button({ type, forClick, children }) {
  return (
    <button type={type} className={s.btn} onClick={forClick}>
      {children}
    </button>
  );
}

Button.defaultProps = {
  onClick: () => null,
  children: null,
};

Button.propTypes = {
  type: PropTypes.oneOf(['button', 'submit', 'reset']).isRequired,
  onClick: PropTypes.func,
  children: PropTypes.node,
};
