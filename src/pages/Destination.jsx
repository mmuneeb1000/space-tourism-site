import { useState } from "react";
import data from "../data.json";
import bgDestination from "/assets/destination/background-destination-desktop.jpg";
export default function Destination() {
  const [active, setActive] = useState(0);

  const destination = data.destinations[active];

  return (
    <section
      className="min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${bgDestination})` }}
    >
      <img src={destination.images.png} alt={destination.name} />

      <div className="flex gap-6">
        {data.destinations.map((item, index) => (
          <button key={item.name} onClick={() => setActive(index)}>
            {item.name}
          </button>
        ))}
      </div>

      <h2>{destination.name}</h2>
      <p>{destination.description}</p>

      <div>
        <p>{destination.distance}</p>
        <p>{destination.travel}</p>
      </div>
    </section>
  );
}
