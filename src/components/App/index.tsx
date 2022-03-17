// == Import
import * as React from 'react';
import './styles.scss';
import NbColors from 'src/components/NbColors';
import RandomButtons from 'src/components/RandomButtons';
import Gradient from 'src/components/Gradient';
import Colors from 'src/components/Colors';
import DirectionButtons from 'src/components/DirectionButtons';

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
