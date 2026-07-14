import Mainlogo from "/assets/shared/logo.svg";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="absolute h-20 top-10 left-0 w-full flex items-center justify-between pl-16">
      <span className="flex items-center z-20 w-200">
        <img src={Mainlogo} alt="Logo" className="mx-12 w-12" />

        <div className="h-px hidden lg:flex flex-1 bg-white/25 -mr-8 z-20"></div>
      </span>
      <nav className="relative w-170 flex justify-end z-10 bg-white/5 backdrop-blur-2xl px-10 py-6">
        <ul className="flex gap-12 uppercase">
          <li>
            <NavLink to="/">
              <span className="mr-2 font-semibold">00</span> Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/destination">
              <span className="mr-2 font-semibold">01</span> Destination
            </NavLink>
          </li>
          <li>
            <NavLink to="/crew">
              <span className="mr-2 font-semibold">02</span> Crew
            </NavLink>
          </li>
          <li>
            <NavLink to="/technology">
              <span className="mr-2 font-semibold">03</span> Technology
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
