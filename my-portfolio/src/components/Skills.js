// src/components/Skills.js

import React from 'react';

const Skills = () => {
  return (
    <main>
    <section>
      <h2>Skills</h2>
      <ul>
        <li>Node.js</li>
        <li>MongoDB</li>
        {/* Add more skills based on your profile */}
      </ul>
      {/* Include Licenses & Certifications content here */}
    </section>
    <section>
          <h2>Licenses & Certifications</h2>
          <div>
            <h3>AWS - Amazon Web Services</h3>
            <p>Issued Aug 2022</p>
            <p>
              <strong>Skills:</strong> Problem Solving
            </p>
          </div>
          <div>
            <h3>AWS - Amazon Web Services</h3>
            <p>Issued Jul 2022</p>
            <p>
              <strong>Skills:</strong> Problem Solving
            </p>
          </div>
        </section>
    </main>
  );
};

export default Skills;
