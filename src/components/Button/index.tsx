// == Import
import * as React from 'react';
import { useDispatch } from 'react-redux';
import * as PropTypes from 'prop-types';
import { changeDirection } from 'src/actions';
import './styles.scss';

type CounterProps = {
  text: string,
  direction: string
};
// == Composant
const Button = ({ text, direction }: CounterProps) => {
  const dispatch = useDispatch();
  const handleClickDirection = () => {
    dispatch(changeDirection(direction));
  };
  return (
    <button
      type="button"
      className="button"
      onClick={handleClickDirection}
    >
      {text}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
};

// == Export
export default Button;
