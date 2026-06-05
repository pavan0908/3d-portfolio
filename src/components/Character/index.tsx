import { useEffect } from "react";
import { setCharTimeline, setAllTimeline } from "../utils/GsapScroll";

const CharacterModel = () => {
  useEffect(() => {
    setCharTimeline(null, null);
    setAllTimeline();
  }, []);

  return (
    <div
      className="character-model"
      style={{
        display: "flex",
        alignItems: "flex-end",
        justifyContent: "center",
        width: "100%",
        height: "100%",
      }}
    >
      <img
        src="/images/Gemini_Generated_Image_trxxdntrxxdntrxx (1).png"
        alt="Pavan Mukkamala"
        style={{
          width: "100%",
          height: "auto",
          objectFit: "contain",
          filter: "drop-shadow(0 0 40px rgba(34,211,238,0.3))",
          borderRadius: "50% 50% 0 0",
        }}
      />
    </div>
  );
};

export default CharacterModel;
