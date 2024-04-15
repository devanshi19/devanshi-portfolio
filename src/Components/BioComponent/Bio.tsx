import React from "react";
const Bio = () => {
  const langData = ["JavaScript", "HTML", "CSS", "SASS"];
  const frameWorkData = ["React.js", "Next.js","Tailwind","Bootstrap", "SonarQube", "JEST"];
  const toolsData = ["Git", "Postman", "Electron", "VScode", "Swagger"];
  return (
    <div className="bio-wrap" id="about">
      <div className="bio-content">
        <h6>Want to know about me?</h6>
        <p>
          I started my journey as a software Engineer specialize in frontend
          development almost 3 years ago . I have collaborated with e-commerce
          merchants to design and develop beautiful websites . I have also
          worked on automotive software Development projects . I’m quietly
          confident and I love what I do .
        </p>
        <div className="tech-info-wrap">
          {/* <h6>Technology Stack</h6> */}
          <div className="card-parent">
            <div className="card-wrap lang-info">
              <div className="card-color-bg"></div>
              <h4>Languages</h4>
              <ul>
                {langData.map((item, i) => {
                  return <li key={i}>{item}</li>;
                })}
              </ul>
            </div>
            <div className="card-wrap frameWrok-info">
              <div className="card-color-bg"></div>
              <h4>FrameWorks</h4>
              <ul>
                {frameWorkData.map((item, i) => {
                  return <li key={i}>{item}</li>;
                })}
              </ul>
            </div>
            <div className="card-wrap tool-info">
              <div className="card-color-bg"></div>
              <h4>Dev Tools</h4>
              <ul>
                {toolsData.map((item, i) => {
                  return <li key={i}>{item}</li>;
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bio;
