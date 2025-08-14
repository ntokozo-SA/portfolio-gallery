import React from 'react';
import ProjectCard from './ProjectCard';
import ThemeToggle from './ThemeToggle';
import { projectsData } from '../data/projectsData';

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
      {/* Header Section */}
      <header className="bg-white dark:bg-gray-800 shadow-sm transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col items-center text-center">
            {/* Centered Developer Image */}
            <div className="w-32 h-32 rounded-full overflow-hidden shadow-2xl border-4 border-blue-100 dark:border-blue-900 mb-6">
              <img 
                src="YOUR_PHOTO_URL_HERE" 
                alt="Ntokozo Ngakane" 
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Centered Text */}
            <div className="mb-6">
              <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2 transition-colors duration-200">
                Ntokozo Ngakane
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 transition-colors duration-200">
                Full-Stack Developer, Systems Engineer, and Chrome Extension Developer
              </p>
            </div>
            
            {/* Navigation and Theme Toggle */}
            <div className="flex items-center space-x-8">
              <a href="#projects" className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium text-lg transition-colors duration-200">
                Projects
              </a>
              <a href="#contact" className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-100 font-medium text-lg transition-colors duration-200">
                Contact
              </a>
              <ThemeToggle />
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-600 to-gray-700 dark:from-gray-900 dark:to-gray-700 text-white py-16 transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Welcome to My Project Gallery
          </h2>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Explore my latest projects and see how I bring ideas to life with modern web technologies
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-white text-gray-700 dark:bg-gray-100 dark:text-blue-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 dark:hover:bg-gray-200 transition-colors duration-300">
              View Projects
            </button>
            <button className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-700 dark:hover:bg-gray-100 dark:hover:text-blue-700 transition-colors duration-300">
              Get in Touch
            </button>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-200">
              Featured Projects
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto transition-colors duration-200">
              Click on any project card to view detailed information, blog content, and embedded demo videos
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectsData.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-white dark:bg-gray-800 py-16 transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-200">
            Let's Work Together
          </h3>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto transition-colors duration-200">
            I'm always interested in new opportunities and exciting projects. 
            Feel free to reach out if you'd like to collaborate.
          </p>
          <div className="flex justify-center space-x-6">
            <a href="mailto: me@ntokozo.co.za" className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium transition-colors duration-200">
              Email Me
            </a>
            <a href="https://github.com/ntokozo-SA" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-100 font-medium transition-colors duration-200">
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/ntokozo-ngakane-65bba3260/" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-100 font-medium transition-colors duration-200">
              LinkedIn
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home; 