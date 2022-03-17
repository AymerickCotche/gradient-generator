import { RootState } from 'src/store';

// eslint-disable-next-line import/prefer-default-export
export const getColors = (state: RootState) => ({
  firstColor: state.firstColor,
  lastColor: state.lastColor,
});