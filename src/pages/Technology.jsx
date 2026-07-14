import { useState } from "react";
import data from "../data.json";
import bgTechnology from "/assets/technology/background-technology-desktop.jpg";
export default function Technology() {
  const [active, setActive] = useState(0);

  const tech = data.technology[active];
  return (
    <section
      className="flex items-center gap-6 h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${bgTechnology})` }}
    >
      <div className="flex flex-col ml-30 gap-8">
        {data.technology.map((_, index) => (
          <button
            key={index}
            onClick={() => setActive(index)}
            className={`flex h-20 w-20 items-center justify-center rounded-full border font-serif text-[32px] transition ${
              active === index
                ? "border-white bg-white text-[#0B0D17]"
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

        <h1 className="mb-6 font-serif text-[56px] uppercase leading-none">
          {tech.name}
        </h1>

        <p className="text-[18px] leading-8 text-[#D0D6F9]">
          {tech.description}
        </p>
      </div>
      <img className="h-100" src={tech.images.portrait} alt={tech.name} />
    </section>
  );
}
