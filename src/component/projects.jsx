import dark from "../assets/dark.jpg"
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const projects = [
  {
    title: "Infinite EDI Gateway (Angular+Spring Boot+MongoDB+Azure)",
    company: "Infinite Computer Solutions India Limited",
    description: [
      "Designed and implemented a responsive and user-friendly UI for the EDI gateway using Angular.",
      "Integrated the front-end with Dell Boomi to fetch and display EDI file data through RESTful APIs.",
      "Developed multiple screens for batch and real-time transactions.",
      "Implemented Single Sign-On (SSO) using Okta, enhancing security and user experience.",
      "Implemented authentication and authorization using JSON Web Tokens.",
      "Worked closely with UX designers to ensure a consistent user experience.",
      "Designed and implemented RESTful web services using Spring Boot.",
      "Managed both back-end and front-end aspects of the development process.",
      "Utilized MongoDB for efficient data storage and retrieval.",
      "Conducted usability testing to enhance the overall user experience."
    ]
  },
  {
    title: "JSON to EDI Converter (JavaScript)",
    description: [
      "Lightning-Fast Conversion – Optimized JavaScript logic ensures rapid and accurate JSON to EDI transformation.",
      "Seamless Integration – Easily integrates with existing systems to automate EDI processing.",
      "Customizable & Scalable – Adaptable to different EDI formats and scalable for growing data needs.",
      "Github:"
    ]
  },
  {
    title: "EDI File Size Increaser (JavaScript)",
    description: [
      "Customizable Expansion – Allows flexible adjustments based on business and compliance needs.",
      "Github:"
    ]
  },
  {
    title: "Doctor Appointment System (Angular+Spring Boot+MongoDB+Azure)",
    description: [
      "Seamless Scheduling – Effortlessly book, reschedule, or cancel appointments with real-time availability.",
      "Automated Reminders – Reduce no-shows with SMS and email notifications for upcoming appointments.",
      "Secure & Scalable – Ensures patient data privacy while supporting multiple clinics and doctors.",
      "Github: ",
      "https://github.com/shodhyadav/Doctor_Appointment_System"
    ]
  },
  {
    title: "Cab Booking Service (Angular+Spring Boot+MySQL+Git+Github)",
    description: [
      "User-Friendly Interface – Intuitive and responsive design for a seamless booking experience.",
      "24/7 Availability – Book a ride anytime, anywhere, with instant confirmations.",
      "Multiple Ride Options – Choose from economy, premium, or shared rides to suit your needs.",
      "Github Frontend: ",
      "https://github.com/shodhyadav/cab_services_frontend",
      "Github Backend: ",
      "https://github.com/shodhyadav/Cab_services_server"
    ]
  }
];

const ProjectCard = ({ title, company, onClick }) => {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg rounded-lg p-6 my-4 s:mx-2 w-full md:w-full lg:w-full cursor-pointer hover:shadow-2xl transition-transform transform hover:scale-105" onClick={onClick}>
      <h2 className="text-2xl font-bold mb-2">{title}</h2>
      {company && <h4 className="text-lg font-semibold">({company})</h4>}
    </div>
  );
};
const Modal = ({ project, onClose }) => {
  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 backdrop-blur-md z-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -50, opacity: 0 }}
          className="bg-white p-8 rounded-lg w-full max-w-4xl shadow-2xl relative text-gray-900"
        >
          <button
            className="absolute top-4 right-4 text-gray-700 text-2xl font-bold hover:text-red-600 transition"
            onClick={onClose}
          >
            &times;
          </button>
          <h2 className="text-3xl font-bold text-gray-800 mb-3">{project.title}</h2>
          {project.company && <h4 className="text-xl font-semibold text-gray-600">({project.company})</h4>}
          <ul className="list-disc pl-6 mt-4 text-gray-700">
            {project.description.map((point, index) => (
              <li key={index} className="mt-2">{point}</li>
            ))}
          </ul>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};
const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section className=" py-12 md:px-12">
      <div className=" mx-auto">
        <h1 className="text-5xl font-bold text-center text-white-900 mb-8">Projects</h1>
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} onClick={() => setSelectedProject(project)} />
        ))}
        {selectedProject && <Modal project={selectedProject} onClose={() => setSelectedProject(null)} />}
      </div>
    </section>
  );
};
export default Projects;
