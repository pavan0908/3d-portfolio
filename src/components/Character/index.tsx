import { useEffect } from "react";
import { setCharTimeline, setAllTimeline } from "../utils/GsapScroll";

const CharacterModel = () => {
  useEffect(() => {
    setCharTimeline(null, null);
    setAllTimeline();
  }, []);

  return (
    <div className="character-model">
      {/* Glow backdrop */}
      <div
        className="character-rim"
        style={{ opacity: 0 }}
      />

      {/* Avatar image — right-aligned to match original 3D model position */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          right: "5%",
          width: "420px",
          maxWidth: "55vw",
          height: "auto",
          zIndex: 2,
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "center",
        }}
      >
        {/* Cyan glow ring behind avatar */}
        <div
          style={{
            position: "absolute",
            bottom: "-20px",
            left: "50%",
            transform: "translateX(-50%)",
            width: "380px",
            height: "380px",
            borderRadius: "50%",
            background:
              "radial-gradient(ellipse at center, rgba(34,211,238,0.18) 0%, transparent 70%)",
            pointerEvents: "none",
            zIndex: 0,
          }}
        />

        {/* Circular avatar */}
        <div
          style={{
            position: "relative",
            zIndex: 1,
            width: "380px",
            height: "380px",
            maxWidth: "55vw",
            maxHeight: "55vw",
            borderRadius: "50%",
            overflow: "hidden",
            border: "2px solid rgba(34,211,238,0.3)",
            boxShadow:
              "0 0 40px rgba(34,211,238,0.2), 0 0 80px rgba(34,211,238,0.1)",
          }}
        >
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
    </div>
  );
};

export default CharacterModel;
