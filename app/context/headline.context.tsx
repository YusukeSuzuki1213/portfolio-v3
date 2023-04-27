"use client";

import React, { Dispatch, createContext, useReducer } from "react";
import { ScrollId, ScrollIdType } from "../constants/scrollId";

type State = {
  headlines: Headline[];
  selectedId: number;
};

type Headline = {
  readonly id: number;
  readonly displayText: string;
  readonly scrollId: ScrollIdType;
};

const initialState: State = {
  headlines: [
    {
      id: 1,
      displayText: "Home",
      scrollId: ScrollId.HOME,
    },
    {
      id: 2,
      displayText: "Resume",
      scrollId: ScrollId.RESUME,
    },
    {
      id: 3,
      displayText: "Blog",
      scrollId: ScrollId.BLOG,
    },
    {
      id: 4,
      displayText: "Presentation",
      scrollId: ScrollId.PRESENTATION,
    },
    {
      id: 5,
      displayText: "Contact",
      scrollId: ScrollId.CONTACT,
    },
  ],
  selectedId: 1,
};

type Action = {
  type: "HEADLINE_CLICKED";
  payload: {
    id: number;
  };
};

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case "HEADLINE_CLICKED":
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
