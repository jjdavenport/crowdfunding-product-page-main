import Bar from "./bar";

const Backed = ({ value, backers }) => {
  const formatValue = value.toLocaleString();
  return (
    <>
      <main className="flex w-10/12 flex-col items-center rounded-lg bg-white p-6 text-center shadow-md md:max-w-screen-md md:p-8">
        <ul className="flex w-full flex-col items-center md:flex-row md:justify-between">
          <li className="flex flex-col items-center gap-1 p-4 text-4xl font-bold">
            ${formatValue}
            <span className="text-base font-medium text-darkGray">
              of $100,000 backed
            </span>
          </li>
          <div className="w-20 border-b border-b-darkGray border-opacity-40 md:h-20 md:w-0 md:border-b-0 md:border-l"></div>
          <li className="flex flex-col items-center gap-1 p-4 text-4xl font-bold">
            {backers}
            <span className="text-base font-medium text-darkGray">
              total backers
            </span>
          </li>
          <div className="w-20 border-b border-b-darkGray border-opacity-40 md:h-20 md:w-0 md:border-b-0 md:border-l"></div>
          <li className="flex flex-col items-center gap-1 p-4 text-4xl font-bold">
            56
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
