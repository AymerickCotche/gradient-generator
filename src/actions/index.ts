import { randomHexColor } from '../utils';

export const changeDirectionToRight = () => ({ type: 'CHANGE_DIRECTION_TO_RIGHT' });
export const changeDirectionToLeft = () => ({ type: 'CHANGE_DIRECTION_TO_LEFT' });
export const changeDirection = (direction: string) => {
  switch (direction) {
    case 'right':
      return { type: 'CHANGE_DIRECTION_TO_RIGHT' };
    case 'left':
      return { type: 'CHANGE_DIRECTION_TO_LEFT' };
    case 'top':
      return { type: 'CHANGE_DIRECTION_TO_TOP' };
    case 'bottom':
      return { type: 'CHANGE_DIRECTION_TO_BOTTOM' };
    case 'topLeft':
      return { type: 'CHANGE_DIRECTION_TO_TOPLEFT' };
    case 'topRight':
      return { type: 'CHANGE_DIRECTION_TO_TOPRIGHT' };
    case 'bottomLeft':
      return { type: 'CHANGE_DIRECTION_TO_BOTTOMLEFT' };
    case 'bottomRight':
      return { type: 'CHANGE_DIRECTION_TO_BOTTOMRIGHT' };
    default:
      return { type: 'CHANGE_DIRECTION_TO_RIGHT' };
  }
};
export const randFirst = () => ({ type: 'RANDOM_FIRST_COLOR', newFirstColor: randomHexColor() });
export const randLast = () => ({ type: 'RANDOM_LAST_COLOR', newLastColor: randomHexColor() });
