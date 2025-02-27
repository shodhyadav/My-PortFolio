import img from "../assets/bg.jpg";
import { Link } from "react-router-dom";
const About = () => {
  return (
    <>
      <div className="flex flex-col lg:flex-row items-center justify-center px-6 lg:px-20 py-10  min-h-screen">
        <div className="flex justify-center w-full lg:w-1/3">
          <img
            src={img}
            alt="shodh"
            className="h-40 w-40 md:h-56 md:w-56 rounded-full shadow-lg object-cover"
          />
        </div>
        <div className="w-full lg:w-2/3 text-center lg:text-left mt-6 lg:mt-0">
          <h1 className="text-3xl md:text-4xl font-extrabold text-white-800">
            SHODH YADAV
          </h1>
          <p className="text-lg text-white-600 mt-2">A bit about me</p>
          <p className="text-white-700 mt-3 leading-relaxed">
            I am a passionate Full Stack Developer at Infinite Computer
            Solutions, crafting seamless digital experiences with cutting-edge
            technologies. Beyond coding, I love exploring the world and
            unraveling the mysteries of history. When not building robust
            applications, you’ll find me immersed in books, on the cricket
            field, or bringing ideas to life through code.
          </p>
          <Link to="/">
            <button className="mt-6 px-6 py-3 text-lg font-semibold text-white bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg shadow-md hover:scale-105 transition duration-300">
              Home
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};
export default About;
