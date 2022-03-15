interface CounterState {
  firstColor: string,
  lastColor: string,
  direction: string,
  nbColors: number
}

const initialState: CounterState = {
  firstColor: '#e367a4',
  lastColor: '#48b1f3',
  direction: '90deg',
  nbColors: 0,
};

const reducer = (
  state = initialState,
  action:{ type: string,
    newFirstColor?: string,
    newLastColor?: string,
    direction?: string
  },
) => {
  switch (action.type) {
    case 'CHANGE_DIRECTION':
      return { ...state, direction: action.direction };
    case 'RANDOM_FIRST_COLOR':
      return { ...state, firstColor: action.newFirstColor, nbColors: state.nbColors + 1 };
    case 'RANDOM_LAST_COLOR':
      return { ...state, lastColor: action.newLastColor, nbColors: state.nbColors + 1 };
    default:
      return state;
  }
};

export default reducer;
