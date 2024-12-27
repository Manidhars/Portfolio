"use client";

import React, { useEffect, useState } from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import Typewriter from "typewriter-effect";

const AboutSQL = () => {
  const [isMounted, setIsMounted] = useState(false); // State to ensure Typewriter only renders on the client

  useEffect(() => {
    setIsMounted(true); // Set to true after the component has mounted
  }, []);

  const developerCodeStatic = `
-- Developer Information Query
WITH Developer AS (
    SELECT
        `;

  const developerCodeDynamic = `
SELECT * FROM Developer WHERE passion = 'Building efficient data-driven solutions';
`;

  return (
    <div className="w-full max-w-4xl bg-gray-800 bg-opacity-30 p-6 flex flex-col items-center justify-center rounded-lg shadow-lg mx-auto">
      {/* Main Container */}
      <div className="relative bg-gray-900 p-8 rounded-lg bg-opacity-40 shadow-lg w-full max-w-3xl">
        {/* Colored Dots */}
        <div className="absolute top-2 left-2 flex gap-2">
          <div
            className="h-3 w-3 rounded-full bg-red-500"
            title="Close"
          ></div>
          <div
            className="h-3 w-3 rounded-full bg-yellow-500"
            title="Minimize"
          ></div>
          <div
            className="h-3 w-3 rounded-full bg-green-500"
            title="Maximize"
          ></div>
        </div>

        {/* Static SQL Code */}
        <pre
          className="text-sm md:text-base whitespace-pre-wrap overflow-x-hidden"
          style={{
            fontSize: "1rem",
            lineHeight: "1.6",
            fontFamily: "monospace",
          }}
        >
          {developerCodeStatic}
          <span style={{ color: "#FFA500" }}>'M. Sai Manidhar'</span> AS{" "}
          <span style={{ color: "#00BFFF" }}>name</span>,
          {"\n"} ARRAY[
          <span style={{ color: "#FFA500" }}>
            'SQL', 'Python', 'Power BI', 'Azure', 'GCP', 'Databricks'
          </span>
          ] AS <span style={{ color: "#00BFFF" }}>skills</span>,
          {"\n"} <span style={{ color: "#FFA500" }}>'3+ years'</span> AS{" "}
          <span style={{ color: "#00BFFF" }}>experience</span>,
          {"\n"} <span style={{ color: "#FFA500" }}>
            'Building efficient data-driven solutions'
          </span>{" "}
          AS <span style={{ color: "#00BFFF" }}>passion</span>
          {"\n"}),
        </pre>

        {/* Dynamic SQL Code with Typewriter */}
        <div className="mt-4 text-green-300">
          {isMounted && ( // Ensure Typewriter only runs on the client
            <Typewriter
              options={{
                strings: [developerCodeDynamic],
                autoStart: true,
                loop: true,
                delay: 70, // Typing speed for the last line
                deleteSpeed: 50, // Speed for deleting text
              }}
            />
          )}
        </div>

        {/* Social Links */}
        <div className="flex items-center justify-center mt-6 gap-8 text-gray-400">
          <a
            href="www.linkedin.com/in/sai-manidhar-mamidi-366030172"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition"
            title="LinkedIn"
            aria-label="LinkedIn Profile"
          >
            <FaLinkedin size={32} />
          </a>
          <a
            href="https://github.com/Manidhars"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300 transition"
            title="GitHub"
            aria-label="GitHub Profile"
          >
            <FaGithub size={32} />
          </a>
          <a
            href="mailto:smanidhar14@gmail.com"
            className="hover:text-yellow-400 transition"
            title="Email"
            aria-label="Send Email"
          >
            <FaEnvelope size={32} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutSQL;
