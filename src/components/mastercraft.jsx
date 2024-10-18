import logo from "./assets/logo-mastercraft.svg";
import bookmarkIcon from "./assets/icon-bookmark.svg";
import { useState } from "react";

const MasterCraft = ({ onClick }) => {
  const [bookmarked, setBookmarked] = useState(false);
  const toggle = () => setBookmarked(!bookmarked);
  return (
    <>
      <header className="relative -mt-20 flex w-10/12 flex-col items-center gap-4 rounded-xl bg-white p-8 text-center shadow-md">
        <img className="absolute -top-8" src={logo} />
        <h1 className="text-2xl font-bold">Mastercraft Bamboo Monitor Riser</h1>
        <p>
          A beautiful & handcrafted monitor stand to reduce neck and eye strain.
        </p>
        <div className="flex w-full items-center gap-4">
          <button
            className="bg-moderateCyan w-full rounded-full p-3 font-bold text-white"
            onClick={onClick}
          >
            Back this project
          </button>
          <button
            onClick={toggle}
            className={`${bookmarked ? "bg-black" : "bg-white"} h-16 w-16`}
          >
            <img src={bookmarkIcon} />
          </button>
        </div>
      </header>
    </>
  );
};

export default MasterCraft;
