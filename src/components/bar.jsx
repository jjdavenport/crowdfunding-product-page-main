const Bar = ({ max, value }) => {
  const percent = (value / max) * 100;
  return (
    <>
      <div className="bg-darkGray h-4 w-full rounded-full bg-opacity-10">
        <div
          className="bg-moderateCyan h-4 rounded-full"
          style={{ width: `${percent}%` }}
        ></div>
      </div>
    </>
  );
};

export default Bar;
