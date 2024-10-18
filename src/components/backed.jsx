import Bar from "./bar";

const Backed = () => {
  return (
    <>
      <main>
        <ul>
          <li>
            $89,914 <span>of $100,000 backed</span>
          </li>
          <li>
            5,007<span>total backers</span>
          </li>
          <li>
            56
            <span>days left</span>
            <Bar value={89914} max={100000} />
          </li>
        </ul>
      </main>
    </>
  );
};

export default Backed;
