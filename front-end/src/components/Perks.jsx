import React from "react";
import { useState } from "react";

const Perks = () => {
  const [perks, setPerks] = useState([]);

  const handleClick = (target) => {
    const newPerks = target.checked
      ? [...perks, target.value]
      : [...perks].filter((perk) => perk !== target.value);

    setPerks(newPerks);
  };

  return (
    <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-4">
      <label
        htmlFor="wifi"
        className="flex cursor-pointer items-center gap-2 rounded-xl border border-gray-300 px-4 py-3"
      >
        <input
          type="checkbox"
          id="wifi"
          value={"wifi"}
          onChange={(e) => handleClick(e.target)}
        />
      </label>

      <label
        htmlFor="parking"
        className="flex cursor-pointer items-center gap-2 rounded-xl border border-gray-300 px-4 py-3"
      >
        <input
          type="checkbox"
          id="parking"
          value={"parking"}
          onChange={(e) => handleClick(e.target)}
        />
      </label>

      <label
        htmlFor="tv"
        className="flex cursor-pointer items-center gap-2 rounded-xl border border-gray-300 px-4 py-3"
      >
        <input
          type="checkbox"
          id="tv"
          value={"tv"}
          onChange={(e) => handleClick(e.target)}
        />
      </label>

      <label
        htmlFor="radio"
        className="flex cursor-pointer items-center gap-2 rounded-xl border border-gray-300 px-4 py-3"
      >
        <input
          type="checkbox"
          id="radio"
          value={"radio"}
          onChange={(e) => handleClick(e.target)}
        />
      </label>

      <label
        htmlFor="pets"
        className="flex cursor-pointer items-center gap-2 rounded-xl border border-gray-300 px-4 py-3"
      >
        <input
          type="checkbox"
          id="pets"
          value={"pets"}
          onChange={(e) => handleClick(e.target)}
        />
      </label>

      <label
        htmlFor="entrance"
        className="flex cursor-pointer items-center gap-2 rounded-xl border border-gray-300 px-4 py-3"
      >
        <input
          type="checkbox"
          id="entrance"
          value={"entrance"}
          onChange={(e) => handleClick(e.target)}
        />
      </label>
    </div>
  );
};

export default Perks;
