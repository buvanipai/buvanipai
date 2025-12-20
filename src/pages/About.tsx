import React from 'react';
import { PROJECTS, OFFLINE_GALLERY, FUN_FACTS } from '../constants';
import { ArrowRight } from 'lucide-react';
import { TechItem, SkillCategory } from './../types';
import { Link } from 'react-router-dom';

const About: React.FC = () => {
  
  // Dynamically aggregate unique skills from all projects
  const allSkills = PROJECTS.flatMap(p => p.techStack);
  const uniqueSkillsMap = new Map<string, TechItem>();
  
  allSkills.forEach(skill => {
    if (!uniqueSkillsMap.has(skill.name)) {
        uniqueSkillsMap.set(skill.name, skill);
    }
  });

  const uniqueSkills = Array.from(uniqueSkillsMap.values());

  const categoryOrder: SkillCategory[] = [
      'Languages', 
      'Frameworks & Libraries', 
      'Tools & Platforms', 
      'AI & Core Concepts'
  ];

  const skillsByCategory: Record<string, string[]> = {};
  uniqueSkills.forEach(skill => {
      if (!skillsByCategory[skill.category]) {
          skillsByCategory[skill.category] = [];
      }
      skillsByCategory[skill.category].push(skill.name);
  });

  return (
    <div className="max-w-5xl mx-auto space-y-20 pt-4">
      
      {/* 1. Intro Section */}
      <section className="flex flex-col md:flex-row gap-12 items-start">
        <div className="w-full md:w-5/12 flex-shrink-0 bg-white p-3 shadow-card border border-stone-200">
          <div className="aspect-[4/5] w-full bg-stone-100 overflow-hidden mb-3 grayscale hover:grayscale-0 transition-all duration-500">
             <img 
              src="/images/about-portrait.jpeg" 
              alt="Buvani Pai" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="text-center flex justify-between items-baseline px-2">
            <span className="font-heading italic text-sm text-subtle">Buvani Pai</span>
            <span className="font-mono text-xs text-stone-400">2025</span>
          </div>
        </div>
        
        <div className="w-full md:w-7/12">
            <h2 className="text-3xl font-heading font-bold text-ink border-b-2 border-ink pb-2 inline-block mb-6">Introduction</h2>
            <div className="space-y-6 text-sm md:text-base leading-loose text-ink font-mono text-left">
              <p>
                <strong className="font-bold">Summary:</strong> I am the kind of person who simply cannot let a problem go until it is solved. Whether it is debugging a stubborn diffusion model or trying to grasp how electrons move through null planes, I need to find the answer. That relentless curiosity is what pulled me into AI, and it is why I love this field.
              </p>
              <p>
                I thrive on hard technical challenges in computer vision and agentic systems. Training neural networks on galaxy images? A dream project. Building ML pipelines that actually scale in production? That is the work that keeps me engaged. I am drawn to the messy intersection where theory meets reality and you have to make it work.
              </p>
              <p>
                At heart, I am an extrovert who builds best with others. I dance, sketch constantly, binge Anime, and recently discovered that boxing is the ultimate stress relief. Mumbai raised me, Chicago claimed me, and I’m always looking for the next adventure.
              </p>
            </div>
        </div>
      </section>

      {/* 2. Technical Capabilities - Redesigned for horizontal flow */}
      <section className="bg-stone-50 p-8 border border-stone-200 shadow-sm">
          <div className="flex items-center gap-4 mb-10">
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-subtle">Technical Capabilities</h3>
            <div className="h-px flex-grow bg-stone-200"></div>
          </div>
          
          <div className="space-y-8">
              {categoryOrder.map(category => {
                  const skills = skillsByCategory[category];
                  if (!skills || skills.length === 0) return null;

                  return (
                      <div key={category} className="flex flex-col md:flex-row md:items-baseline gap-4 md:gap-10 group">
                          <h4 className="text-[10px] font-bold text-ink/40 uppercase tracking-widest w-full md:w-40 shrink-0 group-hover:text-ink transition-colors">
                            {category}
                          </h4>
                          <div className="flex flex-wrap gap-2 flex-grow">
                              {skills.sort().map(skill => (
                                  <span key={skill} className="px-2.5 py-1 bg-white border border-stone-300 text-[11px] shadow-sm font-mono text-ink hover:border-ink transition-colors">
                                      {skill}
                                  </span>
                              ))}
                          </div>
                      </div>
                  );
              })}
          </div>
      </section>

      {/* 3. Offline Mode */}
      <section className="space-y-8 pt-8 border-t border-dashed border-stone-300">
        <div className="flex items-center gap-4">
            <h2 className="text-3xl font-heading font-bold text-ink">Offline Mode</h2>
            <span className="bg-stone-200 text-subtle text-[10px] px-2 py-1 font-bold uppercase tracking-wider rounded-sm">Personal Archives</span>
        </div>

        <div className="columns-1 sm:columns-2 md:columns-3 gap-6 space-y-6">
            {/* Post-it Note */}
            <div className="break-inside-avoid bg-note p-5 shadow-card border border-note-border/20 relative">
                <div className="absolute top-3 right-3 w-3 h-3 bg-white/20 rounded-full blur-sm"></div>
                <h3 className="font-heading font-bold text-ink mb-4 text-xl border-b border-ink/10 pb-1">Fun Facts</h3>
                <ul className="list-disc list-outside ml-0.2 space-y-3">
                    {FUN_FACTS.map((fact: any, i: number) => (
                        <li key={i} className="text-xs font-mono text-ink/80 leading-relaxed flex gap-3 items-start">
                            <span className="text-base shrink-0 select-none">{fact.emoji}</span>
                            <span>{fact.text}</span>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Gallery Images */}
            {OFFLINE_GALLERY.map((item) => (
                <div key={item.id} className="break-inside-avoid bg-white p-2 border border-stone-200 shadow-card hover:shadow-card-hover transition-all duration-300 group">
                     <div className="overflow-hidden bg-stone-100 relative">
                        <img 
                            src={item.image} 
                            alt="Personal Archive" 
                            className="w-full h-auto object-cover grayscale group-hover:grayscale-0 transition-all duration-500" 
                        />
                     </div>
                </div>
            ))}
        </div>
      </section>

      <div className="flex justify-center pt-12 pb-12">
          <Link to="/experience" className="group flex flex-col items-center gap-1">
              <span className="text-[10px] font-bold uppercase tracking-widest text-subtle mb-1 group-hover:text-ink transition-colors">Continue Reading</span>
              <span className="text-2xl md:text-3xl font-heading font-bold text-ink flex items-center gap-3 hover:underline decoration-1 underline-offset-4">
                  Experience Log <ArrowRight className="group-hover:translate-x-2 transition-transform" />
              </span>
          </Link>
      </div>

    </div>
  );
};

export default About;