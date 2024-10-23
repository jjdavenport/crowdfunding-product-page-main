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
  desktop,
}) => {
  const [inputValue, setInputValue] = useState(input || 0);

  const focus = () => setInputFocus(title);

  const change = (e) => {
    setInputValue(parseInt(e.target.rawValue, 10) || 0);
  };

  const complete = () => {
    onClick(parseInt(inputValue, 10));
  };

  if (desktop) {
    return (
      <>
        <li
          onClick={onSelect}
          className={`${
            amount === "0" ? "pointer-events-none opacity-40" : null
          } ${
            selected
              ? "border-moderateCyan outline outline-[1px] outline-moderateCyan"
              : "border-darkGray border-opacity-40"
          } flex flex-col divide-y-2 rounded-lg border text-start`}
        >
          <button className="group flex flex-col gap-4 p-6 text-left focus:border-none">
            <div className="flex gap-4">
              <div>
                <div className="flex h-5 w-5 transform items-center justify-center rounded-full border border-darkGray border-opacity-20 duration-300 ease-in-out hover:border-opacity-100 group-hover:border-darkCyan">
                  <div
                    className={`${
                      selected ? "scale-100 bg-moderateCyan" : "scale-0"
                    } h-3 w-3 transform rounded-full transition-transform duration-300 ease-in-out`}
                  ></div>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex w-full items-center">
                  <div className="flex w-full justify-between">
                    <div className="flex gap-2">
                      <span className="font-bold text-black transition duration-300 ease-in-out group-hover:text-darkCyan">
                        {title}
                      </span>
                      {pledge && (
                        <span
                          className={`${
                            selected ? "font-bold" : "font-medium"
                          } text-moderateCyan transition duration-300 ease-in-out group-hover:text-darkCyan`}
                        >
                          Pledge ${pledge} or more
                        </span>
                      )}
                    </div>
                    {amount && (
                      <span className="flex items-center gap-2 text-xl font-bold">
                        {amount}
                        <span className="text-base font-medium text-darkGray">
                          left
                        </span>
                      </span>
                    )}
                  </div>
                </div>
                <p className="text-darkGray">{paragraph}</p>
              </div>
            </div>
          </button>
          <div
            className={`transition-max-height overflow-hidden duration-700 ease-in ${
              selected ? "max-h-40" : "max-h-0"
            }`}
          >
            {selected && input && (
              <div className="flex w-full flex-col gap-1 p-6 md:flex-row md:items-center md:justify-between">
                <span className="text-darkGray">Enter your pledge</span>
                <div className="flex gap-4">
                  <label
                    className={`${
                      inputFocus === title
                        ? "border-moderateCyan border-opacity-100"
                        : "border-darkGray border-opacity-40"
                    } flex transform items-center gap-2 rounded-full border-2 px-4 py-2 text-darkGray duration-300 ease-in-out`}
                  >
                    $
                    <Cleave
                      className="w-10 font-bold text-black caret-moderateCyan focus:outline-none"
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
          </div>
        </li>
      </>
    );
  }

  return (
    <>
      <li
        onClick={onSelect}
        className={`${
          amount === "0" ? "pointer-events-none opacity-40" : null
        } ${selected ? "border-moderateCyan outline outline-[1px] outline-moderateCyan" : "border-darkGray border-opacity-40"} flex flex-col gap-4 divide-y-2 rounded-lg border text-start`}
      >
        <button className="group flex flex-col gap-4 p-4 text-left focus:border-none">
          <div className="flex items-center gap-4">
            <div className="flex h-6 w-6 transform items-center justify-center rounded-full border border-darkGray border-opacity-20 duration-300 ease-in-out hover:border-opacity-100 group-hover:border-darkCyan">
              <div
                className={`${
                  selected ? "bg-moderateCyan" : null
                } h-3 w-3 rounded-full`}
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
          <p className="text-darkGray">{paragraph}</p>
          {amount && (
            <span className="flex items-center gap-2 text-2xl font-bold">
              {amount}
              <span className="text-base font-medium text-darkGray">left</span>
            </span>
          )}
        </button>
        <div
          className={`transition-max-height overflow-hidden duration-700 ease-in ${
            selected ? "max-h-40" : "max-h-0"
          }`}
        >
          {selected && input && (
            <div className="flex w-full flex-col gap-2 p-4 text-center md:flex-row md:items-center md:justify-between">
              <span className="text-darkGray">Enter your pledge</span>
              <div className="flex gap-4">
                <label
                  className={`${
                    inputFocus === title
                      ? "border-moderateCyan border-opacity-100"
                      : "border-darkGray border-opacity-40"
                  } flex transform items-center gap-2 rounded-full border-2 px-4 py-2 text-darkGray duration-300 ease-in-out`}
                >
                  $
                  <Cleave
                    className="w-1/2 font-bold text-black caret-moderateCyan focus:outline-none"
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
                  className="w-1/2 rounded-full bg-moderateCyan px-4 py-2 font-bold text-white transition duration-300 ease-in-out hover:bg-darkCyan"
                  onClick={complete}
                >
                  Continue
                </button>
              </div>
            </div>
          )}
        </div>
      </li>
    </>
  );
};

export default Selected;
