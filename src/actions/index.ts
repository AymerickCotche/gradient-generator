import { randomHexColor } from '../utils';

export const changeDirection = (value: string) => (
  { type: 'CHANGE_DIRECTION', direction: value }
);
export const randFirst = () => ({ type: 'RANDOM_FIRST_COLOR', newFirstColor: randomHexColor() });
export const randLast = () => ({ type: 'RANDOM_LAST_COLOR', newLastColor: randomHexColor() });
