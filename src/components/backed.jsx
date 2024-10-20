import Bar from "./bar";

const Backed = ({ value }) => {
  const formatValue = value.toLocaleString();
  return (
    <>
      <main className="flex w-10/12 flex-col items-center rounded-lg p-4 text-center shadow-md">
        <ul className="flex w-full flex-col items-center divide-y-2 divide-gray-300">
          <li className="flex w-5/12 flex-col items-center p-4 text-2xl font-bold">
            ${formatValue} <span className="text-base">of $100,000 backed</span>
          </li>
          <li className="flex w-5/12 flex-col items-center p-4 text-2xl font-bold">
            5,007 <span className="text-base">total backers</span>
          </li>
          <li className="flex w-5/12 flex-col items-center p-4 text-2xl font-bold">
            56 <span className="text-base">days left</span>
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
