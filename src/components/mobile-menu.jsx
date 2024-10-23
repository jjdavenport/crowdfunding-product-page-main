import { useEffect, useState } from "react";

const MobileMenu = () => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    document.body.classList.add("overflow-hidden");
    setActive(true);

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, []);

  return (
    <>
      <div className="fixed inset-0 z-40 bg-black bg-opacity-50"></div>
      <div
        className={`absolute z-50 flex w-full flex-col transition-all duration-300 ease-in-out ${
          active ? "scale-100 opacity-100" : "scale-95 opacity-0"
        }`}
      >
        <dialog className="top-20 flex w-10/12 rounded-lg">
          <ul className="flex flex-1 flex-col divide-y-[1px]">
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
      </div>
    </>
  );
};

export default MobileMenu;
