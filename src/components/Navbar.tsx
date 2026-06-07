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
  }, []);

  return (
    <header className="header">
      <a href="/" className="header-logo">
        PM
      </a>
      <div className="header-marquee">
        <p>Data Engineer &nbsp;&nbsp;&nbsp; Data Engineer &nbsp;&nbsp;&nbsp; Data Engineer</p>
      </div>
      <nav>
        <ul>
          <li>
            <a href="#about" data-href="#about">
              <HoverLinks text="ABOUT" />
            </a>
          </li>
          <li>
            <a href="#work" data-href="#work">
              <HoverLinks text="WORK" />
            </a>
          </li>
          <li>
            <a href="#career" data-href="#career">
              <HoverLinks text="CAREER" />
            </a>
          </li>
          <li>
            <a href="#skills" data-href="#skills">
              <HoverLinks text="SKILLS" />
            </a>
          </li>
          <li>
            <a href="#contact" data-href="#contact">
              <HoverLinks text="CONTACT" />
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
