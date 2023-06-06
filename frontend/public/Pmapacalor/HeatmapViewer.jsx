/* import React, { useEffect, useState } from "react";
import axios from "axios";

const HeatmapViewer = () => {
  const [heatmapContent, setHeatmapContent] = useState("");

  useEffect(() => {
    const fetchHeatmapContent = async () => {
      try {
        const response = await axios.get(
          "/components/Pmapacalor/HeatmapViewer"
        );
        setHeatmapContent(response.data);
      } catch (error) {
        console.error("Error al cargar el mapa de calor:", error);
      }
    };

    fetchHeatmapContent();
  }, []);

  return (
    <div>
      <div dangerouslySetInnerHTML={{ __html: heatmapContent }} />
    </div>
  );
};

export default HeatmapViewer;
 */
