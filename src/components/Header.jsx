import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/destination">Destination</NavLink>
        <NavLink to="/crew">Crew</NavLink>
        <NavLink to="/technology">Technology</NavLink>
      </nav>
    </header>
  );
}
