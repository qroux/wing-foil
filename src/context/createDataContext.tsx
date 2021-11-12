import { initial } from 'cypress/types/lodash';
import React, { createContext, ReactNode, useReducer } from 'react';

interface CreateContext {
  reducer: any;
  actions: any;
  initialState: AppStates;
}

interface Actions {
  [key: string]: () => void;
}

interface AppStates {
  [key: string]: any;
}

type AppContext = {
  state: AppStates;
  actions: Actions;
};

export default ({ reducer, actions, initialState }: CreateContext) => {
  const Context = createContext({} as AppContext);

  const Provider = ({ children }: { children: ReactNode }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const boundActions: Actions = {};

    for (let key in actions) {
      boundActions[key] = actions[key](dispatch);
    }

    return (
      <Context.Provider value={{ state, actions: boundActions } as AppContext}>
        {children}
      </Context.Provider>
    );
  };

  return { Context, Provider };
};
