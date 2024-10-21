const Pledge = ({ title, paragraph, pledge, amount, onClick }) => {
  return (
    <>
      <li
        className={`${amount === "0" ? "opacity-40" : "opacity-100"} flex flex-col gap-4 rounded-lg p-4 outline outline-1 outline-darkGray`}
      >
        <div className="flex flex-col gap-1">
          <span className="font-bold">{title}</span>
          <span className="font-medium text-moderateCyan">
            Pledge {pledge} or more
          </span>
        </div>
        <p className="text-darkGray">{paragraph}</p>
        <span className="text-3xl font-bold">
          {amount} <span className="text-base text-darkGray">left</span>
        </span>
        <button
          onClick={onClick}
          className={`${amount === "0" ? "cursor-default bg-darkGray" : "bg-moderateCyan hover:bg-darkCyan"} w-fit transform rounded-full p-3 px-8 font-bold text-white duration-300 ease-in-out`}
        >
          {amount === "0" ? "Out of stock" : "Select Reward"}
        </button>
      </li>
    </>
  );
};

export default Pledge;
