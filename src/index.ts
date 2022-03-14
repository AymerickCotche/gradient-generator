// == Imports
import { randomHexColor, generateSpanColor } from './utils';
import store from './store';

// == Rendu dans le DOM
function renderNbColors() {
  const { nbColors } = store.getState();

  document.getElementById('nbColors').innerHTML = `
    ${nbColors} couleur(s) générée(s)
  `;
}
function renderGradient() {
  const { direction, firstColor, lastColor } = store.getState();

  document.getElementById('gradient').style.background = `
    linear-gradient(${direction},${firstColor},${lastColor})
  `;
}
function renderColors() {
  const { firstColor, lastColor } = store.getState();

  const firstSpan = generateSpanColor(firstColor);
  const lastSpan = generateSpanColor(lastColor);

  const result = `${firstSpan} - ${lastSpan}`;

  document.getElementById('colors').innerHTML = result;
}

// == Initialisation
renderNbColors();
renderGradient();
renderColors();

store.subscribe(renderNbColors);
store.subscribe(renderGradient);
store.subscribe(renderColors);

// == Controls
document.getElementById('randAll')
  .addEventListener('click', () => {
    store.dispatch({ type: 'RANDOM_FIRST_COLOR', newFirstColor: randomHexColor() });
    store.dispatch({ type: 'RANDOM_LAST_COLOR', newLastColor: randomHexColor() });
  });

document.getElementById('randFirst')
  .addEventListener('click', () => {
    store.dispatch({ type: 'RANDOM_FIRST_COLOR', newFirstColor: randomHexColor() });
  });

document.getElementById('randLast')
  .addEventListener('click', () => {
    store.dispatch({ type: 'RANDOM_LAST_COLOR', newLastColor: randomHexColor() });
  });

document.getElementById('toLeft')
  .addEventListener('click', () => {
    // const state = store.getState();
    // state.direction = '270deg';
    store.dispatch({
      type: 'CHANGE_DIRECTION_TO_LEFT',
    });
  });

document.getElementById('toRight')
  .addEventListener('click', () => {
    // state.direction = '270deg';
    store.dispatch({
      type: 'CHANGE_DIRECTION_TO_RIGHT',
    });
  });
