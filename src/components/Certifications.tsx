import "./styles/Certifications.css";

const certifications = [
  {
    title: "AWS Certified Solutions Architect",
    subtitle: "Associate",
    issuer: "Amazon Web Services",
    icon: "☁️",
    color: "#FF9900"
  },
  {
    title: "Google Data Analytics",
    subtitle: "Professional Certificate",
    issuer: "Google",
    icon: "📊",
    color: "#4285F4"
  },
  {
    title: "Google Digital Marketing & E-commerce",
    subtitle: "Professional Certificate",
    issuer: "Google",
    icon: "🌐",
    color: "#34A853"
  },
  {
    title: "Power BI Job Simulation",
    subtitle: "Data Analytics",
    issuer: "PwC Switzerland",
    icon: "📊",
    color: "#D04A02"
  },
  {
    title: "Data Analytics & Visualization",
    subtitle: "Job Simulation",
    issuer: "Accenture North America",
    icon: "🔍",
    color: "#A100FF"
  },
  {
    title: "Data Analytics Job Simulation",
    subtitle: "Virtual Experience",
    issuer: "KPMG AU",
    icon: "📈",
    color: "#00338D"
  },
  {
    title: "Artificial Intelligence",
    subtitle: "Job Simulation",
    issuer: "Cognizant",
    icon: "🤖",
    color: "#1A73E8"
  },
  {
    title: "AWS Academy Cloud Foundations",
    subtitle: "Cloud Computing",
    issuer: "Amazon Web Services",
    icon: "☁️",
    color: "#FF9900"
  },
  {
    title: "AWS Academy Machine Learning",
    subtitle: "Machine Learning Foundations",
    issuer: "Amazon Web Services",
    icon: "🧠",
    color: "#FF9900"
  },
  {
    title: "Coursera Project Network",
    subtitle: "Project Certificate",
    issuer: "Coursera",
    icon: "🎓",
    color: "#0056D2"
  }
];

const Certifications = () => {
  return (
    <div className="cert-section" id="certifications">
      <div className="cert-header">
        <h2 className="cert-main-title">
          CERT<span className="cert-italic">IFICA</span>
          <div>T<span className="cert-italic">IONS</span></div>
        </h2>
      </div>
      <div className="cert-grid">
        {certifications.map((cert, index) => (
          <div
            key={index}
            className="cert-card"
            style={{
              animationDelay: `${index * 0.08}s`,
              "--cert-color": cert.color
            } as React.CSSProperties}
          >
            <div className="cert-card-inner">
              <div className="cert-icon-row">
                <span className="cert-icon">{cert.icon}</span>
                <span className="cert-issuer">{cert.issuer}</span>
              </div>
              <h3 className="cert-title">{cert.title}</h3>
              <p className="cert-subtitle">{cert.subtitle}</p>
            </div>
            <div className="cert-card-glow" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certifications;
