import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HoverLinks from "./HoverLinks";
import { gsap } from "gsap";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import "./styles/Navbar.css";

gsap.registerPlugin(ScrollSmoother, ScrollTrigger);
export let smoother: ScrollSmoother;

const Navbar = () => {
  useEffect(() => {
    smoother = ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 1.7,
      speed: 1.7,
      effects: true,
      autoResize: true,
      ignoreMobileResize: true,
    });

    smoother.scrollTop(0);
    smoother.paused(true);

    let links = document.querySelectorAll(".header ul a");
    links.forEach((elem) => {
      let element = elem as HTMLAnchorElement;
      element.addEventListener("click", (e) => {
        if (window.innerWidth > 1024) {
          e.preventDefault();
          let elem = e.currentTarget as HTMLAnchorElement;
          let section = elem.getAttribute("data-href");
          smoother.scrollTo(section, true, "top top");
        }
      });
    });

    ScrollTrigger.create({
      trigger: "#about",
      start: "top 80%",
      onEnter: () => {
        gsap.to(".header", { backgroundColor: "#0a0a0a", duration: 0.3 });
      },
      onLeaveBack: () => {
        gsap.to(".header", { backgroundColor: "transparent", duration: 0.3 });
      },
    });
  }, []);

  return (
    <>
      <div className="header">
        <a href="/#" className="navbar-title" data-cursor="disable">
          PM
        </a>
        <div className="header-right">
          <ul>
            <li>
              <a data-href="#about" href="#about">
                <HoverLinks text="ABOUT" />
              </a>
            </li>
            <li>
              <a data-href="#work" href="#work">
                <HoverLinks text="WORK" />
              </a>
            </li>
            <li>
              <a data-href="#skills" href="#skills">
                <HoverLinks text="SKILLS" />
              </a>
            </li>
            <li>
              <a data-href="#contact" href="#contact">
                <HoverLinks text="CONTACT" />
              </a>
            </li>
          </ul>
        </div>

        <div className="landing-circle1"></div>
        <div className="landing-circle2"></div>
        <div className="nav-fade"></div>
      </div>
    </>
  );
};

export default Navbar;
