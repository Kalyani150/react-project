import React, { useState, useMemo } from 'react';
import { 
  Search, 
  SlidersHorizontal, 
  RotateCcw, 
  Trash2, 
  X, 
  Info, 
  Upload, 
  Lock, 
  ChevronDown,
  CheckCircle2,
  Timer
} from 'lucide-react';

import tailwindImg from '../assets/components.png';
import aiPrototypingImg from '../assets/prototyping.png';
import designSystemsImg from '../assets/design-systems.png';
import framerMotionImg from '../assets/framer-motion.png';
import editorialUxImg from '../assets/editorial-ux.png';

const INITIAL_POSTS = [
  {
    id: '1',
    title: 'Building Scalable Component Libraries with Tailwind CSS',
    description: 'A practical guide for engineering teams to structure reusable design tokens and headless UI',
    tags: ['Tailwind', 'Design System'],
    updatedAt: 'Updated 2 hours ago • by Sophia Turner',
    image: tailwindImg,
    slug: '/tailwind-component-libraries',
    isLive: false,
  },
  {
    id: '2',
    title: 'Future of AI-Assisted Prototyping Workflows',
    description: 'Examining how generative design tools will augment rather than replace human craft and...',
    tags: ['AI', 'Workflows'],
    updatedAt: 'Updated 3 days ago • by Sophia Turner',
    image: aiPrototypingImg,
    slug: '/ai-assisted-prototyping',
    isLive: false,
  },
  {
    id: '3',
    title: 'Design Systems Beyond Figma: Code Parity & Governance',
    description: 'How engineering and design teams maintain zero-drift design tokens across iOS, Android,...',
    tags: ['Engineering', 'Tokens'],
    updatedAt: 'Updated Sep 01, 2026',
    image: designSystemsImg,
    slug: '/design-systems-beyond-figma',
    isLive: false,
  },
  {
    id: '4',
    title: 'Framer Motion vs Vanilla CSS: When to Switch',
    description: 'Performance profiling and developer ergonomics comparison for modern web motion',
    tags: ['Animation', 'Performance'],
    updatedAt: 'Updated Aug 25, 2026',
    image: framerMotionImg,
    slug: '/framer-motion-vs-vanilla-css',
    isLive: false,
  },
  {
    id: '5',
    title: 'Case Study: Re-architecting Editorial UX for 100k Readers',
    description: 'Deep dive into typography layout shifts, content layout stability, and reader engagement metrics.',
    tags: ['Case Study', 'Metrics'],
    updatedAt: 'Updated Aug 20, 2026',
    image: editorialUxImg,
    slug: '/rearchitecting-editorial-ux',
    isLive: true,
  },
];

export default function TrashManager() {
  const [posts, setPosts] = useState(INITIAL_POSTS);
  const [searchQuery, setSearchQuery] = useState('');
  const [restoreModalPost, setRestoreModalPost] = useState(null);
  const [deleteModalPost, setDeleteModalPost] = useState(null);
  const [showRestoreToast, setShowRestoreToast] = useState(false);

  const filteredPosts = useMemo(() => {
    return posts.filter((post) => {
      const q = searchQuery.toLowerCase();
      return (
        post.title.toLowerCase().includes(q) ||
        post.description.toLowerCase().includes(q) ||
        post.tags.some((tag) => tag.toLowerCase().includes(q))
      );
    });
  }, [posts, searchQuery]);

  const handleRestore = (id) => {
    setPosts((prev) => prev.filter((p) => p.id !== id));
    setRestoreModalPost(null);
    setShowRestoreToast(true);

    setTimeout(() => {
      setShowRestoreToast(false);
    }, 4000);
  };

  const handleDelete = (id) => {
    setPosts((prev) => prev.filter((p) => p.id !== id));
    setDeleteModalPost(null);
  };

  return (
    <div className="min-h-screen bg-[#f8f9fe] text-slate-800 p-3 sm:p-6 lg:p-8 font-sans relative">
      <div className="mx-auto">
        
        {/* Header Section */}
        <header className="mb-4 sm:mb-6">
          <div className="flex items-center justify-between gap-2 flex-wrap mb-1">
            <div className="flex items-center gap-2.5">
              <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold tracking-wider text-slate-900">TRASH</h1>
              <span className="bg-[#DAE2FD] text-[#5C647A] text-xs font-semibold px-2.5 py-0.5 rounded-full flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#565E74]"></span>
                {posts.length} Drafts
              </span>
            </div>
          </div>
          <p className="text-xs sm:text-sm text-slate-500 leading-relaxed max-w-xl">
            Work-in-progress posts waiting for editorial review or publication.
          </p>
        </header>

        {/* Filter and Search Bar */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 mb-5 sm:mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-[#464555] w-4 h-4" />
            <input
              type="text"
              placeholder="Search drafts..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-2 bg-[#f0f3fa] text-xs sm:text-sm text-[#464555] rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500/20 border border-transparent focus:border-indigo-300 transition-all"
            />
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <div className="flex-1 sm:flex-none flex items-center justify-between gap-2 bg-[#f0f3fa] px-3 py-2 rounded-xl text-xs text-slate-600 font-medium">
              <span className="shrink-0 text-[10px] text-slate-400 font-semibold tracking-wider">SORT:</span>
              <button className="flex items-center gap-1 text-slate-800 hover:text-black font-semibold truncate">
                <span className="truncate">Last Modified</span>
                <ChevronDown className="w-3.5 h-3.5 shrink-0" />
              </button>
            </div>
            <button 
              className="p-2 bg-[#f0f3fa] text-slate-600 rounded-xl hover:bg-slate-200 transition shrink-0"
              aria-label="Filter options"
            >
              <SlidersHorizontal className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Post Grid */}
        {filteredPosts.length === 0 ? (
          <div className="text-center py-12 bg-white rounded-2xl border border-slate-100 p-4">
            <p className="text-slate-500 text-xs sm:text-sm">No drafts found matching your search.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
            {filteredPosts.map((post) => (
              <div
                key={post.id}
                className="bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all p-3.5 sm:p-4 flex flex-col justify-between"
              >
                <div>
                  {/* Card Header Image - Background Removed */}
                  <div className="relative aspect-[22/9] w-full max-h-58 rounded-xl overflow-hidden bg-slate-50 mb-3">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover"
                    />
                    <span className="absolute top-2.5 right-2.5 bg-white/90 backdrop-blur-md text-[#5C647A] text-[10px] font-semibold px-2 py-0.5 rounded-full flex items-center gap-1 z-10 shadow-sm">
                      <span className="w-1.5 h-1.5 bg-[#565E74] rounded-full"></span> Draft
                    </span>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-2">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-[#DCE9FF] text-[#464555] text-[10px] sm:text-[11px] font-medium px-2 py-0.5 rounded-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Title & Description */}
                  <h3 className="font-serif text-base sm:text-lg font-bold text-[#0B1C30] leading-snug mb-1.5 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-xs text-slate-500 line-clamp-2 mb-3 leading-relaxed">
                    {post.description}
                  </p>
                </div>

                {/* Footer Meta & Actions */}
                <div className="pt-2">
                  <p className="text-[11px] text-[#464555] flex items-center gap-1.5 mb-3">
                    <Timer className="w-3.5 h-3.5 text-slate-400 shrink-0" /> 
                    <span className="truncate">{post.updatedAt}</span>
                  </p>
                  
                  {/* Action Buttons */}
                  <div className="flex items-center gap-2 pt-2.5 border-t border-slate-100">
                    <button
                      onClick={() => setRestoreModalPost(post)}
                      className="flex-1 bg-[#4F46E5] hover:bg-[#4338ca] active:scale-[0.98] text-white text-xs font-semibold py-2 px-3 rounded-xl flex items-center justify-center gap-1.5 transition min-w-0"
                    >
                      <RotateCcw className="w-3.5 h-3.5 shrink-0" /> 
                      <span className="truncate">Restore</span>
                    </button>
                    <button
                      onClick={() => setDeleteModalPost(post)}
                      className="bg-red-50 hover:bg-red-600 text-red-600 hover:text-white active:scale-[0.98] p-2 rounded-xl transition shrink-0 border border-red-100 hover:border-transparent"
                      aria-label="Delete permanent"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Restore Success Toast */}
      {showRestoreToast && (
        <div className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-6 sm:max-w-md bg-[#1a2536] text-white shadow-2xl rounded-2xl p-3 sm:p-4 flex items-center gap-3 z-50 animate-in slide-in-from-bottom-4 duration-200 border border-slate-700/50">
          <div className="w-7 h-7 rounded-full bg-[#00875a] flex items-center justify-center shrink-0">
            <CheckCircle2 className="w-4 h-4 text-white" />
          </div>
          <div className="flex-1 min-w-0">
            <h4 className="font-serif font-semibold text-xs sm:text-sm leading-tight text-white truncate">
              Blog restored successfully
            </h4>
            <p className="text-[11px] text-slate-300 font-sans mt-0.5 truncate">
              Moved to Drafts review queue.
            </p>
          </div>
          <button 
            onClick={() => setShowRestoreToast(false)}
            className="text-slate-400 hover:text-white transition p-1 shrink-0"
            aria-label="Close notification"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* RESTORE MODAL */}
      {restoreModalPost && (
        <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl max-w-sm w-full p-4 sm:p-5 shadow-2xl relative animate-in fade-in zoom-in-95 duration-150 max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setRestoreModalPost(null)}
              className="absolute right-3.5 top-3.5 text-slate-400 hover:text-slate-600 p-1"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="w-10 h-10 rounded-xl bg-indigo-50 flex items-center justify-center text-indigo-600 mb-3">
              <Upload className="w-5 h-5" />
            </div>

            <h2 className="text-base sm:text-lg font-serif font-bold text-slate-900 mb-1">
              Restore Blog?
            </h2>
            <p className="text-xs text-slate-600 mb-4 leading-relaxed">
              Restore <strong className="text-slate-900 font-semibold">"{restoreModalPost.title}"</strong> back to primary list?
            </p>

            <div className="bg-[#f0f4fe] border border-indigo-100/50 rounded-xl p-3 flex items-start gap-2 mb-5">
              <Info className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5" />
              <p className="text-xs text-slate-600 leading-normal">
                Status will revert to <strong className="text-slate-800 font-medium">Draft</strong>.
              </p>
            </div>

            <div className="flex flex-col-reverse sm:flex-row items-stretch sm:items-center sm:justify-end gap-2">
              <button
                onClick={() => setRestoreModalPost(null)}
                className="w-full sm:w-auto px-4 py-2 rounded-xl text-xs font-medium text-slate-600 hover:bg-slate-100 transition text-center"
              >
                Cancel
              </button>
              <button
                onClick={() => handleRestore(restoreModalPost.id)}
                className="w-full sm:w-auto px-4 py-2 rounded-xl text-xs font-semibold bg-[#4f46e5] hover:bg-[#4338ca] text-white flex items-center justify-center gap-1.5 transition"
              >
                <RotateCcw className="w-3.5 h-3.5" /> Restore
              </button>
            </div>
          </div>
        </div>
      )}

      {/* DELETE MODAL */}
      {deleteModalPost && (
        <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl max-w-sm w-full p-4 sm:p-5 shadow-2xl relative text-center animate-in fade-in zoom-in-95 duration-150 max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setDeleteModalPost(null)}
              className="absolute right-3.5 top-3.5 text-slate-400 hover:text-slate-600 p-1"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="w-10 h-10 rounded-full bg-red-100 mx-auto flex items-center justify-center text-red-600 mb-3">
              <Trash2 className="w-5 h-5" />
            </div>

            <h2 className="text-base sm:text-lg font-bold text-slate-900 mb-1">
              Delete Blog?
            </h2>
            <p className="text-xs text-slate-600 mb-3 leading-relaxed">
              Delete <strong className="text-slate-900 font-semibold">'{deleteModalPost.title}'</strong>?
            </p>

            <div className="bg-[#f3f5fc] rounded-xl p-2.5 flex items-center justify-between mb-4 text-xs font-mono text-slate-600">
              <div className="flex items-center gap-1.5 overflow-hidden min-w-0">
                <span className="w-1.5 h-1.5 rounded-full bg-red-500 shrink-0"></span>
                <span className="truncate">{deleteModalPost.slug}</span>
              </div>
              <span className="text-[10px] text-slate-400 uppercase tracking-wider font-sans font-semibold shrink-0 ml-1">
                {deleteModalPost.isLive ? 'LIVE' : 'DRAFT'}
              </span>
            </div>

            <div className="grid grid-cols-2 gap-2 mb-3">
              <button
                onClick={() => setDeleteModalPost(null)}
                className="py-2 rounded-xl text-xs font-medium bg-[#f0f3fa] text-slate-700 hover:bg-slate-200 transition"
              >
                Cancel
              </button>
              <button
                onClick={() => handleDelete(deleteModalPost.id)}
                className="py-2 rounded-xl text-xs font-semibold bg-red-600 hover:bg-red-700 text-white flex items-center justify-center gap-1.5 transition"
              >
                <Trash2 className="w-3.5 h-3.5" /> Delete
              </button>
            </div>

            <p className="text-[10px] text-slate-400 flex items-center justify-center gap-1">
              <Lock className="w-3 h-3 shrink-0" /> Requires admin privileges
            </p>
          </div>
        </div>
      )}
    </div>
  );
}