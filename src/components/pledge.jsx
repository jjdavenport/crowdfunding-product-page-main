const Pledge = ({ title, paragraph, pledge, amount, onClick }) => {
  return (
    <>
      <li
        className={`${amount === "0" ? "opacity-40" : "opacity-100"} outline-1" flex flex-col gap-4 rounded-lg p-4 outline outline-darkGray`}
      >
        <div className="flex flex-col gap-1">
          <span className="font-bold">{title}</span>
          <span className="font-bold text-moderateCyan">
            Pledge {pledge} or more
          </span>
        </div>
        <p>{paragraph}</p>
        <span className="text-3xl font-bold">
          {amount} <span className="text-base text-darkGray">left</span>
        </span>
        <button
          onClick={onClick}
          className={`${amount === "0" ? "cursor-default bg-darkGray" : "bg-moderateCyan"} w-fit rounded-full p-3 px-8 font-bold text-white`}
        >
          {amount === "0" ? "Out of stock" : "Select Reward"}
        </button>
      </li>
    </>
  );
};

export default Pledge;
