// == Import
import * as React from 'react';
import { useAppSelector } from 'src/hooks';
import './styles.scss';

// == Composant
const Colors = () => {
  const firstColor = useAppSelector((state) => state.firstColor);
  const lastColor = useAppSelector((state) => state.lastColor);
  return (
    <div id="colors">
      <span style={{ color: firstColor }}>{firstColor}</span>
      -
      <span style={{ color: lastColor }}>{lastColor}</span>
    </div>
  );
};

// == Export
export default Colors;
