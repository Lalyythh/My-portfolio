import React from 'react';
import { motion } from 'framer-motion';
import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import {
  SiHtml5, SiCss3, SiJavascript, SiReact, SiSpring, SiGithub,
  SiMysql, SiMongodb, SiSpringboot, SiPython, SiPostman
} from 'react-icons/si';
import { FaLanguage } from 'react-icons/fa';
import { FaJava } from 'react-icons/fa6';
import { SiFramework } from "react-icons/si";

const programmingSkills = [
  { name: 'Java', level: 90, color: '#E76F00' },
  { name: 'HTML', level: 85, color: '#e34c26' },
  { name: 'CSS', level: 80, color: '#264de4' },
  { name: 'JavaScript', level: 75, color: '#f0db4f' },
  { name: 'React', level: 80, color: '#61DBFB' },
  { name: 'Spring Framework', level: 85, color: '#6db33f' },
  { name: 'Git and GitHub', level: 70, color: '#333' },
  { name: 'REST', level: 75, color: '#ff6c37' },
];

const databaseSkills = [
  { name: 'MySQL', level: 85, color: '#00758f' },
  { name: 'MongoDB', level: 70, color: '#47A248' },
  { name: 'SpringBoot', level: 80, color: '#6db33f' },
  { name: 'Python', level: 65, color: '#306998' },
  { name: 'MERN Stack', level: 75, color: '#61DBFB' },
];

const languages = [
  { name: 'English', level: 'Proficient', percentage: 80 },
  { name: 'Tamil', level: 'Native', percentage: 100 },
  { name: 'Hindi', level: 'Intermediate', percentage: 40 },
];

const iconMap: { [key: string]: React.ReactNode } = {
  Java: <FaJava  size={24} color="#E76F00" />, // Replace with a valid icon or remove
  HTML: <SiHtml5 size={24} color="#e34c26" />,
  CSS: <SiCss3 size={24} color="#264de4" />,
  JavaScript: <SiJavascript size={24} color="#f0db4f" />,
  React: <SiReact size={24} color="#61DBFB" />,
  'Spring Framework': <SiSpring size={24} color="#6db33f" />,
  'Git and GitHub': <SiGithub size={24} color="#333" />,
  REST: <SiPostman size={24} color="#ff6c37" />,
  MySQL: <SiMysql size={24} color="#00758f" />,
  MongoDB: <SiMongodb size={24} color="#47A248" />,
  SpringBoot: <SiSpringboot size={24} color="#6db33f" />,
  Python: <SiPython size={24} color="#306998" />,
  'MERN Stack': <SiFramework size={24} color="#61DBFB" />,
};

const SkillCard = ({
  name,
  level,
  color,
}: {
  name: string;
  level: number;
  color: string;
}) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="flex flex-col items-center bg-white dark:bg-gray-800 shadow-md rounded-xl p-4 transition-all duration-300"
    >
      <div className="w-24 h-24 mb-4">
        <CircularProgressbarWithChildren
          value={level}
          styles={buildStyles({
            pathColor: color,
            trailColor: '#e5e7eb',
          })}
        >
          <div className="flex flex-col items-center">
            {iconMap[name] || <FaLanguage size={22} />}
            <div className="text-xs mt-1 text-gray-700 dark:text-gray-300 font-medium text-center">
              {name}
            </div>
          </div>
        </CircularProgressbarWithChildren>
      </div>
    </motion.div>
  );
};

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Skills & Expertise</h2>
          <div className="mt-2 w-16 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="mb-16">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Programming Skills</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {programmingSkills.map((skill) => (
              <SkillCard key={skill.name} name={skill.name} level={skill.level} color={skill.color} />
            ))}
          </div>
        </div>

        <div className="mb-16">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Database & Other Skills</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {databaseSkills.map((skill) => (
              <SkillCard key={skill.name} name={skill.name} level={skill.level} color={skill.color} />
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Languages</h3>
          <div className="space-y-6">
            {languages.map((lang) => (
              <div key={lang.name} className="mb-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-700 dark:text-gray-300 font-medium">{lang.name}</span>
                  <span className="text-gray-500 dark:text-gray-400">{lang.level}</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                  <div
                    className="bg-blue-600 dark:bg-blue-500 h-2.5 rounded-full"
                    style={{ width: `${lang.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
