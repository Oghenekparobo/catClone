import { useState } from "react";
import { FaFacebook, FaPinterest } from "react-icons/fa";
import { AiOutlineGooglePlus, AiOutlineTwitter } from "react-icons/ai";
const NavMenu = () => {
  const [openMobileMenu, setOpenMobileMenu] = useState(false);
  const showMobileMenu = () => {
    setOpenMobileMenu(true);
  };
  const closeMobileMenu = () => {
    setOpenMobileMenu(false);
  };
  return (
    <div className="">
      <nav className="flex-items__center bg-lime-500 justify-between text-white py-4 px-10">
        <div className="menu">
          {/* mobile hamburger starts here */}
          {/* {open menu} */}
          {openMobileMenu &&  <div
            className="mobile-hamburger block md:hidden"
            onClick={closeMobileMenu}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
</svg>

          </div> }
          {/* {close menu} */}
          {!openMobileMenu &&  <div
            className="mobile-hamburger block md:hidden"
            onClick={showMobileMenu}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
              />
            </svg>
          </div> }

          {/* mobile hamburger ends here */}

          <ul className="hidden space-x-6 md:flex">
            <li>
              <button className="uppercase">home</button>
            </li>
            <li>
              <button className="uppercase">about us</button>
            </li>
            <li>
              <button className="uppercase">store</button>
            </li>
            <li>
              <button className="uppercase">news</button>
            </li>
            <li>
              <button className="uppercase">centers</button>
            </li>
            <li>
              <button className="uppercase">contact us</button>
            </li>
          </ul>
        </div>

        <div className="socials flex space-x-6">
          <div class="social-icons">
            <FaFacebook />
          </div>
          <div class="social-icons">
            <AiOutlineTwitter />
          </div>
          <div class="social-icons">
            <AiOutlineGooglePlus />
          </div>
          <div class="social-icons">
            <FaPinterest />
          </div>
        </div>
      </nav>

      {/* nav mobile menu */}
      {openMobileMenu && (
        <div className="nav-menu__mobile bg-lime-500 border-t-2 border-white py-4 ">
          <ul className="flex flex-col md:hidden text-left text-white divide-y ">
            <li>
              <button className="uppercase p-2">home</button>
            </li>
            <li>
              <button className="uppercase p-2">about us</button>
            </li>
            <li>
              <button className="uppercase p-2">store</button>
            </li>
            <li>
              <button className="uppercase p-2">news</button>
            </li>
            <li>
              <button className="uppercase">centers</button>
            </li>
            <li>
              <button className="uppercase">contact us</button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default NavMenu;
