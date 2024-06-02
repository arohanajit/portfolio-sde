import React from "react";
import ExperienceCard from "../utils/ExperienceCard";

const Experience = () => {
  return (
    <div
      id="experience"
      className="p-[50px] md:pt-[100px] md:pl-[100px] md:pr-[50px]"
    >
      <h2
        id="experience-title"
        class="font-bold uppercase pb-[20px] text-[#01e2c7]"
      >
        Experience
      </h2>

      <ExperienceCard
        timeline="May 2021 - July 2023"
        role="Software Development Associate"
        name="Accenture"
        description={[
          <>
            Developed and maintained dynamic, responsive web applications using <span className="font-medium text-teal-300">React JS </span> for the front end and Django for the backend, 
            delivering high-quality solutions to clients
          </>,
          <>
            Implemented clean, reusable, and modular code using React components and hooks, resulting in a 
            <span className="font-medium text-slate-200">
            20% increase
            </span>{" "}
            in efficiency.
          </>,
          <>
            Utilized Django's powerful features, such as <span className="font-medium text-teal-300">ORM and REST framework </span>, to build scalable and secure backend systems, handling over {" "}
            <span className="font-medium text-slate-200">10,000 monthly requests</span>.
          </>,
          <>
            Integrated React with Django using <span className="font-medium text-teal-300">RESTful APIs</span>, ensuring seamless communication between the front end and backend.
          </>,
          <>
          Collaborated with a team of 3+ back-end developers and web designers to improve usability, achieving a <span className="font-medium text-slate-200">15% increase</span> in user satisfaction.
          </>
        ]}
        skills={[
          "REact JS",
          "Django",
          "Cloud Deployment",
          "RESTful APIs",
        ]}
      />

      <ExperienceCard
        timeline="September 2018 - June 2021"
        role="Web Developer"  
        name="Entreprenuership Cell, KIIT University"
        description={[
          <>
          Developed and maintained the college entrepreneurship cell website, responsible for handling traffic ranging from <span className="font-medium text-slate-200">500 to 2000 daily hits</span>
          depending on events.
          </>,
          <>
          Built and deployed separate websites for various events hosted by the cell, ensuring a smooth user experience.
          </>,
          <>
          Utilized  <span className="font-medium text-teal-300">MongoDB and Node.js</span> for backend development, showcasing proficiency in building robust and scalable web applications.
          </>,
          <>
          Leveraged <span className="font-medium text-teal-300">AWS infrastructure</span> for website hosting, demonstrating a solid understanding of cloud services and deployment.
          </>,
        ]}
        skills={[
          "JavaScript",
          "AWS",
          "MongoDB",
          "NodeJS",
        ]}
      />

      <ExperienceCard
        timeline="February 2019 - January 2022"
        role="Python Developer"
        name="Internet of Things Research Lab, KIIT University"
        description={[
          <>
            Developed and maintained a dashboard for real-time sensor data mapping {" "}<span className="font-medium text-slate-200">
              10,000+ rows of data 24/7
            </span>dashboard using {" "}
            <span className="font-medium text-slate-200">
              Python and Django
            </span>
            
          </>,
          <>
            Utilized <span className="font-medium text-slate-200"> Intel OpenVINO </span> toolkit to run deep learning models on GPU for high density sensor data
            .
          </>,
        ]}
        skills={["Python", "OpenVINO", "Django", "Matplotlib"]}
      />
    </div>
  );
};

export default Experience;
