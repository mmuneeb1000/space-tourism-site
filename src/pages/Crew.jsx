import { useState } from "react";
import data from "../data.json";
import bgCrew from "/assets/crew/background-crew-desktop.jpg";

export default function Crew() {
  const [active, setActive] = useState(0);

  const crew = data.crew[active];

  return (
    <section
      className="h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${bgCrew})` }}
    >
      <h1 className="pt-40 uppercase ml-40 text-xl">02 Meet Your Crew</h1>
      <div className="flex items-center justify-between mx-40">
        <div className="max-w-[540px] text-white ml-40 ">
          <h3 className="mb-2 font-serif text-xl uppercase text-white/50">
            {crew.role}
          </h3>

          <h2 className="mb-4 font-serif text-4xl uppercase">{crew.name}</h2>

          <p className="max-w-[445px] text-[18px] leading-8 text-[#D0D6F9]">
            {crew.bio}
          </p>

          <div className="mt-24 flex items-center gap-6">
            {data.crew.map((member, index) => (
              <button
                key={member.name}
                onClick={() => setActive(index)}
                aria-label={member.name}
                className={`h-3 w-3 rounded-full cursor-pointer transition ${
                  active === index
                    ? "bg-white"
                    : "bg-white/20 hover:bg-white/50"
                }`}
              />
            ))}
          </div>
        </div>
        <img className="h-140" src={crew.images.png} alt={crew.name} />
      </div>
    </section>
  );
}
