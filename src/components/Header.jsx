import Mainlogo from "/assets/shared/logo.svg";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-black flex justify-between">
      <img src={Mainlogo} />
      <nav className="flex gap-6">
        <NavLink to="/">00 Home</NavLink>
        <NavLink to="/destination">01 Destination</NavLink>
        <NavLink to="/crew">02 Crew</NavLink>
        <NavLink to="/technology">03 Technology</NavLink>
      </nav>
    </header>
  );
}
