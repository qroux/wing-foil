import React, { createContext, ReactNode, useReducer } from 'react';

interface CreateContext {
  reducer: any;
  actions: any;
  initialState: any;
}

interface Actions {
  [key: string]: () => void;
}

export default ({ reducer, actions, initialState }: CreateContext) => {
  const Context = createContext({});

  const Provider = ({ children }: { children: ReactNode }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const boundActions: Actions = {};

    for (let key in actions) {
      boundActions[key] = actions[key](dispatch);
    }

    return (
      <Context.Provider value={{ state, ...boundActions }}>
        {children}
      </Context.Provider>
    );
  };

  return { Context, Provider };
};
