// Import abilities data array from constants file
import { abilities } from "../constants";

// Functional component that displays a set of feature cards
const FeatureCards = () => (
  <div className="w-full padding-x-lg">
    {/* Grid container for all feature cards */}
    <div className="mx-auto grid-3-cols">
      {/* Map through the abilities array to create one card per ability */}
      {abilities.map(({ imgPath, title, desc }) => (
        <div
          key={title} // Unique key for each card
          className="card-border rounded-xl p-8 flex flex-col gap-4"
        >
          {/* Icon container */}
          <div className="size-14 flex items-center justify-center rounded-full">
            <img src={imgPath} alt={title} />
          </div>

          {/* Feature title */}
          <h3 className="text-white text-2xl font-semibold mt-2">{title}</h3>

          {/* Feature description */}
          <p className="text-white-50 text-lg">{desc}</p>
        </div>
      ))}
    </div>
  </div>
);

export default FeatureCards;