// == Imports
import { randomHexColor, generateSpanColor } from './utils';
import {
  changeDirectionToRight,
  changeDirectionToLeft,
  randFirst,
  randLast,
  changeDirection
} from './actions';
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
    store.dispatch(randFirst());
    store.dispatch(randLast());
  });

document.getElementById('randFirst')
  .addEventListener('click', () => {
    store.dispatch(randFirst());
  });

document.getElementById('randLast')
  .addEventListener('click', () => {
    store.dispatch(randLast());
  });

document.getElementById('toLeft')
  .addEventListener('click', () => {
    store.dispatch(changeDirectionToLeft());
  });

document.getElementById('toRight')
  .addEventListener('click', () => {
    store.dispatch(changeDirectionToRight());
  });
document.getElementById('toTop')
  .addEventListener('click', () => {
    store.dispatch(changeDirection('top'));
  });

document.getElementById('toBottom')
  .addEventListener('click', () => {
    store.dispatch(changeDirection('bottom'));
  });
document.getElementById('toTopLeft')
  .addEventListener('click', () => {
    store.dispatch(changeDirection('topLeft'));
  });

document.getElementById('toTopRight')
  .addEventListener('click', () => {
    store.dispatch(changeDirection('topRight'));
  });
document.getElementById('toBottomLeft')
  .addEventListener('click', () => {
    store.dispatch(changeDirection('bottomLeft'));
  });

document.getElementById('toBottomRight')
  .addEventListener('click', () => {
    store.dispatch(changeDirection('bottomRight'));
  });
