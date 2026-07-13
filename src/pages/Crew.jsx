import { useState } from "react";
import data from "../data.json";
import bgCrew from "/assets/crew/background-crew-desktop.jpg";

export default function Crew() {
  const [active, setActive] = useState(0);

  const crew = data.crew[active];

  return (
    <section
      className="min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${bgCrew})` }}
    >
      <img src={crew.images.png} alt={crew.name} />

      <div className="flex gap-6">
        {data.crew.map((member, index) => (
          <button key={member.name} onClick={() => setActive(index)}>
            ●
          </button>
        ))}
      </div>

      <h3>{crew.role}</h3>
      <h2>{crew.name}</h2>
      <p>{crew.bio}</p>
    </section>
  );
}
