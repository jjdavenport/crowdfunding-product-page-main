import { useEffect, useState } from "react";
import checkIcon from "./assets/icon-check.svg";

const Complete = ({ onClose }) => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    document.body.classList.add("overflow-hidden");
    setActive(true);

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, []);

  return (
    <>
      <div
        className="fixed inset-0 z-40 bg-black bg-opacity-50"
        onClick={onClose}
      ></div>
      <dialog
        className={`fixed inset-0 z-50 m-auto flex w-10/12 max-w-md flex-col items-center gap-8 rounded-lg bg-white p-6 text-center transition-all duration-300 ease-in-out ${
          active ? "scale-100 opacity-100" : "scale-95 opacity-0"
        }`}
      >
        <img
          className="w-16 object-contain md:w-20"
          src={checkIcon}
          alt="Check Icon"
        />
        <div className="flex flex-col items-center gap-3">
          <span className="text-xl font-bold">Thanks for your support!</span>
          <p className="w-11/12 text-darkGray md:w-full">
            Your pledge brings us one step closer to sharing Mastercraft Bamboo
            Monitor Riser worldwide. You will get an email once our campaign is
            completed.
          </p>
        </div>
        <button
          className="transform rounded-full bg-moderateCyan px-8 py-3 text-white duration-300 ease-in-out hover:bg-darkCyan"
          onClick={onClose}
        >
          Got it!
        </button>
      </dialog>
    </>
  );
};

export default Complete;
