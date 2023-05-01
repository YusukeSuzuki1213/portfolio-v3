"use client";
import { useContext } from "react";
import { HeadlineContext, Id } from "@/app/context/headline.context";
import { InView } from "react-intersection-observer";

type Props = {
  id: Id;
};

export const IntersectionObserver = (props: Props) => {
  const { dispatch } = useContext(HeadlineContext);

  return (
    <InView
      id={props.id}
      as="div"
      onChange={(inView, _) => {
        if (!inView) return;
        dispatch({
          type: "BISIBLED",
          payload: { id: props.id },
        });
      }}
    />
  );
};
