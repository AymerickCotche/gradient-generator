// == Import
import * as React from 'react';
import Button from '../Button';

// == Composant
const RandomButtons = () => (
  <div className="buttons group">
    <Button text="to left" />
    <Button text="to right" />
    <Button text="to 45" />
    <Button text="to 135" />
    <Button text="to 225" />
    <Button text="to 315" />
  </div>

);

// == Export
export default RandomButtons;
