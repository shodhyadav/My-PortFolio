import { Link } from "react-router-dom";
import React, { useState } from "react";
import { FcExpand } from "react-icons/fc";
import { Dialog } from "@headlessui/react";
import bgImage from "../assets/bg4.jpg";
const skills = [
  {
    name: "Java",
    description: [
      "Java is a versatile and widely-used programming language.",
      "Used for mobile, web, and enterprise applications.",
      "Known for its platform independence (Write Once, Run Anywhere).",
      "Popular frameworks: Spring Boot, Hibernate.",
      "Backbone of Android app development.",
    ],
  },
  {
    name: "Spring Boot",
    description: [
      "Spring Boot simplifies Java application development.",
      "Provides built-in support for microservices.",
      "Eliminates boilerplate configuration.",
      "Supports embedded servers like Tomcat.",
      "Widely used in enterprise applications.",
    ],
  },
  {
    name: "React",
    description: [
      "React is a JavaScript library for building UI components.",
      "Used for building single-page applications (SPAs).",
      "Virtual DOM improves performance.",
      "Supports component-based architecture.",
      "Maintained by Meta (Facebook).",
    ],
  },
  {
    name: "Angular",
    description: [
      "Angular is a TypeScript-based web application framework.",
      "Developed and maintained by Google.",
      "Supports two-way data binding and dependency injection.",
      "Ideal for large-scale enterprise applications.",
      "Famous for its modular architecture.",
    ],
  },
  {
    name: "Express",
    description: [
      "Express.js is a minimal and flexible Node.js web application framework.",
      "Used for building APIs and web applications.",
      "Supports middleware for request handling.",
      "Lightweight and unopinionated.",
      "Popular for backend development in JavaScript.",
    ],
  },
  {
    name: "MongoDB",
    description: [
      "MongoDB is a NoSQL database that stores data in JSON-like format.",
      "Highly scalable and flexible.",
      "Used in modern web applications.",
      "Supports powerful querying and indexing.",
      "Popular for handling large amounts of unstructured data.",
    ],
  },
  {
    name: "MySQL",
    description: [
      "MySQL is a relational database management system.",
      "Widely used for web applications.",
      "Supports structured query language (SQL).",
      "Scalable and high-performance.",
      "Used in enterprise applications and cloud solutions.",
    ],
  },
  {
    name: "Node.js",
    description: [
      "Node.js is a JavaScript runtime built on Chrome's V8 engine.",
      "Used for building scalable network applications.",
      "Non-blocking, event-driven architecture.",
      "Ideal for backend development with Express.js.",
      "Supports asynchronous programming.",
    ],
  },
  {
    name: "JavaScript",
    description: [
      "JavaScript is a high-level, dynamic programming language.",
      "Core technology for web development alongside HTML and CSS.",
      "Supports both frontend and backend development.",
      "Widely used for interactive and dynamic web applications.",
      "Essential for modern frameworks like React and Angular.",
    ],
  },
  {
    name: "TypeScript",
    description: [
      "TypeScript is a superset of JavaScript.",
      "Adds static typing to JavaScript.",
      "Improves code maintainability and scalability.",
      "Developed by Microsoft.",
      "Popular for enterprise-level applications.",
    ],
  },
  {
    name: "HTML",
    description: [
      "HTML (HyperText Markup Language) structures web pages.",
      "Defines the layout and content of a webpage.",
      "Works with CSS and JavaScript for complete web development.",
      "Uses elements like headings, paragraphs, and links.",
      "Fundamental to web development.",
    ],
  },
  {
    name: "CSS",
    description: [
      "CSS (Cascading Style Sheets) styles web pages.",
      "Controls layout, colors, and typography.",
      "Supports responsive design using Flexbox and Grid.",
      "Essential for web aesthetics.",
      "Works alongside HTML and JavaScript.",
    ],
  },
  {
    name: "Bootstrap",
    description: [
      "Bootstrap is a front-end framework for responsive web design.",
      "Provides ready-to-use components and grid system.",
      "Simplifies UI development.",
      "Compatible with modern browsers.",
      "Used in rapid web application development.",
    ],
  },
  {
    name: "Tailwind",
    description: [
      "Tailwind CSS is a utility-first CSS framework.",
      "Allows rapid UI development.",
      "Highly customizable and flexible.",
      "Used for modern web applications.",
      "Popular in the developer community.",
    ],
  },
  {
    name: "C",
    description: [
      "C is a general-purpose programming language.",
      "Used for system programming and embedded systems.",
      "Efficient and widely supported.",
      "Forms the foundation for many modern languages.",
      "Essential for operating systems and hardware-level programming.",
    ],
  },
  {
    name: "C++",
    description: [
      "C++ is an extension of C with object-oriented features.",
      "Used in game development, system software, and performance-critical applications.",
      "Supports multi-paradigm programming.",
      "Popular frameworks: Qt, Unreal Engine.",
      "Provides fine control over system resources.",
    ],
  },
  {
    name: "C#",
    description: [
      "C# is a modern, object-oriented programming language.",
      "Developed by Microsoft and widely used for Windows applications.",
      "Core language for .NET development.",
      "Used in game development with Unity.",
      "Supports asynchronous programming and cloud integration.",
    ],
  },
  {
    name: "Groovy",
    description: [
      "Groovy is a JVM-based scripting language.",
      "Used for scripting, automation, and build tools like Gradle.",
      "Supports dynamic and static typing.",
      "Integrates seamlessly with Java.",
      "Popular in DevOps and CI/CD pipelines.",
    ],
  },
  {
    name: "AWS",
    description: [
      "Amazon Web Services (AWS) is a cloud computing platform.",
      "Offers scalable and cost-effective solutions.",
      "Provides services like EC2, S3, and RDS.",
      "Popular for hosting applications and databases.",
      "Used by enterprises worldwide.",
    ],
  },
  {
    name: "Azure",
    description: [
      "Microsoft Azure is a cloud computing platform.",
      "Provides a range of cloud services including AI, ML, and databases.",
      "Popular for enterprise cloud solutions.",
      "Supports hybrid cloud deployments.",
      "Offers integrations with Microsoft products.",
    ],
  },
  {
    name: "Git",
    description: [
      "Git is a distributed version control system.",
      "Used for tracking changes in source code.",
      "Supports branching and merging.",
      "Essential for collaborative software development.",
      "Widely used in DevOps and CI/CD pipelines.",
    ],
  },
  {
    name: "GitHub",
    description: [
      "GitHub is a platform for hosting and managing Git repositories.",
      "Used for version control and collaboration.",
      "Supports issue tracking and project management.",
      "Provides CI/CD and automation features.",
      "Popular among open-source and enterprise developers.",
    ],
  },
  {
    name: "MuleSoft",
    description: [
      "MuleSoft is an integration platform for connecting applications, data, and devices.",
      "Uses APIs to streamline enterprise connectivity.",
      "Popular for building microservices architectures.",
      "Supports both cloud and on-premise deployments.",
      "Widely used in digital transformation projects.",
    ],
  },
  {
    name: "DWL",
    description: [
      "DataWeave Language (DWL) is MuleSoft’s data transformation language.",
      "Used for data mapping and transformation.",
      "Supports JSON, XML, and CSV formats.",
      "Essential for MuleSoft integration projects.",
      "Optimized for high-performance processing.",
    ],
  },
];
const Skills = () => {
  const [selectedSkill, setSelectedSkill] = useState(null);

  return (
    <div className="p-6 min-h-screen flex flex-col items-center">
      <h2 className="text-3xl font-bold mb-6">Skill Pack</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {skills.map((skill, index) => (
          <button
            key={index}
            onClick={() => setSelectedSkill(skill)}
            className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-xl shadow-lg hover:scale-110 transition transform duration-300 ease-in-out hover:shadow-xl"
          >
            <span className="flex items-center gap-2 font-semibold text-lg">
              {skill.name} <FcExpand />
            </span>
          </button>
        ))}
      </div>
      {selectedSkill && (
        <Dialog open={true} onClose={() => setSelectedSkill(null)}>
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white p-8 rounded-2xl shadow-2xl max-w-lg w-full transform transition-all scale-100 opacity-100">
              <h3 className="text-2xl font-bold mb-4 text-center">
                {selectedSkill.name}
              </h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                {selectedSkill.description.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
              <button
                onClick={() => setSelectedSkill(null)}
                className="mt-6 text-red px-6 py-3 rounded-xl hover:bg-red-600 mx-auto shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 focus:ring-4 focus:ring-red-300 focus:outline-none"
              >
                Close
              </button>
            </div>
          </div>
        </Dialog>
      )}

      <Link to="/">
      <button className="mt-6 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-xl shadow-lg hover:scale-110 transition transform duration-300 ease-in-out hover:shadow-xl">
        <span className="flex items-center gap-2 font-semibold text-lg">
          Home
        </span>
      </button></Link>
    </div>
  );
};
export default Skills;
