import { useState } from "react";
import data from "../data.json";
import bgCrew from "/assets/crew/background-crew-desktop.jpg";

export default function Crew() {
  const [active, setActive] = useState(0);

  const crew = data.crew[active];

  return (
    <section
      className="flex items-center h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${bgCrew})` }}
    >
      <div className="max-w-[540px] text-white ml-40">
        <h2 className="mb-4 font-serif text-[32px] uppercase text-white/50">
          {crew.role}
        </h2>

        <h1 className="mb-6 font-serif text-[56px] uppercase">{crew.name}</h1>

        <p className="max-w-[445px] text-[18px] leading-8 text-[#D0D6F9]">
          {crew.bio}
        </p>

        <div className="mt-24 flex items-center gap-6">
          {data.crew.map((member, index) => (
            <button
              key={member.name}
              onClick={() => setActive(index)}
              aria-label={member.name}
              className={`h-4 w-4 rounded-full transition ${
                active === index ? "bg-white" : "bg-white/20 hover:bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>
      <img className="h-120" src={crew.images.png} alt={crew.name} />
    </section>
  );
}
