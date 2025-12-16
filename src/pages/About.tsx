import React from 'react';
import { PROJECTS, OFFLINE_GALLERY, FUN_FACTS } from '../constants';
import { ArrowRight } from 'lucide-react';
import { TechItem, SkillCategory } from '../../types';
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

  // Define the order of categories to display
  const categoryOrder: SkillCategory[] = [
      'Languages', 
      'Frameworks & Libraries', 
      'Tools & Platforms', 
      'AI & Core Concepts'
  ];

  // Group skills by category
  const skillsByCategory: Record<string, string[]> = {};
  uniqueSkills.forEach(skill => {
      if (!skillsByCategory[skill.category]) {
          skillsByCategory[skill.category] = [];
      }
      skillsByCategory[skill.category].push(skill.name);
  });

  return (
    <div className="max-w-4xl mx-auto space-y-16 pt-4">
      
      {/* Intro - Polaroid Style Photo + Text */}
      <section className="flex flex-col md:flex-row gap-12 items-start">
        
        {/* Photo Card - Straight */}
        <div className="md:w-5/12 flex-shrink-0 bg-white p-3 shadow-card border border-stone-200">
          <div className="aspect-[4/5] w-full bg-stone-100 overflow-hidden mb-3 grayscale hover:grayscale-0 transition-all duration-500">
             <img 
              src="/images/about-portrait.png" 
              alt="Buvani Pai" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="text-center flex justify-between items-baseline px-2">
            <span className="font-heading italic text-sm text-subtle">Buvani Pai</span>
            <span className="font-mono text-xs text-stone-400">2025</span>
          </div>
        </div>

        {/* Text */}
        <div className="md:w-7/12 space-y-8">
          <div>
              <h2 className="text-3xl font-heading font-bold text-ink border-b-2 border-ink pb-2 inline-block mb-6">Introduction</h2>
              <div className="space-y-4 text-sm md:text-base leading-loose text-ink font-mono text-justify">
                <p>
                  <strong className="font-bold">Summary:</strong> I am a Master's graduate in Computer Science from Northwestern University. My primary focus is on making AI systems more reliable, efficient, and autonomous.
                </p>
                <p>
                  My passion lies in bridging the gap between theoretical models and messy, real-world data. Whether it is optimizing distributed training workflows for galaxy classification or building agentic pipelines for CRM data, I enjoy the challenge of building systems that work.
                </p>
                <p>
                  When I'm not coding, you can find me reading about the latest in generative AI, or experimenting with new recipes.
                </p>
              </div>
          </div>

           {/* Skills - Dynamically Generated */}
            <div className="bg-stone-50 p-6 border border-stone-200">
                <h3 className="text-xs font-bold uppercase tracking-widest text-subtle mb-4">Technical Capabilities</h3>
                
                <div className="space-y-5">
                    {categoryOrder.map(category => {
                        const skills = skillsByCategory[category];
                        if (!skills || skills.length === 0) return null;

                        return (
                            <div key={category}>
                                <span className="text-xs font-bold text-ink/70 mb-2 block">{category}:</span>
                                <div className="flex flex-wrap gap-2">
                                    {skills.sort().map(skill => (
                                        <span key={skill} className="px-2 py-1 bg-white border border-stone-300 text-xs shadow-sm font-mono text-ink">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
      </section>

      {/* Offline Mode / Fun Facts - Unified Mosaic Style */}
      <section className="space-y-8 pt-8 border-t border-dashed border-stone-300">
        <div className="flex items-center gap-4">
            <h2 className="text-3xl font-heading font-bold text-ink">Offline Mode</h2>
            <span className="bg-stone-200 text-subtle text-[10px] px-2 py-1 font-bold uppercase tracking-wider rounded-sm">Personal Archives</span>
        </div>

        {/* Unified Masonry Grid: Facts + Images mixed */}
        <div className="columns-1 sm:columns-2 md:columns-3 gap-6 space-y-6">
            
            {/* Item 1: Fun Facts (Integrated into grid, straightened, no tape) */}
            <div className="break-inside-avoid bg-[#FEF9C3] p-6 shadow-card border border-[#eab308]/20 relative">
                
                <h3 className="font-heading font-bold text-ink mb-4 text-lg border-b border-ink/10 pb-2">Fun Facts</h3>
                <ul className="list-disc list-outside ml-4 space-y-3">
                    {FUN_FACTS.map((fact, i) => (
                        <li key={i} className="text-xs font-mono text-ink/80 leading-relaxed">
                            {fact}
                        </li>
                    ))}
                </ul>
            </div>

            {/* Remaining Items: Images */}
            {OFFLINE_GALLERY.map((item, index) => (
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

      {/* Next Flow Link */}
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