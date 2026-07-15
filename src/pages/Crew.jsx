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
      <h1 className="lg:pt-40 pt-25 text-center lg:text-left uppercase lg:ml-40 text-xl">
        02 Meet Your Crew
      </h1>
      <div
        className="lg:max-w-350 flex flex-col mx-auto items-center justify-center
      lg:flex-row lg:items-center lg:justify-between "
      >
        <div className=" text-white text-center lg:text-left lg:ml-40 ">
          <h3 className="mb-2 font-serif lg:text-2xl uppercase text-white/50">
            {crew.role}
          </h3>

          <h2 className="mb-4 font-serif text-2xl lg:text-6xl uppercase">
            {crew.name}
          </h2>

          <p className="max-w-[445px] text-[18px] lg:leading-8 text-[#D0D6F9]">
            {crew.bio}
          </p>

          <div className="lg:mt-24 mt-6 flex lg:justify-start justify-center items-center gap-6">
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
        <img
          className="lg:h-140 p-6 z-20 "
          src={crew.images.png}
          alt={crew.name}
        />
      </div>
    </section>
  );
}
