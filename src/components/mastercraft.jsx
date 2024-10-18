import logo from "./assets/logo-mastercraft.svg";
import bookmarkIcon from "./assets/icon-bookmark.svg";

const MasterCraft = ({ onClick }) => {
  return (
    <>
      <header>
        <img src={logo} />
        <h1>Mastercraft Bamboo Monitor Riser</h1>
        <p>
          A beautiful & handcrafted monitor stand to reduce neck and eye strain.
        </p>
        <button onClick={onClick}>Back this project</button>
        <button>
          <img src={bookmarkIcon} />
        </button>
      </header>
    </>
  );
};

export default MasterCraft;
