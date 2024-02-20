"use client";

import Link from "next/link";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { navs } from "@/app/constants/navigation";

export default function Header() {
  const [isMenuOpened, setIsMenuOpened] = useState(false);

  return (
    <header>
      <nav className="relative z-50 hidden sm:block">
        <div className="fixed w-full flex justify-end bg-black h-16 items-center px-8 drop-shadow-lg">
          <div className="flex gap-x-12">
            {navs.map((page, _) => {
              return (
                <Link
                  key={page.path}
                  href={page.path}
                  className="text-sm font-semibold leading-6 text-white"
                >
                  {page.displayText}
                </Link>
              );
            })}
          </div>
        </div>
      </nav>

      <nav className="relative z-50 sm:hidden">
        <div className="w-full fixed flex flex-wrap items-center justify-between">
          <div className="w-full bg-black flex justify-between flex-row-reverse h-16 drop-shadow-lg">
            <button
              className="flex items-center justify-center p-4 mr-2"
              type="button"
              aria-controls="navbar-default"
              aria-expanded="false"
              onClick={() => {
                setIsMenuOpened(!isMenuOpened);
              }}
            >
              <FontAwesomeIcon
                className="w-5 h-5 text-white"
                icon={isMenuOpened ? faXmark : faBars}
              />
            </button>
          </div>
          <div
            className={`${
              !isMenuOpened && "hidden"
            } w-full px-6 py-4 bg-black bg-opacity-80`}
          >
            <ul className="flex flex-col">
              {navs.map((page, _) => {
                return (
                  <li key={page.path} className="p-2">
                    <Link
                      href={page.path}
                      onClick={() => setIsMenuOpened(false)}
                    >
                      {page.displayText}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
