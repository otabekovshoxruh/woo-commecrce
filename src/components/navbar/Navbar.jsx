import { logo, navLink } from "../../constatas";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineClose } from "react-icons/md";
import { useState } from "react";
import { PrimaryBtn } from "../button/primaryBtn";
import SearchBar from "../search-bar/search-bar";

export default function Navbar() {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-full flex py-3 justify-between items-center navbar container">
      <img src={logo} alt="logo" />
      <ul className="list-none sm:flex hidden justify-center items-center flex-1 ">
        {navLink.map((Nav, index) => (
          <li
            key={Nav.id}
            className={`font-normal cursor-pointer text-[18px] ${
              index === navLink.length - 1 ? "mr-0" : "mr-7"
            }`}
          >
            <a href={`${Nav.id}`}>{Nav.title}</a>
          </li>
        ))}
      </ul>


      <div className="w-[300px]  flex py-6 justify-around items-center">
        <a href="Login">Log in</a>
        <PrimaryBtn className="rounded-full rodius ">Get Started</PrimaryBtn>
        <SearchBar />
      </div>


      <div
        className={`${
          toggle ? "flex" : "hidden"
        } p-6 bg-[#3730a3] absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl`}
      >
         <ul className="list-none flex  justify-center items-center flex-1 flex-col">
        {navLink.map((Nav, index) => (
          <li
            key={Nav.id}
            className={`font-normal cursor-pointer text-[16px] ${
              index === navLink.length - 1 ? "mr-0" : "mr-10"
            }`}
          >
            <a href={`#${Nav.id}`}>{Nav.title}</a>
          </li>
        ))}
      </ul>
      </div>

      <div className="sm:hidden flex flex-none w-[40px] h-[40]  justify-end items-center">
        <button className="w-[40px]" onClick={() => setToggle((prev) => !prev)}>
          {toggle ? <MdOutlineClose /> : <GiHamburgerMenu />}
        </button>
      </div>
    </nav>
  );
}
