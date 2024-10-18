import checkIcon from "./assets/icon-check.svg";

const Complete = ({ onClick }) => {
  return (
    <>
      <dialog className="block">
        <img src={checkIcon} />
        <span>Thanks for your support!</span>
        <p>
          Your pledge brings us one step closer to sharing Mastercraft Bamboo
          Monitor Riser worldwide. You will get an email once our campaign is
          completed.
        </p>
        <button onClick={onClick}>Got it!</button>
      </dialog>
    </>
  );
};

export default Complete;
