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
  setInputFocus,
  inputFocus,
}) => {
  const [inputValue, setInputValue] = useState(input || 0);

  const focus = () => setInputFocus(title);

  const change = (e) => {
    setInputValue(parseInt(e.target.rawValue, 10) || 0);
  };

  const complete = () => {
    onClick(parseInt(inputValue, 10));
  };

  return (
    <>
      <li
        onClick={onSelect}
        className={`${
          amount === "0" ? "pointer-events-none opacity-40" : null
        } ${selected ? "outline-moderateCyan" : "outline-darkGray"} flex flex-col gap-4 divide-y-2 rounded-lg text-start outline outline-2`}
      >
        <button className="group flex flex-col gap-4 p-4 text-left">
          <div className="flex items-center gap-4">
            <div className="flex h-4 w-4 items-center justify-center rounded-full outline outline-1 outline-darkGray group-hover:outline-darkCyan">
              <div
                className={`${
                  selected ? "bg-moderateCyan" : null
                } h-[10px] w-[10px] rounded-full`}
              ></div>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-black transition duration-300 ease-in-out group-hover:text-darkCyan">
                {title}
              </span>
              {pledge && (
                <span className="font-bold text-moderateCyan transition duration-300 ease-in-out group-hover:text-darkCyan">
                  Pledge ${pledge} or more
                </span>
              )}
            </div>
          </div>
          <p>{paragraph}</p>
          {amount && (
            <span className="flex items-center gap-2 text-2xl font-bold">
              {amount}{" "}
              <span className="text-base font-medium text-darkGray">left</span>
            </span>
          )}
        </button>
        {selected && input && (
          <div className="flex w-full flex-col gap-1 p-4">
            <span>Enter your pledge</span>
            <div className="flex gap-4">
              <label
                className={`${inputFocus === title ? "outline-moderateCyan" : "outline-darkGray"} flex items-center gap-2 rounded-full px-4 py-2 text-darkGray outline outline-2`}
              >
                $
                <Cleave
                  className="w-20 font-bold text-black caret-moderateCyan focus:outline-none"
                  value={inputValue}
                  options={{
                    numeral: true,
                    numeralThousandsGroupStyle: "thousand",
                  }}
                  onChange={change}
                  onFocus={focus}
                />
              </label>
              <button
                className="rounded-full bg-moderateCyan px-4 py-2 font-bold text-white transition duration-300 ease-in-out hover:bg-darkCyan"
                onClick={complete}
              >
                Continue
              </button>
            </div>
          </div>
        )}
      </li>
    </>
  );
};

export default Selected;
