const Pledge = ({ title, paragraph, pledge, amount, onClick }) => {
  return (
    <>
      <li
        className={`${amount === "0" ? "opacity-40" : "opacity-100"} flex flex-col gap-4 rounded-lg border-[1px] border-darkGray border-opacity-20 p-4 md:gap-6 md:p-6`}
      >
        <div className="flex flex-col md:flex-row md:justify-between">
          <span className="font-bold md:text-xl">{title}</span>
          <span className="font-medium text-moderateCyan">
            Pledge {pledge} or more
          </span>
        </div>
        <p className="text-darkGray">{paragraph}</p>
        <div className="flex flex-col gap-4 md:flex-row md:justify-between md:gap-0">
          <span className="flex items-center gap-1 text-3xl font-bold">
            {amount}
            <span className="text-base font-medium text-darkGray">left</span>
          </span>
          <button
            onClick={onClick}
            className={`${amount === "0" ? "cursor-default bg-darkGray" : "bg-moderateCyan hover:bg-darkCyan"} w-fit transform rounded-full p-3 px-8 font-bold text-white duration-300 ease-in-out`}
          >
            {amount === "0" ? "Out of stock" : "Select Reward"}
          </button>
        </div>
      </li>
    </>
  );
};

export default Pledge;
