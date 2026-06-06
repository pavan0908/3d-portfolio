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
        width: "340px",
        height: "340px",
        borderRadius: "50%",
        background: "radial-gradient(ellipse at center, rgba(34,211,238,0.18) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />
      {/* SVG Avatar - Data Engineer */}
      <svg
        viewBox="0 0 320 420"
        width="320"
        height="420"
        xmlns="http://www.w3.org/2000/svg"
        style={{ position: "relative", zIndex: 1, filter: "drop-shadow(0 0 32px rgba(34,211,238,0.35))" }}
      >
        {/* Body / Jacket */}
        <ellipse cx="160" cy="400" rx="120" ry="40" fill="rgba(34,211,238,0.08)" />
        <rect x="80" y="280" width="160" height="130" rx="30" fill="#1a2a3a" />
        {/* Shirt collar */}
        <polygon points="140,280 160,310 180,280" fill="#22d3ee" opacity="0.8" />
        {/* Jacket lapels */}
        <polygon points="80,280 140,280 110,360" fill="#0f1f2e" />
        <polygon points="180,280 240,280 210,360" fill="#0f1f2e" />
        {/* Neck */}
        <rect x="145" y="248" width="30" height="38" rx="12" fill="#c8956c" />
        {/* Head */}
        <ellipse cx="160" cy="200" rx="72" ry="80" fill="#c8956c" />
        {/* Hair */}
        <ellipse cx="160" cy="135" rx="72" ry="35" fill="#2c1a0e" />
        <ellipse cx="100" cy="165" rx="22" ry="30" fill="#2c1a0e" />
        <ellipse cx="220" cy="165" rx="22" ry="30" fill="#2c1a0e" />
        {/* Ears */}
        <ellipse cx="90" cy="200" rx="12" ry="16" fill="#b8845a" />
        <ellipse cx="230" cy="200" rx="12" ry="16" fill="#b8845a" />
        {/* Eyes */}
        <ellipse cx="138" cy="195" rx="14" ry="15" fill="white" />
        <ellipse cx="182" cy="195" rx="14" ry="15" fill="white" />
        <circle cx="140" cy="197" r="8" fill="#2c1a0e" />
        <circle cx="184" cy="197" r="8" fill="#2c1a0e" />
        <circle cx="143" cy="194" r="3" fill="white" />
        <circle cx="187" cy="194" r="3" fill="white" />
        {/* Glasses frames */}
        <rect x="122" y="183" width="32" height="22" rx="7" fill="none" stroke="#22d3ee" strokeWidth="2.5" />
        <rect x="166" y="183" width="32" height="22" rx="7" fill="none" stroke="#22d3ee" strokeWidth="2.5" />
        <line x1="154" y1="193" x2="166" y2="193" stroke="#22d3ee" strokeWidth="2" />
        <line x1="122" y1="193" x2="110" y2="190" stroke="#22d3ee" strokeWidth="2" />
        <line x1="198" y1="193" x2="210" y2="190" stroke="#22d3ee" strokeWidth="2" />
        {/* Nose */}
        <ellipse cx="160" cy="218" rx="6" ry="4" fill="#b8845a" />
        {/* Smile */}
        <path d="M 145 232 Q 160 244 175 232" stroke="#8b5e3c" strokeWidth="2.5" fill="none" strokeLinecap="round" />
        {/* Eyebrows */}
        <path d="M 124 178 Q 138 172 152 178" stroke="#2c1a0e" strokeWidth="3" fill="none" strokeLinecap="round" />
        <path d="M 168 178 Q 182 172 196 178" stroke="#2c1a0e" strokeWidth="3" fill="none" strokeLinecap="round" />
        {/* Laptop */}
        <rect x="70" y="330" width="180" height="110" rx="8" fill="#0d1b2a" stroke="#22d3ee" strokeWidth="1.5" />
        <rect x="78" y="338" width="164" height="86" rx="4" fill="#0a2540" />
        {/* Screen content - code lines */}
        <rect x="86" y="346" width="60" height="4" rx="2" fill="#22d3ee" opacity="0.8" />
        <rect x="86" y="355" width="90" height="3" rx="2" fill="#64748b" opacity="0.7" />
        <rect x="94" y="363" width="70" height="3" rx="2" fill="#a78bfa" opacity="0.7" />
        <rect x="94" y="371" width="50" height="3" rx="2" fill="#34d399" opacity="0.7" />
        <rect x="86" y="379" width="80" height="3" rx="2" fill="#64748b" opacity="0.7" />
        <rect x="94" y="387" width="60" height="3" rx="2" fill="#22d3ee" opacity="0.6" />
        <rect x="94" y="395" width="40" height="3" rx="2" fill="#a78bfa" opacity="0.6" />
        {/* Keyboard */}
        <rect x="70" y="440" width="180" height="18" rx="4" fill="#1a2a3a" stroke="#22d3ee" strokeWidth="1" opacity="0.8" />
        {/* Cyan accent badge */}
        <rect x="178" y="346" width="56" height="22" rx="5" fill="rgba(34,211,238,0.15)" stroke="#22d3ee" strokeWidth="1" />
        <text x="206" y="361" textAnchor="middle" fill="#22d3ee" fontSize="7" fontWeight="bold" fontFamily="monospace">DE</text>
      </svg>
    </div>
  );
};

export default CharacterModel;
