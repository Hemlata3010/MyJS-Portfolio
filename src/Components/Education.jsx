// education.jsx
import React from "react";

const Education = () => {
  return (
    <div className="education-container">
      <h1 className="title">Education</h1>
      <p className="description">This is the education page.</p>
      <div className="education-list">
        <h2>Academic Background</h2>
        <ul>
          <li>
            <span>Master of Computer Application</span>
            <span>DCRUST Sonipat, 2023-2025</span>
          </li>
          <li>
            <span>Bachelor of Computer Application</span>
            <span>MDU Rohtak, 2021-2023</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Education;
