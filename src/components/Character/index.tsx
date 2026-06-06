import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { setAllTimeline } from "../utils/GsapScroll";

gsap.registerPlugin(ScrollTrigger);

// Avatar image hosted on a reliable CDN (same image already used on site)
const AVATAR_URL =
  "https://raw.githubusercontent.com/pavan0908/3d-portfolio/main/src/components/Character/utils/avatar.png";

const CharacterModel = () => {
  useEffect(() => {
    // Animate the avatar container on scroll: slide + fade out as user scrolls past landing
    const ctx = gsap.context(() => {
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

      const tl2 = gsap.timeline({
        scrollTrigger: {
          trigger: ".about-section",
          start: "center 55%",
          end: "bottom top",
          scrub: true,
          invalidateOnRefresh: true,
        },
      });

      tl2
        .to(".about-section", { y: "30%", duration: 6 }, 0)
        .to(".about-section", { opacity: 0, delay: 3, duration: 2 }, 0);
    });

    // Set up career + other scroll timelines
    setAllTimeline();

    return () => ctx.revert();
  }, []);

  return (
    <div className="character-model">
      {/* Glow backdrop */}
      <div className="character-rim" style={{ opacity: 0 }} />

      {/* Avatar image with glow ring */}
      <div className="avatar-wrapper">
        <div className="avatar-glow-ring" />
        <div className="avatar-circle">
          <img
            src="https://i.postimg.cc/Y91MbgwJ/pavan-avatar.png"
            alt="Pavan Mukkamala - Data Engineer"
            onError={(e) => {
              // Fallback: show initials if image fails
              const target = e.currentTarget as HTMLImageElement;
              target.style.display = "none";
              const parent = target.parentElement;
              if (parent && !parent.querySelector(".avatar-initials")) {
                const initials = document.createElement("div");
                initials.className = "avatar-initials";
                initials.textContent = "PM";
                initials.style.cssText =
                  "width:100%;height:100%;display:flex;align-items:center;justify-content:center;font-size:5rem;font-weight:800;color:#00e5ff;font-family:Geist,sans-serif;";
                parent.appendChild(initials);
              }
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default CharacterModel;
