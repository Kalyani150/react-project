import React from 'react';
import { Link } from 'react-router-dom';

// Imported asset images directly from local path
import hydroImage from '../assets/about.png';
import engineeringImage from '../assets/service-accessories.png';
import techImage from '../assets/service-it.png';

export const blogPosts = [
  {
    id: 1,
    slug: 'science-of-finding-water',
    category: 'HYDROGEOLOGY',
    date: 'June 12, 2026',
    title: 'The Science of Finding Water: How Geophysical Surveys Work',
    description:
      'Explore the scientific methods, electrical resistivity tests, and subterranean mapping used to pinpoint high-yield borehole locations across Zimbabwe.',
    fullContent:
      'KBK Business Solutions is a trusted Digital Marketing Agency in Uppal helping businesses grow online. In today’s competitive market, having a website is not enough. You need the right strategy to attract customers, increase visibility, and generate leads.',
    image: hydroImage,
    alt: 'Aerial view of a geophysical survey site',
  },
  {
    id: 2,
    slug: 'understanding-borehole-casing',
    category: 'ENGINEERING',
    date: 'May 28, 2026',
    title: 'Understanding Borehole Casing: Why Quality Materials Matter',
    description:
      'Learn how proper PVC casing, gravel packing, and sanitary seals protect your water source from contamination and prevent structure collapse.',
    fullContent:
      'Learn how proper PVC casing, gravel packing, and sanitary seals protect your water source from contamination and prevent structural collapse over long periods of heavy usage.',
    image: engineeringImage,
    alt: 'Borehole casings, pumps, and water equipment in a warehouse',
  },
  {
    id: 3,
    slug: 'solar-powered-water-systems',
    category: 'TECHNOLOGY',
    date: 'April 15, 2026',
    title: 'Solar-Powered Water Systems: The Future of Agriculture',
    description:
      'A deep dive into how solar telemetry, smart pressure regulators, and automated pumps are modernizing irrigation and off-grid farming.',
    fullContent:
      'A deep dive into how solar telemetry, smart pressure regulators, and automated pumps are modernizing irrigation and off-grid farming to save energy and optimize yields.',
    image: techImage,
    alt: 'Engineer working at a solar telemetry control server workstation',
  },
];

export default function BlogSection() {
  return (
    <section className="bg-[#FAF9F6] py-12 px-4 sm:px-6 lg:px-8 font-sans text-stone-900">
      <div className="mx-auto">
        {/* Header Section */}
        <div className="text-center mb-10 sm:mb-14">
          <p className="text-xs font-semibold tracking-widest text-stone-500 uppercase mb-3">
            Our Publications
          </p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-stone-900 mb-4 tracking-tight">
            Latest from our <span className="italic font-normal">blog</span>
          </h2>
          <p className="text-stone-600 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Explore educational resources written by our leading geophysicists, engineers,
            and solar installation experts.
          </p>
        </div>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-2xl overflow-hidden border border-stone-200/60 shadow-xs hover:shadow-md transition-shadow duration-300 flex flex-col justify-between"
            >
              {/* Card Image Link */}
              <Link to={`/blogs/${post.slug}`} className="relative h-52 sm:h-56 w-full bg-stone-100 overflow-hidden block">
                <img
                  src={post.image}
                  alt={post.alt}
                  className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-105"
                />
              </Link>

              {/* Card Content */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center space-x-2 text-[11px] font-bold tracking-wider uppercase mb-3">
                    <span className="text-emerald-700">{post.category}</span>
                    <span className="text-stone-400">•</span>
                    <span className="text-stone-400 font-normal">{post.date}</span>
                  </div>

                  <h3 className="text-xl font-serif font-bold text-stone-900 leading-snug mb-3  transition-colors">
                    <Link to={`/blogs/${post.slug}`}>{post.title}</Link>
                  </h3>

                  <p className="text-stone-600 text-xs sm:text-sm leading-relaxed mb-6">
                    {post.description}
                  </p>
                </div>

                <Link
                  to={`/blogs/${post.slug}`}
                  className="inline-flex items-center text-xs sm:text-sm font-bold text-stone-900 hover:text-emerald-700 transition-colors group self-start"
                >
                  Read Article
                  <svg
                    className="ml-1.5 w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-200"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}