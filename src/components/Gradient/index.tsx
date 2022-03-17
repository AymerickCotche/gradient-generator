// == Import
import * as React from 'react';
import { useAppSelector } from 'src/hooks';
import { getColors } from 'src/selectors';
import './styles.scss';

// == Composant
const Gradient = () => {
  const direction = useAppSelector((state) => state.direction);
  const { firstColor, lastColor } = useAppSelector(getColors);
  return (
    <div
      id="gradient"
      style={{
        background: `linear-gradient(${direction},${firstColor},${lastColor})`,
      }}
    />
  );
};

// == Export
export default Gradient;
