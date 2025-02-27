import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
const educationData = [
  {
    institution: "Babu Banarasi Das University",
    year: "2018-2022",
    major: "Computer Science & Engineering (B.Tech)",
    percentage: "69%",
  },
  {
    institution: "Molana Azad Inter College (10+2)",
    year: "2015-2016",
    major: "Science",
    percentage: "80%",
  },
  {
    institution: "Amar Shahid Vidya Mandir (10th)",
    year: "2013-2014",
    major: "Science",
    percentage: "85%",
  },
];
const Education=()=>{
    return (<>
        <section className="min-h-screen flex flex-col items-center justify-center py-12 px-6">
          <h1 className="text-4xl sm:text-5xl font-bold text-white-900 mb-8 text-center">Education</h1>
          <div className="w-full max-w-4xl space-y-6">
            {educationData.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-white shadow-lg rounded-xl p-6 border-l-8 border-blue-500 hover:shadow-xl transition-transform transform hover:scale-105"
              >
                <h2 className="text-2xl font-semibold text-gray-800">{edu.institution}</h2>
                <p className="text-gray-600 text-lg">{edu.year}</p>
                <p className="text-gray-700 font-medium mt-2">{edu.major}</p>
                <p className="text-gray-800 font-bold mt-1">Percentage: {edu.percentage}</p>
              </motion.div>
            ))}
          </div>
        </section>
        <Link to="/">
        <button className="mb-10 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6  rounded-xl shadow-lg hover:scale-110 transition transform duration-300 ease-in-out hover:shadow-xl">
          <span className="flex items-center gap-2 font-semibold text-lg">
            Home
          </span>
        </button></Link></>
      );
}
export default Education;