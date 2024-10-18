const Pledge = ({ title, paragraph, pledge, amount }) => {
  return (
    <>
      <li
        className={`${amount === "0" ? "opacity-40" : "opacity-100"} outline-darkGray outline-1" flex flex-col gap-4 rounded-lg p-4 outline`}
      >
        <div className="flex flex-col gap-1">
          <span className="font-bold">{title}</span>
          <span className="text-moderateCyan font-bold">
            Pledge {pledge} or more
          </span>
        </div>
        <p>{paragraph}</p>
        <span className="text-3xl font-bold">
          {amount} <span className="text-darkGray text-base">left</span>
        </span>
        <button
          className={`${amount === "0" ? "bg-darkGray cursor-default" : "bg-moderateCyan"} w-fit rounded-full p-3 px-8 font-bold text-white`}
        >
          {amount === "0" ? "Out of stock" : "Select Reward"}
        </button>
      </li>
    </>
  );
};

export default Pledge;
