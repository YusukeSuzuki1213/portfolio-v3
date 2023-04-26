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
    <nav className="bg-black bg-opacity-70 sm:hidden">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between p-6">
        <button
          className="ml-auto"
          type="button"
          aria-controls="navbar-default"
          aria-expanded="false"
          onClick={() => setIsMenuOpened(!isMenuOpened)}
        >
          <FontAwesomeIcon
            className="w-6"
            icon={isMenuOpened ? faXmark : faBars}
          />
        </button>

        <div
          className={`${!isMenuOpened && "hidden"} w-full`}
          id="navbar-default"
        >
          <ul className="flex flex-col mt-6 space-y-4">
            {state.headlines.map((headline, _) => {
              return (
                <li key={headline.id}>
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
