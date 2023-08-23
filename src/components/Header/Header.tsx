import React from "react";
import { MobileHeader } from "./MobileHeader";
import { DesktopHeader } from "./DesktopHeader";

const Header = () => {
  return (
    <div className="">
      <MobileHeader />
      <DesktopHeader />
    </div>
  );
};

export default Header;
