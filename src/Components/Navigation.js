import React from "react";
import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import { useSpring, animated } from "@react-spring/web";

import NavigationMenu from "./NavigationMenu.js";

function Navigation() {
  const [showMenu, setShowMenu] = useState(false);

  // const [{ scale, opacity }] = useSpring(
  //   () => ({
  //     reverse: showMenu,
  //     from: { factor: 10, opacity: 0, scale: 0.9 },
  //     to: { factor: 150, opacity: 1, scale: 1 },
  //     config: { duration: 200 },
  //   }),
  //   [showMenu]
  // );
  let menu = null;
  let menuBackground = null;
  if (showMenu) {
    menu = (
      <div
        onClick={() => setShowMenu(false)}
        className="fixed bg-white top-0 left-0 w-4/5 h-full shadow z-2"
      >
        <span className="text-center font-bold text-4xl mb-5 mt-5">
          Page menus
        </span>
        <NavigationMenu></NavigationMenu>
      </div>
    );

    menuBackground = (
      <div
        className="fixed bg-black top-0 left-0 w-full h-full opacity-85 z-2"
        onClick={() => setShowMenu(false)}
      ></div>
    );
  }
  return (
    <nav>
      <span className="text-xl">
        <FontAwesomeIcon icon={faBars} onClick={() => setShowMenu(!showMenu)} />
      </span>

      {/* {
        <div onClick={() => setShowMenu(!showMenu)} style={{ opacity: "0.6" }}>
          <animated.div
            className="fixed bg-black top-0 left-0 w-full h-full"
            style={{ scale, opacity }}
          ></animated.div>
        </div>
      }
      {
        <div>
          <animated.div
            className="fixed bg-white top-0 left-0 w-4/5 h-full shadow"
            style={{ scale, opacity }}
          >
            
          </animated.div>
        </div>
      } */}
      {menuBackground}
      {menu}
    </nav>
  );
}
export default Navigation;
