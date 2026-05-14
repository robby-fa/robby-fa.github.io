import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { HiClock, HiCalendar, HiArrowRight } from 'react-icons/hi';
import { FeedList } from '../FeedList/FeedList';

function formatDate(date: Date): string {
    return new Intl.DateTimeFormat('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    }).format(date);
}

export default function MyFeeds() {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-slate-50">
            {/* Page Header */}
            <div className="bg-white border-b border-slate-100">
                <div className="container mx-auto px-6 md:px-16 py-14">
                    <p className="text-blue-600 font-semibold text-sm uppercase tracking-widest mb-2">
                        Writing & Notes
                    </p>
                    <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">My Feeds</h1>
                    <p className="text-slate-500 text-base max-w-xl">
                        Articles, cheat sheets, and notes I write about technology, security, and things I find interesting.
                    </p>
                </div>
            </div>

            {/* Articles Grid */}
            <div className="container mx-auto px-6 md:px-16 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {FeedList.map((feed, index) => (
                        <motion.article
                            key={feed.id}
                            onClick={() => navigate(feed.href)}
                            className="bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 cursor-pointer overflow-hidden flex flex-col group"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                        >
                            {/* Thumbnail */}
                            <div className="h-44 overflow-hidden bg-slate-100">
                                <img
                                    src={feed.image}
                                    alt={feed.title}
                                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    onError={(e) => {
                                        (e.target as HTMLImageElement).style.display = 'none';
                                    }}
                                />
                            </div>

                            {/* Content */}
                            <div className="p-6 flex flex-col flex-1">
                                {/* Tags */}
                                <div className="flex flex-wrap gap-1.5 mb-3">
                                    {feed.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-700"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                {/* Title */}
                                <h2 className="text-lg font-bold text-slate-800 mb-2 group-hover:text-blue-600 transition-colors leading-snug">
                                    {feed.title}
                                </h2>

                                {/* Description */}
                                <p className="text-sm text-slate-500 leading-relaxed mb-4 flex-1">
                                    {feed.description}
                                </p>

                                {/* Footer */}
                                <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-100">
                                    <div className="flex items-center gap-3 text-xs text-slate-400">
                                        <span className="flex items-center gap-1">
                                            <HiCalendar className="text-blue-300" />
                                            {formatDate(feed.createdAt)}
                                        </span>
                                        <span className="flex items-center gap-1">
                                            <HiClock className="text-blue-300" />
                                            {feed.readTime}
                                        </span>
                                    </div>
                                    <HiArrowRight className="text-blue-400 group-hover:translate-x-1 transition-transform" />
                                </div>
                            </div>
                        </motion.article>
                    ))}
                </div>
            </div>
        </div>
    );
}
