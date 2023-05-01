"use client";

import React, { Dispatch, createContext, useReducer } from "react";

type State = {
  headlines: Headline[];
  selectedId: Id;
};

export type Id = "home" | "resume" | "blog" | "techTalk" | "contact";

type Headline = {
  readonly id: Id;
  readonly displayText: string;
};

export const headlines: Headline[] = [
  {
    id: "home",
    displayText: "Home",
  },
  {
    id: "resume",
    displayText: "Resume",
  },
  {
    id: "blog",
    displayText: "Blog",
  },
  {
    id: "techTalk",
    displayText: "Tech Talk",
  },
  {
    id: "contact",
    displayText: "Contact",
  },
];

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
