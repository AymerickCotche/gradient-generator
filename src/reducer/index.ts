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
    case 'CHANGE_DIRECTION_TO_TOP':
      return { ...state, direction: '0deg' };
    case 'CHANGE_DIRECTION_TO_BOTTOM':
      return { ...state, direction: '180deg' };
    case 'CHANGE_DIRECTION_TO_TOPLEFT':
      return { ...state, direction: '315deg' };
    case 'CHANGE_DIRECTION_TO_TOPRIGHT':
      return { ...state, direction: '45deg' };
    case 'CHANGE_DIRECTION_TO_BOTTOMLEFT':
      return { ...state, direction: '225deg' };
    case 'CHANGE_DIRECTION_TO_BOTTOMRIGHT':
      return { ...state, direction: '135deg' };
    case 'RANDOM_FIRST_COLOR':
      return { ...state, firstColor: action.newFirstColor, nbColors: state.nbColors + 1 };
    case 'RANDOM_LAST_COLOR':
      return { ...state, lastColor: action.newLastColor, nbColors: state.nbColors + 1 };
    default:
      return state;
  }
};

export default reducer;
