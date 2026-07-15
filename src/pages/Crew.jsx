import { useState } from "react";
import data from "../data.json";
import bgCrewDesktop from "/assets/crew/background-crew-desktop.jpg";
import bgCrewTablet from "/assets/crew/background-crew-tablet.jpg";
import bgCrewMobile from "/assets/crew/background-crew-mobile.jpg";
import useResponsiveBackground from "../hooks/useResponsiveBackground";

export default function Crew() {
  const [active, setActive] = useState(0);

  const crew = data.crew[active];
  const bg = useResponsiveBackground(bgCrewDesktop, bgCrewTablet, bgCrewMobile);

  return (
    <section
      className="h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="mx-auto flex h-full max-w-7xl flex-col justify-center px-6 lg:px-30">
        <h1
          className="mb-2 mt-25 uppercase text-center md:text-left 
        tracking-[4px] text-[20px]"
        >
          <span className="mr-4 font-bold text-white/40">02</span>
          Meet your crew
        </h1>

        <div className="flex flex-col items-center justify-between gap-10 lg:flex-row">
          <article className="text-center lg:text-left">
            <header>
              <p className="mb-2 font-serif text-lg uppercase text-white/50 lg:text-[24px]">
                {crew.role}
              </p>

              <h2 className="mb-6 font-serif text-2xl uppercase lg:text-5xl">
                {crew.name}
              </h2>
            </header>

            <p className="max-w-[445px] text-[15px] leading-7 text-[#D0D6F9] lg:text-[18px] lg:leading-8">
              {crew.bio}
            </p>
            <nav
              aria-label="Crew members"
              className="mt-6 flex items-center justify-center gap-6 lg:mt-24 lg:justify-start"
            >
              {data.crew.map((member, index) => (
                <button
                  key={member.name}
                  type="button"
                  onClick={() => setActive(index)}
                  aria-label={`View ${member.name}, ${member.role}`}
                  aria-current={active === index ? "page" : undefined}
                  className={`h-3 w-3 rounded-full transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-4 focus-visible:ring-offset-[#0B0D17] ${
                    active === index
                      ? "bg-white"
                      : "bg-white/20 hover:bg-white/50"
                  }`}
                />
              ))}
            </nav>
          </article>

          <figure className="inline-block [mask-image:radial-gradient(circle,black_75%,transparent_100%)]">
            <img
              className="z-20 h-[42vh] md:h-[45vh] lg:h-140"
              src={crew.images.png}
              alt={`${crew.name}, ${crew.role}`}
            />
          </figure>
        </div>
      </div>
    </section>
  );
}
