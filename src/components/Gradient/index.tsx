// == Import
import * as React from 'react';
import { useAppSelector } from 'src/hooks';
import './styles.scss';

// == Composant
const Gradient = () => {
  const direction = useAppSelector((state) => state.direction);
  return (
    <div
      id="gradient"
      style={{
        background: `linear-gradient(${direction},#e367a4,#48b1f3)`,
      }}
    />
  );
};

// == Export
export default Gradient;
