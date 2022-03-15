import { randomHexColor } from '../utils';

export const RANDOM_FIRST_COLOR = 'RANDOM_FIRST_COLOR';
export const RANDOM_LAST_COLOR = 'RANDOM_LAST_COLOR';
export const CHANGE_DIRECTION = 'CHANGE_DIRECTION';

export const randFirst = () => ({ type: RANDOM_FIRST_COLOR, newFirstColor: randomHexColor() });
export const randLast = () => ({ type: RANDOM_LAST_COLOR , newLastColor: randomHexColor() });
export const changeDirection = (value: string) => (
  { type: CHANGE_DIRECTION, direction: value }
);
