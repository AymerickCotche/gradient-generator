// == Import
// import _ from 'lodash';
import * as React from 'react';
import { useAppSelector } from 'src/hooks';
import './styles.scss';

// == Composant
const NbColors = () => {
  const nbColors = useAppSelector((state) => state.nbColors);
  return (
    <div id="nbColors">{nbColors} couleur(s) générée(s)</div>
  );
};

// == Export
export default NbColors;
