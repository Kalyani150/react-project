import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ThumbsUp, Bookmark, Share2, Check, ArrowLeft, ArrowRight } from 'lucide-react';

import hydroImage from '../assets/about.png';
import engineeringImage from '../assets/service-accessories.png';
import techImage from '../assets/service-it.png';
import casingPipesImage from '../assets/casing-pipes.png';

export const blogPosts = [
  {
    id: 1,
    slug: 'science-of-finding-water',
    category: 'HYDROGEOLOGY',
    articleId: 'ART-2026-0904',
    readTime: '8 min read',
    author: {
      name: 'Kalyani',
      role: 'Senior Hydrogeologist',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80',
    },
    likes: 342,
    date: 'June 12, 2026',
    title: 'The Science of Finding Water: How Geophysical Surveys Work',
    description:
      'Explore the scientific methods, electrical resistivity tests, and subterranean mapping used to pinpoint high-yield borehole locations across Zimbabwe.',
    imageCaption: 'Figure 1.0 — Geophysical survey site with automated multi-electrode field telemetry arrays.',
    fullContent: (
      <>
        <p className="first-letter:float-left first-letter:text-5xl first-letter:pr-2 first-letter:font-serif first-letter:text-stone-900 leading-relaxed font-serif text-stone-700">
          Locating underground water was traditionally left to water dowsers or pure
          guesswork. In modern hydrogeology, drilling a borehole without prior site
          investigation is a high-risk financial gamble. A standard deep borehole
          involves significant financial investment; if you hit dry granite or a
          brackish, non-potable seam, that capital is lost.
        </p>
        <p className="font-serif leading-relaxed text-stone-700 mt-4">
          Geophysical surveying uses non-invasive physics to peek beneath the
          Earth's surface. By measuring natural and induced physical properties of
          the soil and rock, hydrogeologists map hidden aquifers, locate high-yield
          fracture zones, and determine optimal drilling depths with surgical
          precision.
        </p>
        <p className="font-serif font-bold text-stone-900 text-[18px] mt-6 mb-2">
          The Core Science: How Underground Water is Detected
        </p>
        <p className="mb-4 font-serif text-stone-700">
          Water in subterranean formations rarely sits in underground lakes.
          Instead, it resides within the microscopic pores of sand and gravel or
          inside interconnected fractures and faults within solid bedrock.
        </p>
        <p className="mb-4 font-serif text-stone-700">
          Because water containing dissolved minerals conducts electricity
          significantly better than solid rock or dry sand, electrical geophysics is
          the primary tool for groundwater exploration. Hydrogeologists measure
          resistivity to classify subterranean layers:
        </p>

        <ul className="list-disc pl-5 space-y-2 mb-6 font-serif text-stone-700">
          <li>
            <strong>Fresh Water Aquifers:</strong> Low resistivity
          </li>
          <li>
            <strong>Clay and Silt:</strong> Very low resistivity
          </li>
          <li>
            <strong>Dry Sand and Gravel:</strong> High resistivity
          </li>
          <li>
            <strong>Unfractured Bedrock & Granite:</strong> Very high resistivity
          </li>
        </ul>

        <p className="font-serif font-bold text-stone-900 text-[18px] mt-6 mb-2">
          Essential Survey Methods Used in Hydrogeology
        </p>

        <ul className="list-disc pl-5 space-y-2 mb-6 font-serif text-stone-700">
          <li>
            <strong>Vertical Electrical Sounding:</strong> This method measures
            resistivity variations with depth at a single point. Metal electrodes
            are driven into the ground in a straight line, and controlled direct
            electrical current is injected into the earth. As the distance between
            the outer current electrodes increases, the electrical current
            penetrates deeper into the ground, providing a vertical layer profile
            showing depth to the water table.
          </li>
          <li>
            <strong>Electrical Resistivity Tomography:</strong> Where single-point
            sounding gives a single line of data, tomography uses automated
            multi-electrode arrays to construct a full cross-sectional visual map
            of the subsurface. Multiple electrodes connected to a central control
            unit automatically switch current pairs to scan both vertically and
            horizontally, pinpointing discrete fault lines, water-bearing
            fractures, and localized clay lenses.
          </li>
        </ul>
      </>
    ),
    image: hydroImage,
    alt: 'Aerial view of a geophysical survey site',
  },
  {
    id: 2,
    slug: 'understanding-borehole-casing',
    category: 'ENGINEERING',
    articleId: 'ART-2026-0528',
    readTime: '6 min read',
    author: {
      name: 'Kalyani',
      role: 'Senior Drilling Engineer',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80',
    },
    likes: 218,
    date: 'May 28, 2026',
    title: 'Understanding Borehole Casing: Why Quality Materials Matter',
    description:
      'Learn how proper PVC casing, gravel packing, and sanitary seals protect your water source from contamination and prevent structure collapse.',
    imageCaption: 'Figure 1.0 — Steel casing pipes stacked and prepared for high-depth borehole installation.',
    fullContent: (
      <>
        <p className="font-serif font-bold text-stone-900 text-[18px] mb-2">Core Functions of Borehole Casing</p>
        
        <ul className="list-disc pl-5 space-y-2 mb-6 font-serif text-stone-700">
          <li>
            <strong>Structural Integrity:</strong> Holds back loose soil, gravel, and collapsing rock formations, preventing the borehole from cave-ins.
          </li>
          <li>
            <strong>Contamination Barrier:</strong> Keeps surface runoff, fertilizer, and non-potable shallow ground seepage out of the deep water supply.
          </li>
          <li>
            <strong>Pump Housing:</strong> Creates a smooth, straight conduit to host the submersible pump and drop pipes safely.
          </li>
        </ul>

        <p className="font-serif leading-relaxed text-stone-700">Borehole casing is a durable pipe lining inserted into a freshly drilled well hole to structuralize and seal the shaft. It acts as the backbone of the well, preventing earth collapse, protecting water quality, and housing the submersible pumping system.</p>

        <div className="my-6 rounded-lg overflow-hidden border border-stone-200">
          <img
            src={casingPipesImage}
            alt="Heavy steel borehole casing pipes stacked at a drilling site"
            className="w-full h-auto object-cover"
          />
          <p className="text-xs text-stone-500 p-2 text-center bg-stone-50 border-t border-stone-100 font-serif">
            Steel casing pipes stacked and prepared for borehole installation.
          </p>
        </div>

        <p className="font-serif font-bold text-stone-900 text-[18px] mt-6 mb-2">Best Practices for Borehole Casing Design & Installation</p>
        
        <ul className="list-disc pl-5 space-y-2 mb-6 font-serif text-stone-700">
          <li>
            <strong>Gravel Packing the Annular Space:</strong> Filling the gap between the casing and raw borehole wall with clean, graded silica gravel forms a natural secondary filter to prevent fine silt accumulation.
          </li>
          <li>
            <strong>Surface Sanitary Seals:</strong> Pouring a high-density cement bentonite grout cap in the upper 10–20 feet keeps surface spills, animal waste, and rainwater runoff out of the wellhead.
          </li>
          <li>
            <strong>Proper Casing Centralization:</strong> Using centralizers along the pipe string keeps the casing centered in the hole, ensuring an even layer of grout completely seals the perimeter.
          </li>
        </ul>

        <p className="font-serif font-bold text-stone-900 text-[18px] mt-6 mb-2">Why Quality Materials Matter</p>

        <p className="font-serif leading-relaxed text-stone-700 mb-4">Using high-grade casing materials determines whether a borehole lasts 5 years or 50 years. Cutting costs on casing often leads to catastrophic failure underground where repairs are extremely difficult or impossible.</p>
        
        <ul className="list-disc pl-5 space-y-2 mb-6 font-serif text-stone-700">
          <li>
            <strong>Structural Collapse Prevention:</strong> High-quality uPVC or heavy-gauge steel withstands hydrostatic and lateral earth pressure. Low-quality pipes buckle or fracture under high soil weight.
          </li>
          <li>
            <strong>Corrosion Resistance:</strong> Groundwater often contains minerals, salts, or acidic pH levels that degrade sub-standard steel. Premium materials (like high-density uPVC or stainless steel) resist chemical degradation.
          </li>
          <li>
            <strong>Water Purity:</strong> Low-grade plastic casing can leach harmful chemicals or microplastics into drinking water, while poor steel rusts, degrading water taste and clarity.
          </li>
          <li>
            <strong>Long-Term Cost Savings:</strong> Replacing a collapsed casing usually requires drilling a completely new well. Investing in quality material upfront prevents total asset loss.
          </li>
        </ul>
      </>
    ),
    image: engineeringImage,
    alt: 'Borehole casings, pumps, and water equipment in a warehouse',
  },
  {
    id: 3,
    slug: 'solar-powered-water-systems',
    category: 'TECHNOLOGY',
    articleId: 'ART-2026-0415',
    readTime: '10 min read',
    author: {
      name: 'Kalyani',
      role: 'Solar Telemetry Specialist',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80',
    },
    likes: 412,
    date: 'April 15, 2026',
    title: 'Solar-Powered Water Systems: The Future of Agriculture',
    description:
      'A deep dive into how solar telemetry, smart pressure regulators, and automated pumps are modernizing irrigation and off-grid farming.',
    imageCaption: 'Figure 1.0 — Solar telemetry monitoring control unit deployed in off-grid field testing.',
    fullContent: (
      <>
        <p className="first-letter:float-left first-letter:text-5xl first-letter:pr-2 first-letter:font-serif first-letter:text-stone-900 leading-relaxed font-serif text-stone-700">
          Solar-Powered Water Systems (SPWS) use photovoltaic (PV) panels to harness sunlight and generate electricity, which powers water pumps for crop irrigation, livestock watering, and secondary agricultural activities. They operate independently of the electric grid or diesel generators.
        </p>

        <p className="font-serif font-bold text-stone-900 text-[18px] mt-6 mb-2">Key System Components</p>

        <ul className="list-disc pl-5 space-y-2 mb-6 font-serif text-stone-700">
          <li>
            <strong>PV Panel Array:</strong> Captures solar energy and converts it to DC electricity.
          </li>
          <li>
            <strong>Solar Pump Controller/Inverter:</strong> Regulates voltage and converts DC to AC when using AC-powered pumps.
          </li>
          <li>
            <strong>Water Pump:</strong> Available as either submersible (for deep wells/boreholes) or surface (for rivers, ponds, and open reservoirs).
          </li>
          <li>
            <strong>Storage Systems:</strong> Elevated water tanks to store pressurized water (acting as gravitational energy storage) or direct battery backup units.
          </li>
        </ul>

        <p className="font-serif font-bold text-stone-900 text-[18px] mt-6 mb-2">Primary Benefits for Agriculture</p>

        <ul className="list-disc pl-5 space-y-2 mb-6 font-serif text-stone-700">
          <li>
            <strong>Lower Operating Expenses:</strong> Eliminates recurring fuel costs (diesel) and lowers electricity bills. Operational expenses can drop by up to 80%.
          </li>
          <li>
            <strong>Reliable Off-Grid Access:</strong> Ideal for remote farmland lacking grid power connectivity.
          </li>
          <li>
            <strong>Environmental Sustainability:</strong> Produces zero carbon emissions during operation, promoting eco-friendly agriculture.
          </li>
          <li>
            <strong>Automated Smart Control:</strong> Integrates with soil moisture sensors and variable speed drives to prevent water waste and over-pumping.
          </li>
        </ul>
      </>
    ),
    image: techImage,
    alt: 'Engineer working at a solar telemetry control server workstation',
  },
];

const categorisedTopics = [
  '#Hydrogeology',
  '#DrillingEngineering',
  '#Groundwater',
  '#SolarPumping',
  '#WaterManagement',
  '#Geophysics',
  '#AgricultureTech',
];

export default function BlogPostDetail() {
  const { slug } = useParams();

  const currentIndex = blogPosts.findIndex((p) => p.slug === slug);
  const activeIndex = currentIndex !== -1 ? currentIndex : 0;
  const post = blogPosts[activeIndex];

  const prevPost = activeIndex > 0 ? blogPosts[activeIndex - 1] : null;
  const nextPost = activeIndex < blogPosts.length - 1 ? blogPosts[activeIndex + 1] : null;

  const [likesCount, setLikesCount] = useState(post.likes);
  const [isLiked, setIsLiked] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleLike = () => {
    if (isLiked) {
      setLikesCount((prev) => prev - 1);
      setIsLiked(false);
    } else {
      setLikesCount((prev) => prev + 1);
      setIsLiked(true);
    }
  };

  const handleBookmark = () => {
    setIsBookmarked((prev) => !prev);
  };

  const handleShare = async () => {
    const shareData = {
      title: post.title,
      text: post.description,
      url: window.location.href,
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        console.log('Error sharing:', err);
      }
    } else {
      try {
        await navigator.clipboard.writeText(window.location.href);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } catch (err) {
        console.error('Failed to copy: ', err);
      }
    }
  };

  return (
    <div className="mx-auto min-h-screen">
      {/* Top Breadcrumb Navigation */}
      <nav className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-600 py-4 px-4 sm:px-6 lg:px-8 overflow-x-auto whitespace-nowrap">
        <Link to="/" className="hover:underline flex items-center gap-1 shrink-0">
          <span>🏠</span> Home
        </Link>
        <span>/</span>
        <Link to="/blogs" className="hover:underline shrink-0">
          Blogs
        </Link>
        <span>/</span>
        <span className="text-slate-900 font-bold truncate">{post.category}</span>
      </nav>

      <div className="flex flex-col lg:flex-row gap-8 items-start w-full px-4 sm:px-6 lg:px-8 pb-12">
        {/* Main Article Content Container */}
        <main className="w-full lg:w-3/4 py-4 sm:py-6 overflow-hidden">
          {/* Category & ID Header */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs font-medium text-slate-400 mb-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 text-indigo-600 font-bold uppercase tracking-wider text-[11px] sm:text-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-600"></span>
              {post.category}
            </span>
            <span>ID: {post.articleId}</span>
            <span>•</span>
            <span>⏱ {post.readTime}</span>
          </div>

          {/* Article Title */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-slate-900 leading-tight mb-4">
            {post.title}
          </h1>

          {/* Article Description */}
          <p className="text-sm sm:text-base text-slate-500 font-sans leading-relaxed mb-6">
            {post.description}
          </p>

          {/* Author & Action Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between bg-[#EFF4FF] rounded-2xl p-4 mb-8 gap-4">
            <div className="flex items-center gap-3">
              <img
                src={post.author.avatar}
                alt={post.author.name}
                className="w-10 h-10 rounded-full object-cover shrink-0"
              />
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-bold text-slate-900 text-sm sm:text-base">
                    {post.author.name}
                  </span>
                  <span className="text-xs bg-indigo-100 text-indigo-700 px-2 py-0.5 rounded font-semibold">
                    Author
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-500">
                  {post.author.role} • Published {post.date}
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-2 text-xs font-medium text-slate-600 self-end sm:self-auto">
              <button
                onClick={handleLike}
                className={`flex items-center gap-1.5 border border-slate-200 rounded-xl px-3.5 py-2 transition-colors cursor-pointer ${
                  isLiked
                    ? 'bg-indigo-50 text-indigo-600 font-bold border-indigo-200'
                    : 'bg-white hover:bg-slate-50 text-slate-600'
                }`}
              >
                <ThumbsUp
                  className={`w-4 h-4 ${
                    isLiked ? 'text-indigo-600 fill-indigo-600' : 'text-slate-500'
                  }`}
                />
                <span>{likesCount}</span>
              </button>

              <button
                onClick={handleBookmark}
                className={`p-2.5 border border-slate-200 rounded-xl transition-colors cursor-pointer ${
                  isBookmarked
                    ? 'bg-indigo-50 text-indigo-600 border-indigo-200'
                    : 'bg-white hover:bg-slate-50 text-slate-500'
                }`}
                title={isBookmarked ? 'Bookmarked' : 'Bookmark Post'}
              >
                <Bookmark
                  className={`w-4 h-4 ${
                    isBookmarked
                      ? 'text-indigo-600 fill-indigo-600'
                      : 'text-slate-500'
                  }`}
                />
              </button>

              <button
                onClick={handleShare}
                className="relative p-2.5 bg-white border border-slate-200 rounded-xl hover:bg-slate-50 text-slate-500 transition-colors cursor-pointer"
                title="Share Post"
              >
                {copied ? (
                  <Check className="w-4 h-4 text-green-600" />
                ) : (
                  <Share2 className="w-4 h-4 text-slate-500" />
                )}
                {copied && (
                  <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-[10px] py-1 px-2 rounded shadow whitespace-nowrap">
                    Copied!
                  </span>
                )}
              </button>
            </div>
          </div>

          {/* Main Featured Image Container */}
          <div className="mb-2">
            <div className="relative w-full overflow-hidden rounded-2xl aspect-video sm:aspect-[16/9]">
              <img
                src={post.image}
                alt={post.alt}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Caption */}
          {post.imageCaption && (
            <p className="text-xs text-slate-400 italic mb-8 font-serif">
              {post.imageCaption}
            </p>
          )}

          {/* Full Content */}
          <article className="prose max-w-none text-slate-700 leading-relaxed mb-10">
            {post.fullContent}
          </article>

          {/* Categorized Topics */}
          <div className="mt-10 pt-6 border-t border-slate-100">
            <h3 className="text-xs font-extrabold tracking-widest text-slate-400 uppercase mb-3">
              Categorized Topics
            </h3>
            <div className="flex flex-wrap gap-2">
              {categorisedTopics.map((topic, index) => (
                <span
                  key={index}
                  className="px-3 py-1.5 bg-[#EFF4FF] text-[#464555] border border-slate-100 text-xs sm:text-sm font-medium rounded-lg hover:bg-slate-100 transition-colors cursor-pointer"
                >
                  {topic}
                </span>
              ))}
            </div>
          </div>

          {/* Previous & Next Article Navigation */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {prevPost ? (
              <Link
                to={`/blogs/${prevPost.slug}`}
                className="flex flex-col justify-between p-4 sm:p-5 bg-[#EFF4FF] hover:bg-[#E2EBFF] rounded-2xl transition-colors group border border-slate-100"
              >
                <div className="flex items-center gap-1.5 text-[11px] font-extrabold tracking-wider text-slate-400 uppercase mb-2">
                  <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-1" />
                  <span>Previous Article</span>
                </div>
                <h4 className="font-serif font-bold text-slate-900 text-sm sm:text-base leading-snug line-clamp-2">
                  {prevPost.title}
                </h4>
              </Link>
            ) : (
              <div className="hidden sm:block"></div>
            )}

            {nextPost && (
              <Link
                to={`/blogs/${nextPost.slug}`}
                className="flex flex-col justify-between p-4 sm:p-5 bg-[#EFF4FF] hover:bg-[#E2EBFF] rounded-2xl transition-colors text-left sm:text-right group border border-slate-100"
              >
                <div className="flex items-center justify-start sm:justify-end gap-1.5 text-[11px] font-extrabold tracking-wider text-slate-400 uppercase mb-2">
                  <span>Next Article</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </div>
                <h4 className="font-serif font-bold text-slate-900 text-sm sm:text-base leading-snug line-clamp-2">
                  {nextPost.title}
                </h4>
              </Link>
            )}
          </div>
        </main>

        {/* Right Sidebar */}
        <aside className="w-full lg:w-1/4 flex flex-col gap-6 lg:sticky lg:top-6">
          <div className="bg-white rounded-3xl p-5 border border-slate-100">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-base sm:text-lg font-bold text-slate-900 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-indigo-600"></span>
                Related Articles
              </h2>
              <Link
                to="/blogs"
                className="text-xs sm:text-sm font-semibold text-indigo-600 hover:underline"
              >
                View All
              </Link>
            </div>

            <div className="space-y-4">
              {blogPosts.map((item) => (
                <Link
                  key={item.id}
                  to={`/blogs/${item.slug}`}
                  className="flex gap-3 items-center group"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-14 h-14 rounded-xl object-cover shrink-0"
                  />
                  <div>
                    <div className="flex items-center gap-2 text-[10px] text-slate-400 font-medium">
                      <span className="text-indigo-600 font-bold">
                        {item.category}
                      </span>
                      <span>•</span>
                      <span>{item.readTime}</span>
                    </div>
                    <h3 className="text-xs font-bold text-slate-800 line-clamp-2 transition-colors mt-0.5">
                      {item.title}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-3xl p-5 border border-slate-100">
            <h2 className="text-sm font-bold text-slate-900 mb-3">
              Popular Topics
            </h2>
            <div className="flex flex-wrap gap-1.5">
              {[
                'Hydrogeology',
                'Borehole Drilling',
                'Casing Pipes',
                'Solar Telemetry',
                'Water Purity',
                'Submersible Pumps',
                'Irrigation',
              ].map((topic, i) => (
                <span
                  key={i}
                  className="px-2.5 py-1 bg-[#EFF4FF] text-[#0B1C30] hover:bg-slate-100 text-xs sm:text-sm rounded-lg transition-colors cursor-pointer"
                >
                  {topic}
                </span>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}