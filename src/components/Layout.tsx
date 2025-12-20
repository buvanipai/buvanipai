import React, { useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { Github, Linkedin, Mail, Menu, X } from 'lucide-react';
import ClickSound from './ClickSound'; // <--- We import the Component now
import { SOCIALS } from '../constants';

const Layout: React.FC = () => {
  // NOTE: We deleted "const playClick = useClickSound()"
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMenu = () => setIsMobileMenuOpen(false);

  const navLinkClass = ({ isActive }: { isActive: boolean }) => 
    `hover:text-ink transition-colors pb-1 border-b-2 ${isActive ? 'border-ink font-bold' : 'border-transparent text-subtle'}`;

  const mobileNavLinkClass = ({ isActive }: { isActive: boolean }) => 
    `text-lg font-heading font-bold py-3 border-b border-stone-100 ${isActive ? 'text-ink pl-2 border-l-4 border-l-ink bg-stone-50' : 'text-subtle'}`;

  return (
    // NOTE: We removed "onClick={playClick}" from this div
    <div className="min-h-screen bg-surface text-ink flex flex-col items-center py-2 md:py-4 overflow-x-hidden">
      
      {/* This invisible component handles the sound for the whole app */}
      <ClickSound />

      {/* Main Sheet Container */}
      <div className="w-full max-w-6xl px-4 md:px-0 flex-grow flex flex-col">
        <div className="bg-paper shadow-sheet border border-white/50 rounded-sm flex flex-col min-h-[90vh] relative">
          
          {/* Header */}
          <header className="px-6 py-6 md:px-12 flex justify-between items-center border-b border-border/50 bg-paper sticky top-0 z-30">
            <NavLink to="/" className="group" onClick={closeMenu}>
               {/* Logo */}
               <div className="flex items-center gap-1">
                 <span className="text-3xl font-heading font-bold text-ink">b</span>
                 <span className="h-6 w-[2px] bg-ink rotate-12 mx-1 opacity-40 group-hover:rotate-0 transition-transform duration-300"></span>
                 <span className="text-3xl font-heading font-bold text-ink">p</span>
               </div>
            </NavLink>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center space-x-8 text-sm">
              <NavLink to="/" className={navLinkClass}>[Home]</NavLink>
              <NavLink to="/about" className={navLinkClass}>[About]</NavLink>
              <NavLink to="/experience" className={navLinkClass}>[Experience]</NavLink>
              <NavLink to="/projects" className={navLinkClass}>[Projects]</NavLink>
              <NavLink to="/contact" className={navLinkClass}>[Contact]</NavLink>
            </nav>

            {/* Mobile Hamburger */}
            <button className="md:hidden text-ink p-2 hover:bg-stone-100 rounded-sm transition-colors" onClick={toggleMenu} aria-label="Toggle Menu">
              <Menu size={24} />
            </button>
          </header>

          {/* Mobile Menu - Slide Drawer */}
          {/* Backdrop */}
          <div 
            className={`fixed inset-0 bg-black/20 backdrop-blur-sm z-40 transition-opacity duration-300 md:hidden ${
              isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
            }`} 
            onClick={closeMenu}
          />

          {/* Drawer */}
          <div 
            className={`fixed inset-y-0 right-0 z-50 w-3/4 max-w-xs bg-paper shadow-2xl border-l border-white/50 transform transition-transform duration-300 ease-in-out md:hidden flex flex-col ${
              isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
            }`}
          >
             <div className="p-6 flex flex-col h-full">
                <div className="flex justify-end mb-8">
                  <button onClick={closeMenu} className="p-2 text-ink hover:bg-stone-100 rounded-full transition-colors">
                    <X size={24}/>
                  </button>
                </div>
                
                <nav className="flex flex-col space-y-2">
                  <NavLink to="/" onClick={closeMenu} className={mobileNavLinkClass}>Home</NavLink>
                  <NavLink to="/about" onClick={closeMenu} className={mobileNavLinkClass}>About</NavLink>
                  <NavLink to="/experience" onClick={closeMenu} className={mobileNavLinkClass}>Experience</NavLink>
                  <NavLink to="/projects" onClick={closeMenu} className={mobileNavLinkClass}>Projects</NavLink>
                  <NavLink to="/contact" onClick={closeMenu} className={mobileNavLinkClass}>Contact</NavLink>
                </nav>

                <div className="mt-auto pt-8 border-t border-dashed border-stone-200">
                   <p className="text-[10px] font-bold uppercase tracking-widest text-subtle mb-4">Socials</p>
                   <div className="flex space-x-6 justify-start">
                      <a href={SOCIALS.linkedin} target="_blank" rel="noreferrer" className="text-subtle hover:text-ink transition-colors">
                        <Linkedin strokeWidth={1.5} size={20} />
                      </a>
                      <a href={SOCIALS.github} target="_blank" rel="noreferrer" className="text-subtle hover:text-ink transition-colors">
                        <Github strokeWidth={1.5} size={20} />
                      </a>
                      <a href={`mailto:${SOCIALS.email}`} className="text-subtle hover:text-ink transition-colors">
                        <Mail strokeWidth={1.5} size={20} />
                      </a>
                   </div>
                </div>
             </div>
          </div>

          {/* Main Content */}
          <main className="flex-grow px-6 md:px-12 py-6 animate-fadeIn">
               <Outlet />
          </main>
          
          {/* Footer */}
          <footer className="px-6 md:px-12 py-6 border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-4 bg-paper mt-auto">
            <span className="text-xs text-subtle">
              Est. {new Date().getFullYear()} // Portfolio
            </span>
            
            <div className="flex space-x-6">
              <a href={SOCIALS.linkedin} target="_blank" rel="noreferrer" className="text-subtle hover:text-ink transition-colors">
                <Linkedin strokeWidth={1.5} size={18} />
              </a>
              <a href={SOCIALS.github} target="_blank" rel="noreferrer" className="text-subtle hover:text-ink transition-colors">
                <Github strokeWidth={1.5} size={18} />
              </a>
              <a href={`mailto:${SOCIALS.email}`} className="text-subtle hover:text-ink transition-colors">
                <Mail strokeWidth={1.5} size={18} />
              </a>
            </div>
          </footer>

        </div>
      </div>
    </div>
  );
};

export default Layout;