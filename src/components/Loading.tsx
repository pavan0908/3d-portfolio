import { useEffect, useState } from "react";
import "./styles/Loading.css";
import { useLoading } from "../context/LoadingProvider";

import Marquee from "react-fast-marquee";

const Loading = ({ percent }: { percent: number }) => {
  const { setIsLoading } = useLoading();
  const [loaded, setLoaded] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [clicked, setClicked] = useState(false);

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
          <span> {percent}%</span>
        </div>
        <p className="loader-welcome"> Welcome </p>
      </div>
    </>
  );
};

export default Loading;

export const setProgress = (setLoading: (value: number) => void) => {
  let percent: number = 0;
  // Fast interval: increment quickly to 90
  let interval = setInterval(() => {
    if (percent < 90) {
      percent += Math.round(Math.random() * 8) + 3; // +3 to +10 per tick
      if (percent > 90) percent = 90;
      setLoading(percent);
    } else {
      clearInterval(interval);
    }
  }, 80); // fast: every 80ms

  function clear() {
    clearInterval(interval);
    setLoading(100);
  }

  function loaded() {
    return new Promise((resolve) => {
      clearInterval(interval);
      // Jump straight to 100
      percent = 100;
      setLoading(100);
      setTimeout(() => resolve(percent), 50);
    });
  }

  return { loaded, percent, clear };
};
