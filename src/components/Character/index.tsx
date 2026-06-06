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
        position: "relative",
      }}
    >
      {/* Glow ring */}
      <div style={{
        position: "absolute",
        bottom: 0,
        left: "50%",
        transform: "translateX(-50%)",
        width: "360px",
        height: "360px",
        borderRadius: "50%",
        background: "radial-gradient(ellipse at center, rgba(34,211,238,0.20) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      {/* 3D Character Image */}
      <img
        src="/images/Gemini_Generated_Image_trxxdntrxxdntrxx (1).png"
        alt="Pavan Mukkamala - Data Engineer"
        style={{
          width: "360px",
          maxWidth: "100%",
          objectFit: "contain",
          position: "relative",
          zIndex: 1,
          mixBlendMode: "screen",
          filter: "drop-shadow(0 0 28px rgba(34,211,238,0.3))",
        }}
      />
    </div>
  );
};

export default CharacterModel;
