import logo from "./assets/logo-mastercraft.svg";
import { useState } from "react";

const MasterCraft = ({ onClick, desktop }) => {
  const [bookmarked, setBookmarked] = useState(false);
  const toggle = () => setBookmarked(!bookmarked);

  if (desktop) {
    return (
      <>
        <header className="relative -mt-20 flex w-10/12 flex-col items-center gap-8 rounded-xl bg-white p-8 py-10 text-center shadow-md md:max-w-screen-md">
          <img className="absolute -top-8" src={logo} />
          <div className="flex w-full flex-col gap-4">
            <h1 className="w-11/12 text-xl font-bold md:w-full md:text-3xl">
              Mastercraft Bamboo Monitor Riser
            </h1>
            <p className="text-darkGray">
              A beautiful & handcrafted monitor stand to reduce neck and eye
              strain.
            </p>
          </div>
          <div className="flex w-full items-center justify-between gap-4">
            <button
              className="w-fit transform rounded-full bg-moderateCyan p-3 font-bold text-white duration-300 ease-in-out hover:bg-darkCyan md:h-14 md:w-52"
              onClick={onClick}
            >
              Back this project
            </button>
            <button
              onClick={toggle}
              className="group flex items-center rounded-full bg-darkGray bg-opacity-10 font-bold text-darkGray"
            >
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
              <span
                className={`${bookmarked ? "w-32 text-moderateCyan" : "w-28 text-darkGray"} transform font-bold duration-300 ease-in-out`}
              >
                {bookmarked ? "Bookmarked" : "Bookmark"}
              </span>
            </button>
          </div>
        </header>
      </>
    );
  }

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
