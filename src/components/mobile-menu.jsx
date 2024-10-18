import closeIcon from "./assets/icon-close-modal.svg";

const MobileMenu = ({ onClick }) => {
  return (
    <>
      <dialog className="block">
        <button onClick={onClick}>
          <img src={closeIcon} />
        </button>
        <ul>
          <li>
            <a href="#"></a>
          </li>
          <li>
            <a href="#"></a>
          </li>
          <li>
            <a href="#"></a>
          </li>
        </ul>
      </dialog>
    </>
  );
};

export default MobileMenu;
