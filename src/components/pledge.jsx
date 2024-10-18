const Pledge = ({ title, paragraph, pledge, amount }) => {
  return (
    <>
      <li>
        <span>{title}</span>
        <span>Pledge {pledge} or more</span>
        <p>{paragraph}</p>
        <span>{amount}</span>
        <button>Select Reward</button>
      </li>
    </>
  );
};

export default Pledge;
