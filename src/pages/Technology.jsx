import { useState } from "react";
import data from "../data.json";
import bgTechnology from "/assets/technology/background-technology-desktop.jpg";

export default function Technology() {
  const [active, setActive] = useState(0);

  const tech = data.technology[active];
  return (
    <section
      className="h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${bgTechnology})` }}
    >
      <h1 className="pt-40 uppercase ml-40 text-xl">03 Space Launch 101</h1>
      <div className="ml-40 flex items-center justify-between">
        <div className="flex gap-12">
          <div className="flex flex-col gap-3">
            {data.technology.map((_, index) => (
              <button
                key={index}
                onClick={() => setActive(index)}
                className={`flex h-20 w-20 items-center justify-center
                cursor-pointer  rounded-full border font-serif text-[32px] transition ${
                  active === index
                    ? "bg-white text-[#0B0D17] border-white"
                    : "border-white/25 text-white hover:border-white"
                }`}
              >
                {index + 1}
              </button>
            ))}
          </div>

          <div className="max-w-[470px] text-white">
            <h2 className="mb-4 text-[16px] uppercase tracking-[2.7px] text-[#D0D6F9]">
              The terminology...
            </h2>

            <h1 className="mb-6 font-serif text-[56px] uppercase">
              {tech.name}
            </h1>

            <p className="text-[18px] leading-8 text-[#D0D6F9]">
              {tech.description}
            </p>
          </div>
        </div>
        <img className="h-120" src={tech.images.portrait} alt={tech.name} />
      </div>
    </section>
  );
}
