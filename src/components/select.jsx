import Selected from "./selected";
import closeIcon from "./assets/icon-close-modal.svg";

const Select = ({ onClick, onSelect }) => {
  return (
    <>
      <dialog className="block">
        <div className="flex">
          <h3>Back this project</h3>
          <button onClick={onClick}>
            <img src={closeIcon} />
          </button>
        </div>
        <p>
          Want to support us in bringing Mastercraft Bamboo Monitor Riser out in
          the world?
        </p>
        <ul>
          <Selected
            onClick={onSelect}
            title="Pledge with no reward"
            paragraph="Choose to support us
              without a reward if you simply believe in our project. As a backer, you
              will be signed up to receive product updates via email."
          />
          <Selected
            onClick={onSelect}
            title="Bamboo Stand Pledge $25 or more"
            pledge="25"
            paragraph="You get an ergonomic stand made of natural bamboo.
              You've helped us launch our promotional campaign, and you’ll be added to a
              special Backer member list."
            input="25"
            left="101"
          />
          <Selected
            onClick={onSelect}
            title="Black Edition Stand Pledge $75 or more"
            pledge="75"
            paragraph="You get a Black Special Edition
                  computer stand and a personal thank you. You’ll be added to our Backer
                  member list. Shipping is included."
            input="75"
            left="64"
          />
          <Selected
            onClick={onSelect}
            title="Mahogany Special Edition Pledge $200 or more"
            pledge="200"
            paragraph="You get two Special Edition
                Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be
                added to our Backer member list. Shipping is included."
            left="0"
          />
        </ul>
      </dialog>
    </>
  );
};

export default Select;
