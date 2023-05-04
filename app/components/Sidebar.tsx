"use client";
import { useContext } from "react";
import { HeadlineContext } from "@/app/context/headline.context";
import { Link } from "react-scroll";

export default function Sidebar() {
  const { state } = useContext(HeadlineContext);

  const getTextColor = (selectedId: string, currentId: string): string => {
    return selectedId == currentId ? "text-green-500" : "text-white";
  };

  return (
    <nav
      className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full lg:translate-x-0"
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
                  to={headline.id}
                  offset={-100}
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
