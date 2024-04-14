import React from "react";
import { MdAssignmentTurnedIn } from "react-icons/md";
const Projects = () => {
  const prjectData = [
    {
      id: 1,
      name: "Weather Application",
      image: "",
      github: "https://github.com/devanshi19/weather--app.git",
      desc: "An intuitive weather app designed to deliver real-time weather information tailored to your location. With a minimalist interface and accurate forecasts, users can effortlessly stay updated on weather information.",
      type: "personal",
    },
    {
      id: 2,
      name: "Travel MERN Application",
      github:
        "https://travel-mern-35jvvypnk-devanshis-projects-4c413d6b.vercel.app/",
      desc: "This MERN travel app, designed to revolutionize your travel planning experience. Here users can effortlessly search for travel destinations, explore detailed information including prices and duration, and access essential trip details all in one place. ",
      type: "personal",
    },
    {
      id: 3,
      name: "Bunker Branding",
      github: "",
      desc: "I have worked for website design part for this innovative e-commerece project . Goal of this project to connect influencer with merchendise to improve their products which will be good for customers.",
      type: "proffessional",
    },
    {
      id: 4,
      name: "Tobbaco Locker",
      github: "",
      desc: "It was an e-commerece project where i worked on website design with HTML ,CSS ,Javascript Tech stack.",
      type: "proffessional",
    },
    {
      id: 5,
      name: "Izzy & Liv",
      github: "",
      desc: "In my role within an e-commerce project, I worked on development of subscription dashboard which has features like seamless subscription cancellation ,flexible modification of recurring order dates, and the dynamic adjustment of order frequencies to suit individual preferences.",
      type: "proffessional",
    },
    {
      id: 6,
      name: "DTD(Diagnostic Tool Devlopment)",
      github: "",
      desc: "DTD,a windows-based application, is an aftersales diagnostic tool. It supports both online and offline diagnostics for checking the overall health of the vehicle.I worked as frontend fullstack in this project.",
      type: "proffessional",
    },
    {
      id: 7,
      name: "BHUB Employee Portal",
      github: "",
      desc: "I played a pivotal role in the design of an innovative Employee Portal project.It includes dynamic dashboard providing insightful overviews, as well as streamlined attendance approval and rejection pages and many more.",
      type: "proffessional",
    },
    {
      id: 8,
      name: "FAST(Fisker After sale service Tool)",
      github: "",
      desc: "It was same software as DTD we created for on client called Fisker.I worked on development and testing part with JEST in this project.",
      type: "proffessional",
    },
  ];
  return (
    <div className="project-info-wrap" id="projects">
      <h6>Projects</h6>
      <p>
        Here are the list of some personal and professional projects I have
        worked on.
      </p>
      <ul className="projects-data">
        {prjectData.map((data) => {
          return (
            // <li>
            //   <a href={data.github} className="project-card-wrap">
            //     <div className="card-top">
            //       {/* <MdAssignmentTurnedIn className="project-icon" /> */}
            //     </div>
            //     <div className="card-bottom">
            //       <div className="card-header">
            //         <svg
            //           className="card-arc"
            //           width="80"
            //           height="80"
            //           xmlns="http://www.w3.org/2000/svg"
            //         >
            //           <path
            //             fill="#e88c7d"
            //             d="M 40 80 c 22 0 40 -22 40 -40 v 40 Z"
            //           />
            //         </svg>
            //         <h4>{data.name}</h4>
            //       </div>
            //       <div className="card-desc">
            //         <p>{data.desc}</p>
            //       </div>
            //     </div>
            //   </a>
            // </li>

            <li>
              {data.type === "personal" ? (
                <a
                  href={data.github}
                  className={`${data.type} project-card-wrap`}
                >
                  <div className="card-top">
                    <div className="icon-wrap">
                      <MdAssignmentTurnedIn className="project-icon" />
                    </div>
                    <h4>{data.name}</h4>
                  </div>
                  <div className="card-bottom">
                    <p>{data.desc}</p>
                  </div>
                </a>
              ) : (
                <span className={`${data.type} project-card-wrap`}>
                  <div className="tag-wrap">
                    <span>Proffessional Work</span>
                  </div>
                  <div className="card-top">
                    <div className="icon-wrap">
                      <MdAssignmentTurnedIn className="project-icon" />
                    </div>
                    <h4>{data.name}</h4>
                  </div>
                  <div className="card-bottom">
                    <p>{data.desc}</p>
                  </div>
                </span>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Projects;
