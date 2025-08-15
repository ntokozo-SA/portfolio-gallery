import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { projectsData } from '../data/projectsData';

const ProjectPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const project = projectsData.find(p => p.id === parseInt(id));

  if (!project) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center transition-colors duration-200">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-200">Project Not Found</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6 transition-colors duration-200">The project you're looking for doesn't exist.</p>
          <button 
            onClick={() => navigate('/')}
            className="bg-blue-600 dark:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 dark:hover:bg-blue-800 transition-colors duration-300"
          >
            Back to Projects
          </button>
        </div>
      </div>
    );
  }

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
              <span>Back to Projects</span>
            </button>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white transition-colors duration-200">{project.title}</h1>
            <div className="w-20"></div> {/* Spacer for centering */}
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Project Image */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg dark:shadow-gray-900/20 overflow-hidden border border-gray-200 dark:border-gray-700 transition-colors duration-200">
              <img 
                src={project.imageUrl} 
                alt={project.title}
                className="w-full h-64 md:h-80 object-cover"
              />
            </div>

            {/* Project Description */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg dark:shadow-gray-900/20 p-8 border border-gray-200 dark:border-gray-700 transition-colors duration-200">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-200">About This Project</h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6 transition-colors duration-200">{project.description}</p>
              
              <div className="flex flex-wrap gap-2">
                <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm font-medium transition-colors duration-200">
                  React
                </span>
                <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-3 py-1 rounded-full text-sm font-medium transition-colors duration-200">
                  Node.js
                </span>
                <span className="bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 px-3 py-1 rounded-full text-sm font-medium transition-colors duration-200">
                  TailwindCSS
                </span>
                <span className="bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 px-3 py-1 rounded-full text-sm font-medium transition-colors duration-200">
                  JavaScript
                </span>
              </div>
            </div>

            {/* Blog Content */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg dark:shadow-gray-900/20 p-8 border border-gray-200 dark:border-gray-700 transition-colors duration-200">
              <div 
                className="prose prose-lg dark:prose-invert max-w-none"
                dangerouslySetInnerHTML={{ __html: project.blogContent }}
              />
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Video Player */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg dark:shadow-gray-900/20 p-6 border border-gray-200 dark:border-gray-700 transition-colors duration-200">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-200">Project Demo</h3>
              <div className="relative pb-[56.25%] h-0">
                <iframe
                  className="absolute top-0 left-0 w-full h-full rounded-lg"
                  src={project.youtubeEmbedUrl}
                  title={`${project.title} Demo`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>

            {/* Project Details */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg dark:shadow-gray-900/20 p-6 border border-gray-200 dark:border-gray-700 transition-colors duration-200">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-200">Project Details</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2 transition-colors duration-200">Category</h4>
                  <p className="text-gray-600 dark:text-gray-300 transition-colors duration-200">Web Application</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2 transition-colors duration-200">Role</h4>
                  <p className="text-gray-600 dark:text-gray-300 transition-colors duration-200">Full-Stack Developer</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2 transition-colors duration-200">Status</h4>
                  <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-2 py-1 rounded-full text-sm font-medium transition-colors duration-200">
                    Completed
                  </span>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg dark:shadow-gray-900/20 p-6 border border-gray-200 dark:border-gray-700 transition-colors duration-200">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-200">Quick Actions</h3>
              <div className="space-y-3">
                <button className="w-full bg-blue-600 dark:bg-blue-700 text-white py-2 px-4 rounded-lg font-medium hover:bg-blue-700 dark:hover:bg-blue-800 transition-colors duration-300">
                  View Live Demo
                </button>
                <button className="w-full bg-gray-600 dark:bg-gray-700 text-white py-2 px-4 rounded-lg font-medium hover:bg-gray-700 dark:hover:bg-gray-800 transition-colors duration-300">
                  View Source Code
                </button>
                <button className="w-full border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 py-2 px-4 rounded-lg font-medium hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-300">
                  Download Case Study
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectPage; 