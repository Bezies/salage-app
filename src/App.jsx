import React, { useState } from "react";
import CalculBase from "./components/CalculBase";
import Personnaliser from "./components/Personnaliser";

export default function App() {
  const [pi, setPi] = useState("");
  const [poidsActuel, setPoidsActuel] = useState("");
  const [perte, setPerte] = useState(30);
  const mode = ["Calcul de base", "Personnaliser"];
  const [active, setActive] = useState(mode[0]);

  return (
    <div className="min-h-screen bg-gray-900 flex items-center flex-col gap-14">
      <h1 className="text-white text-2xl text-center mx-10  pt-10">
        Calcul des quantités d'épices pour vos salaisons
      </h1>
      <div>
        <input
          value={pi}
          onChange={(e) => setPi(e.target.value)}
          className="py-2 rounded-lg pl-3 placeholder:text-sm outline-none"
          placeholder="Saisir le poids initial"
          type="text"
        />
        <div className="mt-10 flex items-center justify-center text-white gap-5">
          {mode.map((el) => (
            <button
              className={`${active === el && "underline text-blue-400"}`}
              key={el}
              active={active === el}
              onClick={() => setActive(el)}
            >
              {el}
            </button>
          ))}
        </div>
        <div className="text-white mt-10 flex flex-col gap-5 text-center mb-20">
          {active === "Calcul de base" && <CalculBase pi={pi} />}
          {active === "Personnaliser" && <Personnaliser pi={pi} />}
          {pi > 0 && (
            <div>
              <div className="flex flex-col items-center mt-10">
                <p>{perte}</p>
                <input
                  className="mt-2"
                  value={perte}
                  onChange={(e) => setPerte(e.target.value)}
                  type="range"
                  name=""
                  id="seche"
                  min={0}
                  max={50}
                  step={5}
                />
                <label className="font-thin mt-3 text-sm" htmlFor="seche">
                  Selectionner le % de sèche recherchée
                </label>
              </div>

              <p className="mt-5">
                <span className="font-thin">Poids final à viser:</span>{" "}
                {pi - (pi * perte) / 100}g
              </p>
            </div>
          )}
          <div className="mt-10">
            <h3 className="text-lg">Calcul de la perte:</h3>
            <input
              value={poidsActuel}
              onChange={(e) => setPoidsActuel(e.target.value)}
              className="py-2 mt-5 rounded-lg text-black pl-3 placeholder:text-sm outline-none"
              placeholder="Saisir le poids actuel"
              type="text"
            />
            {poidsActuel !== "" && (
              <p className="mt-5">
                <span className="font-thin">Perte de la pièce:</span>{" "}
                {100 - ((poidsActuel * 100) / pi).toFixed(0)}%
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
