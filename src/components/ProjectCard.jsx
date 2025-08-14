import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProjectCard = ({ project }) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/project/${project.id}`);
  };

  return (
    <div 
      className="bg-white dark:bg-gray-800 rounded-lg shadow-lg dark:shadow-gray-900/20 overflow-hidden cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-xl dark:hover:shadow-gray-900/30 border border-gray-200 dark:border-gray-700"
      onClick={handleCardClick}
    >
      <div className="relative">
        <img 
          src={project.imageUrl} 
          alt={project.title}
          className="w-full h-48 object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
          <div className="opacity-0 hover:opacity-100 transition-opacity duration-300">
            <div className="bg-white dark:bg-gray-700 bg-opacity-90 dark:bg-opacity-90 rounded-full p-3">
              <svg className="w-6 h-6 text-gray-800 dark:text-gray-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2 transition-colors duration-200">{project.title}</h3>
        <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed transition-colors duration-200">{project.description}</p>
        
        <div className="mt-4 flex items-center justify-between">
          <span className="text-blue-600 dark:text-blue-400 text-sm font-medium transition-colors duration-200">View Project</span>
          <svg className="w-4 h-4 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard; 