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
      <h1 className="lg:pt-40 pt-25 text-center lg:text-left uppercase lg:ml-70 text-xl">
        <span className="text-white/40 font-semibold mr-2">01</span> Pick your
        destination
      </h1>
      <div className="max-w-320 flex flex-col lg:flex-row items-center justify-between px-8 lg:mx-30">
        <img
          src={destination.images.png}
          alt={destination.name}
          className="w-[180px] h-[180px] p-2 lg:p-6 lg:my-8 lg:h-[445px] lg:w-[445px] z-20 lg:mx-40"
        />
        <div className="max-w-[400px] text-center lg:text-left">
          <div
            className="my-6 lg:mb-10 flex justify-center lg:justify-start gap-8 
          uppercase tracking-[2.7px] text-[#D0D6F9]"
          >
            {data.destinations.map((item, index) => (
              <button
                key={item.name}
                onClick={() => setActive(index)}
                className={`border-b-2 pb-3 cursor-pointer transition ${
                  active === index
                    ? "border-white text-white"
                    : "border-transparent hover:border-white/50"
                }`}
              >
                {item.name}
              </button>
            ))}
          </div>

          <h1 className="mb-2 font-serif text-[48px] lg:text-[90px] uppercase leading-none">
            {destination.name}
          </h1>

          <p className="border-b border-white/20 pb-4 lg:pb-12 text:[15px] lg:text-[18px] leading-8 text-[#D0D6F9]">
            {destination.description}
          </p>

          <div className="mt-5 flex justify-center gap-10 lg:gap-20 uppercase">
            <div>
              <p className="mb-2 text-sm tracking-[2px] text-[#D0D6F9]">
                Avg. Distance
              </p>

              <p className="font-serif lg:text-[22px]">
                {destination.distance}
              </p>
            </div>

            <div>
              <p className="mb-3 text-sm tracking-[2px] text-[#D0D6F9]">
                Est. Travel Time
              </p>

              <p className="font-serif lg:text-[22px]">{destination.travel}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
