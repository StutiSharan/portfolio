import React from 'react';
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiMongodb,
  SiNodedotjs,
  SiExpress,
  SiGithub,
  SiFirebase,
} from 'react-icons/si';

const skills = [
  { name: 'HTML5', icon: <SiHtml5 size={40} /> },
  { name: 'CSS3', icon: <SiCss3 size={40} /> },
  { name: 'JavaScript', icon: <SiJavascript size={40} /> },
  { name: 'React', icon: <SiReact size={40} /> },
  { name: 'Tailwind CSS', icon: <SiTailwindcss size={40} /> },
  { name: 'MongoDB', icon: <SiMongodb size={40} /> },
  { name: 'Node.js', icon: <SiNodedotjs size={40} /> },
  { name: 'Express', icon: <SiExpress size={40} /> },
  { name: 'Firebase', icon: <SiFirebase size={40} /> },
  { name: 'GitHub', icon: <SiGithub size={40} /> },
];

const Skills = () => {
  return (
    <section className="py-16 bg-gray-900 text-white" id="skills">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-cyan-400">
          Tech Stack & Tools
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 justify-items-center">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center p-4 bg-gray-800 rounded-xl shadow-lg hover:scale-105 transform transition duration-300 ease-in-out hover:shadow-cyan-500/40"
              style={{ width: '120px', height: '120px' }} // Equal width & height
            >
              <div className="mb-2 text-cyan-400">{skill.icon}</div>
              <p className="text-sm font-semibold">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
