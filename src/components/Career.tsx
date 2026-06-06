import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container" id="career">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br />
          experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>

          {/* Providence Health */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Data Engineer</h4>
                <h5>Providence Health</h5>
              </div>
              <h3>Dec 2025 &ndash; Present</h3>
            </div>
            <p>
              Engineered Azure Data Factory and Databricks healthcare ingestion pipelines accelerating claims
              visibility by 30%. Developed PySpark transformation workflows in Azure Synapse, integrated Azure
              Event Hub and Spark Structured Streaming for real-time patient monitoring, optimized Delta Lake
              partitioning, and built secure data movement solutions with Azure Key Vault. Enhanced observability
              through Azure Monitor dashboards and enforced data governance with lineage tracking and RBAC.
            </p>
          </div>

          {/* Wells Fargo */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Sr. Data Engineer</h4>
                <h5>Wells Fargo</h5>
              </div>
              <h3>Aug 2022 &ndash; Nov 2025</h3>
            </div>
            <p>
              Designed and implemented enterprise-scale data pipelines using Azure Data Factory, Databricks, and
              PySpark for financial data processing. Built ETL/ELT workflows with Informatica and Talend,
              developed Snowflake data warehousing solutions with star schema and dimensional modeling, and
              integrated real-time streaming via Kafka. Delivered Power BI dashboards for executive reporting and
              enforced data quality frameworks across banking data domains.
            </p>
          </div>

          {/* ilab */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Data Engineer</h4>
                <h5>ilab</h5>
              </div>
              <h3>Jan 2019 &ndash; Jul 2022</h3>
            </div>
            <p>
              Built and maintained ETL pipelines using Talend and SSIS for enterprise data integration. Developed
              SQL Server and Oracle database solutions, created PL/SQL stored procedures for data transformation,
              and implemented Hadoop-based batch processing workflows. Supported BI reporting with SSRS and
              contributed to data migration projects across legacy systems.
            </p>
          </div>

          {/* Wipro */}
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Junior Data Engineer</h4>
                <h5>Wipro</h5>
              </div>
              <h3>Jun 2015 &ndash; Dec 2018</h3>
            </div>
            <p>
              Developed data extraction and transformation scripts using SQL and Shell Scripting. Supported
              database administration tasks on Oracle and SQL Server, assisted in ETL development with Informatica
              PowerCenter, and contributed to data quality and validation processes for enterprise reporting.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Career;
