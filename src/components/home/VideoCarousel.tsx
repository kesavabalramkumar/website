import React, { useRef, useState, useEffect } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { ChevronLeft, ChevronRight, Play } from 'lucide-react';

// Sample videos data
const videos = [
  {
    id: 1,
    title: "Campus Tour: Discover Athena Academy",
    description: "Take a virtual tour of our beautiful campus and facilities",
    thumbnail: "https://images.pexels.com/photos/2982449/pexels-photo-2982449.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
    youtubeId: "dQw4w9WgXcQ", // This is a placeholder - use real YouTube video IDs
  },
  {
    id: 2,
    title: "Student Life at Athena Academy",
    description: "Experience the vibrant community and activities at our institution",
    thumbnail: "https://images.pexels.com/photos/4778611/pexels-photo-4778611.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
    youtubeId: "dQw4w9WgXcQ", // This is a placeholder - use real YouTube video IDs
  },
  {
    id: 3,
    title: "Academic Excellence & Research",
    description: "Learn about our innovative research programs and academic achievements",
    thumbnail: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
    youtubeId: "dQw4w9WgXcQ", // This is a placeholder - use real YouTube video IDs
  },
  {
    id: 4,
    title: "Alumni Success Stories",
    description: "Hear from our graduates about how Athena Academy shaped their careers",
    thumbnail: "https://images.pexels.com/photos/3184398/pexels-photo-3184398.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
    youtubeId: "dQw4w9WgXcQ", // This is a placeholder - use real YouTube video IDs
  }
];

const VideoCarousel: React.FC = () => {
  const sliderRef = useRef<Slider>(null);
  const [activeVideoId, setActiveVideoId] = useState<string | null>(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  const playVideo = (youtubeId: string) => {
    setActiveVideoId(youtubeId);
  };

  const closeVideo = () => {
    setActiveVideoId(null);
  };

  // Close modal with ESC key
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeVideo();
      }
    };
    window.addEventListener('keydown', handleEsc);
    
    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, []);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (activeVideoId) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [activeVideoId]);

  return (
    <section className="section-padding bg-neutral-50 py-24">
      <div className="mb-12 text-center">
        <h2 className="mb-4">Video Showcase</h2>
        <p className="max-w-2xl mx-auto text-neutral-600">
          Experience Athena Academy through our video collection highlighting campus life, academics, and student achievements.
        </p>
      </div>

      <div className="relative px-4">
        <button 
          onClick={() => sliderRef.current?.slickPrev()}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white hover:bg-neutral-100 text-primary-800 p-2 rounded-full shadow-md transition-colors"
          aria-label="Previous video"
        >
          <ChevronLeft size={24} />
        </button>

        <Slider ref={sliderRef} {...settings} className="px-4">
          {videos.map((video) => (
            <div key={video.id} className="px-2">
              <div className="card overflow-hidden group">
                <div className="relative">
                  <img 
                    src={video.thumbnail} 
                    alt={video.title} 
                    className="w-full aspect-video object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-neutral-900/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <button
                      onClick={() => playVideo(video.youtubeId)}
                      className="bg-primary-800 hover:bg-primary-700 text-white p-4 rounded-full transition-transform transform hover:scale-110"
                      aria-label={`Play ${video.title} video`}
                    >
                      <Play size={24} fill="white" />
                    </button>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold mb-2">{video.title}</h3>
                  <p className="text-neutral-600">{video.description}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>

        <button 
          onClick={() => sliderRef.current?.slickNext()}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white hover:bg-neutral-100 text-primary-800 p-2 rounded-full shadow-md transition-colors"
          aria-label="Next video"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      {/* Video Modal */}
      {activeVideoId && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
          <div className="relative w-full max-w-4xl mx-auto">
            <button
              onClick={closeVideo}
              className="absolute -top-10 right-0 text-white hover:text-secondary-500 transition-colors"
              aria-label="Close video"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
            
            <div className="relative pb-[56.25%] h-0">
              <iframe 
                src={`https://www.youtube.com/embed/${activeVideoId}?autoplay=1`} 
                className="absolute top-0 left-0 w-full h-full rounded-lg"
                title="YouTube video player" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default VideoCarousel;