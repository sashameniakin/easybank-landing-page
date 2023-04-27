import Button from "./UI/Button";
import { useState } from "react";

export default function Nav() {
  const [menu, setMenu] = useState(false);

  return (
    <>
      <header className="flex justify-between items-center px-6 desktop:px-[165px] h-[80px] bg-pureWhite z-50">
        <img src="./images/logo.svg" alt="logo" />
        <div className="hidden desktop:flex gap-[30px] text-menu text-grayishBlue">
          <p className="hover:underline decoration-green decoration-4 underline-offset-[28px] hover:text-darkBlue hover:cursor-pointer">
            Home
          </p>
          <p className="hover:underline decoration-green decoration-4 underline-offset-[28px] hover:text-darkBlue hover:cursor-pointer">
            About
          </p>
          <p className="hover:underline decoration-green decoration-4 underline-offset-[28px] hover:text-darkBlue hover:cursor-pointer">
            Contact
          </p>
          <p className="hover:underline decoration-green decoration-4 underline-offset-[28px] hover:text-darkBlue hover:cursor-pointer">
            Blog
          </p>
          <p className="hover:underline decoration-green decoration-4 underline-offset-[31px] hover:text-darkBlue hover:cursor-pointer">
            Careers
          </p>
        </div>
        <Button mobile="hidden" desktop="flex" />
        {menu ? (
          <button
            className="flex desktop:hidden"
            onClick={() => setMenu(false)}
          >
            <img src="./images/icons/icon-close.svg" alt="close" />
          </button>
        ) : (
          <button className="flex desktop:hidden" onClick={() => setMenu(true)}>
            <img src="./images/icons/icon-hamburger.svg" alt="menu" />
          </button>
        )}
      </header>
    </>
  );
}
