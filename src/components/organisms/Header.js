import React from "react";

export default function Header({ props }) {
  let data = {
    menu: [
      { label: "Home", linkTo: "/", icon: "icon home" },
      { label: "Shop", linkTo: "/shop", icon: "icon shop" },
      { label: "About", linkTo: "/about", icon: "icon about" },
    ],
    branding: {
      icon: "branding",
      label: "",
    },
  };
  return (
    <div>
      <nav className="flex items-center justify-between flex-wrap bg-balck">
        <div className="flex flex-col">
          <div>{data.branding.icon}</div>
          <div>{data.branding.label}</div>
        </div>
      </nav>
    </div>
  );
}
