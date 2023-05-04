"use client";

import { Dispatch, createContext, useReducer } from "react";
import { Headline, Id, headlines } from "../constants/headline";

type State = {
  headlines: Headline[];
  selectedId: Id;
};

const initialState: State = {
  headlines: headlines,
  selectedId: "home",
};

type Action = {
  type: "BISIBLED";
  payload: {
    id: Id;
  };
};

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case "BISIBLED":
      return {
        ...state,
        selectedId: action.payload.id,
      };
  }
};

export const HeadlineContext = createContext<{
  state: State;
  dispatch: Dispatch<Action>;
}>({ state: initialState, dispatch: () => null });

export const HeadlineContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <HeadlineContext.Provider value={{ state, dispatch }}>
      {children}
    </HeadlineContext.Provider>
  );
};
