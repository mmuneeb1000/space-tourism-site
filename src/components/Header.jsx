import Mainlogo from "/assets/shared/logo.svg";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-black flex justify-between">
      <img src={Mainlogo} />
      <nav className="flex gap-6">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/destination">Destination</NavLink>
        <NavLink to="/crew">Crew</NavLink>
        <NavLink to="/technology">Technology</NavLink>
      </nav>
    </header>
  );
}
