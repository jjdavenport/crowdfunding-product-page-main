const Selected = ({ title, pledge, paragraph, input, onClick }) => {
  return (
    <>
      <li>
        <div>
          <span>{title}</span>
          {pledge && <span>pledge ${pledge} or more</span>}
          <p>{paragraph}</p>
        </div>
        <div>
          <span>Enter your ledge</span>
          <div>
            <input value={input} type="number" />
            <button onClick={onClick}>Continue</button>
          </div>
        </div>
      </li>
    </>
  );
};

export default Selected;
