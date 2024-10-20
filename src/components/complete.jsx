import checkIcon from "./assets/icon-check.svg";

const Complete = ({ onClose }) => {
  return (
    <>
      <dialog className="top-20 flex w-10/12 flex-col items-center gap-4 rounded-xl p-4 text-center">
        <img className="w-2/12 object-contain" src={checkIcon} />
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
