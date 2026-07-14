import { useState } from "react";
import data from "../data.json";
import bgDestination from "/assets/destination/background-destination-desktop.jpg";
export default function Destination() {
  const [active, setActive] = useState(0);

  const destination = data.destinations[active];

  return (
    <section
      className="flex h-screen items-center bg-cover bg-center"
      style={{ backgroundImage: `url(${bgDestination})` }}
    >
      <div className="max-w-[445px] ml-40">
        <div className="mb-10 flex gap-8 uppercase tracking-[2.7px] text-[#D0D6F9]">
          {data.destinations.map((item, index) => (
            <button
              key={item.name}
              onClick={() => setActive(index)}
              className={`border-b-2 pb-3 transition ${
                active === index
                  ? "border-white text-white"
                  : "border-transparent hover:border-white/50"
              }`}
            >
              {item.name}
            </button>
          ))}
        </div>

        <h1 className="mb-4 font-serif text-[100px] uppercase leading-none">
          {destination.name}
        </h1>

        <p className="border-b border-white/20 pb-12 text-[18px] leading-8 text-[#D0D6F9]">
          {destination.description}
        </p>

        <div className="mt-8 flex gap-20 uppercase">
          <div>
            <p className="mb-3 text-sm tracking-[2px] text-[#D0D6F9]">
              Avg. Distance
            </p>

            <p className="font-serif text-[28px]">{destination.distance}</p>
          </div>

          <div>
            <p className="mb-3 text-sm tracking-[2px] text-[#D0D6F9]">
              Est. Travel Time
            </p>

            <p className="font-serif text-[28px]">{destination.travel}</p>
          </div>
        </div>
      </div>
      <img
        src={destination.images.png}
        alt={destination.name}
        className="h-[445px] w-[445px]"
      />
    </section>
  );
}
