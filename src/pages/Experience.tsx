import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { EXPERIENCE, EDUCATION, AWARDS } from '../constants';
import { Award, GraduationCap, Briefcase, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

const AWARDS_PER_PAGE = 3;

const Experience: React.FC = () => {
  const [awardsPage, setAwardsPage] = useState(1);
  
  const totalAwardPages = Math.ceil(AWARDS.length / AWARDS_PER_PAGE);
  const startAwardIndex = (awardsPage - 1) * AWARDS_PER_PAGE;
  const currentAwards = AWARDS.slice(startAwardIndex, startAwardIndex + AWARDS_PER_PAGE);

  return (
    <div className="max-w-5xl mx-auto pt-4 space-y-12 animate-fadeIn">
      <div className="border-b-2 border-ink pb-4 flex justify-between items-end sticky top-0 bg-paper z-10 pt-2">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-ink">Professional Log</h2>
        <span className="text-xs font-mono text-subtle hidden sm:block">CHRONOLOGICAL_ORDER_ASC</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          
          {/* Main Timeline Column */}
          <div className="lg:col-span-2 relative">
             {/* The Vertical Line */}
             <div className="absolute left-4 top-4 bottom-4 w-px bg-stone-300"></div>

             <div className="space-y-16">
                 
                 {/* Work Experience */}
                 <div>
                    <div className="relative pl-12 mb-8 flex items-center">
                       <span className="absolute left-0 top-0 bg-paper border border-ink p-1.5 z-10">
                          <Briefcase size={16} />
                       </span>
                       <h3 className="text-sm font-bold uppercase tracking-widest text-subtle pt-1.5 ml-1">Work History</h3>
                    </div>

                    <div className="space-y-12">
                        {EXPERIENCE.map((exp) => (
                            <div key={exp.id} className="relative pl-12 group">
                                {/* Dot on timeline */}
                                <div className="absolute left-[13px] top-8 w-2 h-2 rounded-full bg-ink ring-4 ring-paper group-hover:bg-subtle transition-colors z-0"></div>
                                
                                <div className="bg-white p-6 md:p-8 shadow-card border border-stone-200 hover:shadow-card-hover transition-all relative mt-2">
                                    
                                    {/* Date Flag - Adjusted to be clean and clearly aligned */}
                                    <div className="absolute -top-3 right-6 bg-stone-100 px-3 py-1 border border-stone-200 shadow-sm z-10">
                                       <span className="text-xs font-mono font-bold text-ink block leading-none">{exp.date}</span>
                                    </div>
                                    
                                    <div className="flex flex-col sm:flex-row gap-4 items-start mb-6 mt-2">
                                        {exp.logo && (
                                            <div className="flex-shrink-0 w-14 h-14 border border-stone-100 bg-stone-50 flex items-center justify-center p-1 shadow-sm">
                                                <img src={exp.logo} alt={exp.company} className="max-w-full max-h-full object-contain grayscale group-hover:grayscale-0 transition-all duration-500" />
                                            </div>
                                        )}
                                        <div>
                                            <h4 className="text-xl font-heading font-bold text-ink leading-tight">{exp.role}</h4>
                                            <div className="text-sm font-bold text-subtle mt-1 flex items-center gap-2">
                                                <span>@ {exp.company}</span>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <p className="text-sm leading-7 text-ink/80 font-mono mb-6 border-l-2 border-stone-100 pl-4">
                                        {exp.summary}
                                    </p>

                                    {exp.relatedProjectId && (
                                      <Link 
                                        to={`/projects/${exp.relatedProjectId}`} 
                                        className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest border border-ink px-5 py-2.5 hover:bg-ink hover:text-white transition-all duration-300"
                                      >
                                        View Case Study <ArrowRight size={14} />
                                      </Link>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                 </div>

                 {/* Education */}
                 <div>
                    <div className="relative pl-12 mb-8 flex items-center">
                       <span className="absolute left-0 top-0 bg-paper border border-ink p-1.5 z-10">
                          <GraduationCap size={16} />
                       </span>
                       <h3 className="text-sm font-bold uppercase tracking-widest text-subtle pt-1.5 ml-1">Academic Background</h3>
                    </div>

                    <div className="space-y-8">
                        {EDUCATION.map((edu, idx) => (
                            <div key={idx} className="relative pl-12 group">
                                <div className="absolute left-[13px] top-6 w-2 h-2 rounded-full bg-stone-400 ring-4 ring-paper"></div>
                                
                                <div className="bg-stone-50 p-6 border-l-4 border-stone-300 hover:bg-white transition-colors hover:shadow-sm">
                                    <div className="flex flex-col sm:flex-row justify-between items-start mb-2 gap-2">
                                        <h4 className="font-bold text-lg text-ink">{edu.school}</h4>
                                        <span className="text-[10px] font-mono bg-white border border-stone-200 px-2 py-1 uppercase tracking-wider">{edu.date}</span>
                                    </div>
                                    <p className="text-sm font-bold italic text-subtle mb-2">{edu.degree}</p>
                                    <p className="text-xs font-mono text-subtle">GPA: {edu.gpa}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                 </div>

             </div>
          </div>

          {/* Sidebar: Certifications & Honors - Sticky */}
          <div className="lg:col-span-1 lg:sticky lg:top-8 transition-all">
             <div className="bg-white p-6 shadow-card border border-stone-200 relative flex flex-col min-h-[400px]">
                 <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-ink text-white px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] whitespace-nowrap shadow-sm z-10">
                    Certifications & Honors
                 </div>
                 
                 <div className="mt-6 space-y-6 flex-grow">
                     {currentAwards.map((award, idx) => (
                         <div key={idx} className="border-b border-dashed border-stone-200 pb-5 last:border-0 last:pb-0 flex gap-4 animate-fadeIn">
                             <div className="flex-shrink-0 w-10 h-10 bg-stone-50 border border-stone-100 flex items-center justify-center p-1">
                                {award.logo ? (
                                    <img src={award.logo} alt={award.issuer} className="max-w-full max-h-full object-contain grayscale hover:grayscale-0 transition-all" />
                                ) : (
                                    <Award size={16} className="text-yellow-600" />
                                )}
                             </div>
                             <div>
                                 <h5 className="font-bold text-xs md:text-sm text-ink leading-snug">{award.title}</h5>
                                 <p className="text-[10px] text-subtle font-mono mt-1 uppercase tracking-wide">{award.issuer} • {award.date}</p>
                                 {award.description && (
                                     <p className="text-[10px] text-subtle mt-2 italic leading-relaxed border-l-2 border-stone-100 pl-2">"{award.description}"</p>
                                 )}
                             </div>
                         </div>
                     ))}
                 </div>

                 {/* Awards Pagination */}
                 {totalAwardPages > 1 && (
                    <div className="flex justify-between items-center pt-4 border-t border-stone-100 mt-4">
                        <button 
                            onClick={() => setAwardsPage(p => Math.max(1, p - 1))}
                            disabled={awardsPage === 1}
                            className="p-1 hover:bg-stone-100 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                        >
                            <ChevronLeft size={16} className="text-ink"/>
                        </button>
                        <span className="text-[10px] font-mono text-subtle">Page {awardsPage} of {totalAwardPages}</span>
                        <button 
                            onClick={() => setAwardsPage(p => Math.min(totalAwardPages, p + 1))}
                            disabled={awardsPage === totalAwardPages}
                            className="p-1 hover:bg-stone-100 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                        >
                            <ChevronRight size={16} className="text-ink"/>
                        </button>
                    </div>
                 )}
             </div>
          </div>

      </div>
      
      {/* Next Flow Link */}
      <div className="flex justify-center pt-12 pb-4 border-t border-dashed border-stone-300">
          <Link to="/projects" className="group flex flex-col items-center">
              <span className="text-[10px] font-bold uppercase tracking-widest text-subtle mb-1 group-hover:text-ink transition-colors">Case Studies & Code</span>
              <span className="text-2xl md:text-3xl font-heading font-bold text-ink flex items-center gap-3 hover:underline decoration-1 underline-offset-4">
                  Explore Projects <ArrowRight className="group-hover:translate-x-2 transition-transform" />
              </span>
          </Link>
      </div>

    </div>
  );
};

export default Experience;