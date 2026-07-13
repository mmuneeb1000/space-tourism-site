import { useState } from "react";
import data from "../data.json";

export default function Crew() {
  const [active, setActive] = useState(0);

  const crew = data.crew[active];

  return (
    <section>
      <img src={crew.images.png} alt={crew.name} />

      <div>
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
