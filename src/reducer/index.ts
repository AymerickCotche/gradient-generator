import { randomHexColor, generateSpanColor } from '../utils';

const initialState = {
  firstColor: '#e367a4',
  lastColor: '#48b1f3',
  direction: '90deg',
  nbColors: 0,
};

const reducer = (
  state = initialState,
  action:{ type: string,
    newFirstColor?: string,
    newLastColor?: string
  },
) => {
  console.log('je passe');
  switch (action.type) {
    case 'CHANGE_DIRECTION_TO_LEFT':
      return { ...state, direction: '270deg' };
    case 'CHANGE_DIRECTION_TO_RIGHT':
      return { ...state, direction: '90deg' };
    case 'RANDOM_FIRST_COLOR':
      return { ...state, firstColor: action.newFirstColor, nbColors: state.nbColors + 1 };
    case 'RANDOM_LAST_COLOR':
      return { ...state, lastColor: action.newLastColor, nbColors: state.nbColors + 1 };
    default:
      return state;
  }
};

export default reducer;
