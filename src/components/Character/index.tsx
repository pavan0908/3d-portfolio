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
        width: "380px",
        height: "380px",
        borderRadius: "50%",
        background: "radial-gradient(ellipse at center, rgba(34,211,238,0.22) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      {/* 3D Character Image - circular crop */}
      <div style={{
        position: "relative",
        zIndex: 1,
        width: "360px",
        height: "360px",
        borderRadius: "50%",
        overflow: "hidden",
        border: "2px solid rgba(34,211,238,0.3)",
        boxShadow: "0 0 40px rgba(34,211,238,0.2), 0 0 80px rgba(34,211,238,0.1)",
      }}>
        <img
          src="/images/Gemini_Generated_Image_trxxdntrxxdntrxx (1).png"
          alt="Pavan Mukkamala - Data Engineer"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center top",
            display: "block",
          }}
        />
      </div>
    </div>
  );
};

export default CharacterModel;
