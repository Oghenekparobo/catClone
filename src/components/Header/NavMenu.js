import { FaFacebook, FaPinterest } from "react-icons/fa";
import { AiOutlineGooglePlus, AiOutlineTwitter } from "react-icons/ai";
const NavMenu = () => {
  return (
    <nav className="flex-items__center bg-lime-500 justify-between text-white py-4 px-10">
      <div className="men">
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
        <div class="rounded-full border border-white text-2xl p-2">
          <FaFacebook />
        </div>
        <div class="rounded-full border border-white text-2xl p-2">
          <AiOutlineTwitter />
        </div>
        <div class="rounded-full border border-white text-2xl p-2">
          <AiOutlineGooglePlus />
        </div>
        <div class="rounded-full border border-white text-2xl p-2">
          <FaPinterest />
        </div>
      </div>
    </nav>
  );
};

export default NavMenu;
