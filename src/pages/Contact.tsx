import React from 'react';
import { SOCIALS } from '../constants';
import { Mail, Phone, MapPin, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Contact: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto pt-8 space-y-16 animate-fadeIn text-center">
       {/* Header */}
       <header className="space-y-4">
        <h1 className="text-4xl md:text-5xl font-heading font-bold text-ink">Get in Touch.</h1>
        <p className="text-base text-subtle font-mono max-w-xl mx-auto leading-relaxed">
           Feel free to reach out to me for collaboration, opportunities, or just to say hello!
        </p>
      </header>

      {/* Contact Tiles */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Email */}
        <a href={`mailto:${SOCIALS.email}`} className="bg-white p-8 border border-stone-200 shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all flex flex-col items-center gap-4 group">
            <div className="w-12 h-12 rounded-full bg-stone-50 flex items-center justify-center border border-stone-100 group-hover:bg-ink group-hover:text-white transition-colors">
                <Mail size={20} />
            </div>
            <div className="text-center">
                <h3 className="text-xs font-bold uppercase tracking-widest text-subtle mb-1">Email</h3>
                <p className="text-sm font-mono text-ink font-bold">{SOCIALS.email}</p>
            </div>
        </a>

        {/* Phone */}
        <a href={`tel:${SOCIALS.phone}`} className="bg-white p-8 border border-stone-200 shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all flex flex-col items-center gap-4 group">
            <div className="w-12 h-12 rounded-full bg-stone-50 flex items-center justify-center border border-stone-100 group-hover:bg-ink group-hover:text-white transition-colors">
                <Phone size={20} />
            </div>
            <div className="text-center">
                <h3 className="text-xs font-bold uppercase tracking-widest text-subtle mb-1">Phone</h3>
                <p className="text-sm font-mono text-ink font-bold">{SOCIALS.phone}</p>
            </div>
        </a>

        {/* Location */}
        <div className="bg-white p-8 border border-stone-200 shadow-card flex flex-col items-center gap-4 cursor-default">
             <div className="w-12 h-12 rounded-full bg-stone-50 flex items-center justify-center border border-stone-100 text-ink">
                <MapPin size={20} />
            </div>
            <div className="text-center">
                <h3 className="text-xs font-bold uppercase tracking-widest text-subtle mb-1">Location</h3>
                <p className="text-sm font-mono text-ink font-bold">Evanston, IL</p>
            </div>
        </div>
      </div>

      {/* Connect & About Section (Styled like the reference) */}
      <div className="flex flex-col items-center gap-8 pt-12 border-t border-dashed border-stone-300">
          <h2 className="text-3xl font-heading font-bold text-ink">Connect with Me</h2>
          
          <div className="flex items-center gap-5">
              {/* LinkedIn Circle Button */}
              <a 
                href={SOCIALS.linkedin} 
                target="_blank" 
                rel="noreferrer" 
                className="w-14 h-14 bg-white rounded-full shadow-md hover:shadow-lg border border-stone-200 flex items-center justify-center text-ink hover:text-[#0077b5] hover:scale-110 transition-all duration-300"
                aria-label="Connect on LinkedIn"
              >
                 <Linkedin size={24} strokeWidth={1.5} />
              </a>
              
              {/* About Me Pill Button */}
              <Link 
                to="/about" 
                className="px-10 py-4 bg-ink text-white rounded-full font-bold text-sm shadow-lg hover:bg-subtle hover:-translate-y-1 transition-all duration-300"
              >
                 About Me
              </Link>
          </div>
      </div>

    </div>
  );
};

export default Contact;