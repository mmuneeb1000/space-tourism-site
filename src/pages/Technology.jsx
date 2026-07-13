import { useState } from "react";
import data from "../data.json";

export default function Technology() {
  const [active, setActive] = useState(0);

  const tech = data.technology[active];
  return (
    <section>
      <img src={tech.images.portrait} alt={tech.name} />

      <div>
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
