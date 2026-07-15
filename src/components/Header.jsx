import Mainlogo from "/assets/shared/logo.svg";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import MenuHamburger from "/assets/shared/icon-hamburger.svg";
import MenuClose from "/assets/shared/icon-close.svg";

export default function Header() {
  const [open, setOpen] = useState(false);
  const navItems = [
    { number: "00", label: "Home", path: "/" },
    { number: "01", label: "Destination", path: "/destination" },
    { number: "02", label: "Crew", path: "/crew" },
    { number: "03", label: "Technology", path: "/technology" },
  ];
  return (
    <header
      className="absolute w-full py-4 px-6 flex items-center justify-between 
             lg:h-20 lg:top-10 left-0 lg:pr-0 lg:py-8 lg:pl-16"
    >
      <span className="flex items-center z-20 w-200">
        <img src={Mainlogo} alt="Logo" className="lg:mx-12 w-12" />

        <div className="h-px hidden lg:flex flex-1 bg-white/25 -mr-8 z-20"></div>
      </span>
      <button onClick={() => setOpen(true)} className="md:hidden flex z-20">
        <img className="max-w-20" src={MenuHamburger} />
      </button>
      <nav className="hidden relative w-170 lg:flex justify-end z-10 bg-white/5 backdrop-blur-2xl px-10">
        <ul className="flex gap-12 uppercase py-6">
          {navItems.map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `border-b-4 py-6 ${
                    isActive
                      ? "border-white"
                      : "border-transparent hover:border-white/40"
                  }`
                }
              >
                <span className="mr-2 font-semibold">{item.number}</span>
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
      <aside
        className={`fixed top-0 right-0 z-50 h-screen w-64 bg-white/10 backdrop-blur-3xl 
          transition-transform duration-300 md:hidden ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
      >
        <div className="flex justify-end p-6">
          <button onClick={() => setOpen(false)} className="text-white">
            <img className="max-w-20" src={MenuClose} />
          </button>
        </div>

        <nav className="mt-10 flex flex-col gap-8 px-8 text-white uppercase tracking-[2px] border-r-4 py-2">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `border-r-4 py-2 ${
                  isActive
                    ? "border-white"
                    : "border-transparent hover:border-white/40"
                }`
              }
            >
              <span className="mr-3 font-bold">{item.number}</span>
              {item.label}
            </NavLink>
          ))}
        </nav>
      </aside>
    </header>
  );
}
