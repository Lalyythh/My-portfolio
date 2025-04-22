import React from 'react';
import { Calendar, MapPin } from 'lucide-react';

const educations = [
  {
    degree: 'B.E.',
    grade: '8.01 CGPA',
    institution: 'PRINCE SHRI VENKATESHWARA PADMAVATHY ENGINEERING COLLEGE',
    duration: '06/2021 - 06/2025',
    location: 'PONMAR, CHENNAI'
  },
  {
    degree: 'HSC',
    grade: '88%',
    institution: 'SRI SANKARA VIDYALAYA MAT. HR. SEC. SCHOOL',
    duration: '06/2020 - 06/2021',
    location: 'URAPAKKAM'
  },
  {
    degree: 'SSLC',
    grade: '85%',
    institution: 'SRI SANKARA VIDYALAYA MAT. HR. SEC. SCHOOL',
    duration: '06/2018 - 06/2019',
    location: 'URAPAKKAM'
  }
];

const certifications = [
  {
    title: 'Java - Full Stack Development',
    organization: 'TATA STRIVE',
    description: 'Java - Full Stack Development certified by TATA STRIVE'
  },
  {
    title: 'NSIC Certificate',
    organization: 'NSIC',
    description: 'NSIC Certificate in Android Application Development'
  },
  {
    title: 'Codecademy Certificates',
    organization: 'Codecademy',
    description: 'Java, HTML, CSS, JS, React, SpringBoot, Git and GitHub, MySQL'
  }
];

const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Education & Certifications</h2>
          <div className="mt-2 w-16 h-1 bg-blue-600 mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">Education</h3>
            
            <div className="space-y-8">
              {educations.map((edu, index) => (
                <div 
                  key={index} 
                  className="relative pl-8 pb-8 border-l-2 border-gray-200 dark:border-gray-700"
                >
                  <div className="absolute left-[-8px] top-0 w-4 h-4 bg-blue-600 rounded-full"></div>
                  <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-xl font-bold text-gray-900 dark:text-white">{edu.degree}</h4>
                      <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm font-medium px-3 py-1 rounded-full">
                        {edu.grade}
                      </span>
                    </div>
                    
                    <p className="text-blue-600 dark:text-blue-400 font-medium">{edu.institution}</p>
                    
                    <div className="mt-4 flex items-center text-gray-500 dark:text-gray-400">
                      <Calendar size={16} className="mr-2" />
                      <span>{edu.duration}</span>
                    </div>
                    
                    <div className="mt-2 flex items-center text-gray-500 dark:text-gray-400">
                      <MapPin size={16} className="mr-2" />
                      <span>{edu.location}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">Certifications</h3>
            
            <div className="space-y-6">
              {certifications.map((cert, index) => (
                <div 
                  key={index} 
                  className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{cert.title}</h4>
                  <p className="text-blue-600 dark:text-blue-400 font-medium mb-4">{cert.organization}</p>
                  <p className="text-gray-600 dark:text-gray-400">{cert.description}</p>
                </div>
              ))}
            </div>
            
            <div className="mt-10 p-6 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-100 dark:border-blue-800">
              <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Key Achievements</h4>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li className="flex items-start">
                  <span className="mr-2 text-blue-600 dark:text-blue-400">•</span>
                  <span>Successfully developed and implemented multiple REST APIs for an e-commerce platform</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-blue-600 dark:text-blue-400">•</span>
                  <span>Created engaging mobile game applications</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-blue-600 dark:text-blue-400">•</span>
                  <span>Participated in JavaFX Training at Infosys</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 text-blue-600 dark:text-blue-400">•</span>
                  <span>Completed multiple online courses on web development and mobile application development</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;