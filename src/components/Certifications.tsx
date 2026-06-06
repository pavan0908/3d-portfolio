import "./styles/Certifications.css";

const certifications = [
  {
    title: "AWS Certified Solutions Architect",
    subtitle: "Associate",
    issuer: "Amazon Web Services",
    icon: "☁️",
  },
  {
    title: "Google Data Analytics",
    subtitle: "Professional Certificate",
    issuer: "Google",
    icon: "📊",
  },
  {
    title: "Google Digital Marketing & E-commerce",
    subtitle: "Professional Certificate",
    issuer: "Google",
    icon: "🌐",
  },
  {
    title: "Power BI Job Simulation",
    subtitle: "Data Analytics",
    issuer: "PwC Switzerland",
    icon: "📊",
  },
  {
    title: "Data Analytics & Visualization",
    subtitle: "Job Simulation",
    issuer: "Accenture North America",
    icon: "🔍",
  },
  {
    title: "Data Analytics Job Simulation",
    subtitle: "Virtual Experience",
    issuer: "KPMG AU",
    icon: "📈",
  },
  {
    title: "Artificial Intelligence",
    subtitle: "Job Simulation",
    issuer: "Cognizant",
    icon: "🤖",
  },
  {
    title: "AWS Academy Cloud Foundations",
    subtitle: "Cloud Computing",
    issuer: "Amazon Web Services",
    icon: "☁️",
  },
  {
    title: "AWS Academy Machine Learning",
    subtitle: "Machine Learning Foundations",
    issuer: "Amazon Web Services",
    icon: "🧠",
  },
  {
    title: "Coursera Project Network",
    subtitle: "Project Certificate",
    issuer: "Coursera",
    icon: "🎓",
  },
];

const Certifications = () => {
  return (
    <section className="certifications-section" id="certifications">
      <h2 className="certifications-main-title">Certifications</h2>
      <p className="certifications-subtitle">Verified credentials &amp; professional achievements</p>
      <div className="certifications-grid">
        {certifications.map((cert, index) => (
          <div className="cert-card-wrapper" key={index}>
            <div className="cert-card">
              <span className="cert-icon">{cert.icon}</span>
              <div className="cert-name">{cert.title}</div>
              <div className="cert-issuer">{cert.issuer}</div>
              <div className="cert-year">{cert.subtitle}</div>
              <div className="cert-card-depth"></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
