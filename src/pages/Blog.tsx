import React from 'react';
import { Link } from 'react-router-dom';
import { BLOGS } from '../constants';
import { ArrowRight } from 'lucide-react';

const Blog: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto pt-4 space-y-12 animate-fadeIn">
      <div className="border-b-2 border-ink pb-4">
        <h2 className="text-4xl font-heading font-bold text-ink">Research Notes</h2>
      </div>

      <div className="space-y-8">
        {BLOGS.map(blog => (
          <Link key={blog.id} to={`/blog/${blog.id}`} className="block group cursor-pointer bg-white p-8 shadow-card border border-stone-200 hover:shadow-card-hover transition-all">
             <article>
                <div className="flex justify-between items-center mb-4 border-b border-dashed border-stone-300 pb-2">
                  <span className="text-xs font-bold uppercase tracking-widest text-subtle">
                    Date: {blog.date}
                  </span>
                  <span className="text-xs font-bold text-ink group-hover:underline">Read Note &gt;</span>
                </div>
                
                <h3 className="text-2xl font-bold text-ink mb-3 leading-snug">
                  {blog.title}
                </h3>
                
                <p className="font-mono text-sm text-subtle leading-relaxed">
                  {blog.snippet}
                </p>
             </article>
          </Link>
        ))}
      </div>

      {/* Spacing at bottom since CTA was removed */}
      <div className="pb-12"></div>

    </div>
  );
};

export default Blog;