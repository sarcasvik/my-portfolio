
import React from "react";
import NavLink from "./navLink";

const MenuOverlay = ({ links }) => {
  return (
    <ul className="flex flex-col gap-2 py-2 items-center ">
      {links.map((link, index) => (
        <li className="border-none shadow-none" key={index}>
          <NavLink href={link.path} title={link.title} />
        </li>
      ))}
    </ul>
  );
};

export default MenuOverlay;