import { useState } from "react";
import AnimatedLetters from "../AnimatedLetters";
import img from "../assates/pasport.jpg";
import "loaders.css/src/animations/pacman.scss";
import "loaders.css/loaders.min.css";
import { Helmet } from "react-helmet-async";

function Hero() {
  const [letterClass, setLetterClass] = useState("text-animate-hover");
  const nameArray = [
    "A",
    "M",
    "I",
    "T",
    " ",
    "K",
    "U",
    "M",
    "A",
    "R",
    " ",
    "G",
    "H",
    "O",
    "S",
    "H",
  ];
  const github = ["G", "i", "t", "H", "u", "b"];
  const linkedin = ["L", "i", "n", "k", "e", "d", "I", "n"];

  return (
    <>
      <Helmet>
        <title>Amit Kumar Ghosh</title>
        <meta
          name="description"
          content="Hello, I am Amit Kumar Ghosh. I am a Full Stack Web Developer. I have completed my B.Sc. in Computer Science and Engineering from Daffodil International University. I am passionate about learning new technologies and building web applications. I have experience in developing web applications using React, Node.js, Express.js, and MongoDB. I am also familiar with Python, Django, and MySQL. I am currently working as a Full Stack Web Developer at Daffodil International University. I am always eager to learn new things and improve my skills. I am looking for opportunities to work on challenging projects and contribute to the tech community."
        />
        <meta
          property="og:title"
          content="Amit Kumar Ghosh"
        />
        <meta
          property="og:description"
          content="Hello, I am Amit Kumar Ghosh. I am a Full Stack Web Developer. I have completed my B.Sc. in Computer Science and Engineering from Daffodil International University. I am passionate about learning new technologies and building web applications. I have experience in developing web applications using React, Node.js, Express.js, and MongoDB. I am also familiar with Python, Django, and MySQL. I am currently working as a Full Stack Web Developer at Daffodil International University. I am always eager to learn new things and improve my skills. I am looking for opportunities to work on challenging projects and contribute to the tech community."
        />
        <link rel="canonical" href="https://amitkumarghosh.vercel.app/" />
      </Helmet>
      <div className="p-4 sm:p-8   bg-gray-50 shadow-sm rounded-lg">
        <div className="flex flex-col md:grid md:grid-cols-2 gap-6 mb-6">
          <div className="flex justify-center md:justify-start">
            <img
              src={img}
              alt="Profile pic of Amit Kumar Ghosh"
              className="w-32 h-32 sm:w-36 sm:h-36 object-cover object-top rounded-full border-2 border-blue-500 shadow-md"
            />
          </div>
          <div className="text-center md:text-left">
            <h2 className="text-3xl sm:text-2xl font-bold text-blue-700">
              <AnimatedLetters
                letterClass={letterClass}
                strArray={nameArray}
                idx={nameArray.length}
              />
            </h2>

            <p className="text-gray-600">Ashulia, Dhaka</p>
            <p className="text-gray-600">amitkumar89155@gmail.com</p>
            <p className="text-gray-600">+8801788133927</p>
            <p className="text-gray-600 mt-2">
              [
              <a
                href="https://github.com/L0rd-AK"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 transition-colors"
              >
                <AnimatedLetters
                  letterClass={letterClass}
                  strArray={github}
                  idx={github.length}
                />
              </a>
              ] [
              <a
                href="https://www.linkedin.com/in/amit-kumar-ghosh-41a602215"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 transition-colors"
              >
                <AnimatedLetters
                  letterClass={letterClass}
                  strArray={linkedin}
                  idx={linkedin.length}
                />
              </a>
              ]
            </p>
          </div>
        </div>
        <div>
          <h3 className="text-lg font-bold uppercase mb-2 text-blue-700 border-b border-gray-300 pb-1">
            Summary
          </h3>
          <p className="text-gray-700 leading-relaxed text-justify text-sm sm:text-base">
            I am a full-stack developer with years of experience in creating and
            managing websites. My skills include coding in HTML, CSS, and
            JavaScript, as well as working in React, Node JS, Express JS, and
            MongoDB. As a full-stack developer with a lot of ambition, I seek a
            position in a reputable IT company where I can use the most advanced
            technologies and work on various and complex projects. If I had to
            define myself in one sentence, I would be a team player, problem
            solver, and tech obsessed!!
          </p>
        </div>
      </div>
    </>
  );
}

export default Hero;
