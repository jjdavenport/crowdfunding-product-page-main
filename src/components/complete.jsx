import { useEffect } from "react";
import checkIcon from "./assets/icon-check.svg";

const Complete = ({ onClose }) => {
  useEffect(() => {
    document.body.classList.add("overflow-hidden");

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
      <dialog className="fixed inset-0 z-50 m-auto flex w-10/12 max-w-md flex-col items-center gap-8 rounded-lg bg-white p-8 text-center">
        <img
          className="w-2/12 object-contain"
          src={checkIcon}
          alt="Check Icon"
        />

        <div className="flex flex-col gap-3">
          <span className="text-xl font-bold">Thanks for your support!</span>
          <p className="text-darkGray">
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
