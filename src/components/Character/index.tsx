import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { setAllTimeline } from "../utils/GsapScroll";

gsap.registerPlugin(ScrollTrigger);

const CharacterModel = () => {
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate the avatar and landing container out as user scrolls past hero
      const tl1 = gsap.timeline({
        scrollTrigger: {
          trigger: ".landing-section",
          start: "top top",
          end: "bottom top",
          scrub: true,
          invalidateOnRefresh: true,
        },
      });
      tl1
        .fromTo(
          ".avatar-wrapper",
          { x: 0, opacity: 1, scale: 1 },
          { x: "15%", opacity: 0, scale: 0.92, duration: 1 },
          0
        )
        .fromTo(
          ".landing-container",
          { opacity: 1, y: "0%" },
          { opacity: 0, y: "40%", duration: 0.8 },
          0
        );
    });

    // Set up career + other scroll timelines
    setAllTimeline();

    return () => ctx.revert();
  }, []);

  return (
    <div className="character-model">
      {/* Glow backdrop */}
      <div className="character-rim" style={{ opacity: 0 }} />
      {/* Avatar with glow ring */}
      <div className="avatar-wrapper">
        <div className="avatar-glow-ring" />
        <div className="avatar-circle">
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
