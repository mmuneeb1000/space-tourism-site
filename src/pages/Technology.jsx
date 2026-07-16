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
      <div className="mx-auto flex h-full max-w-7xl flex-col justify-center">
        <h1
          className="mb-4 mt-20 px-6 uppercase 
        tracking-[4px] lg:px-30 lg:text-[20px] text-center md:text-left"
        >
          <span className="mr-4 font-bold text-white/40">03</span>
          Space launch 101
        </h1>

        <div className="flex justify-center lg:items-center lg:justify-between">
          <div className="flex flex-col gap-4 lg:flex-row lg:gap-12">
            <figure className="lg:hidden">
              <img
                className="z-20 mt-2 mb-2 h-[250px] w-full object-cover"
                src={tech.images.landscape}
                alt={tech.name}
              />
            </figure>

            <nav
              aria-label="Technology"
              className="flex justify-center gap-5 lg:ml-30 lg:flex-col lg:justify-start"
            >
              {data.technology.map((item, index) => (
                <button
                  key={item.name}
                  type="button"
                  onClick={() => setActive(index)}
                  aria-label={`View ${item.name}`}
                  aria-current={active === index ? "page" : undefined}
                  className={`flex h-10 w-10 items-center justify-center rounded-full 
                    border font-serif transition lg:h-20 lg:w-20 lg:text-[32px]
                ${
                  active === index
                    ? "border-white bg-white text-[#0B0D17]"
                    : "border-white/25 text-white hover:border-white"
                }
                focus-visible:outline-none
                focus-visible:ring-2
                focus-visible:ring-white
                focus-visible:ring-offset-4
                focus-visible:ring-offset-[#0B0D17]
              `}
                >
                  <span className="pb-1 lg:pb-2">{index + 1}</span>
                </button>
              ))}
            </nav>

            <article className="max-w-[470px] px-6 text-center mx-auto text-white lg:text-left">
              <header>
                <p className="mb-2 uppercase tracking-[2.7px] text-[#D0D6F9]">
                  The terminology...
                </p>

                <h2 className="mb-2 font-serif text-[32px] uppercase lg:text-[48px]">
                  {tech.name}
                </h2>
              </header>

              <p className="text-[15px] leading-7 text-[#D0D6F9] lg:text-[18px]">
                {tech.description}
              </p>
            </article>
          </div>

          <figure className="hidden lg:block">
            <img
              className="z-20 h-130"
              src={tech.images.portrait}
              alt={tech.name}
            />
          </figure>
        </div>
      </div>
    </section>
  );
}
