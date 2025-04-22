import React from 'react';
import { Book, Code, MapPin } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">About Me</h2>
          <div className="mt-2 w-16 h-1 bg-blue-600 mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Who I Am
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-lg mb-6">
              I am an enthusiastic and self-motivated aspiring software developer with a strong passion for learning and growth. 
              With expertise in Java Full Stack development, I enjoy tackling challenges and contributing to teamwork.
            </p>
            <p className="text-gray-600 dark:text-gray-400 text-lg mb-6">
              I am dedicated to continuous improvement in my skills and actively seek opportunities to enhance 
              my knowledge in technology. My goal is to create efficient, scalable, and user-friendly applications 
              that solve real-world problems.
            </p>
            
            <div className="flex flex-col space-y-4 mt-8">
              <div className="flex items-center">
                <MapPin className="w-5 h-5 text-blue-600 dark:text-blue-400 mr-3" />
                <span className="text-gray-700 dark:text-gray-300">Guduvancherry, India</span>
              </div>
              <div className="flex items-center">
                <Code className="w-5 h-5 text-blue-600 dark:text-blue-400 mr-3" />
                <span className="text-gray-700 dark:text-gray-300">Java Full Stack Developer</span>
              </div>
              <div className="flex items-center">
                <Book className="w-5 h-5 text-blue-600 dark:text-blue-400 mr-3" />
                <span className="text-gray-700 dark:text-gray-300">B.E. - 8.01 CGPA</span>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-blue-50 dark:bg-gray-800 p-6 rounded-lg shadow-md transform transition-transform hover:scale-105">
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Web Development</h4>
              <p className="text-gray-600 dark:text-gray-400">
                Experience in creating dynamic web applications using React, Spring Boot, and REST APIs.
              </p>
            </div>
            <div className="bg-blue-50 dark:bg-gray-800 p-6 rounded-lg shadow-md transform transition-transform hover:scale-105">
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Mobile Development</h4>
              <p className="text-gray-600 dark:text-gray-400">
                Proficient in developing Android applications with a focus on user experience.
              </p>
            </div>
            <div className="bg-blue-50 dark:bg-gray-800 p-6 rounded-lg shadow-md transform transition-transform hover:scale-105">
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Backend Systems</h4>
              <p className="text-gray-600 dark:text-gray-400">
                Knowledge in building scalable backend systems using Spring Framework.
              </p>
            </div>
            <div className="bg-blue-50 dark:bg-gray-800 p-6 rounded-lg shadow-md transform transition-transform hover:scale-105">
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Database Management</h4>
              <p className="text-gray-600 dark:text-gray-400">
                Experience with MySQL and MongoDB database systems.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;