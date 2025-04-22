import React from 'react';

const programmingSkills = [
  { name: 'Java', level: 90 },
  { name: 'HTML', level: 85 },
  { name: 'CSS', level: 80 },
  { name: 'JavaScript', level: 75 },
  { name: 'React', level: 80 },
  { name: 'Spring Framework', level: 85 },
  { name: 'Git and GitHub', level: 70 },
  { name: 'REST', level: 75 },
];

const databaseSkills = [
  { name: 'MySQL', level: 85 },
  { name: 'MongoDB', level: 70 },
  { name: 'SpringBoot', level: 80 },
  { name: 'Python', level: 65 },
  { name: 'MERN Stack', level: 75 },
];

const languages = [
  { name: 'English', level: 'Proficient', percentage: 80 },
  { name: 'Tamil', level: 'Native', percentage: 100 },
  { name: 'Hindi', level: 'Intermediate', percentage: 40 },
];

const SkillBar = ({ name, level }: { name: string; level: number }) => {
  return (
    <div className="mb-6">
      <div className="flex justify-between items-center mb-2">
        <span className="text-gray-700 dark:text-gray-300 font-medium">{name}</span>
        <span className="text-gray-500 dark:text-gray-400">{level}%</span>
      </div>
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
        <div 
          className="bg-blue-600 dark:bg-blue-500 h-2.5 rounded-full transition-all duration-500 ease-out"
          style={{ width: `${level}%` }}
        ></div>
      </div>
    </div>
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
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Programming Skills</h3>
            <div className="space-y-2">
              {programmingSkills.map((skill) => (
                <SkillBar key={skill.name} name={skill.name} level={skill.level} />
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Database & Other Skills</h3>
            <div className="space-y-2">
              {databaseSkills.map((skill) => (
                <SkillBar key={skill.name} name={skill.name} level={skill.level} />
              ))}
            </div>
            
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mt-12 mb-6">Languages</h3>
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
        
        <div className="mt-16 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 text-center">
          {['JAVA', 'HTML', 'CSS', 'JavaScript', 'Spring Framework', 'MERN Stack', 'Git and GitHub', 'REST', 'React', 'MySQL', 'SpringBoot', 'Python', 'MongoDB'].map((skill) => (
            <div 
              key={skill}
              className="px-4 py-3 bg-gray-100 dark:bg-gray-800 rounded-lg font-medium text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-blue-900 transition-colors duration-200"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;