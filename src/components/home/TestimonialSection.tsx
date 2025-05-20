import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

// Sample testimonial data
const testimonials = [
  {
    id: 1,
    quote: "Athena Academy provided me with the perfect foundation for my career in medicine. The rigorous academic program and supportive faculty helped me achieve my goals.",
    name: "Dr. Sarah Johnson",
    title: "Cardiologist, Alumni 2010",
    image: "https://images.pexels.com/photos/712521/pexels-photo-712521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750"
  },
  {
    id: 2,
    quote: "The diverse learning environment and emphasis on critical thinking at Athena Academy prepared me well for the challenges of the tech industry.",
    name: "Michael Chen",
    title: "Software Engineer, Alumni 2015",
    image: "https://images.pexels.com/photos/736716/pexels-photo-736716.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750"
  },
  {
    id: 3,
    quote: "As a parent, I've watched my children thrive at Athena Academy. The personalized attention and focus on character development have been exceptional.",
    name: "Rebecca Williams",
    title: "Parent of Current Students",
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750"
  }
];

const TestimonialSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };
  
  const prevTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
  };

  return (
    <section className="section-padding bg-primary-800 text-white py-24 my-24 rounded-lg">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">What Our Community Says</h2>
          </div>
          
          <div className="relative">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`transition-opacity duration-500 ${
                  index === activeIndex ? "opacity-100" : "opacity-0 absolute inset-0"
                }`}
              >
                <div className="bg-primary-700/50 rounded-lg p-8 md:p-12 relative">
                  <Quote className="absolute top-8 left-8 text-primary-500 h-12 w-12 opacity-20" />
                  
                  <div className="flex flex-col md:flex-row gap-8 items-center">
                    <div className="md:w-1/4">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name}
                        className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover mx-auto border-4 border-white/20"
                      />
                    </div>
                    
                    <div className="md:w-3/4 text-center md:text-left">
                      <p className="text-xl md:text-2xl italic mb-6">"{testimonial.quote}"</p>
                      <div>
                        <h4 className="font-bold text-lg text-secondary-400">{testimonial.name}</h4>
                        <p className="text-primary-200">{testimonial.title}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            <div className="flex justify-center mt-8 gap-2">
              <button
                onClick={prevTestimonial}
                className="p-2 rounded-full bg-primary-700 hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-white/20 transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={20} />
              </button>
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-3 h-3 rounded-full ${
                    index === activeIndex ? "bg-secondary-500" : "bg-primary-300"
                  } transition-colors`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
              <button
                onClick={nextTestimonial}
                className="p-2 rounded-full bg-primary-700 hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-white/20 transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;