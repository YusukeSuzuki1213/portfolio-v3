"use client";
import { useContext } from "react";
import { HeadlineContext } from "../context/headline.context";
import { Link } from "react-scroll";

export default function Sidebar() {
  const { state, dispatch } = useContext(HeadlineContext);

  const getTextColor = (selectedId: number, currentId: number): string => {
    return selectedId == currentId ? "text-green-500" : "text-white";
  };
  const linkClicked = (id: number) => {
    dispatch({
      type: "HEADLINE_CLICKED",
      payload: { id: id },
    });
  };

  return (
    <nav
      className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
      aria-label="Sidebar"
    >
      <div className="h-full overflow-y-auto bg-black flex justify-center items-center">
        <ul className="space-y-4">
          {state.headlines.map((headline, _) => {
            return (
              <li key={headline.id}>
                <Link
                  className={`flex items-center hover:text-green-500 hover:cursor-pointer ${getTextColor(
                    state.selectedId,
                    headline.id
                  )}`}
                  onClick={() => linkClicked(headline.id)}
                  to={headline.scrollId}
                  smooth={true}
                >
                  <span className="text-base">{headline.displayText}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
