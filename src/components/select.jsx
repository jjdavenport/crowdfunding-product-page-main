import { useEffect, useState } from "react";
import Selected from "./selected";
import closeIcon from "./assets/icon-close-modal.svg";

const Select = ({ onClose, onSelect, selected, onComplete }) => {
  const [inputFocus, setInputFocus] = useState(null);

  useEffect(() => {
    document.body.classList.add("overflow-hidden");

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, []);

  return (
    <>
      <div className="fixed inset-0 z-40 bg-black bg-opacity-50"></div>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <dialog
          open
          className="relative flex max-h-[90%] w-full max-w-lg flex-col gap-4 overflow-y-auto rounded-lg bg-white p-8 shadow-lg"
        >
          <div className="flex justify-between">
            <h3 className="text-2xl font-bold">Back this project</h3>
            <button onClick={onClose}>
              <img src={closeIcon} alt="Close" />
            </button>
          </div>
          <p>
            Want to support us in bringing Mastercraft Bamboo Monitor Riser out
            into the world?
          </p>
          <ul className="flex flex-col gap-4">
            <Selected
              selected={selected === "no reward"}
              onSelect={() => onSelect("no reward")}
              onClick={onComplete}
              title="Pledge with no reward"
              paragraph="Choose to support us without a reward if you simply believe in our project. As a backer, you will be signed up to receive product updates via email."
              input={1}
              inputFocus={inputFocus}
              setInputFocus={setInputFocus}
            />
            <Selected
              selected={selected === "bamboo stand"}
              onSelect={() => onSelect("bamboo stand")}
              onClick={onComplete}
              title="Bamboo Stand"
              pledge="25"
              paragraph="You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you’ll be added to a special Backer member list."
              input={25}
              amount={"101"}
              inputFocus={inputFocus}
              setInputFocus={setInputFocus}
            />
            <Selected
              selected={selected === "black edition"}
              onSelect={() => onSelect("black edition")}
              onClick={onComplete}
              title="Black Edition Stand"
              pledge="75"
              paragraph="You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer member list. Shipping is included."
              input={75}
              amount="64"
              inputFocus={inputFocus}
              setInputFocus={setInputFocus}
            />
            <Selected
              title="Mahogany Special Edition Pledge $200 or more"
              pledge="200"
              paragraph="You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added to our Backer member list. Shipping is included."
              amount="0"
            />
          </ul>
        </dialog>
      </div>
    </>
  );
};

export default Select;
