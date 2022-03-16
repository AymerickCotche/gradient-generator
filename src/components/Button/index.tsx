// == Import
import * as React from 'react';
import * as PropTypes from 'prop-types';
import './styles.scss';

type CounterProps = {
  text: string
};
// == Composant
const Button = ({ text }: CounterProps) => (
  <button
    type="button"
    className="button"
  >
    {text}
  </button>
);

Button.propTypes = {
  text: PropTypes.string.isRequired,
};

// == Export
export default Button;
