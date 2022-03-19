// == Import
import * as React from 'react';
import { useDispatch } from 'react-redux';
import { randFirst, randLast } from 'src/actions';
import './styles.scss';

// == Composant
const RandomButtons = () => {
  const dispatch = useDispatch();
  const handleRandomFirst = () => {
    dispatch(randFirst());
  };
  const handleRandomLast = () => {
    dispatch(randLast());
  };
  const handleRandomAll = () => {
    handleRandomFirst();
    handleRandomLast();
  };
  return (
    <div className="buttons group">
      <button
        type="button"
        className="button"
        id="randFirst"
        onClick={handleRandomFirst}
      >
        Random First
      </button>
      <button
        type="button"
        className="button"
        id="randAll"
        onClick={handleRandomAll}
      >
        Random All
      </button>
      <button
        type="button"
        className="button"
        id="randLast"
        onClick={handleRandomLast}
      >
        Random Last
      </button>
    </div>
  );
};

// == Export
export default RandomButtons;
