import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { PROJECTS } from '../constants';
import { ArrowUpRight, ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';

const ITEMS_PER_PAGE = 3;

const Projects: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(PROJECTS.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentProjects = PROJECTS.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="max-w-4xl mx-auto pt-4 space-y-12 animate-fadeIn">
      <div className="border-b-2 border-ink pb-4 flex justify-between items-end">
        <h2 className="text-4xl font-heading font-bold text-ink">Project Directory</h2>
        <span className="text-xs font-mono text-subtle hidden sm:block">
           PAGE {currentPage} OF {totalPages || 1}
        </span>
      </div>

      <div className="grid grid-cols-1 gap-8 min-h-[50vh]">
        {currentProjects.map((project, index) => {
          // Calculate global index for the "Ref" number so it continues correctly across pages
          const globalIndex = startIndex + index + 1;
          
          return (
            <Link 
              key={project.id} 
              to={`/projects/${project.id}`}
              className="group block bg-white p-8 shadow-card hover:shadow-card-hover transition-all duration-300 border border-stone-200 relative"
            >
              {/* Folder Tab Visual */}
              <div className="absolute -top-3 left-0 bg-stone-200 text-xs px-3 py-1 font-bold uppercase tracking-widest text-subtle border-t border-l border-r border-stone-300">
                Ref: {globalIndex.toString().padStart(3, '0')}
              </div>

              <div className="flex flex-col md:flex-row gap-6 justify-between items-start mt-2">
                
                {/* Main Content Area */}
                <div className="flex-1 flex gap-5 items-start">
                    
                    {/* Logo (Desktop/Tablet) */}
                    {project.companyLogo && (
                       <div className="hidden sm:flex flex-shrink-0 w-14 h-14 border border-stone-100 bg-stone-50 items-center justify-center p-2 shadow-sm mt-1">
                           <img 
                             src={project.companyLogo} 
                             alt={`${project.title} Logo`} 
                             className="max-w-full max-h-full object-contain grayscale group-hover:grayscale-0 transition-all opacity-80 group-hover:opacity-100" 
                           />
                       </div>
                    )}

                    <div className="space-y-3 w-full">
                       <div className="flex items-center gap-3">
                            {/* Logo (Mobile) */}
                            {project.companyLogo && (
                                <div className="sm:hidden flex-shrink-0 w-10 h-10 border border-stone-100 bg-stone-50 items-center justify-center p-1.5 shadow-sm">
                                    <img 
                                      src={project.companyLogo} 
                                      alt={`${project.title} Logo`} 
                                      className="max-w-full max-h-full object-contain grayscale group-hover:grayscale-0" 
                                    />
                                </div>
                            )}
                            <h3 className="text-2xl font-bold text-ink group-hover:underline decoration-2 underline-offset-4">
                                {project.title}
                            </h3>
                       </div>
                       
                       <div className="flex flex-wrap gap-3 text-xs font-mono text-subtle">
                         <span className="bg-stone-100 px-2 py-0.5 border border-stone-200">{project.date}</span>
                       </div>

                      <p className="text-subtle text-sm leading-relaxed max-w-2xl pt-2">
                        {project.shortDescription}
                      </p>

                      <div className="flex gap-2 pt-4 flex-wrap">
                        {project.techStack.map(tech => (
                          <span key={tech.name} className="text-[10px] uppercase tracking-wider border-b border-dotted border-subtle">
                            {tech.name}
                          </span>
                        ))}
                      </div>

                      <div className="md:hidden mt-4 pt-3 border-t border-stone-100 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-ink">
                         Read More <ArrowRight size={12} />
                      </div>
                    </div>
                </div>

                <div className="flex-shrink-0 hidden md:block">
                     <div className="w-10 h-10 border border-ink flex items-center justify-center group-hover:bg-ink group-hover:text-white transition-colors">
                       <ArrowUpRight size={20} />
                     </div>
                </div>

              </div>
            </Link>
          );
        })}
        
        {PROJECTS.length === 0 && (
           <div className="text-center py-20 border border-dashed border-stone-300 bg-stone-50">
               <p className="font-mono text-subtle">No projects found in the archives.</p>
           </div>
        )}
      </div>

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-2 pt-8 border-t border-dashed border-stone-300">
            {/* Previous Button */}
            <button 
              onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1}
              className="p-2 border border-stone-200 text-ink hover:bg-stone-100 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
              aria-label="Previous Page"
            >
                <ChevronLeft size={16} />
            </button>

            {/* Page Numbers */}
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                    key={page}
                    onClick={() => handlePageChange(page)}
                    className={`w-10 h-10 border text-sm font-mono font-bold transition-all ${
                        currentPage === page 
                        ? 'bg-ink text-white border-ink' 
                        : 'bg-white text-ink border-stone-200 hover:bg-stone-50'
                    }`}
                >
                    {page}
                </button>
            ))}

            {/* Next Button */}
            <button 
              onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))}
              disabled={currentPage === totalPages}
              className="p-2 border border-stone-200 text-ink hover:bg-stone-100 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
              aria-label="Next Page"
            >
                <ChevronRight size={16} />
            </button>
        </div>
      )}
      
    </div>
  );
};

export default Projects;