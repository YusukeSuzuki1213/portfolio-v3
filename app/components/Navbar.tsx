"use client";

import { HeadlineContext } from "../context/headline.context";
import { useState, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-scroll";

export default function Navbar() {
  const [isMenuOpened, setIsMenuOpened] = useState(false);
  const { state, dispatch } = useContext(HeadlineContext);

  const getTextColor = (selectedId: number, currentId: number): string => {
    return selectedId == currentId ? "text-green-500" : "text-white";
  };
  const linkClicked = (id: number) => {
    setIsMenuOpened(false);
    dispatch({
      type: "HEADLINE_CLICKED",
      payload: { id: id },
    });
  };

  return (
    <nav className="relative sm:hidden z-50">
      <div className="w-full fixed flex flex-wrap items-center justify-between">
        <div className="w-full bg-black flex justify-between flex-row-reverse h-16">
          <button
            className="p-2 m-4 flex items-center justify-center"
            type="button"
            aria-controls="navbar-default"
            aria-expanded="false"
            onClick={() => setIsMenuOpened(!isMenuOpened)}
          >
            <FontAwesomeIcon
              className="w-5 h-5"
              icon={isMenuOpened ? faXmark : faBars}
            />
          </button>
        </div>
        <div
          className={`${
            !isMenuOpened && "hidden"
          } w-full px-6 pb-4 bg-black bg-opacity-80`}
          id="navbar-default"
        >
          <ul className="flex flex-col">
            {state.headlines.map((headline, _) => {
              return (
                <li key={headline.id} className="p-2">
                  <Link
                    className={getTextColor(state.selectedId, headline.id)}
                    onClick={() => linkClicked(headline.id)}
                    to={headline.scrollId}
                    smooth={true}
                    aria-current="page"
                  >
                    {headline.displayText}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
}
