// == Import
import * as React from 'react';
import Button from '../Button';

// == Composant
const DirectionButtons = () => (
  <div className="buttons group">
    <Button text="to left" direction="270deg" />
    <Button text="to right" direction="90deg" />
    <Button text="to 45" direction="45deg" />
    <Button text="to 135" direction="135deg" />
    <Button text="to 225" direction="225deg" />
    <Button text="to 315" direction="315deg" />
  </div>

);

// == Export
export default DirectionButtons;
