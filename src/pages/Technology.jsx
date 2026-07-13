import { useState } from "react";
import data from "../data.json";
import bgTechnology from "/assets/technology/background-technology-desktop.jpg";
export default function Technology() {
  const [active, setActive] = useState(0);

  const tech = data.technology[active];
  return (
    <section
      className="min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${bgTechnology})` }}
    >
      <img src={tech.images.portrait} alt={tech.name} />

      <div className="flex gap-6">
        {data.technology.map((_, index) => (
          <button key={index} onClick={() => setActive(index)}>
            {index + 1}
          </button>
        ))}
      </div>

      <h3>THE TERMINOLOGY...</h3>
      <h2>{tech.name}</h2>
      <p>{tech.description}</p>
    </section>
  );
}
