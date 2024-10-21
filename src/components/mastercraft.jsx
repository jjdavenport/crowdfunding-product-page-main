import logo from "./assets/logo-mastercraft.svg";
import { useState } from "react";

const MasterCraft = ({ onClick }) => {
  const [bookmarked, setBookmarked] = useState(false);
  const toggle = () => setBookmarked(!bookmarked);
  return (
    <>
      <header className="relative -mt-20 flex w-10/12 flex-col items-center gap-4 rounded-xl bg-white p-8 py-10 text-center shadow-md">
        <img className="absolute -top-8" src={logo} />
        <h1 className="w-11/12 text-2xl font-bold">
          Mastercraft Bamboo Monitor Riser
        </h1>
        <p className="text-darkGray">
          A beautiful & handcrafted monitor stand to reduce neck and eye strain.
        </p>
        <div className="flex w-full items-center gap-4">
          <button
            className="w-full transform rounded-full bg-moderateCyan p-3 font-bold text-white duration-300 ease-in-out hover:bg-darkCyan"
            onClick={onClick}
          >
            Back this project
          </button>
          <button onClick={toggle} className="group h-16 w-16">
            <svg width="56" height="56" xmlns="http://www.w3.org/2000/svg">
              <g fill="none" fillRule="evenodd">
                <circle
                  className={`${bookmarked ? "fill-darkCyan" : "fill-black"} transform duration-300 ease-in-out group-hover:fill-darkGray`}
                  cx="28"
                  cy="28"
                  r="28"
                />
                <path
                  className={`${bookmarked ? "fill-white" : "fill-darkGray"} transform duration-300 ease-in-out group-hover:fill-white group-hover:opacity-40`}
                  d="M23 19v18l5-5.058L33 37V19z"
                />
              </g>
            </svg>
          </button>
        </div>
      </header>
    </>
  );
};

export default MasterCraft;
