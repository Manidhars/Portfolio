'use client';
import {useEffect, useRef, useState, Suspense } from "react";
import StarCanvas from './starbackground';
import AboutSQL from "./about";
import AutoScroll from "./AutoScroll";
import HorizontalAutoScroll from "./HorizontalAutoScroll";


import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaDownload,
} from "react-icons/fa";


const sections = {
  about: {
    content: <AboutSQL />,
  },
  dataEngineering: {
    
    content: <DataEngineeringProjects />,
  },
  projectManagement: {
    
    content: <ProjectManagementProjects />,
  },
  
};
function DataEngineeringProjects() {
    const [modalContent, setModalContent] = useState(null);
  
    const Experience = [
      {
        id: 1,
        mainTitle: "Programmer Analyst",
        title: "Cognizant Technology Solutions",
        date: "January 2022 - December 2023",
        description:
          "As a Programmer Analyst, worked on projects involving advanced data analytics, processing real-time datasets, and creating dashboards to enhance business decision-making.",
        tools: ["Databricks", "GCP BigQuery", "PySpark", "Python", "Power BI"],
        details: `
          Key Components:
          - Developed a scalable machine learning pipeline using Python, PySpark, and BigQuery for distributed data processing, reducing data preparation time by 30%.
          - Implemented ensemble learning techniques, enhancing prediction accuracy by 18% for customer basket preferences.
          - Built interactive Power BI dashboards to visualize customer purchasing patterns and support inventory optimization decisions.
    
          Impact:
          Demonstrated proficiency in building scalable machine learning pipelines and integrating data visualization to drive data-informed business strategies in retail.
        `,
      },
      {
        id: 2,
        mainTitle: "Data Labs Pvt Ltd",
        title: "Data Analyst",
        date: "April 2019 – May 2021",
        description:
          "Played a key role in automating data workflows, designing predictive models, and creating insightful dashboards to support data-driven decision-making and operational efficiency.",
        tools: ["Python, SQL, Pandas, Numpy, Scikit-Learn, Power BI, SQL Server, Python-based ETL scripts, SQL-based automation"],
        details: `
          Key Contributions:

Data Automation:

Automated data extraction, transformation, and analysis workflows using Python and SQL, reducing manual workload by 25% and enhancing operational efficiency with optimized SQL Server strategies.
Predictive Modeling:

Designed sales forecasting models using Pandas and Scikit-Learn, improving prediction accuracy by 15% and enabling proactive, data-driven decision-making.
Anomaly Detection:

Built Python scripts for anomaly detection to identify dataset irregularities, ensuring data consistency and reliable daily reporting for business insights.
Data Visualization:

Developed interactive Power BI dashboards to visualize sales trends, streamline reporting workflows, and support faster and more informed decision-making.
Database Management:

Streamlined database processes by implementing efficient data storage and transformation pipelines, improving scalability and reducing query execution times.
Impact:
This role highlighted expertise in data analytics, automation, and visualization, driving operational efficiency and enhancing decision-making through actionable insights.
        `,
      },
      {
        id: 3,
        mainTitle: "Supply Chain Management",
        title: "Kamadhenu Feeds",
        date: "Febrarury 2019 – April 2021",
        description:
          "Led initiatives to automate manufacturing workflows, improve forecasting, and optimize supply chain operations, driving efficiency and cost savings in food production and packaging.",
        tools: ["SAP ERP, Python, Excel, Power BI, Automation Software "],
        details: `
        Key Contributions:
    
    Workflow Automation:
    
    Enhanced production efficiency by 25% through SAP ERP implementation for automating food manufacturing and packaging processes, minimizing downtime in high-speed operations.
    Demand Forecasting:
    
    Developed forecasting tools to align inventory with market trends, reducing food waste by 20% and improving resource utilization.
    Data Visualization:
    
    Designed interactive Power BI dashboards to monitor real-time KPIs, enabling rapid resolution of operational issues.
    Procurement Optimization:
    
    Streamlined raw material procurement and inventory processes, achieving a 95% on-time delivery rate and reducing delays across the supply chain.
    Packaging Line Optimization:
    
    Automated packaging lines to reduce material usage by 15%, delivering cost savings while maintaining product quality and meeting food industry standards.
    Impact:
    This role demonstrated expertise in supply chain automation, forecasting, and operational optimization, achieving measurable efficiency gains and cost reductions.
           `,
      },
    
    ];
    const skills = [
      {
        category: "Programming & Machine Learning",
        skills: [
          { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
          { name: "SQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
          { name: "Java", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
          { name: "Scala", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scala/scala-original.svg" },
          { name: "R", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/r/r-original.svg" },
          { name: "Pandas", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg" },
          { name: "NumPy", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg" },
          { name: "Scikit-Learn", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scikitlearn/scikitlearn-original.svg" },
          { name: "TensorFlow", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" },
          { name: "Keras", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/keras/keras-original.svg" },
          { name: "MLflow", logo: "mlflow.svg" },
          { name: "Computer Vision (OpenCV)", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg" },
          { name: "Generative AI (LLMs)", logo: "AI.svg" }
        ]
      },
      {
        category: "Cloud & Big Data Tools",
        skills: [
          { name: "AWS (Redshift, S3)", logo: "aws.svg" },
          { name: "Azure (Data Factory, Synapse Analytics)", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg" },
          { name: "GCP (BigQuery, Cloud Storage)", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg" },
          { name: "PySpark", logo: "apachespark.svg" },
          { name: "Databricks", logo: "https://cdn.brandfetch.io/idSUrLOWbH/idgLl1tRPf.svg?c=1dxbfHSJFAPEGdCLU4o5B" },
          { name: "Hadoop", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/hadoop/hadoop-original.svg" },
          { name: "snowflake", logo: "snowflake.svg" }
        ]
      },
      {
        category: "Data Visualization & Analytics",
        skills: [
          { name: "Power BI", logo: "PowerBI.svg" },
          { name: "Tableau", logo: "https://cdn.brandfetch.io/id9sYMA_Im/theme/dark/symbol.svg?c=1dxbfHSJFAPEGdCLU4o5B" },
          { name: "Advanced Excel", logo: "excel.svg" },
          { name: "matplotlib", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/matplotlib/matplotlib-original.svg" },
          { name: "Adobe Analytics", logo: "https://cdn.brandfetch.io/id_KsyK7J9/theme/dark/symbol.svg?c=1dxbfHSJFAPEGdCLU4o5B" },
          { name: "Adobe Launch", logo: "https://cdn.brandfetch.io/id_KsyK7J9/theme/dark/symbol.svg?c=1dxbfHSJFAPEGdCLU4o5B" },
          { name: "Google Tag Manager (GTM)", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg" },
          { name: "Google Analytics", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg" },
          { name: "A/B Testing", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/testing/testing-original.svg" }
        ]
      },
      {
        category: "Database Management & Workflow Automation",
        skills: [
          { name: "SQL Server", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-original.svg" },
          { name: "PostgreSQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
          { name: "MySQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
          { name: "NoSQL (MongoDB)", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
          { name: "Azure Data Factory", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg" },
          { name: "Apache Airflow", logo: "Apache Airflow.svg" },
          { name: "Alteryx", logo: "alteryx.svg" },
          { name: "JIRA", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg" }
        ]
      }
    ];
    

    const Projects = [
      {id: 1,
        title: "Predictive Weather Stream Analysis",
        description:
          "Designed and implemented a real-time weather forecasting system to process and analyze streaming data, delivering accurate and actionable insights for decision-makers.",
        tools: ["Databricks, Apache Spark, GCP, Python, Power BI"],
        details: `
          Key Contributions:

Real-Time Data Processing:

Developed a scalable data pipeline using Databricks, Apache Spark, and GCP, reducing latency in streaming data processing by 25%.
Predictive Modeling:

Built and deployed machine learning models (LSTM, ARIMA) to forecast weather patterns with high accuracy.
Data Visualization:

Designed interactive Power BI dashboards to visualize real-time predictions, providing intuitive insights for decision-makers.
Impact:
This project demonstrated expertise in real-time data processing, machine learning, and visualization tools, enabling timely and informed decision-making with scalable solutions.
        `,},
        {
          id: 2,
          title: "Instacart Basket prediction Analysis Project",
          description: "Implemented a predictive analytics system to optimize inventory management and enhance forecasting accuracy, leveraging distributed data processing and machine learning techniques.",
          tools:["Databricks, GCP BigQuery, PySpark, Python, Power BI"],
          details: `Key Contributions:

Machine Learning Pipeline:

Designed a scalable pipeline using Python, PySpark, and BigQuery for distributed data processing, reducing data preparation time by 30%.
Predictive Modeling:

Implemented ensemble learning techniques to improve basket prediction accuracy by 18%, enabling better inventory management and decision-making.
Data Visualization:

Created interactive Power BI dashboards to analyze customer behavior and inventory trends, supporting faster and more informed decision-making.
Impact:
This project highlights expertise in big data processing, predictive modeling, and data visualization, delivering actionable insights to improve operational efficiency in retail.`,
        },
        {
          id: 3,
          title: "GrandVineYard Workflows and Analytics",
          description: "Developed secure and scalable data pipelines and visualization solutions to enhance operational transparency and ensure compliance with governance standards.",
          tools: ["Azure Data Factory, SQL Synapse, PySpark, SQL, Power BI"],
          details: `Key Contributions:

ETL/ELT Pipeline Development:

Designed and implemented secure pipelines using Azure Data Factory and SQL Synapse, integrating Python and PySpark to improve data accessibility and compliance.
Database Optimization:

Built a scalable relational database with advanced SQL techniques, ensuring efficient data storage and retrieval for analytics workflows.
Data Visualization:

Created dynamic Power BI dashboards to streamline data workflows and improve operational transparency for decision-makers.
Impact:
This project showcased expertise in cloud-based data integration, pipeline design, and visualization, driving operational efficiency and data governance compliance.`
        }
      ]

    
  
    const openModal = (project) => {
      setModalContent(project);
    };
  
    const closeModal = () => {
      setModalContent(null);
    };
  
    return (
      <div className="grid grid-rows-6 grid-cols-2 gap-4 bg-opacity-30 h-screen p-4 bg-gray-900" style={{ height: "80vh" }}>
  {/* Left Container: Experience */}
        <div
        
          className="row-span-4 col-span-1 bg-gray-700 bg-opacity-30 p-6 rounded-lg shadow-md overflow-y-auto"
          
        >
          <h3 className="text-xl font-bold mb-4 text-white">Experience</h3>
          <AutoScroll speed={30}>
          <div className="space-y-6">
            {Experience.map((project) => (
              <div
                key={project.id}
                className="bg-gray-800 text-white rounded-lg bg-opacity-70 shadow p-6"
                style={{
                  borderRadius: "10px",
                  padding: "15px",
                  
                }}
              >
                <h4 className="text-lg font-bold mb-2">{project.title}</h4>
                <h4 className="text-sm text-gray-200 mb-4">{project.date}</h4>
                <p className="text-sm text-gray-300 mb-4">{project.description}</p>
                <p className="text-yellow-400 text-sm font-medium mb-4">
                  Tools: {project.tools.join(", ")}
                </p>
                <button
                  onClick={() => openModal(project)}
                  className="bg-blue-500 px-4 py-2 rounded-md font-bold"
                  style={{
                    backgroundColor: "#1e90ff",
                    padding: "8px 16px",
                    borderRadius: "8px",
                  }}
                >
                  View Details
                </button>
              </div>
            ))}
          </div>
          </AutoScroll>
        </div>
{/* Right Container: Skills */}
<div
  className="row-span-4 col-span-1 bg-gray-700 p-6 bg-opacity-30 rounded-lg shadow-md overflow-y-auto"
  
>
  <h3 className="text-xl font-bold mb-4 bg-opacity-70 text-white">Skills</h3>
  <AutoScroll speed={30}>
    {skills.map((category, index) => (
      <div key={index} className="mb-6">
        <h4 className="text-lg font-semibold text-gray-200 mb-3">
          {category.category}
        </h4>
        <div className="grid grid-cols-4 gap-4">
          {category.skills.map((skill, skillIndex) => (
            <div key={skillIndex} className="flex flex-col items-center justify-center">
              <div
                className="flex items-center justify-center bg-gray-800 h-16 w-16 rounded-full shadow"
                style={{
                  borderRadius: "50%",
                  backgroundColor: "#333",
                }}
              >
                <img
                  src={skill.logo.startsWith("http") ? skill.logo : `/icons/${skill.logo}`}
                  alt={`Icon for ${skill.name}`}
                  className="h-10 w-10 object-contain"
                  loading="lazy"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "/icons/default.png";
                  }}
                />
              </div>
              <span className="text-sm font-medium text-gray-300 mt-2 text-center">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    ))}
  </AutoScroll>
</div>
      {/* Bottom Container:  Projects */}
      <div
        className="row-span-2 col-span-2 bg-gray-700 p-4 bg-opacity-30 rounded-lg shadow-md overflow-y-hidden"
        
      >
        <h3 className="text-xl font-bold mb-0 bg-opacity-70 text-white"> Projects</h3>
        <HorizontalAutoScroll speed={50}>
        <div className="flex flex-nowrap gap-4 justify-center md:justify-start">
          {Projects.map((project) => (
            <div
              key={project.id}
              className="min-w-[300px] bg-gray-800 text-white rounded-lg shadow p-4"
              style={{
                padding: "15px",
                borderRadius: "10px",
                
              }}
            >
              <h4 className="text-lg font-bold mb-2">
              <span style={{ display: "block", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{project.title}
              </span>
              </h4>
              <p className="text-sm text-gray-300">
              <span style={{ display: "block", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{project.description}
              </span>
              </p>
              <p 
              className="text-yellow-400 text-sm font-medium mb-2">   
              <span style={{ display: "block", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>Tools: {project.tools.join(", ")}
              </span>
              </p>
              <button
                onClick={() => openModal(project)}
                className="bg-blue-500 px-4 py-2 rounded-md font-bold"
                style={{
                  backgroundColor: "#1e90ff",
                  padding: "6px 12px",
                  fontSize: "0.8rem",
                  borderRadius: "6px",
                }}
              >
                View Details
              </button>
            </div>
          ))}
        </div>
        </HorizontalAutoScroll>
      </div>
      {/* Modal for Project Details */}
        {modalContent && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
            onClick={closeModal}
          >
            <div
              className="bg-gray-800 text-white p-6 rounded-lg shadow-lg w-[50%] max-w-4xl max-h-[50%] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              
              <h3 className="text-2xl font-bold mb-4">{modalContent.title}</h3>
              <div className="text-gray-300 space-y-4">
              <p className="text-gray-400 italic mb-4">{modalContent.mainTitle}</p>
              <h4 className="text-yellow-400 text-sm mb-2">{modalContent.date}</h4>
                {modalContent.details.split("\n").map((line, index) => (
                  <p key={index}>{line.trim()}</p>
                ))}
                <p className="text-yellow-400">
                  <strong>Tools:</strong>{modalContent.tools.join(", ")}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
  
  
function ProjectManagementProjects() {
  const [modalContent, setModalContent] = useState(null);

  const projects = [
    {
      id: 1,
      title: "Go-Kart Design Project",
      description:
        "Managed the end-to-end design and development of a full-sized Go-Kart, from conceptualization to execution.",
      tools: ["SAP ERP", "Visio", "Lucid Chart", "MS Project"],
      details: `
        Key Components:
        Coordinated with manufacturers for material procurement and ensured cost-effective design.
        Led a team in crafting the vehicle skeleton, specifying engine requirements, and managing testing phases.
        Leveraged system design tools like Visio and Lucid Chart for project planning and visualization.

        Key Features:
        Integrated supply chain planning with SAP ERP for seamless resource management.
        Delivered the project within the stipulated timeline and budget, ensuring alignment with client expectations.

        Impact:
        Demonstrated strong leadership and project management skills, optimizing workflow and ensuring successful project delivery.
      `,
    },
    {
      id: 2,
      title: "Self-Driving RC Car Project",
      description:
        "Oversaw the development of a self-driving RC car, incorporating advanced mechanical and AI technologies.",
      tools: ["TensorFlow", "Nvidia Jetson", "MS Project"],
      details: `
        Key Components:
        Designed the project timeline and milestones, allocating tasks effectively across team members.
        Integrated AI models for object detection and implemented LiDAR for advanced navigation.
        Managed testing phases to ensure the system's reliability and performance.

        Impact:
        Enhanced team productivity and delivered a state-of-the-art solution, showcasing innovative problem-solving abilities.
      `,
    },
    {
        id: 3,
        title: "Muesli Grain - SAP Simulation",
        description:
        "Optimized supply chain and manufacturing workflows in a virtual manufacturing business using SAP ERP and Oracle SCM",
        tools: ["SAP ERP", "Oracle SCM", "Power BI", "Excel", "JDA"],
        details:`Key Contributions:

Streamlined procurement and inventory workflows by integrating SAP ERP with Oracle SCM, boosting efficiency by 20%.
Reduced setup times and financial risks through resource optimization, increasing profitability by 20%.
Created dynamic Power BI dashboards for real-time demand planning and decision-making.
Developed competitive pricing strategies and led negotiations, maximizing market share.
Impact:
Demonstrated expertise in supply chain optimization, data visualization, and strategic decision-making for operational excellence.`,
    },
    {
        id: 4,
        title: "Colorado Ski Resort Initiative",
        description:
        "Led the design and implementation of slope management strategies and operational improvements for a ski resort.",
        tools: ["UML Design, Visio, Lucid Chart, Risk Mitigation, Collaboration "],
        details:`Key Contributions:

Developed system architecture using Visio UML diagrams and Lucid Chart to ensure functionality and scalability.
Directed a multidisciplinary team, implementing Kanban workflows to enhance collaboration and efficiency.
Designed detailed UML and class diagrams, aligning operations with project objectives.
Created risk mitigation plans, minimizing setbacks and ensuring project success.`,
    },
  ];
  const managementTools = [
    { name: "SAP APO", logo: "sap.svg" },
    { name: "Oracle SCM", logo: "oracle.svg" },
    { name: "JDA", logo: "jda.svg" },
    { name: "SAP ERP", logo: "sap-erp.png" },
    { name: "Oracle", logo: "oracle.svg" },
    { name: "Visio", logo: "visio.svg" },
    { name: "UML", logo: "UML.svg" },
    { name: "Lucid Chart", logo: "lucidchart.svg" },
    { name: "Power BI", logo: "PowerBi.svg" },
    { name: "Tableau", logo: "tableau.svg" },
    { name: "Advanced Excel", logo: "excel.svg" },
    { name: "Kanban", logo: "kanban.svg" },
    { name: "JIRA", logo: "jira.svg" },
    { name: "Smartsheet", logo:"smartsheet.png" },
    ];
  const Experience = [{
    id: 1,
    mainTitle: "Programmer Analyst",
    title: "Cognizant Technology Solutions",
    date: "January 2022 - December 2023",
    description:
      "As a Programmer Analyst, worked on projects involving advanced data analytics, processing real-time datasets, and creating dashboards to enhance business decision-making.",
    tools: ["Databricks", "GCP BigQuery", "PySpark", "Python", "Power BI"],
    details: `
      Key Components:
      - Developed a scalable machine learning pipeline using Python, PySpark, and BigQuery for distributed data processing, reducing data preparation time by 30%.
      - Implemented ensemble learning techniques, enhancing prediction accuracy by 18% for customer basket preferences.
      - Built interactive Power BI dashboards to visualize customer purchasing patterns and support inventory optimization decisions.

      Impact:
      Demonstrated proficiency in building scalable machine learning pipelines and integrating data visualization to drive data-informed business strategies in retail.
    `,
  },
  {
    id: 2,
    mainTitle: "Data Analyst",
    title: "Data Labs Pvt Ltd",
    date: "April 2019 – May 2021",
    description:
      "Played a key role in automating data workflows, designing predictive models, and creating insightful dashboards to support data-driven decision-making and operational efficiency.",
    tools: ["Python, SQL, Pandas, Numpy, Scikit-Learn, Power BI, SQL Server, Python-based ETL scripts, SQL-based automation"],
    details: `
      Key Contributions:

Data Automation:

Automated data extraction, transformation, and analysis workflows using Python and SQL, reducing manual workload by 25% and enhancing operational efficiency with optimized SQL Server strategies.
Predictive Modeling:

Designed sales forecasting models using Pandas and Scikit-Learn, improving prediction accuracy by 15% and enabling proactive, data-driven decision-making.
Anomaly Detection:

Built Python scripts for anomaly detection to identify dataset irregularities, ensuring data consistency and reliable daily reporting for business insights.
Data Visualization:

Developed interactive Power BI dashboards to visualize sales trends, streamline reporting workflows, and support faster and more informed decision-making.
Database Management:

Streamlined database processes by implementing efficient data storage and transformation pipelines, improving scalability and reducing query execution times.
Impact:
This role highlighted expertise in data analytics, automation, and visualization, driving operational efficiency and enhancing decision-making through actionable insights.
    `,
  },
  {
    id: 3,
    mainTitle: "Supply Chain Management",
    title: "Kamadhenu Feeds",
    date: "Febrarury 2019 – April 2021",
    description:
      "Led initiatives to automate manufacturing workflows, improve forecasting, and optimize supply chain operations, driving efficiency and cost savings in food production and packaging.",
    tools: ["SAP ERP, Python, Excel, Power BI, Automation Software "],
    details: `
    Key Contributions:

Workflow Automation:

Enhanced production efficiency by 25% through SAP ERP implementation for automating food manufacturing and packaging processes, minimizing downtime in high-speed operations.
Demand Forecasting:

Developed forecasting tools to align inventory with market trends, reducing food waste by 20% and improving resource utilization.
Data Visualization:

Designed interactive Power BI dashboards to monitor real-time KPIs, enabling rapid resolution of operational issues.
Procurement Optimization:

Streamlined raw material procurement and inventory processes, achieving a 95% on-time delivery rate and reducing delays across the supply chain.
Packaging Line Optimization:

Automated packaging lines to reduce material usage by 15%, delivering cost savings while maintaining product quality and meeting food industry standards.
Impact:
This role demonstrated expertise in supply chain automation, forecasting, and operational optimization, achieving measurable efficiency gains and cost reductions.
       `,
  },

  ];
  const openModal = (project) => {
    setModalContent(project);
  };

  const closeModal = () => {
    setModalContent(null);
  };

  return (
    <div className="grid grid-rows-6 grid-cols-2 bg-opacity-30 gap-4 h-screen p-4 bg-gray-900" style={{ height: "80vh" }}>
    {/* Left Container: Projects */}
    <div
      className="row-span-4 col-span-1 bg-gray-700 p-6 bg-opacity-30 rounded-lg shadow-md overflow-y-auto"
      

      >
        <h3 className="text-xl font-bold mb-4 bg-opacity-30 text-white">Experience</h3>
        <AutoScroll speed={30}>
        <div className="space-y-6">
          {Experience.map((project) => (
            <div
              key={project.id}
              className="bg-gray-800 text-white rounded-lg shadow p-6"
              style={{ padding: "15px", borderRadius: "10px" }}
            >
              <h4 className="text-lg font-bold mb-2">{project.title}</h4>
              <p className="text-sm text-gray-300 mb-4">{project.date}</p>
              <p className="text-sm text-gray-300 mb-4">{project.description}</p>
              <p className="text-yellow-400 text-sm font-medium mb-4">
                Tools: {project.tools.join(", ")}
              </p>
              <button
                onClick={() => openModal(project)}
                className="bg-blue-500 px-4 py-2 rounded-md font-bold"
                style={{
                  backgroundColor: "#1e90ff",
                  padding: "8px 16px",
                  borderRadius: "8px",
                }}
              >
                View Details
              </button>
            </div>
          ))}
        </div>
        </AutoScroll>
      </div>

      {/* Right Container: Skills */}
      <div
  className=" row-span-4 col-span-1 bg-gray-700 bg-opacity-30 p-6 rounded-lg shadow-md overflow-y-auto"
  
    >
      <h3 className="text-xl font-bold mb-4 bg-opacity-70 text-white">Skills</h3>
      <AutoScroll speed={30}>
      <div className="grid grid-cols-4 gap-4">
        {managementTools.map((tool, index) => (
          <div key={index} className="flex flex-col items-center">
            {/* Circle container for the logo */}
            <div
              className="bg-gray-800 flex items-center justify-center h-16 w-16 rounded-full shadow"
              
            >
              <img
                src={tool.logo.startsWith("http") ? tool.logo : `/icons/${tool.logo}`}
                alt={`Icon for ${tool.name}`}
                className="h-10 w-10 object-contain"
                loading="lazy" // Adds lazy loading
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src = "/icons/default.png"; // Fallback icon
                }}
              />
            </div>
            
            {/* Tool name below the logo */}
            <span className="text-sm font-medium text-gray-300 mt-2">
              {tool.name}
            </span>
          </div>
        ))}
      </div>
      </AutoScroll>
    </div>

      {/* Bottom Container:  Projects */}
      <div
        className="row-span-2 col-span-2 bg-gray-700 p-4 bg-opacity-30 rounded-lg shadow-md overflow-y-hidden"
        
      >
        <h3 className="text-xl font-bold mb-0 bg-opacity-70 text-white"> Projects</h3>
        <HorizontalAutoScroll speed={50}>
        <div className="flex flex-nowrap gap-4 justify-center md:justify-start">
          {projects.map((project) => (
            <div
              key={project.id}
              className="min-w-[300px] bg-gray-800 text-white rounded-lg shadow p-4"
              style={{
                padding: "15px",
                borderRadius: "10px",
                
              }}
            >
              <h4 className="text-lg font-bold mb-2">
              <span style={{ display: "block", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{project.title}
              </span>
              </h4>
              <p className="text-sm text-gray-300">
              <span style={{ display: "block", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{project.description}
              </span>
              </p>
              <p 
              className="text-yellow-400 text-sm font-medium mb-2">   
              <span style={{ display: "block", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>Tools: {project.tools.join(", ")}
              </span>
              </p>
              <button
                onClick={() => openModal(project)}
                className="bg-blue-500 px-4 py-2 rounded-md font-bold"
                style={{
                  backgroundColor: "#1e90ff",
                  padding: "6px 12px",
                  fontSize: "0.8rem",
                  borderRadius: "6px",
                }}
              >
                View Details
              </button>
            </div>
          ))}
        </div>
        </HorizontalAutoScroll>
      </div>

      {/* Modal for Project Details */}
      {modalContent && (
        <div
          className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center"
          onClick={closeModal}
        >
          <div
            className="bg-gray-800 text-white p-6 rounded-lg shadow-lg w-[50%] max-w-4xl max-h-[50%] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-2xl font-bold mb-4">{modalContent.title}</h3>
            <div className="text-gray-300 space-y-4">
            <p className="text-gray-400 italic mb-4">{modalContent.mainTitle}</p>
              <h4 className="text-yellow-400 text-sm mb-2">{modalContent.date}</h4>
              {modalContent.details.split("\n").map((line, index) => (
                <p key={index}>{line.trim()}</p>
              ))}
              <p className="text-yellow-400">
                <strong>Tools:</strong> 
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
 
        

export default function PortfolioLayout() {
  const [activeSection, setActiveSection] = useState("about");
  return (
    <div className="relative min-h-screen bg-gray-900 bg-opacity-90 text-white">
      {/* Starry Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <StarCanvas />
      </div>

      {/* Main Portfolio Content */}
      <div className="relative z-10 flex flex-col lg:flex-row justify-center py-4 gap-6">
        {/* Left Card */}
        <div className="w-full lg:w-1/4 bg-gray-800 bg-opacity-80 p-6 flex flex-col items-center gap-4 rounded-lg shadow-lg ">
          <div className="w-32 h-32 rounded-full bg-gray-700 bg-opacity-75 flex items-center justify-center">
  
            <img
              src="images/profile.jpg"
              alt="Profile image of M. Sai Manidhar"
              className="w-32 h-32 rounded-full object-cover"
            />
          </div>
  <h1 className="text- lg font-bold mt-2 text-center">M. Sai Manidhar</h1>

 <div>
 {/* Dynamic Heading */}
 <div className="flex items-center justify-center space-x-2">
  <p
    className={`bg-yellow-500 px-2 py-1 w-15 rounded-md text-black text-center font-bold ${
      activeSection === "about"
        ? "About"
        : activeSection === "dataEngineering"
        ? "Data Engineering"
        : activeSection === "projectManagement"
        ? "Project Management"
        
        : ""
    }`}
  >
    {activeSection === "about"
      ? "About Me"
      : activeSection === "dataEngineering"
      ? "Data Engineer"
      : activeSection === "projectManagement"
      ? "Project Manager"
      : 
       ""}
  </p>
  <a
    href={
      activeSection === "about"
        ? "/path-to-about-me-resume.pdf"
        : activeSection === "dataEngineering"
        ? "/path-to-data-engineering-resume.pdf"
        : activeSection === "projectManagement"
        ? "/path-to-project-management-resume.pdf"
        
        : ""
    }
    download
    className="text-black-500 hover:text-blue-600 transition duration-300"
    title="Download Resume"
  >
    <FaDownload className="text-lg" />
  </a>
</div>
  
    {/* Dynamic Description */}
    <h2 className="mt-2 text-sm text-center" style={{ textAlign: "justify" }}>
  {activeSection === "about" && (
    <>
      <p>
        Experienced Data Engineer and Analyst skilled in Python, Big Data, and cloud technologies (AWS, Azure). Proficient in building data pipelines, applying machine learning, and delivering insights through advanced visualization tools. Adept at workflow automation and ensuring data reliability.
      </p>
      <p className="mt-2 text-sm font-bold">Certifications:</p>
      <ul className="list-disc list-outside text-left mt-2"
      style={{
        lineHeight: "1.8", // Spacing between list items
      }}>
        <li>Power BI Certification by Microsoft </li>
        <li>AWS Certified Solutions Architect</li>
        <li>Certified ScrumMaster (CSM) by Scrum Alliance </li>
        <li>Certified Associate in Project Management (CAPM)</li>
        <li>Adobe Analytics Business Practitioner Professional </li>
        <li>Databricks Data Engineer Associate</li>
        <li>Goole AI & ML machine learning Certificate</li>
      </ul>
    </>
  )}
  {activeSection === "dataEngineering" && (
    <>
      <p>
        Proficient in creating robust data pipelines, handling Big Data platforms (Databricks, Spark), and delivering analytics using cloud tools such as Azure and AWS. Skilled in ensuring data accuracy and automation for enterprise systems.
      </p>
      <p className="mt-4 text-sm font-bold">Certifications:</p>
      <ul className="list-disc list-outside text-left mt-2"
  style={{
    lineHeight: "1.8", // Spacing between list items
  }}
>
  <li className="leading-relaxed">
    Databricks Data Engineer Associate
  </li>
  <li className="leading-relaxed">
    Adobe Analytics Business Practitioner Professional
  </li>
  <li className="leading-relaxed">
    Power BI Certification by Microsoft
  </li>
  <li className="leading-relaxed">
    AWS Certified Solutions Architect
  </li>
  <li className="leading-relaxed">
    Certified ScrumMaster (CSM) by Scrum Alliance
  </li>
  <li className="leading-relaxed">
    Certified Associate in Project Management (CAPM)
  </li>
  <li className="leading-relaxed">
    Google AI & ML Machine Learning Certificate
  </li>
      </ul>
    </>
  )}
  {activeSection === "projectManagement" && (
    <>
      <p>
        Experienced in managing cross-functional teams, optimizing supply chains, and delivering projects using tools like MS Project and SAP ERP. Adept at strategy, risk management, and operational planning.
      </p>
      <p className="mt-4 font-bold">Certifications:</p>
      <ul className="list-disc list-outside text-left mt-2"
      style={{
        lineHeight: "1.8", // Spacing between list items
      }}>
      <li>Certified Associate in Project Management (CAPM)</li>
      <li>Certified ScrumMaster (CSM) by Scrum Alliance </li>
      <li>Power BI Certification by Microsoft </li>
        <li>AWS Certified Solutions Architect</li>     
        <li>Adobe Analytics Business Practitioner Professional </li>
        <li>Databricks Data Engineer Associate</li>
        <li>Goole AI & ML machine learning Certificate</li>
      </ul>
    </>
  )}

</h2>  
</div>
  <div className="w-full mt-6 text-sm space-y-4">
    <div className="flex items-center gap-2">
      <FaEnvelope className="text-yellow-500" />
      <span>smanidhar14@gmail.com</span>
    </div>
    <div className="flex items-center gap-2">
      <FaPhone className="text-yellow-500" />
      <span>+1 (970) 391-0949</span>
    </div>
    <div className="flex items-center gap-2">
      <FaMapMarkerAlt className="text-yellow-500" />
      <span>Fort Collins, Colorado, USA</span>
    </div>
  </div>
</div>


      {/* Right Card */}
      <div className="w-full lg:w-2/3 bg-gray-800 bg-opacity-80 p-6 rounded-lg shadow-lg">
  <div className="bg-gray-700 bg-opacity-75 p-4 rounded-lg shadow-md mb-6">
          <nav className="flex justify-center lg:justify-end gap-6 flex-wrap">
            {Object.keys(sections).map((key) => (
              <button
                key={key}
                onClick={() => setActiveSection(key)}
                className={`${
                  activeSection === key
                    ? "text-yellow-500 border-b-2 border-yellow-500"
                    : "text-white"
                } hover:text-yellow-400 font-bold text-lg`}
              >
                {key
                  .replace(/([A-Z])/g, " $1")
                  .replace(/^./, (str) => str.toUpperCase())}
              </button>
            ))}
          </nav>
        </div>

        <section>
          <h2 className="text-2xl font-bold mb-4">
            {sections[activeSection].title}
          </h2>
          {sections[activeSection].content}
        </section>
      </div>
    </div>
    </div>
  );
}
