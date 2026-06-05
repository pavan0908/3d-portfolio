import { useEffect, useRef } from "react";
import "./styles/WhatIDo.css";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const WhatIDo = () => {
  const containerRef = useRef<(HTMLDivElement | null)[]>([]);
  const setRef = (el: HTMLDivElement | null, index: number) => {
    containerRef.current[index] = el;
  };

  useEffect(() => {
    if (ScrollTrigger.isTouch) {
      containerRef.current.forEach((container) => {
        if (container) {
          container.classList.remove("what-noTouch");
          container.addEventListener("click", () => handleClick(container));
        }
      });
    }
    return () => {
      containerRef.current.forEach((container) => {
        if (container) {
          container.removeEventListener("click", () => handleClick(container));
        }
      });
    };
  }, []);

  return (
    <div className="whatIDO">
      <div className="what-box">
        <h2 className="title">
          W<span className="hat-h2">HAT</span>
          <div>
            I<span className="do-h2"> DO</span>
          </div>
        </h2>
        <div className="what-box-in">

          <div className="what-noTouch" ref={(el) => setRef(el, 0)}>
            <div className="what-title">
              <h3>ETL / ELT Pipeline Engineering</h3>
              <div className="what-arrow"></div>
            </div>
            <div className="what-content">
              <p>
                Building robust, metadata-driven ETL/ELT pipelines on Azure Data
                Factory, AWS Glue, and Matillion — from raw ingestion to
                analytics-ready datasets with full observability, error handling,
                and data quality checks.
              </p>
              <h5>Skillset &amp; tools</h5>
              <div className="what-content-flex">
                <div className="what-tags">Azure Data Factory</div>
                <div className="what-tags">AWS Glue</div>
                <div className="what-tags">Matillion</div>
                <div className="what-tags">Talend</div>
                <div className="what-tags">PySpark</div>
                <div className="what-tags">Python</div>
              </div>
            </div>
          </div>

          <div className="what-noTouch" ref={(el) => setRef(el, 1)}>
            <div className="what-title">
              <h3>Cloud Data Warehousing &amp; Lakehouse</h3>
              <div className="what-arrow"></div>
            </div>
            <div className="what-content">
              <p>
                Designing and optimizing cloud data warehouses and lakehouses using
                Snowflake, Azure Synapse, Databricks Delta Lake, and Amazon
                Redshift — enabling fast, reliable, and governed analytics at scale.
              </p>
              <h5>Skillset &amp; tools</h5>
              <div className="what-content-flex">
                <div className="what-tags">Snowflake</div>
                <div className="what-tags">Databricks</div>
                <div className="what-tags">Delta Lake</div>
                <div className="what-tags">Azure Synapse</div>
                <div className="what-tags">Redshift</div>
                <div className="what-tags">BigQuery</div>
              </div>
            </div>
          </div>

          <div className="what-noTouch" ref={(el) => setRef(el, 2)}>
            <div className="what-title">
              <h3>Real-Time Streaming &amp; Event Architecture</h3>
              <div className="what-arrow"></div>
            </div>
            <div className="what-content">
              <p>
                Implementing real-time data streaming and event-driven
                architectures using Apache Kafka, Azure Event Hubs, and Spark
                Structured Streaming — supporting low-latency analytics and
                operational intelligence.
              </p>
              <h5>Skillset &amp; tools</h5>
              <div className="what-content-flex">
                <div className="what-tags">Apache Kafka</div>
                <div className="what-tags">Azure Event Hubs</div>
                <div className="what-tags">Spark Streaming</div>
                <div className="what-tags">Kinesis</div>
                <div className="what-tags">Airflow</div>
              </div>
            </div>
          </div>

          <div className="what-noTouch" ref={(el) => setRef(el, 3)}>
            <div className="what-title">
              <h3>Analytics, BI &amp; Data Governance</h3>
              <div className="what-arrow"></div>
            </div>
            <div className="what-content">
              <p>
                Delivering actionable insights through Power BI dashboards,
                self-service analytics layers, and enforcing data governance
                standards — including data lineage, cataloging, and access
                control across enterprise platforms.
              </p>
              <h5>Skillset &amp; tools</h5>
              <div className="what-content-flex">
                <div className="what-tags">Power BI</div>
                <div className="what-tags">Tableau</div>
                <div className="what-tags">dbt</div>
                <div className="what-tags">Azure Purview</div>
                <div className="what-tags">Great Expectations</div>
                <div className="what-tags">SQL</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default WhatIDo;

function handleClick(container: HTMLDivElement) {
  container.classList.toggle("what-content-active");
  container.classList.remove("what-sibling");
  if (container.parentElement) {
    const siblings = Array.from(container.parentElement.children);
    siblings.forEach((sibling) => {
      if (sibling !== container) {
        sibling.classList.remove("what-content-active");
        sibling.classList.toggle("what-sibling");
      }
    });
  }
}
