import Bar from "./bar";

const Backed = ({ value, backers }) => {
  const formatValue = value.toLocaleString();
  return (
    <>
      <main className="flex w-10/12 flex-col items-center rounded-lg bg-white p-6 text-center shadow-md">
        <ul className="flex w-full flex-col items-center">
          <li className="flex flex-col items-center p-4 text-3xl font-bold">
            ${formatValue}
            <span className="text-base font-medium text-darkGray">
              of $100,000 backed
            </span>
          </li>
          <div className="w-2/12 border-b-[1px] border-b-darkGray"></div>
          <li className="flex flex-col items-center p-4 text-3xl font-bold">
            {backers}
            <span className="text-base font-medium text-darkGray">
              total backers
            </span>
          </li>
          <div className="w-2/12 border-b-[1px] border-b-darkGray"></div>
          <li className="flex flex-col items-center p-4 text-3xl font-bold">
            56{" "}
            <span className="text-base font-medium text-darkGray">
              days left
            </span>
          </li>
        </ul>
        <div className="mt-4 w-full">
          <Bar value={value} max={100000} />
        </div>
      </main>
    </>
  );
};

export default Backed;
