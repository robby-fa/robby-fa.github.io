import { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { HiArrowLeft, HiClock, HiCalendar } from 'react-icons/hi';

interface ArticleLayoutProps {
  title: string;
  subtitle?: string;
  tags: string[];
  date: string;
  readTime: string;
  children: ReactNode;
}

export default function ArticleLayout({ title, subtitle, tags, date, readTime, children }: ArticleLayoutProps) {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Article header */}
      <div className="bg-white border-b border-slate-100">
        <div className="container mx-auto px-6 md:px-16 max-w-4xl py-10">
          <Link
            to="/feeds"
            className="inline-flex items-center gap-1.5 text-slate-400 hover:text-blue-600 transition-colors text-sm font-medium mb-8 group"
          >
            <HiArrowLeft className="group-hover:-translate-x-0.5 transition-transform" />
            Back to Feeds
          </Link>

          <div className="flex flex-wrap gap-2 mb-4">
            {tags.map((tag) => (
              <span key={tag} className="text-xs font-semibold px-2.5 py-1 rounded-full bg-blue-50 text-blue-700">
                {tag}
              </span>
            ))}
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight mb-3">{title}</h1>
          {subtitle && <p className="text-slate-500 text-lg leading-relaxed mb-5">{subtitle}</p>}

          <div className="flex flex-wrap items-center gap-4 text-sm text-slate-400">
            <span className="flex items-center gap-1.5">
              <HiCalendar className="text-blue-400" />
              {date}
            </span>
            <span className="flex items-center gap-1.5">
              <HiClock className="text-blue-400" />
              {readTime} read
            </span>
          </div>
        </div>
      </div>

      {/* Article body */}
      <div className="container mx-auto px-6 md:px-16 max-w-4xl py-12">
        {children}
      </div>
    </div>
  );
}
