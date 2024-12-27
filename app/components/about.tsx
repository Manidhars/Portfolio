"use client";

import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import Typewriter from "typewriter-effect";

const AboutSQL = () => {
  const developerCodeStatic = `
-- Developer Information Query
WITH Developer AS (
    SELECT
        'M. Sai Manidhar' AS name,
        ARRAY['SQL', 'Python', 'Power BI', 'Azure', 'GCP', 'Databricks'] AS skills,
        '3+ years' AS experience,
        'Building efficient data-driven solutions' AS passion
),
  `;
  const developerCodeDynamic = `
SELECT * FROM Developer WHERE passion = 'Building efficient data-driven solutions';
`;

  return (
    <div className="w-full max-w-4xl bg-gray-800 bg-opacity-90 p-6 flex flex-col items-center justify-center rounded-lg shadow-lg mx-auto">
      {/* Main Container */}
      <div className="bg-gray-900 text-green-400 p-8 rounded-lg shadow-lg w-full max-w-3xl">
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
        </pre>

        {/* Dynamic SQL Code with Typewriter */}
        <div className="mt-4 text-green-300">
          <Typewriter
            options={{
              strings: [developerCodeDynamic],
              autoStart: true,
              loop: true,
              delay: 70, // Typing speed for the last line
              deleteSpeed: 50, // Speed for deleting text
              
            }}
          />
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
