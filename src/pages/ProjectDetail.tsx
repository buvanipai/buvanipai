import React from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { PROJECTS } from '../constants';
import { ArrowLeft, Paperclip, Github, LucideExternalLink, LinkIcon } from 'lucide-react';

const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const project = PROJECTS.find(p => p.id === id);

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  return (
    <article className="max-w-5xl mx-auto space-y-4 animate-fadeIn pt-4">
      
      {/* Back Navigation */}
      <Link to="/projects" className="inline-flex items-center gap-2 text-subtle hover:text-ink font-bold text-xs uppercase tracking-widest mb-4 transition-colors">
        <ArrowLeft size={14} /> Back to Directory
      </Link>

      {/* Header */}
      <header className="space-y-6 pb-8 border-b-2 border-ink">
        
        {/* Title and Logo Row */}
        <div className="flex justify-between items-center gap-6">
            <h1 className="text-3xl md:text-5xl font-heading font-bold text-ink leading-tight">
              {project.title}
            </h1>
            
            {project.companyLogo && (
                <div className="shrink-0 w-12 h-12 md:w-16 md:h-16 p-1 bg-[#F5F5F7] border border-stone-200 shadow-sm flex items-center justify-center">
                    <img 
                        src={project.companyLogo} 
                        alt="Company Logo" 
                        className="max-w-full max-h-full object-contain opacity-90 transition-all" 
                    />
                </div>
            )}
        </div>
        
        {/* Meta Tags */}
        <div className="flex flex-wrap gap-8 text-xs uppercase tracking-widest pt-4">
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

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
          
          {/* --- Left Column: Narrative --- */}
          <div className="md:col-span-2 space-y-10">
              
              {/* Overview */}
              <section className="bg-white p-8 shadow-card border border-stone-200">
                {/* Header Row: Title on Left, Icons on Right */}
                <div className="flex justify-between items-center mb-4">
                    <h3 className="text-xs font-bold uppercase tracking-widest text-subtle flex items-center gap-2">
                        <div className="w-2 h-2 bg-ink rounded-full"></div> Overview
                    </h3>

                    {/* Icon Links */}
                    {(project.githubUrl || project.liveUrl) && (
                        <div className="flex gap-3">
                            {project.githubUrl && (
                                <a 
                                    href={project.githubUrl} 
                                    target="_blank" 
                                    rel="noreferrer" 
                                    title="View Source Code"
                                    className="p-2 bg-stone-50 border border-stone-200 text-ink hover:bg-ink hover:text-white transition-all rounded-sm"
                                >
                                    <Github size={12} />
                                </a>
                            )}
                            
                            {project.liveUrl && (
                                <a 
                                    href={project.liveUrl} 
                                    target="_blank" 
                                    rel="noreferrer" 
                                    title="View Live Demo"
                                    className="p-2 bg-stone-50 border border-stone-200 text-ink hover:bg-ink hover:text-white transition-all rounded-sm"
                                >
                                    <LinkIcon size={12} />
                                </a>
                            )}
                        </div>
                    )}
                </div>

                <p className="font-mono text-sm leading-loose text-ink">
                    {project.overview}
                </p>
              </section>

              {/* Challenge & Process */}
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

              {/* Key Results */}
              <section className="bg-white p-6 border-l-4 border-ink">
                  <h3 className="text-lg font-heading font-bold text-ink mb-4">Key Results</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {project.results.map((result, idx) => {
                           const isLastAndOdd = idx === project.results.length - 1 && project.results.length % 2 !== 0;
                           return (
                              <div key={idx} className={`bg-white p-4 shadow-sm border border-stone-200 ${isLastAndOdd ? 'sm:col-span-2' : ''}`}>
                                  <p className="font-mono text-sm text-ink">{result}</p>
                              </div>
                           );
                      })}
                  </div>
              </section>
          </div>

          {/* --- Right Column: Learnings & Images --- */}
          <div className="space-y-8">
              
              {/* Field Notes (Sticky Note) */}
              <div className="bg-note p-6 shadow-card transform -rotate-1 relative">
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

               {/* Clean, Raw Images */}
              {project.images && project.images.length > 0 && (
                 <div className="space-y-8 pt-4">
                     {project.images.map((img, idx) => (
                        <img
                            key={idx}
                            src={img}
                            alt={`Project visual ${idx + 1}`}
                            className="w-full h-auto border border-stone-200"
                        />
                     ))}
                 </div>
              )}

          </div>
      </div>
    </article>
  );
};

export default ProjectDetail;