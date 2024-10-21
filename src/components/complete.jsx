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
      <dialog className="fixed inset-0 z-50 m-auto flex w-10/12 max-w-md flex-col items-center gap-4 rounded-xl bg-white p-4 text-center">
        <img
          className="w-2/12 object-contain"
          src={checkIcon}
          alt="Check Icon"
        />
        <span className="text-xl font-bold">Thanks for your support!</span>
        <p>
          Your pledge brings us one step closer to sharing Mastercraft Bamboo
          Monitor Riser worldwide. You will get an email once our campaign is
          completed.
        </p>
        <button
          className="rounded-full bg-moderateCyan px-8 py-3 text-white"
          onClick={onClose}
        >
          Got it!
        </button>
      </dialog>
    </>
  );
};

export default Complete;
