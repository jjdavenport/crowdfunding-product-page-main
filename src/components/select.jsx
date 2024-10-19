import Selected from "./selected";
import closeIcon from "./assets/icon-close-modal.svg";
import { useState } from "react";

const Select = ({ onClick, onSelect }) => {
  const [selected, setSelected] = useState(null);
  const select = (i) => setSelected(i);
  return (
    <>
      <dialog className="top-20 flex w-10/12 flex-col gap-4 rounded-lg p-8">
        <div className="flex justify-between">
          <h3 className="text-2xl font-bold">Back this project</h3>
          <button onClick={onClick}>
            <img src={closeIcon} />
          </button>
        </div>
        <p>
          Want to support us in bringing Mastercraft Bamboo Monitor Riser out in
          the world?
        </p>
        <ul className="flex flex-col gap-4">
          <Selected
            selected={selected === "no reward"}
            onSelect={() => select("no reward")}
            onClick={onSelect}
            title="Pledge with no reward"
            paragraph="Choose to support us
              without a reward if you simply believe in our project. As a backer, you
              will be signed up to receive product updates via email."
            input="1"
          />
          <Selected
            selected={selected === "bamboo stand"}
            onSelect={() => select("bamboo stand")}
            onClick={onSelect}
            title="Bamboo Stand"
            pledge="25"
            paragraph="You get an ergonomic stand made of natural bamboo.
              You've helped us launch our promotional campaign, and you’ll be added to a
              special Backer member list."
            input="25"
            amount="101"
          />
          <Selected
            selected={selected === "black edition"}
            onSelect={() => select("black edition")}
            onClick={onSelect}
            title="Black Edition Stand"
            pledge="75"
            paragraph="You get a Black Special Edition
                  computer stand and a personal thank you. You’ll be added to our Backer
                  member list. Shipping is included."
            input="75"
            amount="64"
          />
          <Selected
            title="Mahogany Special Edition Pledge $200 or more"
            pledge="200"
            paragraph="You get two Special Edition
                Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be
                added to our Backer member list. Shipping is included."
            amount="0"
          />
        </ul>
      </dialog>
    </>
  );
};

export default Select;
