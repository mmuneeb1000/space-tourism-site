import { NavLink } from "react-router-dom";

const links = [
  { name: "Home", path: "/" },
  { name: "Destination", path: "/destination" },
  { name: "Crew", path: "/crew" },
  { name: "Technology", path: "/technology" },
];

export default function Navbar() {
  return (
    <nav className="flex gap-8 p-6 bg-slate-900 text-white">
      {links.map((link) => (
        <NavLink
          key={link.path}
          to={link.path}
          end={link.path === "/"}
          className={({ isActive }) =>
            isActive
              ? "border-b-2 border-white pb-1"
              : "text-gray-400 hover:text-white"
          }
        >
          {link.name}
        </NavLink>
      ))}
    </nav>
  );
}
