import React from "react";

export default function CalculBase({ pi }) {
  return (
    <>
      {pi > 0 && <h2 className="text-lg">Calcul de base (4/2/1)</h2>}
      {pi > 0 && (
        <p>
          <span className="font-thin">Quantité de sel:</span> {pi * 0.04}g
        </p>
      )}
      {pi > 0 && (
        <p>
          <span className="font-thin">Quantité de sucre:</span> {pi * 0.02}g
        </p>
      )}
      {pi > 0 && (
        <p>
          <span className="font-thin">Quantité de poivre:</span> {pi * 0.01}g
        </p>
      )}
    </>
  );
}
