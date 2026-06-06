import "./styles/WhatIDo.css";

const WhatIDo = () => {
  return (
    <div className="whatIDO" id="whatido">
      <div className="what-box">
        <h2 className="title">
          W<span className="hat-h2">HAT</span>
          <div>
            I<span className="do-h2"> DO</span>
          </div>
        </h2>

        <div className="what-content">
          <h3 className="what-subtitle">Data Engineering &amp; Cloud Solutions</h3>

          <p className="what-para">
            I am a Data Engineer passionate about building scalable, reliable,
            and high-performance data solutions that transform raw data into
            meaningful business insights. I specialize in designing ETL/ELT
            pipelines, cloud-native data platforms, real-time streaming
            architectures, and modern analytics solutions using Azure, AWS,
            Databricks, PySpark, Snowflake, Kafka, and SQL.
          </p>

          <p className="what-para">
            My experience includes developing enterprise-scale data pipelines,
            optimizing big data workloads, implementing data governance and
            automation frameworks, and delivering analytics-ready datasets that
            empower organizations to make data-driven decisions. I am committed
            to leveraging modern cloud technologies and best engineering
            practices to build efficient, secure, and scalable data ecosystems
            that drive business growth and innovation.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhatIDo;
