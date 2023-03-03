import { logo, navLink } from "../../constatas";
import { PrimaryBtn } from "../button/primaryBtn";
import { FaSearch } from 'react-icons/fa' 

export default function Navbar() {
  return (
    <nav className="w-full flex  justify-between items-center primary-container">
      <div className="flex">
        <img src={logo} alt="logo" width="135" />
        <ul className="list-none sm:flex hidden justify-center items-center flex-1 pl-[115px] ">
          {navLink.map((Nav, index) => (
            <li
              key={Nav.id}
              className={`font-medium cursor-pointer font-Roboto  text-[14px] ${
                index === navLink.length - 1 ? "mr-0" : "mr-9"
              }`}
            >
              <a href={`${Nav.id}`}>{Nav.title}</a>
            </li>
          ))}
        </ul>
      </div>

      <div className="w-[190px]  flex py-6 justify-between items-center">
        <a href="Login" className="font-Roboto text-[14px] font-medium">Log in</a>
        <PrimaryBtn className="rounded-[4px] text-[14px] font-medium ">Get Started</PrimaryBtn>
        <FaSearch className='text-[13px]' />   
      </div>

    </nav>
  );
}
