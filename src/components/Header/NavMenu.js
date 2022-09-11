const NavMenu = () => {
  return (
    <nav className="flex bg-lime-500 justify-between text-white py-4">
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

      <div className="menu">
        <ul className="flex">
          <li>
            <button>home</button>
          </li>
          <li>
            <button>about us</button>
          </li>
          <li>
            <button>store</button>
          </li>
          <li>
            <button>news</button>
          </li>
          <li>
            <button>centers</button>
          </li>
          <li>
            <button>contact us</button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavMenu;
