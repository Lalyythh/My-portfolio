import React from 'react';
import { Calendar, MapPin } from 'lucide-react';

const experiences = [
  {
    title: 'Trainee - Java Full Stack Developer',
    company: 'TATA STRIVE',
    duration: '09/2024 - 01/2025',
    location: 'India',
    description: 'TATA STRIVE offers skill development training ranging from technical to employability skills.',
    achievements: [
      'Gained expertise in building scalable backend systems using the Spring Framework',
      'Acquired hands-on experience in developing dynamic user interfaces with React',
      'Created REST API\'s using SpringBoot',
      'Created various Rest API\'s for products for e-commerce website',
      'Worked on various Rest API\'s projects and have good knowledge about backend systems'
    ]
  },
  {
    title: 'Intern - Android Application Developer',
    company: 'NSIC',
    duration: '09/2022 - 10/2022',
    location: 'India',
    description: 'National Small Industries Corporation (NSIC) provides various support services to small business enterprises.',
    achievements: [
      'Developed game applications for Android and iOS',
      'Created and successfully implemented applications in mobile phones'
    ]
  }
];

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Professional Experience</h2>
          <div className="mt-2 w-16 h-1 bg-blue-600 mx-auto"></div>
        </div>
        
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div 
              key={index} 
              className="relative p-8 bg-white dark:bg-gray-900 rounded-lg shadow-lg"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="md:grid md:grid-cols-12 md:gap-8">
                <div className="md:col-span-4">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">{exp.title}</h3>
                  <div className="mt-2 text-blue-600 dark:text-blue-400 font-semibold">{exp.company}</div>
                  
                  <div className="mt-4 flex items-center text-gray-500 dark:text-gray-400">
                    <Calendar size={16} className="mr-2" />
                    <span>{exp.duration}</span>
                  </div>
                  
                  <div className="mt-2 flex items-center text-gray-500 dark:text-gray-400">
                    <MapPin size={16} className="mr-2" />
                    <span>{exp.location}</span>
                  </div>
                </div>
                
                <div className="mt-6 md:mt-0 md:col-span-8">
                  <p className="text-gray-600 dark:text-gray-400 mb-4">{exp.description}</p>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start">
                        <span className="mr-2 text-blue-600 dark:text-blue-400">•</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;