import Link from "next/link";
import { useState } from "react";
import { VscMenu, VscClose } from "react-icons/vsc";

const Header = () => {
  const [isNavShow, setIsNavShow] = useState(false);

  const clickHandler = () => {
    setIsNavShow(!isNavShow);
  };

  return (
    <div className="w-full bg-white shadow-sm">
      <nav className="container mx-auto xl:max-w-screen-xl flex flex-col items-center sm:flex-row sm:justify-between sm:items-center p-4 sm:px-4 sm:py-2 mb-6">
        <div className="w-full sm:w-max flex items-center justify-between">
          <h1 className="font-bold">TodoList App</h1>
          {isNavShow ? (
            <VscClose
              className={`w-8 h-8 sm:hidden cursor-pointer`}
              onClick={clickHandler}
            />
          ) : (
            <VscMenu
              className={`w-6 h-6 sm:hidden cursor-pointer`}
              onClick={clickHandler}
            />
          )}
        </div>
        <ul
          className={`flex flex-col gap-y-1 w-full sm:w-max text-center sm:flex sm:flex-row sm:items-center sm:gap-x-6  ${
            isNavShow ? "mt-2" : "hidden"
          }`}
        >
          <li className="hover:bg-gray-100 transition-all duration-150 p-2 rounded cursor-pointer">
            <Link href="/">Home</Link>
          </li>
          <li className="hover:bg-gray-100 transition-all duration-150 p-2 rounded cursor-pointer">
            <Link href="/todos">Todos</Link>
          </li>
          <li className="hover:bg-gray-100 transition-all duration-150 p-2 rounded cursor-pointer">
            <Link href="/profile">Profile</Link>
          </li>
          <li className="hover:bg-gray-100 transition-all duration-150 p-2 rounded cursor-pointer">
            <Link href="#">Sign in</Link>
          </li>
          <li className="hover:bg-gray-100 transition-all duration-150 p-2 rounded cursor-pointer">
            <Link href="#">Sign out</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
