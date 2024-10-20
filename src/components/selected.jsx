import { useState } from "react";
import Cleave from "cleave.js/react";

const Selected = ({
  title,
  pledge,
  paragraph,
  input,
  onClick,
  amount,
  onSelect,
  selected,
}) => {
  const [inputValue, setInputValue] = useState(input || 0);

  const change = (e) => {
    setInputValue(parseInt(e.target.rawValue, 10) || 0);
  };

  const complete = () => {
    onClick(parseInt(inputValue, 10));
  };

  return (
    <>
      <button
        onClick={onSelect}
        className={`${amount === "0" ? "opacity-40" : null} ${selected ? "outline-moderateCyan" : "outline-darkGray"} flex flex-col gap-4 divide-y-2 rounded-lg text-start outline outline-2`}
      >
        <div className="flex flex-col gap-2 p-4">
          <div className="flex items-center gap-2">
            <div className="flex h-4 w-4 items-center justify-center rounded-full outline outline-[1px] outline-darkGray">
              <div
                className={`${selected ? "bg-moderateCyan" : null} h-[10px] w-[10px] rounded-full`}
              ></div>
            </div>
            <span>{title}</span>
          </div>
          {pledge && (
            <span className="font-medium text-moderateCyan">
              Pledge ${pledge} or more
            </span>
          )}
          <p>{paragraph}</p>
          {amount && <span>{amount} left</span>}
        </div>
        {selected && input && (
          <div className="flex w-full flex-col gap-1 p-4">
            <span>Enter your pledge</span>
            <div className="flex gap-4">
              <label className="flex items-center gap-2 rounded-full px-4 py-2 text-darkGray outline outline-2 outline-darkGray">
                $
                <Cleave
                  className="w-20 focus:outline-none"
                  value={inputValue}
                  options={{
                    numeral: true,
                    numeralThousandsGroupStyle: "thousand",
                  }}
                  onChange={change}
                />
              </label>
              <button
                className="rounded-full bg-moderateCyan px-4 py-2 font-bold text-white"
                onClick={complete}
              >
                Continue
              </button>
            </div>
          </div>
        )}
      </button>
    </>
  );
};

export default Selected;
