// == Import
import * as React from 'react';
import './styles.scss';
import NbColors from 'src/components/NbColors';
import RandomButtons from 'src/components/RandomButtons';
import Gradient from '../Gradient';
import Colors from '../Colors';
import DirectionButtons from '../DirectionButtons';

// == Composant
const App = () => (
  <div className="app">
    <NbColors />
    <RandomButtons />
    <Colors />
    <Gradient />
    <DirectionButtons />
  </div>
);

// == Export
export default App;
