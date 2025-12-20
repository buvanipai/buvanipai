import React from 'react';
import { ArrowRight, Linkedin, Briefcase, GraduationCap, Mail, Phone, MapPin, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PROJECTS, SOCIALS, EXPERIENCE, EDUCATION } from '../constants';

const Home: React.FC = () => {
  const recentProjects = PROJECTS.slice(0, 3);

  return (
    <div className="flex flex-col space-y-12 py-2">
      
      {/* 1. Hero Section */}
      <section className="flex flex-col-reverse md:flex-row items-center justify-between gap-6 md:gap-4 md:min-h-[60vh]">
        
        {/* Left Partition: Text Content */}
        <div className="flex-1 space-y-6 md:space-y-8 text-center md:text-left max-w-2xl pt-2 md:pt-0">
          
          {/* Status & Headings */}
          <div className="space-y-3 md:space-y-4">
            {/* Status Label - Typewriter Style with Glowing Dot */}
            <div className="inline-flex items-center gap-3 text-subtle text-[10px] font-bold font-mono tracking-[0.15em] uppercase mb-2 md:mb-0">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                Open to hire
            </div>
            
            <div className="space-y-1">
                <p className="text-xl md:text-2xl text-subtle font-heading italic">Hello, I'm</p>
                <h1 className="text-5xl md:text-7xl font-heading font-bold text-ink leading-tight tracking-tight text-balance">
                  Buvani <span className="text-stone-400 italic font-serif font-medium">Pai</span>
                </h1>
                <h2 className="text-2xl md:text-3xl text-subtle font-heading font-bold opacity-80">
                   AI/ML Engineer
                </h2>
            </div>
          </div>
          
          {/* Bio Description - With left border */}
          {/* Mobile: Left aligned text inside centered container to fix spacing rivers */}
          <div className="border-l-2 border-stone-200 pl-4 md:pl-6 py-1 max-w-lg mx-auto md:mx-0 text-left">
             <p className="text-sm md:text-base text-subtle/90 font-mono leading-relaxed text-pretty md:text-left">
               The world is a scaling problem and I build the intelligence to solve it. Specializing in agentic AI, computer vision, and deep learning systems that go from research to production.
             </p>
          </div>

          {/* Action Buttons & Contact Info */}
          <div className="space-y-6">
            <div className="pt-2 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
               <a 
                href="/Buvani_Pai_Resume.pdf#view=FitH"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-ink text-white px-8 py-4 text-xs font-bold uppercase tracking-widest shadow-lg hover:-translate-y-1 transition-transform flex items-center justify-center gap-3 rounded-sm"
              >
                <FileText size={16} /> View Resume
              </a>
              
              <a 
                href={SOCIALS.linkedin}
                target="_blank"
                rel="noreferrer"
                className="bg-white text-ink border border-stone-300 px-8 py-4 text-xs font-bold uppercase tracking-widest shadow-sm hover:bg-stone-50 transition-colors flex items-center justify-center gap-3 rounded-sm"
              >
                 <Linkedin size={16} /> LinkedIn
              </a>
            </div>

            {/* Contact Info Grid - Matched to Reference */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-md mx-auto md:mx-0 border-t border-dashed border-stone-200/50 md:border-none pt-4 md:pt-0 pl-1 text-center md:text-left">
                <div className="flex flex-col items-center md:items-start">
                    <span className="text-[10px] uppercase tracking-widest text-subtle mb-1">Email</span>
                    <a href={`mailto:${SOCIALS.email}`} className="text-sm text-ink hover:underline font-mono break-all">{SOCIALS.email}</a>
                </div>
                <div className="flex flex-col items-center md:items-start">
                    <span className="text-[10px] uppercase tracking-widest text-subtle mb-1">Phone</span>
                    <a href={`tel:${SOCIALS.phone}`} className="text-sm text-ink hover:underline font-mono">{SOCIALS.phone}</a>
                </div>
            </div>
          </div>
        </div>

        {/* Right Partition: Image - Centered & Floating */}
        <div className="w-full md:w-5/12 flex justify-center items-center py-6 md:py-0 relative">
           
           {/* Subtle background blob - Increased size slightly */}
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-56 h-56 md:w-80 md:h-80 bg-white/60 rounded-full blur-3xl -z-10"></div>
           
           <div className="relative animate-float z-10"
                style={{ animationDuration: '3s' }}>
              <img 
                src="/images/memoji.png" 
                alt="Buvani Memoji" 
                className="w-64 h-64 md:w-[30rem] md:h-[30rem] object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-300" 
              />
           </div>
        </div>
      </section>

      {/* Dashed Divider */}
      <div className="w-full border-t border-dashed border-stone-300 opacity-60"></div>

      {/* 2. Experience & Education Section (UPDATED with Logos) */}
      <section>
         <div className="flex justify-between items-end mb-8">
             <h2 className="text-xs font-bold uppercase tracking-widest text-subtle flex items-center gap-3">
                <span className="w-6 h-px bg-stone-400"></span> 01. Experience Log
             </h2>
             <Link to="/experience" className="hidden md:inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-widest text-subtle hover:text-ink">
                View Full History <ArrowRight size={12} />
             </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              
              {/* Work History - Vertical Timeline */}
              <div className="relative">
                   {/* Vertical Bar */}
                   <div className="absolute left-4 top-4 bottom-4 w-px bg-stone-300"></div>

                   {/* Header */}
                   <div className="relative pl-12 mb-8 flex items-center">
                       <span className="absolute left-0 top-0 bg-paper border border-ink p-1.5 z-10">
                           <Briefcase size={16} className="text-ink" />
                       </span>
                       <h3 className="font-heading font-bold text-lg text-ink ml-1 pt-1">Work History</h3>
                   </div>

                   <div className="space-y-8">
                        {EXPERIENCE.slice(0, 3).map((exp) => (
                            <div key={exp.id} className="relative pl-12 group">
                                {/* Dot on timeline */}
                                <div className="absolute left-[13px] top-6 w-2 h-2 rounded-full bg-ink ring-4 ring-paper group-hover:bg-subtle transition-colors z-0"></div>
                                
                                <div className="bg-white p-5 md:p-6 shadow-card border border-stone-200 hover:shadow-card-hover transition-all">
                                    <div className="flex gap-4 items-start">
                                        {/* Logo Column */}
                                        <div className="flex-shrink-0 w-12 h-12 border border-stone-200 bg-[#F5F5F7] flex items-center justify-center p-1">
                                            {exp.logo ? (
                                                <img src={exp.logo} alt={exp.company} className="max-w-full max-h-full object-contain transition-all opacity-80 group-hover:opacity-100" />
                                            ) : (
                                                <Briefcase size={20} className="text-stone-300"/>
                                            )}
                                        </div>
                                        
                                        {/* Content Column */}
                                        <div className="flex-grow">
                                            <h4 className="font-bold text-ink text-lg leading-tight text-balance">{exp.role}</h4>
                                            <p className="text-xs font-bold text-subtle mt-1 text-balance">@ {exp.company}</p>
                                        </div>
                                    </div>
                                    
                                    <div className="mt-4 pt-3 border-t border-stone-100 flex flex-col items-start gap-3 sm:flex-row sm:justify-between sm:items-center sm:gap-0">
                                        <span className="text-[10px] font-mono bg-stone-100 px-2 py-0.5 border border-stone-200 inline-block">{exp.date}</span>
                                        {exp.relatedProjectId && (
                                            <Link to={`/projects/${exp.relatedProjectId}`} className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-widest text-ink hover:text-subtle transition-colors">
                                                View Case Study <ArrowRight size={10} />
                                            </Link>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                   </div>
              </div>

              {/* Education - Vertical Timeline (Mirrored) */}
              <div className="relative">
                   {/* Vertical Bar */}
                   <div className="absolute left-4 top-4 bottom-4 w-px bg-stone-300"></div>

                   {/* Header */}
                   <div className="relative pl-12 mb-8 flex items-center">
                       <span className="absolute left-0 top-0 bg-paper border border-ink p-1.5 z-10">
                           <GraduationCap size={16} className="text-ink"/>
                       </span>
                       <h3 className="font-heading font-bold text-lg text-ink ml-1 pt-1">Education</h3>
                   </div>

                   <div className="space-y-8">
                        {EDUCATION.map((edu, idx) => (
                            <div key={idx} className="relative pl-12 group">
                                {/* Dot on timeline */}
                                <div className="absolute left-[13px] top-6 w-2 h-2 rounded-full bg-stone-400 ring-4 ring-paper z-0"></div>

                                <div className="bg-stone-50 p-5 md:p-6 border border-stone-200 shadow-sm hover:shadow-md transition-all">
                                    <div className="flex gap-4 items-start">
                                        {/* Logo Column */}
                                        <div className="flex-shrink-0 w-12 h-12 border border-stone-200 bg-[#F5F5F7] flex items-center justify-center p-1">
                                            {edu.logo ? (
                                                <img src={edu.logo} alt={edu.school} className="max-w-full max-h-full object-contain transition-all opacity-80 group-hover:opacity-100" />
                                            ) : (
                                                <GraduationCap size={20} className="text-stone-300"/>
                                            )}
                                        </div>

                                        <div className="flex-grow">
                                            <h4 className="font-bold text-ink text-lg leading-tight mb-1 text-balance">{edu.school}</h4>
                                            <p className="text-xs font-bold italic text-subtle text-balance">{edu.degree}</p>
                                        </div>
                                    </div>

                                    <div className="mt-3 pt-3 border-t border-stone-200/50 flex flex-col items-start gap-2 sm:flex-row sm:justify-between sm:items-center sm:gap-0">
                                       <span className="text-[10px] font-mono text-subtle">{edu.date}</span>
                                       <span className="text-[10px] uppercase tracking-wider font-bold text-ink/60 bg-white border border-stone-200 px-1.5 py-0.5">GPA: {edu.gpa}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                   </div>
              </div>

          </div>
      </section>

      {/* Dashed Divider */}
      <div className="w-full border-t border-dashed border-stone-300 opacity-60"></div>

      {/* 3. Selected Projects */}
      <section>
          <div className="flex justify-between items-end mb-8">
             <h2 className="text-xs font-bold uppercase tracking-widest text-subtle flex items-center gap-3">
                <span className="w-6 h-px bg-stone-400"></span> 02. Selected Work
             </h2>
             <Link to="/projects" className="hidden md:inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-widest text-subtle hover:text-ink">
                View Directory <ArrowRight size={12} />
             </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
             {recentProjects.map(project => (
                 <Link key={project.id} to={`/projects/${project.id}`} className="group bg-card p-6 border border-stone-200 shadow-sm hover:shadow-card-hover transition-all flex flex-col justify-between h-full relative overflow-hidden">
                    <div className="hidden md:flex absolute top-0 right-0 w-8 h-8 bg-stone-50 border-l border-b border-stone-100 items-center justify-center">
                        <ArrowRight size={14} className="text-stone-300 group-hover:text-ink -rotate-45 group-hover:rotate-0 transition-transform" />
                    </div>

                    <div>
                        <div className="mb-4">
                             <span className="text-[10px] font-mono bg-stone-100 px-2 py-1 border border-stone-200 text-subtle">{project.date}</span>
                        </div>
                        <h3 className="text-lg font-heading font-bold text-ink mb-3 group-hover:underline decoration-1 underline-offset-4">{project.title}</h3>
                        <p className="text-xs text-subtle leading-relaxed line-clamp-4 mb-4 font-mono">
                            {project.shortDescription}
                        </p>
                    </div>
                    <div className="flex flex-wrap gap-2 pt-4 border-t border-stone-100">
                        {project.techStack.slice(0, 3).map(t => (
                            <span key={t.name} className="text-[10px] text-ink/60 uppercase tracking-wider">{t.name}</span>
                        ))}
                    </div>

                    <div className="mt-4 md:hidden text-xs font-bold uppercase tracking-widest text-ink flex items-center gap-2">
                       Read More <ArrowRight size={12} />
                    </div>
                 </Link>
             ))}
          </div>
          
          <div className="mt-6 md:hidden text-center">
             <Link to="/projects" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-ink border-b border-ink pb-1">
                View All Projects <ArrowRight size={12} />
             </Link>
          </div>
      </section>

      {/* Dashed Divider */}
      <div className="w-full border-t border-dashed border-stone-300 opacity-60"></div>

      {/* 4. Contact Section */}
      <section>
          <div className="flex justify-between items-end mb-8">
             <h2 className="text-xs font-bold uppercase tracking-widest text-subtle flex items-center gap-3">
                <span className="w-6 h-px bg-stone-400"></span> 03. Get In Touch
             </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Email */}
            <a href={`mailto:${SOCIALS.email}`} className="bg-white p-6 border border-stone-200 shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all flex flex-col items-center gap-4 group">
                <div className="w-10 h-10 rounded-full bg-stone-50 flex items-center justify-center border border-stone-100 group-hover:bg-ink group-hover:text-white transition-colors">
                    <Mail size={18} />
                </div>
                <div className="text-center">
                    <h3 className="text-[10px] font-bold uppercase tracking-widest text-subtle mb-1">Email</h3>
                    <p className="text-xs font-mono text-ink font-bold break-all">{SOCIALS.email}</p>
                </div>
            </a>

            {/* Phone */}
            <a href={`tel:${SOCIALS.phone}`} className="bg-white p-6 border border-stone-200 shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all flex flex-col items-center gap-4 group">
                <div className="w-10 h-10 rounded-full bg-stone-50 flex items-center justify-center border border-stone-100 group-hover:bg-ink group-hover:text-white transition-colors">
                    <Phone size={18} />
                </div>
                <div className="text-center">
                    <h3 className="text-[10px] font-bold uppercase tracking-widest text-subtle mb-1">Phone</h3>
                    <p className="text-xs font-mono text-ink font-bold">{SOCIALS.phone}</p>
                </div>
            </a>

            {/* Location */}
            <div className="bg-white p-6 border border-stone-200 shadow-card flex flex-col items-center gap-4 cursor-default">
                 <div className="w-10 h-10 rounded-full bg-stone-50 flex items-center justify-center border border-stone-100 text-ink">
                    <MapPin size={18} />
                </div>
                <div className="text-center">
                    <h3 className="text-[10px] font-bold uppercase tracking-widest text-subtle mb-1">Location</h3>
                    <p className="text-xs font-mono text-ink font-bold">Evanston, IL</p>
                </div>
            </div>
          </div>
      </section>

    </div>
  );
};

export default Home;