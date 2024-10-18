const MobileMenu = () => {
  return (
    <>
      <dialog className="top-20 block w-10/12 rounded-xl">
        <ul className="divide-y-[1px]">
          <li className="p-4">
            <a className="font-bold" href="#">
              About
            </a>
          </li>
          <li className="p-4">
            <a className="font-bold" href="#">
              Discover
            </a>
          </li>
          <li className="p-4">
            <a className="font-bold" href="#">
              Get Started
            </a>
          </li>
        </ul>
      </dialog>
    </>
  );
};

export default MobileMenu;
