import { useEffect, useState } from "react";
import "./styles/Loading.css";
import { useLoading } from "../context/LoadingProvider";
import Marquee from "react-fast-marquee";

const Loading = ({ percent }: { percent: number }) => {
  const { setIsLoading, setLoading } = useLoading();
  const [loaded, setLoaded] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [clicked, setClicked] = useState(false);

  // Auto-progress loading since we no longer use a 3D model loader
  useEffect(() => {
    let p = 0;
    const interval = setInterval(() => {
      if (p < 90) {
        p += Math.round(Math.random() * 8) + 3;
        if (p > 90) p = 90;
        setLoading(p);
      } else {
        clearInterval(interval);
        setTimeout(() => {
          setLoading(100);
        }, 500);
      }
    }, 80);
    return () => clearInterval(interval);
  }, []);

  if (percent >= 100) {
    setTimeout(() => {
      setLoaded(true);
      setTimeout(() => {
        setIsLoaded(true);
      }, 500);
    }, 200);
  }

  useEffect(() => {
    import("./utils/initialFX").then((module) => {
      if (isLoaded) {
        setClicked(true);
        setTimeout(() => {
          if (module.initialFX) {
            module.initialFX();
          }
          setIsLoading(false);
        }, 600);
      }
    });
  }, [isLoaded]);

  function handleMouseMove(e: React.MouseEvent) {
    const { currentTarget: target } = e;
    const rect = target.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    target.style.setProperty("--mouse-x", `${x}px`);
    target.style.setProperty("--mouse-y", `${y}px`);
  }

  return (
    <>
      <a href="/#" className="loader-title" data-cursor="disable">
        PM
      </a>
      <div className="loader-squares">
        {[...Array(27)].map((_, index) => (
          <div key={index} className="square"></div>
        ))}
      </div>
      <Marquee>
        <span> Data Engineer</span>
        <span>Cloud &amp; Analytics</span>
        <span> Data Engineer</span>
        <span>Cloud &amp; Analytics</span>
      </Marquee>
      <div
        className={`loader-container ${
          clicked ? "clicked" : loaded ? "loaded" : ""
        }`}
        onMouseMove={(e) => handleMouseMove(e)}
      >
        <div className="loader-content">
          <p>Loading</p>
          <span>{percent}%</span>
        </div>
      </div>
    </>
  );
};

export default Loading;
