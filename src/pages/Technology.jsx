import { useState } from "react";
import data from "../data.json";
import bgTechnologyDesktop from "/assets/technology/background-technology-desktop.jpg";
import bgTechnologyTablet from "/assets/technology/background-technology-tablet.jpg";
import bgTechnologyMobile from "/assets/technology/background-technology-mobile.jpg";
import useResponsiveBackground from "../hooks/useResponsiveBackground";

export default function Technology() {
  const [active, setActive] = useState(0);

  const tech = data.technology[active];
  const bg = useResponsiveBackground(
    bgTechnologyDesktop,
    bgTechnologyTablet,
    bgTechnologyMobile,
  );
  return (
    <section
      className="h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <h1
        className="lg:pt-40 pt-25 text-center lg:text-left
       uppercase lg:ml-70 text-xl"
      >
        <span className="text-white/40 font-semibold mr-2">03</span> Space
        Launch 101
      </h1>

      <div className="lg:ml-40 flex justify-center lg:items-center lg:justify-between">
        <div className="flex flex-col lg:flex-row lg:gap-12 gap-4">
          <img
            className="h-[250px] object-cover mt-6 mb-2 lg:hidden z-20 "
            src={tech.images.portrait}
            alt={tech.name}
          />
          <div className="flex lg:flex-col justify-center lg:justify-start gap-5 lg:ml-30">
            {data.technology.map((_, index) => (
              <button
                key={index}
                onClick={() => setActive(index)}
                className={`flex h-10 w-10 lg:h-20 lg:w-20 items-center justify-center
                cursor-pointer rounded-full border font-serif lg:text-[32px] transition ${
                  active === index
                    ? "bg-white text-[#0B0D17] border-white"
                    : "border-white/25 text-white hover:border-white"
                }`}
              >
                <span className="pb-1 lg:pb-2">{index + 1}</span>
              </button>
            ))}
          </div>

          <div className="max-w-[470px] text-white text-center lg:text-left px-6">
            <h2 className="mb-2 text-[16px] uppercase tracking-[2.7px] text-[#D0D6F9]">
              The terminology...
            </h2>

            <h1 className="mb-2 font-serif text-[32px] lg:text-[48px] uppercase">
              {tech.name}
            </h1>

            <p className="lg:text-[18px] text-[15px] leading-7 text-[#D0D6F9]">
              {tech.description}
            </p>
          </div>
        </div>
        <img
          className="hidden lg:flex lg:h-130 z-20 "
          src={tech.images.portrait}
          alt={tech.name}
        />
      </div>
    </section>
  );
}
