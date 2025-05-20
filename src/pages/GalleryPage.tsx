import React, { useState } from 'react';
import { Search } from 'lucide-react';

// Sample gallery items
const galleryItems = [
  {
    id: 1,
    title: "Campus Main Building",
    category: "campus",
    image: "https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750"
  },
  {
    id: 2,
    title: "Science Laboratory",
    category: "facilities",
    image: "https://images.pexels.com/photos/3861452/pexels-photo-3861452.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750"
  },
  {
    id: 3,
    title: "Graduation Ceremony",
    category: "events",
    image: "https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750"
  },
  {
    id: 4,
    title: "Student Arts Exhibition",
    category: "events",
    image: "https://images.pexels.com/photos/2170387/pexels-photo-2170387.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750"
  },
  {
    id: 5,
    title: "Library Interior",
    category: "facilities",
    image: "https://images.pexels.com/photos/256431/pexels-photo-256431.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750"
  },
  {
    id: 6,
    title: "Sports Complex",
    category: "facilities",
    image: "https://images.pexels.com/photos/3659683/pexels-photo-3659683.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750"
  },
  {
    id: 7,
    title: "Robotics Competition",
    category: "events",
    image: "https://images.pexels.com/photos/8566526/pexels-photo-8566526.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750"
  },
  {
    id: 8,
    title: "Student Dormitories",
    category: "campus",
    image: "https://images.pexels.com/photos/1648771/pexels-photo-1648771.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750"
  },
  {
    id: 9,
    title: "Annual Cultural Festival",
    category: "events",
    image: "https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750"
  },
  {
    id: 10,
    title: "Auditorium",
    category: "facilities",
    image: "https://images.pexels.com/photos/159213/hall-congress-architecture-building-159213.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750"
  },
  {
    id: 11,
    title: "Campus Gardens",
    category: "campus",
    image: "https://images.pexels.com/photos/158028/bellingrath-gardens-alabama-landscape-scenic-158028.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750"
  },
  {
    id: 12,
    title: "Research Symposium",
    category: "events",
    image: "https://images.pexels.com/photos/2833037/pexels-photo-2833037.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750"
  }
];

const GalleryPage: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  
  // Get all unique categories
  const categories = ['all', ...Array.from(new Set(galleryItems.map(item => item.category)))];
  
  // Filter gallery items based on category and search query
  const filteredItems = galleryItems.filter(item => {
    const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-primary-800">
        <div className="absolute inset-0 overflow-hidden">
          <img 
            src="https://images.pexels.com/photos/2170387/pexels-photo-2170387.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750" 
            alt="Gallery" 
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="container-custom relative z-10">
          <div className="text-center text-white">
            <h1 className="mb-6">Showcase Gallery</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto font-light">
              Explore our campus, facilities, events, and student achievements through our visual showcase.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Controls */}
      <section className="py-12 bg-neutral-50">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12">
            {/* Categories */}
            <div className="flex flex-wrap justify-center md:justify-start gap-2">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-full capitalize transition-colors ${
                    activeCategory === category
                      ? 'bg-primary-800 text-white'
                      : 'bg-white text-neutral-600 hover:bg-neutral-100'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Search */}
            <div className="w-full md:w-auto">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search gallery..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full md:w-64 pl-10 pr-4 py-2 border border-neutral-300 rounded-md focus:ring focus:ring-primary-200 focus:border-primary-500 outline-none"
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-neutral-400" />
              </div>
            </div>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredItems.map(item => (
              <div
                key={item.id}
                className="cursor-pointer group overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
                onClick={() => setSelectedImage(item.id)}
              >
                <div className="relative overflow-hidden aspect-square">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <div>
                      <h3 className="text-white font-bold text-lg mb-1">{item.title}</h3>
                      <span className="text-neutral-200 text-sm capitalize">{item.category}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredItems.length === 0 && (
            <div className="text-center py-16">
              <p className="text-neutral-600 text-lg">No gallery items found matching your criteria.</p>
              <button
                onClick={() => {
                  setActiveCategory('all');
                  setSearchQuery('');
                }}
                className="mt-4 text-primary-800 font-medium hover:underline"
              >
                Clear filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Video Showcase */}
      <section className="py-16">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="mb-4">Video Showcase</h2>
            <p className="max-w-2xl mx-auto text-neutral-600">
              Take a virtual tour of our campus and get a glimpse of student life at Athena Academy.
            </p>
          </div>

          <div className="max-w-4xl mx-auto bg-neutral-900 rounded-lg overflow-hidden shadow-xl">
            <div className="relative pb-[56.25%] h-0">
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="Campus Tour Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-5xl w-full">
            <button
              className="absolute -top-12 right-0 text-white hover:text-secondary-500 focus:outline-none"
              aria-label="Close"
              onClick={() => setSelectedImage(null)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-lg overflow-hidden"
            >
              <img
                src={galleryItems.find(item => item.id === selectedImage)?.image}
                alt={galleryItems.find(item => item.id === selectedImage)?.title}
                className="w-full h-auto"
              />
              <div className="p-4">
                <h3 className="text-xl font-bold mb-1">
                  {galleryItems.find(item => item.id === selectedImage)?.title}
                </h3>
                <p className="text-neutral-600 capitalize">
                  {galleryItems.find(item => item.id === selectedImage)?.category}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default GalleryPage;