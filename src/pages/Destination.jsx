import { useState } from "react";
import data from "../data.json";
import bgDestinationDesktop from "/assets/destination/background-destination-desktop.jpg";
import bgDestinationTablet from "/assets/destination/background-destination-tablet.jpg";
import bgDestinationMobile from "/assets/destination/background-destination-mobile.jpg";
import useResponsiveBackground from "../hooks/useResponsiveBackground";

export default function Destination() {
  const [active, setActive] = useState(0);

  const destination = data.destinations[active];
  const bg = useResponsiveBackground(
    bgDestinationDesktop,
    bgDestinationTablet,
    bgDestinationMobile,
  );
  return (
    <section
      className="h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="mx-auto flex h-full max-w-7xl flex-col justify-center px-6 lg:px-30">
        <h1
          className="mb-4 lg:mb-20 mt-20 uppercase text-center
         md:text-left tracking-[4px] lg:text-[20px]"
        >
          <span className="mr-4 font-bold text-white/40">01</span>
          Pick your destination
        </h1>

        <div className="flex flex-col items-center gap-12 lg:flex-row lg:justify-between">
          <figure className="flex justify-center">
            <img
              src={destination.images.webp}
              alt={destination.name}
              className="w-[170px] md:w-[250px] lg:w-[445px] z-20"
            />
          </figure>

          <article className="max-w-[445px] text-center lg:text-left">
            <nav
              aria-label="Destinations"
              className="mb-4 flex justify-center gap-4 lg:text-[20px] uppercase lg:justify-start"
            >
              {data.destinations.map((item, index) => (
                <button
                  key={item.name}
                  type="button"
                  onClick={() => setActive(index)}
                  aria-current={active === index ? "page" : undefined}
                  className={`cursor-pointer border-b-2 pb-3 transition ${
                    active === index
                      ? "border-white text-white"
                      : "border-transparent hover:border-white/50"
                  }`}
                >
                  {item.name}
                </button>
              ))}
            </nav>

            <h2 className="mb-2 font-serif text-[48px] uppercase leading-none lg:text-[90px]">
              {destination.name}
            </h2>

            <p className="border-b border-white/20 pb-4 leading-8 text-[#D0D6F9] lg:text-[18px]">
              {destination.description}
            </p>

            <dl className="mt-4 flex justify-center gap-10 uppercase lg:justify-start lg:gap-20">
              <div>
                <dt className="mb-2 text-sm tracking-[2px] text-[#D0D6F9]">
                  Avg. Distance
                </dt>
                <dd className="font-serif lg:text-[22px]">
                  {destination.distance}
                </dd>
              </div>

              <div>
                <dt className="mb-2 text-sm tracking-[2px] text-[#D0D6F9]">
                  Est. Travel Time
                </dt>
                <dd className="font-serif lg:text-[22px]">
                  {destination.travel}
                </dd>
              </div>
            </dl>
          </article>
        </div>
      </div>
    </section>
  );
}
