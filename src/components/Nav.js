import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <ul className="grid grid-flow-col font-bold my-2 text-center gap-1">
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
      </ul>
    </nav>
  );
}

export default Nav;
