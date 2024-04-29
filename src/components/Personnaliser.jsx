import React, { useState } from "react";

export default function Personnaliser({ pi }) {
  const epices = ["sel", "sucre", "poivre"];
  const [value, setValues] = useState([]);

  function handleChange(e) {
    setValues([
      ...value,
      { name: e.target.id, poids: pi * (e.target.value / 100) },
    ]);
  }

  return (
    <>
      {epices.map((el) => (
        <div key={el}>
          {pi > 0 && (
            <div>
              <label className="text-sm font-thin" htmlFor={el}>
                Choisir le % de {el}
              </label>
              <input
                onChange={(e) => handleChange(e)}
                id={el}
                type="text"
                className="w-10 rounded-lg ml-3 outline-none text-black text-center text-sm py-1"
              />
            </div>
          )}
          {pi > 0 && (
            <p className="mt-2">
              <span className="font-thin">Poids de {el}: </span>{" "}
              {value.length > 0 && value.filter((el) => el.name === el)}
            </p>
          )}
        </div>
      ))}
    </>
  );
}
