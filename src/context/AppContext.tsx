import createDataContext from './createDataContext';

export enum Actions {
  toggleLang = 'TOGGLELANG',
  error = 'ERROR',
}

interface Action {
  type: Actions;
  payload?: { [key: string]: any };
}

// REDUCER
const AppReducer = (state: { [key: string]: any }, action: Action) => {
  switch (action.type) {
    case Actions.toggleLang:
      return { ...state, lang: state.lang === 'fr' ? 'en' : 'fr', error: null };
    case Actions.error:
      return { ...state, error: 'something went wrong' };
    default:
      return state;
  }
};

// ACTIONS
const toggleLang = (dispatch: (action: Action) => void) => async () => {
  try {
    dispatch({
      type: Actions.toggleLang,
    });
  } catch (err) {
    dispatch({ type: Actions.error });
  }
};

export const { Provider, Context } = createDataContext({
  reducer: AppReducer,
  actions: {
    toggleLang,
  },
  initialState: {
    lang: 'fr',
  },
});
