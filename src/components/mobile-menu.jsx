import { useTransition, animated } from "@react-spring/web";

const MobileMenu = ({ menu }) => {
  const transitions = useTransition(menu, {
    from: { transform: "scale(0.95)", opacity: 0 },
    enter: { transform: "scale(1)", opacity: 1 },
    leave: { transform: "scale(0.95)", opacity: 0 },
    config: { tension: 170, friction: 26 },
  });

  return transitions(
    (styles, item) =>
      item && (
        <>
          <animated.div
            className="fixed inset-0 z-40 bg-black bg-opacity-50"
            style={{ opacity: styles.opacity }}
          />
          <animated.div
            className="absolute z-50 flex w-full flex-col"
            style={styles}
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
          </animated.div>
        </>
      ),
  );
};

export default MobileMenu;
