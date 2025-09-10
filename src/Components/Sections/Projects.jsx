import { useState, useEffect, useRef } from 'react';
import { getImageUrl } from '../../utils/imageUtils';

// Custom SVG Icons
const AlertCircle = ({ className = "w-6 h-6" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="10" strokeWidth={2} />
    <line x1="12" y1="8" x2="12" y2="12" strokeWidth={2} />
    <line x1="12" y1="16" x2="12.01" y2="16" strokeWidth={2} />
  </svg>
);

const Filter = ({ className = "w-6 h-6" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <polygon points="22,3 2,3 10,12.46 10,19 14,21 14,12.46" strokeWidth={2} />
  </svg>
);

const ImageIcon = ({ className = "w-6 h-6" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <rect x="3" y="3" width="18" height="18" rx="2" ry="2" strokeWidth={2} />
    <circle cx="8.5" cy="8.5" r="1.5" strokeWidth={2} />
    <polyline points="21,15 16,10 5,21" strokeWidth={2} />
  </svg>
);

// Scroll reveal hook
const useScrollReveal = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return [ref, isVisible];
};


const designsData = [
  
  {
    id: 'branding-1',
    src: '/image2/full/Branding_1.jpg',
    alt: 'Branding Design 1',
    category: 'branding'
  },
  {
    id: 'branding-2',
    src: '/image2/full/Branding_2.jpg',
    alt: 'Branding Design 2',
    category: 'branding'
  },
  {
    id: 'branding-3',
    src: '/image2/full/Branding_4.jpg',
    alt: 'Branding Design 3',
    category: 'branding'
  },
  {
    id: 'branding-4',
    src: '/image2/full/Branding_2(1).jpg',
    alt: 'Branding Design 4',
    category: 'branding'
  },

  // Event Projects
  {
    id: 'event-1',
    src: '/image2/full/Event_1.jpg',
    alt: 'Event Design 1',
    category: 'event'
  },
  {
    id: 'event-2',
    src: '/image2/full/Event_2.jpg',
    alt: 'Event Design 2',
    category: 'event'
  },
  {
    id: 'event-3',
    src: '/image2/full/Event_3.jpg',
    alt: 'Event Design 3',
    category: 'event'
  },
  {
    id: 'event-4',
    src: '/image2/full/Event_4.jpg',
    alt: 'Event Design 4',
    category: 'event'
  },
  {
    id: 'event-5',
    src: '/image2/full/Event_5.jpg',
    alt: 'Event Design 5',
    category: 'event'
  },
  {
    id: 'event-6',
    src: '/image2/full/Event_6.jpg',
    alt: 'Event Design 6',
    category: 'event'
  },

  // Food & Restaurant Projects
  {
    id: 'food-1',
    src: '/image2/full/Restaurant_1(1).jpg',
    alt: 'Food & Restaurant Design 1',
    category: 'food'
  },
  {
    id: 'food-2',
    src: '/image2/full/Restaurant_2.jpg',
    alt: 'Food & Restaurant Design 2',
    category: 'food'
  },
  {
    id: 'food-3',
    src: '/image2/full/Restaurant_3.jpg',
    alt: 'Food & Restaurant Design 3',
    category: 'food'
  },
  {
    id: 'food-4',
    src: '/image2/full/Restaurant_4.jpg',
    alt: 'Food & Restaurant Design 4',
    category: 'food'
  },
  {
    id: 'food-5',
    src: '/image2/full/Restaurant_5.jpg',
    alt: 'Food & Restaurant Design 5',
    category: 'food'
  },
  {
    id: 'food-6',
    src: '/image2/full/Restaurant_6.jpg',
    alt: 'Food & Restaurant Design 6',
    category: 'food'
  },
  {
    id: 'food-8',
    src: '/image2/full/Restaurant_8.jpg',
    alt: 'Food & Restaurant Design 8',
    category: 'food'
  },
  {
    id: 'food-9',
    src: '/image2/full/Restaurant_9.jpg',
    alt: 'Food & Restaurant Design 9',
    category: 'food'
  },
  {
    id: 'food-10',
    src: '/image2/full/Restaurant_10.jpg',
    alt: 'Food & Restaurant Design 10',
    category: 'food'
  },
  {
    id: 'food-11',
    src: '/image2/full/Restaurant_11.jpg',
    alt: 'Food & Restaurant Design 11',
    category: 'food'
  },
  {
    id: 'food-12',
    src: '/image2/full/Restaurant_12.jpg',
    alt: 'Food & Restaurant Design 12',
    category: 'food'
  },

  // Logistics Projects
  {
    id: 'logistics-1',
    src: '/image2/full/Logistics_1.jpg',
    alt: 'Logistics Design 1',
    category: 'logistics'
  },
  {
    id: 'logistics-2',
    src: '/image2/full/Logistics_2.jpg',
    alt: 'Logistics Design 2',
    category: 'logistics'
  },
  {
    id: 'logistics-3',
    src: '/image2/full/Logistics_3.jpg',
    alt: 'Logistics Design 3',
    category: 'logistics'
  },
  {
    id: 'logistics-4',
    src: '/image2/full/Logistics_4.jpg',
    alt: 'Logistics Design 4',
    category: 'logistics'
  },
  {
    id: 'logistics-5',
    src: '/image2/full/Logistics_5.jpg',
    alt: 'Logistics Design 5',
    category: 'logistics'
  },

  // Real Estate Projects
  {
    id: 'realestate-1',
    src: '/image2/full/Estate_1.jpg',
    alt: 'Real Estate Design 1',
    category: 'realestate'
  },
  {
    id: 'realestate-2',
    src: '/image2/full/Estate_2.jpg',
    alt: 'Real Estate Design 2',
    category: 'realestate'
  },
  {
    id: 'realestate-2b',
    src: '/image2/full/Estate_2B.jpg',
    alt: 'Real Estate Design 2B',
    category: 'realestate'
  },
  {
    id: 'realestate-3',
    src: '/image2/full/Estate_3.jpg',
    alt: 'Real Estate Design 3',
    category: 'realestate'
  },
  {
    id: 'realestate-4',
    src: '/image2/full/Estate_4.jpg',
    alt: 'Real Estate Design 4',
    category: 'realestate'
  },
  {
    id: 'realestate-5',
    src: '/image2/full/Estate_5.jpg',
    alt: 'Real Estate Design 5',
    category: 'realestate'
  },
  {
    id: 'realestate-6',
    src: '/image2/full/Estate_6.jpg',
    alt: 'Real Estate Design 6',
    category: 'realestate'
  },

  // Travel Projects
  {
    id: 'travel-1',
    src: '/image2/full/Travels_1.jpg',
    alt: 'Travel Design 1',
    category: 'travel'
  },
  {
    id: 'travel-2',
    src: '/image2/full/Travels_2.jpg',
    alt: 'Travel Design 2',
    category: 'travel'
  },
  {
    id: 'travel-3',
    src: '/image2/full/Travels_3.jpg',
    alt: 'Travel Design 3',
    category: 'travel'
  }
];

// Categories with dynamic counts
const getCategories = () => [
  { id: 'branding', name: 'Branding', count: designsData.filter(d => d.category === 'branding').length },
  { id: 'food', name: 'Food & Restaurant', count: designsData.filter(d => d.category === 'food').length },
  { id: 'realestate', name: 'Real Estate', count: designsData.filter(d => d.category === 'realestate').length },
  { id: 'logistics', name: 'Logistics', count: designsData.filter(d => d.category === 'logistics').length },
  { id: 'event', name: 'Events', count: designsData.filter(d => d.category === 'event').length },
  { id: 'travel', name: 'Travel', count: designsData.filter(d => d.category === 'travel').length },
].filter(cat => cat.count > 0);

// Image component with error handling
const DesignImage = ({ design, index }) => {
  const [imageState, setImageState] = useState('loading');
  const [ref, isVisible] = useScrollReveal();
  const imgRef = useRef();

  const handleImageLoad = () => {
    setImageState('loaded');
  };

  const handleImageError = (e) => {
    console.warn(`Failed to load image: ${design.src}`, {
      originalSrc: design.src,
      actualSrc: e.target.src,
      naturalWidth: e.target.naturalWidth,
      naturalHeight: e.target.naturalHeight
    });
    setImageState('error');
  };

  useEffect(() => {
    if (imgRef.current) {
      const img = imgRef.current;
      
      const timeout = setTimeout(() => {
        if (imageState === 'loading') {
          setImageState('error');
        }
      }, 10000);

      return () => clearTimeout(timeout);
    }
  }, [imageState]);

  return (
    <div 
      ref={ref}
      className={`group relative aspect-[3/4] bg-gray-800 rounded-xl overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/10 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ animationDelay: `${index * 50}ms` }}
      aria-label={design.alt}
    >
      {imageState === 'loading' && (
        <div className="absolute inset-0 bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center">
          <div className="relative">
            <div className="w-8 h-8 border-2 border-blue-400 border-t-transparent rounded-full animate-spin" />
            <div className="absolute top-1/2 left-1/2 w-4 h-4 border border-blue-300 border-t-transparent rounded-full animate-spin transform -translate-x-1/2 -translate-y-1/2" style={{ animationDirection: 'reverse' }} />
          </div>
        </div>
      )}

      {imageState === 'error' && (
        <div className="absolute inset-0 bg-gray-800 flex flex-col items-center justify-center text-gray-400 p-4">
          <AlertCircle className="w-8 h-8 mb-2 text-gray-500" />
          <span className="text-xs text-center text-gray-500">Image not found</span>
          <span className="text-xs text-center text-gray-600 mt-1 break-all">{design.src.split('/').pop()}</span>
        </div>
      )}

      <img
        ref={imgRef}
        src={getImageUrl(design.src)}
        alt={design.alt}
        className={`w-full h-full object-cover transition-all duration-500 group-hover:scale-110 ${
          imageState === 'loaded' ? 'opacity-100' : 'opacity-0'
        }`}
        onLoad={handleImageLoad}
        onError={handleImageError}
        loading="lazy"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
        <div className="absolute bottom-0 left-0 right-0 p-3">
          <h3 className="font-semibold text-xs sm:text-sm text-white mb-1 line-clamp-2 leading-tight">
            {design.alt}
          </h3>
          <p className="text-xs text-gray-300 capitalize font-medium">
            {design.category.replace(/([A-Z])/g, ' $1').trim()}
          </p>
        </div>
      </div>

      <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 rounded-xl opacity-0 group-hover:opacity-20 blur-sm transition-all duration-300 -z-10" />
    </div>
  );
};

export const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('branding');
  const [headerRef, headerVisible] = useScrollReveal();
  const [filterRef, filterVisible] = useScrollReveal();
  const [isTransitioning, setIsTransitioning] = useState(false);

  const categories = getCategories();
  const filteredDesigns = designsData.filter(design => design.category === activeCategory);

  const handleCategoryChange = (categoryId) => {
    if (categoryId === activeCategory) return;
    
    setIsTransitioning(true);
    setTimeout(() => {
      setActiveCategory(categoryId);
      setIsTransitioning(false);
    }, 150);
  };

  useEffect(() => {
    if (filteredDesigns.length === 0 && categories.length > 0) {
      setActiveCategory(categories[0].id);
    }
  }, [activeCategory, categories.length]);

  return (
    <section id="projects" className="min-h-screen py-12 sm:py-20 bg-black relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/20 to-black pointer-events-none" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <header 
          ref={headerRef}
          className={`text-center mb-12 sm:mb-16 transition-all duration-700 ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent leading-tight">
            Design Portfolio
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed px-4">
            Explore a curated collection of designs spanning multiple industries. 
            Each piece showcases creativity, attention to detail, and visual excellence.
          </p>
        </header>

        <div 
          ref={filterRef} 
          className={`mb-8 sm:mb-12 transition-all duration-700 delay-200 ${
            filterVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="flex items-center justify-center mb-4 sm:mb-6">
            <Filter className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 mr-2" />
            <span className="text-sm sm:text-base text-gray-400 font-medium">Filter by Category</span>
          </div>
          
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 max-w-4xl mx-auto">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => handleCategoryChange(category.id)}
                disabled={isTransitioning}
                className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 transform hover:scale-105 disabled:scale-100 ${
                  activeCategory === category.id
                    ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg shadow-blue-500/25 border border-blue-400/30'
                    : 'bg-gray-800/80 backdrop-blur-sm text-gray-300 hover:bg-gray-700/80 hover:text-white border border-gray-700/50 hover:border-gray-600/50 hover:shadow-md'
                } ${isTransitioning ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                <span className="hidden sm:inline">{category.name} ({category.count})</span>
                <span className="sm:hidden">{category.name}</span>
              </button>
            ))}
          </div>

          <div className="text-center mt-4 sm:mt-6">
            <p className="text-sm sm:text-base text-gray-400">
              Showing {filteredDesigns.length} design{filteredDesigns.length !== 1 ? 's' : ''} in{' '}
              <span className="text-blue-400 font-medium">
                {categories.find(c => c.id === activeCategory)?.name}
              </span>
            </p>
          </div>
        </div>

        <div className={`transition-all duration-300 ${isTransitioning ? 'opacity-50' : 'opacity-100'}`}>
          {filteredDesigns.length > 0 ? (
            <div className="flex justify-center">
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-4 md:gap-6 max-w-[2000px] mx-auto justify-center">
                {filteredDesigns.map((design, index) => (
                  <DesignImage 
                    key={`${design.id}-${activeCategory}`} 
                    design={design} 
                    index={index}
                  />
                ))}
              </div>
            </div>
          ) : (
            <div className="text-center py-12 sm:py-20">
              <div className="w-16 h-16 sm:w-24 sm:h-24 bg-gray-800/50 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 border border-gray-700/30">
                <ImageIcon className="w-6 h-6 sm:w-10 sm:h-10 text-gray-500" />
              </div>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-400 mb-2">No designs found</h3>
              <p className="text-sm sm:text-base text-gray-500 max-w-md mx-auto">
                No designs available in this category. Try selecting a different category to explore more work.
              </p>
            </div>
          )}
        </div>

        <div className="mt-16 sm:mt-24 text-center">
          <div className="inline-flex items-center px-4 py-2 bg-gray-800/30 backdrop-blur-sm rounded-full border border-gray-700/30">
            <span className="text-xs sm:text-sm text-gray-400">
              Portfolio • {designsData.length} Total Designs
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
