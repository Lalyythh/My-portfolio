import React, { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';

type Project = {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  technologies: string[];
  github?: string;
  demo?: string;
};

const projects: Project[] = [
  {
    id: 1,
    title: 'LocalFynd - Business Directory',
    category: 'Full Stack',
    image: 'https://t3.ftcdn.net/jpg/12/07/35/02/240_F_1207350294_65ouy5Au2HrTX9mHBJdXmH8UlKsyCMDP.jpg',
    description: 'Developed a full-stack local business directory platform for users to discover and list independent businesses. Features include user authentication, business reviews, search, and filtering.',
    technologies: ['Spring Boot', 'Java', 'MySQL', 'React', 'HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/Lalyythh/LocalBusinessRepo.git',
  },
  {
    id: 2,
    title: 'Task Manager - MERN Stack',
    category: 'Full Stack',
    image: 'https://t3.ftcdn.net/jpg/11/88/27/12/240_F_1188271278_m1z9ayEykJNljxZBfdGEMzI3kM3cEscT.jpg',
    description: 'A fully-featured task management web application built with the MERN stack. Users can add, update, delete, and search for tasks with a clean UI and responsive design.',
    technologies: ['MongoDB', 'Express.js', 'React', 'Node.js'],
    github: 'https://github.com/Lalyythh/TaskManager.git',
  },
  {
    id: 3,
    title: 'JobFynder - Job Search Platform',
    category: 'Full Stack',
    image: 'https://t3.ftcdn.net/jpg/06/26/48/72/240_F_626487258_35Id0uBFaqgWSAJ9h1dAtR1BLOU3maLz.jpg',
    description: 'Created a job search platform using the MERN stack where users can post and browse job listings, apply for jobs, and manage applications. Includes filters by location, category, and role.',
    technologies: ['MongoDB', 'Express.js', 'React', 'Node.js'],
    github: 'https://github.com/Lalyythh/JobFynder.git',
  },
  {
    id: 4,
    title: 'QuickNotes - Personal Notes App',
    category: 'Full Stack',
    image: 'https://t3.ftcdn.net/jpg/11/26/89/72/240_F_1126897285_Z5kfXsVtRe024XAJ1gMOswrQNozRel5V.jpg',
    description: 'QuickNotes is a minimal and responsive personal note-taking app built using the MERN stack. Users can create, update, delete, and search their notes efficiently.',
    technologies: ['MongoDB', 'Express.js', 'React', 'Node.js'],
    github: 'https://github.com/Lalyythh/Quick_Notes.git',
  },
  {
    id: 5,
    title: 'MERN Chatbot - Custom Q/A',
    category: 'Full Stack',
    image: 'https://t3.ftcdn.net/jpg/10/56/41/48/240_F_1056414850_Gnm3zp3rBBxrsTNlJMrQMITastkRfQ3l.jpg',
    description: 'Built a smart chatbot using the MERN stack that handles custom Q&A from a predefined dataset. Works offline without any external APIs and supports conversational flow.',
    technologies: ['MongoDB', 'Express.js', 'React', 'Node.js'],
    github: 'https://github.com/Lalyythh/Mern_ChatBot.git',
  },
  {
    id: 6,
    title: 'ColdFit - Clothing Store',
    category: 'Full Stack',
    image: 'https://cdn.pixabay.com/photo/2019/04/26/07/14/store-4156934_1280.png',
    description: 'ColdFit is an online clothing store built with the MERN stack. Users can browse products, add them to their cart, and proceed with fake checkout. The admin panel allows product management.',
    technologies: ['MongoDB', 'Express.js', 'React', 'Node.js', 'CSS'],
    github: 'https://github.com/',
  },
  {
    id: 7,
    title: 'Mobile Game Application',
    category: 'Mobile',
    image: 'https://t3.ftcdn.net/jpg/09/14/58/54/240_F_914585423_I2YTg5TOO27Lmp4ssRKOJ8BsmSZocX9E.jpg',
    description: 'Created engaging mobile game applications that contributed to a better understanding of user interaction within software development.',
    technologies: ['Android', 'Java', 'Mobile Development'],
    github: 'https://github.com/',
  }
];

const Projects: React.FC = () => {
  const [filter, setFilter] = useState('all');
  
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category.toLowerCase() === filter.toLowerCase());
  
  const filters = ['all','full stack', 'Mobile'];
  
  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">My Projects</h2>
          <div className="mt-2 w-16 h-1 bg-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Explore my projects showcasing my skills in web and mobile development.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center mb-12 space-x-2">
          {filters.map(category => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-6 py-2 rounded-full font-medium mb-2 transition-colors duration-200 ${
                filter === category
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-10">
          {filteredProjects.map((project) => (
            <div 
              key={project.id} 
              className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg transition-transform duration-300 hover:transform hover:scale-105"
            >
              <div className="h-64 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                />
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {project.title}
                  </h3>
                  <span className="px-3 py-1 text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 rounded-full">
                    {project.category}
                  </span>
                </div>
                
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  {project.description}
                </p>
                
                <div className="mb-6 flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span 
                      key={index} 
                      className="px-2 py-1 text-xs font-medium bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-4">
                  {project.github && (
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors duration-200"
                    >
                      <Github size={18} className="mr-1" />
                      <span>Code</span>
                    </a>
                  )}
                  
                  {project.demo && (
                    <a 
                      href={project.demo} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400 transition-colors duration-200"
                    >
                      <ExternalLink size={18} className="mr-1" />
                      <span>Live Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;