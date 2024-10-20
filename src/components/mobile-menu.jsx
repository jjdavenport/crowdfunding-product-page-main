import { useEffect } from "react";

const MobileMenu = ({ onClose }) => {
  useEffect(() => {
    document.body.classList.add("overflow-hidden");

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, []);

  return (
    <>
      <div
        className="fixed inset-0 z-40 bg-black bg-opacity-50"
        onClick={onClose}
      ></div>
      <dialog className="top-20 z-50 block w-10/12 rounded-xl">
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
