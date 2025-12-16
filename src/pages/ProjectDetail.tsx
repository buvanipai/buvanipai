import React from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { PROJECTS } from '../constants';
import { ArrowLeft, Paperclip, ImageIcon } from 'lucide-react';

const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const project = PROJECTS.find(p => p.id === id);

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  return (
    <article className="max-w-4xl mx-auto space-y-12 animate-fadeIn pt-4">
      
      {/* Back Navigation */}
      <Link to="/projects" className="inline-flex items-center gap-2 text-subtle hover:text-ink font-bold text-xs uppercase tracking-widest mb-4 transition-colors">
        <ArrowLeft size={14} /> Back to Directory
      </Link>

      {/* Header */}
      <header className="space-y-6 pb-8 border-b-2 border-ink">
        <div className="flex justify-between items-start">
             <div className="flex items-center gap-2 text-xs font-mono bg-stone-100 inline-block px-2 py-1 border border-stone-200">
                <span>CASE_FILE_ID: {project.id.toUpperCase()}</span>
            </div>
            
            {/* Optional Company Logo for Work Ex Projects */}
            {project.companyLogo && (
                <div className="w-12 h-12 md:w-16 md:h-16 p-1 bg-white border border-stone-200 shadow-sm flex items-center justify-center">
                    <img src={project.companyLogo} alt="Company Logo" className="max-w-full max-h-full object-contain opacity-90 grayscale hover:grayscale-0 transition-all" />
                </div>
            )}
        </div>

        <h1 className="text-3xl md:text-5xl font-heading font-bold text-ink leading-tight">
          {project.title}
        </h1>
        
        <div className="flex flex-wrap gap-8 text-xs uppercase tracking-widest pt-4">
           {/* Role Section (Only for Work Ex) */}
           {project.role && (
              <div className="flex flex-col gap-1">
                 <span className="font-bold text-subtle">Role</span>
                 <span className="font-bold text-ink px-2 py-1 bg-ink text-white inline-block">{project.role}</span>
              </div>
           )}

          <div className="flex flex-col gap-1">
             <span className="font-bold text-subtle">Timeline</span>
             <span className="font-bold text-ink">{project.date}</span>
          </div>
          
          <div className="flex flex-col gap-1">
             <span className="font-bold text-subtle">Tech Stack</span>
             <div className="flex gap-2 flex-wrap">
                {project.techStack.map(t => (
                    <span key={t.name} className="font-medium text-ink bg-white border border-border px-1">{t.name}</span>
                ))}
             </div>
          </div>
        </div>
      </header>

      {/* Main Case Study Content */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          
          {/* Left Column: Main Narrative */}
          <div className="md:col-span-2 space-y-10">
              
              {/* Overview */}
              <section className="bg-white p-8 shadow-card border border-stone-200">
                <h3 className="text-xs font-bold uppercase tracking-widest text-subtle mb-4 flex items-center gap-2">
                    <div className="w-2 h-2 bg-ink rounded-full"></div> Overview
                </h3>
                <p className="font-mono text-sm leading-loose text-ink">
                    {project.overview}
                </p>
              </section>

              {/* Challenge & Approach */}
              <section className="space-y-8">
                  <div>
                    <h3 className="text-lg font-heading font-bold text-ink mb-3 decoration-wavy underline decoration-stone-300">The Challenge</h3>
                    <p className="font-mono text-sm leading-loose text-ink/90">
                        {project.challenge}
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-heading font-bold text-ink mb-3 decoration-wavy underline decoration-stone-300">The Process</h3>
                    <ul className="list-none space-y-4">
                        {project.approach.map((step, idx) => (
                            <li key={idx} className="flex gap-4 font-mono text-sm leading-relaxed text-ink/90">
                                <span className="font-bold text-subtle">0{idx + 1}.</span>
                                <span>{step}</span>
                            </li>
                        ))}
                    </ul>
                  </div>
              </section>

              {/* Results */}
              <section className="bg-stone-50 p-6 border-l-4 border-ink">
                  <h3 className="text-lg font-heading font-bold text-ink mb-4">Key Results</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {project.results.map((result, idx) => (
                          <div key={idx} className="bg-white p-4 shadow-sm border border-stone-200">
                              <p className="font-mono text-sm text-ink">{result}</p>
                          </div>
                      ))}
                  </div>
              </section>
          </div>

          {/* Right Column: Learnings (Sticky) */}
          <div className="space-y-8">
              
              {/* Learnings Note */}
              <div className="bg-[#FEF9C3] p-6 shadow-card transform -rotate-1 relative sticky top-8">
                   <Paperclip className="absolute -top-3 -right-3 text-stone-400" size={32} />
                   <h3 className="font-heading font-bold text-ink mb-3 text-lg">Field Notes & Learnings</h3>
                   <ul className="space-y-3">
                       {project.learnings.map((learning, idx) => (
                           <li key={idx} className="font-handwriting font-mono text-xs leading-relaxed text-ink italic">
                               "{learning}"
                           </li>
                       ))}
                   </ul>
              </div>

          </div>

      </div>

      {/* Visual Evidence - Mosaic Gallery */}
      {project.images && project.images.length > 0 && (
         <section className="pt-12 border-t border-dashed border-stone-300">
             <div className="flex items-center gap-3 mb-8">
                 <div className="bg-ink text-white p-1.5">
                     <ImageIcon size={18} />
                 </div>
                 <h3 className="text-xl font-heading font-bold text-ink">Visual Evidence</h3>
                 <span className="h-px flex-grow bg-stone-300 ml-4"></span>
                 <span className="text-xs font-mono text-subtle">{project.images.length} FILES</span>
             </div>

             {/* Masonry/Mosaic Layout using CSS Columns */}
             <div className="columns-1 sm:columns-2 gap-6 space-y-6">
                 {project.images.map((img, idx) => (
                     <div key={idx} className="break-inside-avoid relative group bg-white p-3 border border-stone-200 shadow-card hover:shadow-card-hover transition-all duration-300">
                         <div className="overflow-hidden bg-stone-100">
                             <img 
                                src={img} 
                                alt={`Project Screenshot ${idx + 1}`} 
                                className="w-full h-auto object-cover grayscale hover:grayscale-0 transition-all duration-500 hover:scale-105" 
                             />
                         </div>
                         <div className="mt-3 flex justify-between items-center">
                             <span className="font-mono text-[10px] text-subtle uppercase">Figure {idx + 1}</span>
                             <span className="font-mono text-[10px] text-subtle opacity-50">.JPG</span>
                         </div>
                     </div>
                 ))}
             </div>
         </section>
      )}

    </article>
  );
};

export default ProjectDetail;