import { useState } from 'react';
import { BLOG_POSTS } from '../data';
import { BlogPost as BlogPostType } from '../types';
import { Search, Calendar, User, Eye, ArrowLeft, BookOpen, Share2 } from 'lucide-react';

export default function Blog() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [focusedPost, setFocusedPost] = useState<BlogPostType | null>(null);

  const categories = ['All', 'Conveyancing Law', 'Corporate Law', 'Labour Law'];

  const filteredPosts = BLOG_POSTS.filter((post) => {
    const matchesSearch = 
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));

    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  const handleCopyLink = (title: string) => {
    navigator.clipboard.writeText(window.location.href);
    alert(`Legal Article Link copied for "${title}"! You may share this with counsel.`);
  };

  return (
    <section id="blog-section" className="py-24 bg-white min-h-screen px-6 md:px-8 border-b border-gray-100">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* If viewing a single post */}
        {focusedPost ? (
          <div className="max-w-3xl mx-auto space-y-8 animate-fade-in">
            <button
              onClick={() => {
                setFocusedPost(null);
                window.scrollTo({ top: 0 });
              }}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#1B2A4A] hover:text-[#C9A84C] uppercase tracking-wider font-mono bg-gray-50 px-3 py-1.5 border border-gray-150 rounded-sm"
            >
              <ArrowLeft size={14} /> Back to all legal briefs &amp; guides
            </button>

            {/* Banner image */}
            <div className="relative h-[250px] md:h-[400px] bg-gray-50 rounded-sm overflow-hidden border border-gray-200 shadow-sm">
              <img 
                src={focusedPost.image} 
                alt={focusedPost.title}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-[#1B2A4A]/60" />
              <div className="absolute bottom-6 left-6 right-6">
                <span className="px-2.5 py-1 bg-[#C9A84C] text-[10px] uppercase font-mono font-bold tracking-wider text-[#1B2A4A]">
                  {focusedPost.category}
                </span>
                <h1 className="font-serif italic font-light text-xl sm:text-2xl md:text-3xl text-white mt-3 leading-tight">
                  {focusedPost.title}
                </h1>
              </div>
            </div>

            {/* Meta bar */}
            <div className="flex flex-wrap items-center gap-6 text-xs text-gray-450 border-b border-gray-100 pb-4 font-mono">
              <span className="flex items-center gap-1"><User size={13} /> {focusedPost.author}</span>
              <span className="flex items-center gap-1"><Calendar size={13} /> {focusedPost.date}</span>
              <span className="flex items-center gap-1"><Eye size={13} /> {focusedPost.reads} views</span>
            </div>

            {/* Content markup parsing */}
            <div className="prose max-w-none text-gray-600 leading-relaxed text-sm space-y-6 font-sans">
              {focusedPost.content.split('\n\n').map((paragraph, index) => {
                const trimmed = paragraph.trim();
                if (!trimmed) return null;

                // Simple parser for headings and subheadings
                if (trimmed.startsWith('###')) {
                  return (
                    <h3 key={index} className="font-serif italic text-lg text-[#1B2A4A] pt-4 border-l-4 border-[#C9A84C] pl-3">
                      {trimmed.replace('###', '').trim()}
                    </h3>
                  );
                }
                if (trimmed.startsWith('##')) {
                  return (
                    <h2 key={index} className="font-serif italic font-light text-xl text-[#1B2A4A] pt-6">
                      {trimmed.replace('##', '').trim()}
                    </h2>
                  );
                }
                // Parser for lists
                if (trimmed.includes('\n- ') || trimmed.includes('\n• ')) {
                  const lines = trimmed.split('\n').filter(l => l.trim() !== '');
                  return (
                    <ul key={index} className="space-y-2 pl-5 list-disc text-xs sm:text-sm">
                      {lines.map((line, lidx) => {
                        const cleaned = line.replace(/^\s*[-•]\s*/, '').trim();
                        return <li key={lidx} className="leading-relaxed">{cleaned}</li>;
                      })};
                    </ul>
                  );
                }
                if (trimmed.startsWith('- ') || trimmed.startsWith('• ')) {
                  return (
                    <li key={index} className="leading-relaxed list-disc ml-5 text-xs sm:text-sm">{trimmed.replace(/^[-•]\s*/, '')}</li>
                  );
                }
                
                return <p key={index} className="text-gray-500 leading-relaxed" dangerouslySetInnerHTML={{ __html: trimmed }} />;
              })}
            </div>

            {/* Footer tags and share */}
            <div className="pt-8 border-t border-gray-100 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div className="flex flex-wrap gap-1">
                {focusedPost.tags.map((tag, idx) => (
                  <span key={idx} className="text-[10px] bg-gray-50 text-gray-500 font-mono px-2.5 py-0.5 rounded-sm border border-gray-150">
                    #{tag}
                  </span>
                ))}
              </div>
              <button
                onClick={() => handleCopyLink(focusedPost.title)}
                className="flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-[#1B2A4A] hover:text-[#C9A84C] border border-gray-250 px-4 py-2 rounded-sm bg-gray-50 transition-colors cursor-pointer"
              >
                <Share2 size={13} /> Share Legal Brief
              </button>
            </div>
          </div>
        ) : (
          <div className="space-y-12">
            {/* Header Title */}
            <div className="text-center max-w-2xl mx-auto space-y-4">
              <span className="text-xs uppercase tracking-[0.25em] text-[#C9A84C] font-mono font-bold block">Legal Resources &amp; Articles</span>
              <h2 className="font-serif font-light text-3xl md:text-4.5xl text-[#1B2A4A] italic">
                Advocates’ <span className="font-bold not-italic underline decoration-[#C9A84C] decoration-2">Insights</span> on Kenyan Law
              </h2>
              <div className="w-12 h-px bg-[#C9A84C] mx-auto my-3" />
              <p className="text-xs sm:text-sm text-gray-450 leading-relaxed font-sans">
                Stay updated with authoritative articles written by our Advocates covering real estate transactions, tax compliance, labor courts regulations and family succession in East Africa.
              </p>
            </div>

            {/* Filter and Search Bar */}
            <div className="flex flex-col md:flex-row gap-4 justify-between items-center bg-gray-50/50 p-4 rounded-sm border border-gray-150">
              {/* Category buttons */}
              <div className="flex flex-wrap gap-2 w-full md:w-auto">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-3 py-1.5 text-[10px] uppercase font-mono tracking-wider rounded-sm transition-colors cursor-pointer ${
                      selectedCategory === cat 
                        ? 'bg-[#1B2A4A] text-[#C9A84C] font-bold border border-[#1B2A4A]' 
                        : 'bg-white hover:bg-gray-50 text-gray-450 border border-gray-200'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              {/* Search input field */}
              <div className="relative w-full md:w-72">
                <input
                  type="text"
                  placeholder="Search articles &amp; topics..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full text-xs font-mono pl-9 pr-4 py-2 border border-gray-200 rounded-sm focus:border-[#C9A84C] focus:outline-none bg-white text-[#1B2A4A]"
                />
                <Search size={14} className="absolute left-3 top-2.5 text-gray-450" />
              </div>
            </div>

            {/* Grid display */}
            {filteredPosts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPosts.map((post) => (
                  <article 
                    key={post.id}
                    onClick={() => {
                      setFocusedPost(post);
                      window.scrollTo({ top: 0 });
                    }}
                    className="bg-white border border-gray-200 rounded-sm overflow-hidden transition-all flex flex-col justify-between cursor-pointer group"
                  >
                    {/* Main banner block */}
                    <div className="relative h-48 bg-gray-100 overflow-hidden">
                      <img 
                        src={post.image} 
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter grayscale group-hover:grayscale-0"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute top-4 left-4 bg-[#1B2A4A] border border-gray-800 text-[9px] uppercase font-mono text-[#C9A84C] px-2.5 py-1 rounded-sm">
                        {post.category}
                      </div>
                    </div>

                    {/* Blog details block */}
                    <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                      <div className="space-y-2.5">
                        {/* Reads & Date */}
                        <div className="flex items-center gap-4 text-[10px] text-gray-400 font-mono">
                          <span className="flex items-center gap-1"><Calendar size={10} /> {post.date}</span>
                          <span className="flex items-center gap-1"><BookOpen size={10} /> {Math.ceil(post.content.length / 800)} min read</span>
                        </div>
                        <h3 className="font-serif italic text-base text-[#1B2A4A] group-hover:text-[#C9A84C] transition-colors line-clamp-2">
                          {post.title}
                        </h3>
                        <p className="text-xs text-gray-400 leading-relaxed font-sans line-clamp-3">
                          {post.summary}
                        </p>
                      </div>

                      <div className="pt-4 border-t border-gray-100 flex justify-between items-center text-[10px] text-[#1B2A4A] font-mono uppercase font-bold group-hover:text-[#C9A84C] transition-colors">
                        <span>Read Legal Guide</span>
                        <span>➔</span>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            ) : (
              <div className="py-20 text-center border border-dashed border-gray-200 rounded-sm space-y-3">
                <BookOpen className="text-gray-300 w-12 h-12 mx-auto animate-bounce" />
                <h3 className="font-serif italic font-light text-gray-500">No Articles Found</h3>
                <p className="text-xs text-gray-400">Try refining your keyword search or category filter criteria.</p>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
