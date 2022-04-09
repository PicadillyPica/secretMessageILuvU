import React from "react";
import MenuButton from "./MenuButton/MenuButton";
import MenuContent from "./MenuContent/MenuContent";

export default function Menu() {
  return (
    <div className="menu-wrapper">
        <MenuButton />
        <MenuContent />
    </div>
  );
}
