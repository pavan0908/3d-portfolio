import { useEffect } from "react";
import { setCharTimeline, setAllTimeline } from "../utils/GsapScroll";
import * as THREE from "three";

const CharacterModel = () => {
  useEffect(() => {
    // Initialize scroll animations without 3D character
    const camera = new THREE.PerspectiveCamera(14.5, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.set(0, 13.1, 24.7);
    setCharTimeline(null, camera);
    setAllTimeline();
  }, []);

  return (
    <div
      className="character-model"
      style={{
        position: "absolute",
        right: "5%",
        bottom: "0",
        width: "420px",
        maxWidth: "45vw",
        zIndex: 2,
        pointerEvents: "none",
        display: "flex",
        alignItems: "flex-end",
        justifyContent: "center",
      }}
    >
      <img
        src="/images/pavan-character.png"
        alt="Pavan Mukkamala"
        style={{
          width: "100%",
          height: "auto",
          objectFit: "contain",
          filter: "drop-shadow(0 0 40px rgba(34,211,238,0.25))",
        }}
      />
    </div>
  );
};

export default CharacterModel;
