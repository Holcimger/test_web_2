// src/components/SvgModifier.js

import React, { useRef, useEffect } from "react";

const getColor = (cantidad) => {
  if (cantidad == 1) return "#FFA500";
  else if (cantidad > 1) return "	#008000";
  return "#FF0000";
};

const SvgModifier = ({ data, svg }) => {
  const svgRef = useRef(null);

  useEffect(() => {
    const handleLoad = () => {
      if (svgRef.current) {
        const svgDoc = svgRef.current.contentDocument;
        for (let i = 0; i < data.length; i++) {
          const element = data[i];
          const id = element["cod VTM"]; // Extract code
          const cantidadDisponible = element["SS"]; // Extract available quantity
          const color = getColor(cantidadDisponible); // Determine color based on quantity

          const sVGidPart = svgDoc.getElementById(id);

          if (sVGidPart) {
            sVGidPart.style.fill = color;
          } else {
            console.log("Element with id:", id, "not found.");
          }
        }
      }
    };

    if (svgRef.current) {
      svgRef.current.addEventListener("load", handleLoad);
    }

    return () => {
      if (svgRef.current) {
        svgRef.current.removeEventListener("load", handleLoad);
      }
    };
  }, []);

  return (
    <object
      ref={svgRef}
      type="image/svg+xml"
      data={svg}
      style={{
        objectFit: "contain", // Scales SVG down to fit while preserving aspect ratio (might leave gaps)
        backgroundColor: "whitesmoke",
        height: "100%", // Takes 100% height of the parent div
        width: "100%", // Add width 100% as well for better scaling
        maxWidth: "100%", // Ensure it doesn't overflow horizontally
        maxHeight: "100%", // Ensure it doesn't overflow vertically
        display: "block", // Helps prevent extra space below inline elements
        borderRadius: "8px",
      }}
    >
      Your browser does not support SVGs
    </object>
  );
};

export default SvgModifier;
