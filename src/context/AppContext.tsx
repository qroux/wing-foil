import createDataContext from './createDataContext';

export enum Actions {
  updateLang = 'UPDATELANG',
  error = 'ERROR',
}

interface Action {
  type: Actions;
  payload: { [key: string]: any };
}

// REDUCER
const AppReducer = (state: { [key: string]: any }, action: Action) => {
  switch (action.type) {
    case Actions.updateLang:
      return { ...state, lang: 'updated' };
    case Actions.error:
      return { ...state, error: 'something went wrong' };
    default:
      return state;
  }
};

// ACTIONS
const updateLang = (dispatch: (action: Action) => void) => async ({
  lang,
}: {
  lang: string;
}) => {
  try {
    dispatch({
      type: Actions.updateLang,
      payload: { lang },
    });
  } catch (err) {
    dispatch({ type: Actions.error, payload: { lang } });
  }
};

export default createDataContext({
  reducer: AppReducer,
  actions: [],
  initialState: {
    lang: 'dz',
  },
});
