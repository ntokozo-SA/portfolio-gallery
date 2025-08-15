import React from 'react';
import { useNavigate } from 'react-router-dom';

const AboutMe = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
      {/* Header */}
      <header className="bg-white dark:bg-gray-800 shadow-sm transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <button 
              onClick={() => navigate('/')}
              className="flex items-center space-x-2 text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium transition-colors duration-200"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              <span>Back to Home</span>
            </button>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white transition-colors duration-200">About Me</h1>
            <div className="w-20"></div> {/* Spacer for centering */}
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Hero Section */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg dark:shadow-gray-900/20 p-8 border border-gray-200 dark:border-gray-700 transition-colors duration-200">
              <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
                <div className="w-48 h-48 rounded-full overflow-hidden shadow-2xl border-4 border-blue-100 dark:border-blue-900 flex-shrink-0">
                  <img 
                    src="ntokozo.jpg" 
                    alt="Ntokozo Ngakane" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-center md:text-left">
                  <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-200">
                    Ntokozo Ngakane
                  </h2>
                  <p className="text-xl text-blue-600 dark:text-blue-400 font-semibold mb-4 transition-colors duration-200">
                    Full-Stack Developer & Systems Engineer
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6 transition-colors duration-200">
                    My journey in technology began in 2014 when I first encountered the Titan Robot at Jabulani Mall. 
                    That moment sparked a passion that has driven me to become a dedicated software engineer, 
                    focused on building real-world solutions and creating innovative tools that make a difference.
                  </p>
                  <div className="flex flex-wrap justify-center md:justify-start gap-2">
                    <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm font-medium transition-colors duration-200">
                      React
                    </span>
                    <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-3 py-1 rounded-full text-sm font-medium transition-colors duration-200">
                      Node.js
                    </span>
                    <span className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-3 py-1 rounded-full text-sm font-medium transition-colors duration-200">
                      JavaScript
                    </span>
                    <span className="bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 px-3 py-1 rounded-full text-sm font-medium transition-colors duration-200">
                      Chrome Extensions
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* My Story */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg dark:shadow-gray-900/20 p-8 border border-gray-200 dark:border-gray-700 transition-colors duration-200">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 transition-colors duration-200">
                My Story
              </h3>
              <div className="space-y-4 text-gray-600 dark:text-gray-300 leading-relaxed transition-colors duration-200">
                <p>
                  The year 2014 marked a turning point in my life when I witnessed the Titan Robot at Jabulani Mall. 
                  This encounter wasn't just about seeing advanced technology—it was about realizing the endless 
                  possibilities that software engineering could unlock.
                </p>
                <p>
                  Since then, I've dedicated myself to mastering the art of software development, focusing on 
                  creating solutions that solve real problems. My approach combines technical expertise with 
                  a deep understanding of user needs, ensuring that every project I work on delivers genuine value.
                </p>
                <p>
                  I specialize in full-stack development, with particular expertise in React, Node.js, and 
                  Chrome extension development. Each project is an opportunity to learn, grow, and push the 
                  boundaries of what's possible with technology.
                </p>
              </div>
            </div>

            {/* Skills & Expertise */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg dark:shadow-gray-900/20 p-8 border border-gray-200 dark:border-gray-700 transition-colors duration-200">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 transition-colors duration-200">
                Skills & Expertise
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 transition-colors duration-200">
                    Frontend Development
                  </h4>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-300 transition-colors duration-200">
                    <li>• React.js & React Hooks</li>
                    <li>• JavaScript (ES6+)</li>
                    <li>• HTML5 & CSS3</li>
                    <li>• TailwindCSS</li>
                    <li>• Responsive Design</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 transition-colors duration-200">
                    Backend Development
                  </h4>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-300 transition-colors duration-200">
                    <li>• Node.js & Express.js</li>
                    <li>• RESTful APIs</li>
                    <li>• MongoDB & Database Design</li>
                    <li>• Authentication & Security</li>
                    <li>• Server-side Logic</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 transition-colors duration-200">
                    Chrome Extensions
                  </h4>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-300 transition-colors duration-200">
                    <li>• Extension Architecture</li>
                    <li>• Browser APIs Integration</li>
                    <li>• Content Scripts</li>
                    <li>• Background Services</li>
                    <li>• User Experience Design</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3 transition-colors duration-200">
                    Tools & Technologies
                  </h4>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-300 transition-colors duration-200">
                    <li>• Git & Version Control</li>
                    <li>• VS Code & Development Tools</li>
                    <li>• Chrome DevTools</li>
                    <li>• API Testing & Debugging</li>
                    <li>• Performance Optimization</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* What I Do */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg dark:shadow-gray-900/20 p-8 border border-gray-200 dark:border-gray-700 transition-colors duration-200">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 transition-colors duration-200">
                What I Do
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg border border-blue-200 dark:border-blue-800 transition-colors duration-200">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-blue-100 dark:bg-blue-800 rounded-lg flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white transition-colors duration-200">
                      Web Applications
                    </h4>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 transition-colors duration-200">
                    Build full-stack web applications with modern technologies, focusing on user experience and scalable architecture.
                  </p>
                </div>
                <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg border border-green-200 dark:border-green-800 transition-colors duration-200">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-green-100 dark:bg-green-800 rounded-lg flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white transition-colors duration-200">
                      Chrome Extensions
                    </h4>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 transition-colors duration-200">
                    Create browser extensions that enhance productivity and provide useful tools for web users.
                  </p>
                </div>
                <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg border border-purple-200 dark:border-purple-800 transition-colors duration-200">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-purple-100 dark:bg-purple-800 rounded-lg flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white transition-colors duration-200">
                      Problem Solving
                    </h4>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 transition-colors duration-200">
                    Analyze complex problems and design efficient, user-friendly solutions that address real needs.
                  </p>
                </div>
                <div className="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-lg border border-yellow-200 dark:border-yellow-800 transition-colors duration-200">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-yellow-100 dark:bg-yellow-800 rounded-lg flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-yellow-600 dark:text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white transition-colors duration-200">
                      Continuous Learning
                    </h4>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 transition-colors duration-200">
                    Stay updated with the latest technologies and best practices to deliver cutting-edge solutions.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Contact Information */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg dark:shadow-gray-900/20 p-6 border border-gray-200 dark:border-gray-700 transition-colors duration-200">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-200">
                Get In Touch
              </h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <a href="mailto:me@ntokozo.co.za" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">
                    me@ntokozo.co.za
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <a href="tel:+27678000046" className="text-gray-600 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 transition-colors duration-200">
                    +27 67 800 0046
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-gray-600 dark:text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </div>
                  <a href="https://github.com/ntokozo-SA" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-gray-100 transition-colors duration-200">
                    GitHub
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-blue-600 dark:text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </div>
                  <a href="https://www.linkedin.com/in/ntokozo-ngakane-65bba3260/" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg dark:shadow-gray-900/20 p-6 border border-gray-200 dark:border-gray-700 transition-colors duration-200">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-200">
                Quick Stats
              </h3>
              <div className="space-y-4">
                <div className="text-center p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-800">
                  <div className="text-2xl font-bold text-green-600 dark:text-green-400">5+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">Projects Completed</div>
                </div>
                <div className="text-center p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg border border-purple-200 dark:border-purple-800">
                  <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">3</div>
                  <div className="text-sm text-gray-600 dark:text-gray-300">Chrome Extensions</div>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-6 text-white">
              <h3 className="text-xl font-bold mb-4">Ready to Work Together?</h3>
              <p className="mb-6 text-blue-100">
                Let's discuss your project and see how I can help bring your ideas to life.
              </p>
              <button 
                onClick={() => navigate('/')}
                className="w-full bg-white text-blue-600 py-3 px-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300"
              >
                View My Projects
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe; 