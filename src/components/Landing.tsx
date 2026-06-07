import { PropsWithChildren } from "react";
import "./styles/Landing.css";

const Landing = ({ children }: PropsWithChildren) => {
  return (
    <>
      <div className="landing-section" id="landingDiv">
        <div className="landing-container">
          <div className="landing-intro">
            <h2>Hello! I'm</h2>
            <h1>PAVAN <span>MUKKAMALA</span></h1>
            <h3 className="landing-subtitle">Data Engineer</h3>
          </div>
          {children}
        </div>
      </div>
    </>
  );
};

export default Landing;
