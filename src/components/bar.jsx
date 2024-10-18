const Bar = ({ max, value }) => {
  const percent = (value / max) * 100;
  return (
    <>
      <div className="h-4 bg-gray-500">
        <div className="h-4 bg-black" style={{ width: `${percent}%` }}></div>
      </div>
    </>
  );
};

export default Bar;
