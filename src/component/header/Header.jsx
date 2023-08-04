import React, { useState } from "react";
import { MenuIcon } from "@heroicons/react/outline";

import { Drawer } from "antd";
const logo = "src/assets/logo@2x.png";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState("right");
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  const onChange = (e) => {
    setPlacement(e.target.value);
  };
  return (
    <div className="flex justify-evenly items-center py-6">
      <div>
        {/* <div className="md:block xs:hidden lg:hidden">
          <button>
            <MenuIcon className="h-6 w-6" />
          </button>
        </div> */}
        <img className="h-20 " src={logo} alt="logo" />
      </div>
      <div>
        <nav className="space-x-10 lg:flex hidden">
          <a href="#">About Us</a>
          <a href="#">Product</a>
          <a href="#">Pricing</a>
          <a href="#">Contact</a>
          <a href="#">Download</a>
        </nav>
      </div>
      <div className=" hidden md:block">
        <div className=" flex items-center">
          <p className="px-[40px]">Login</p>
          <button className="px-[30px] py-4 rounded-md border ml-0 border-gray-600">
            Try for Free
          </button>
        </div>
      </div>
      <div className="block md:hidden">
        <button onClick={showDrawer}>
          <MenuIcon className="h-6 w-6" />
        </button>
      </div>
      <Drawer
        className="parent"
        title="Basic Drawer"
        placement={placement}
        closable={false}
        onClose={onClose}
        open={open}
        key={placement}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
    </div>
  );
};

export default Header;
