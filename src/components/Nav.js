import { Link } from "react-router-dom";
import icon from "./images/favicon.png";

function Nav() {
  return (
    <nav>
      <div className="flex items-center my-3">
        <img
          src={icon}
          height={50}
          width={50}
          alt="rockstar-web-design-services"
        />
        <div>
          <p className="font-bold text-2xl px-3">Pricing Calculator</p>
          <p className="font-bold px-3">Sales Department</p>
        </div>
      </div>
      <ul className="grid font-bold my-2 text-center gap-2 grid grid-flow-col">
        <div className="grid gap-2">
          <Link to={"/"}>
            <li className="text-white text-sm cursor-pointer bg-[#007872] rounded cursor-pointer hover:bg-[#008f88] py-3 px-6">
              Design
            </li>
          </Link>
          <Link to={"/build"}>
            <li className="text-white text-sm cursor-pointer bg-[#007872] rounded cursor-pointer hover:bg-[#008f88] py-3 px-6">
              Build
            </li>
          </Link>
        </div>
        <div className="grid gap-2">
          <Link to={"/graphics"}>
            <li className="text-white text-sm cursor-pointer bg-[#007872] rounded cursor-pointer hover:bg-[#008f88] py-3 px-6">
              Graphics
            </li>
          </Link>
          <Link to={"/technical"}>
            <li className="text-white text-sm cursor-pointer bg-[#007872] rounded cursor-pointer hover:bg-[#008f88] py-3 px-6">
              Technical
            </li>
          </Link>
        </div>
        <div className="grid gap-2">
          <Link to={"/consumable"}>
            <li className="text-white text-sm cursor-pointer bg-[#007872] rounded cursor-pointer hover:bg-[#008f88] py-3 px-6">
              Consumable
            </li>
          </Link>
          <Link to={"/"}>
            <li className="text-white text-sm cursor-pointer bg-[#007872] rounded cursor-pointer hover:bg-[#008f88] py-3 px-6">
              Blank
            </li>
          </Link>
        </div>
      </ul>
    </nav>
  );
}

export default Nav;
