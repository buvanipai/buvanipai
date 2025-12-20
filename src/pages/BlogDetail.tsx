import React from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { BLOGS } from '../constants';
import { ArrowLeft, Book, Bookmark } from 'lucide-react';

const BlogDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const blog = BLOGS.find(b => b.id === id);

  if (!blog) {
    return <Navigate to="/blog" replace />;
  }

  return (
    <article className="max-w-4xl mx-auto space-y-12 animate-fadeIn pt-4">
      
      {/* Back Navigation */}
      <Link to="/blog" className="inline-flex items-center gap-2 text-subtle hover:text-ink font-bold text-xs uppercase tracking-widest mb-4 transition-colors">
        <ArrowLeft size={14} /> Back to Notes
      </Link>

      {/* Header */}
      <header className="space-y-6 pb-8 border-b-2 border-ink">
        <div className="flex items-center gap-2 text-xs font-mono bg-stone-100 inline-block px-2 py-1 border border-stone-200">
            <span>RESEARCH_NOTE_ID: {blog.id.toUpperCase()}</span>
        </div>
        <h1 className="text-3xl md:text-5xl font-heading font-bold text-ink leading-tight">
          {blog.title}
        </h1>
        
        <div className="flex flex-wrap gap-6 text-xs uppercase tracking-widest pt-4">
          <div className="flex flex-col gap-1">
             <span className="font-bold text-subtle">Recorded Date</span>
             <span className="font-bold text-ink">{blog.date}</span>
          </div>
          {blog.tags && (
             <div className="flex flex-col gap-1">
               <span className="font-bold text-subtle">Keywords</span>
               <div className="flex gap-2 flex-wrap">
                  {blog.tags.map(t => (
                      <span key={t} className="font-medium text-ink bg-white border border-border px-1">#{t}</span>
                  ))}
               </div>
            </div>
          )}
        </div>
      </header>

      {/* Main Layout Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          
          {/* Left Column: Main Narrative */}
          <div className="md:col-span-2 space-y-10">
              
              {/* Abstract/Snippet */}
              <section className="bg-stone-50 p-6 border-l-4 border-stone-300 italic text-ink/80">
                <span className="font-bold not-italic text-xs uppercase tracking-widest text-subtle block mb-2">Abstract</span>
                <p className="font-serif text-lg leading-relaxed">
                    "{blog.snippet}"
                </p>
              </section>

              {/* Main Content */}
              <section className="space-y-6">
                <div className="w-12 h-1 bg-ink mb-6"></div>
                {blog.content.split('\n').map((para, idx) => (
                    <p key={idx} className="font-mono text-sm md:text-base leading-loose text-ink/90 text-justify">
                        {para}
                    </p>
                ))}
                <div className="flex justify-center pt-8">
                     <span className="text-subtle tracking-[0.5em] text-xs">***</span>
                </div>
              </section>
          </div>

          {/* Right Column: References & Extras */}
          <div className="space-y-8">
              
              {/* References Card */}
              {blog.references && blog.references.length > 0 && (
                <div className="bg-white p-6 shadow-card border border-stone-200 relative">
                    <div className="absolute -top-3 -right-3 bg-ink text-white p-2 rounded-full">
                         <Book size={16} />
                    </div>
                    
                    <h3 className="text-sm font-heading font-bold text-ink mb-4 border-b border-dashed border-stone-300 pb-2">
                        References & Works Cited
                    </h3>
                    
                    <ul className="space-y-4">
                        {blog.references.map((ref, idx) => (
                            <li key={idx} className="flex gap-3 text-xs font-mono leading-relaxed text-subtle">
                                <span className="font-bold text-ink select-none">[{idx + 1}]</span>
                                <span>{ref}</span>
                            </li>
                        ))}
                    </ul>
                </div>
              )}

              {/* Reading Marker / Bookmark Visual */}
              <div className="bg-note-blue p-4 shadow-sm border border-note-blue-border/20 transform rotate-1 text-center">
                  <Bookmark className="mx-auto text-blue-400 mb-2" size={24} />
                  <p className="font-handwriting font-mono text-xs text-blue-900 italic">
                      "Knowledge increases by sharing, not by saving."
                  </p>
              </div>

          </div>

      </div>

    </article>
  );
};

export default BlogDetail;