import React from 'react';
import { ArrowDown, Download, Github, Linkedin, Mail, Phone } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="pt-28 pb-20 md:pt-40 md:pb-32 relative bg-gradient-to-br from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* LEFT: Text */}
          <motion.div
            className="order-2 md:order-1"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white">
              <span className="text-blue-600 dark:text-blue-400">Lalith Kishore H</span>
            </h1>
            <h2 className="text-xl md:text-2xl font-semibold mt-2 text-gray-700 dark:text-gray-300">
              Aspiring Software Developer
            </h2>
            <p className="mt-6 text-gray-600 dark:text-gray-400 text-lg">
              A passionate Java Full Stack Developer with expertise in React, Spring Boot,
              and mobile application development. I'm dedicated to creating efficient,
              user-friendly applications.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="/LALITH KISHORE_Resume-v2.pdf"
                download
                className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition duration-300"
              >
                <Download size={18} className="mr-2" />
                Resume
              </a>
              <a
                href="#contact"
                className="inline-flex items-center px-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-800 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-white font-medium rounded-lg transition duration-300"
              >
                Contact Me
              </a>
            </div>

            <div className="mt-10 flex items-center space-x-4">
              <a href="https://github.com/Lalyythh" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 dark:hover:text-blue-400 transition duration-200">
                <Github size={24} />
              </a>
              <a href="https://www.linkedin.com/in/lalith-kishore-h-64849924a/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 dark:hover:text-blue-400 transition duration-200">
                <Linkedin size={24} />
              </a>
              <a href="mailto:lalithkishore200417@gmail.com" className="hover:text-blue-600 dark:hover:text-blue-400 transition duration-200">
                <Mail size={24} />
              </a>
              <a href="tel:+919884545966" className="hover:text-blue-600 dark:hover:text-blue-400 transition duration-200">
                <Phone size={24} />
              </a>
            </div>
          </motion.div>

          {/* RIGHT: Image */}
          <motion.div
            className="order-1 md:order-2 flex justify-center"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-xl hover:scale-105 transition-transform duration-300">
              <img
                src="/Firefly 20250420104202.png"
                alt="Lalith Kishore H"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>

        {/* Scroll Icon */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
          <a href="#about" aria-label="Scroll down">
            <ArrowDown className="text-gray-400 dark:text-gray-600" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
