import React from 'react';
import * as lucide from 'lucide-react';

const programs = [
  {
    id: 1,
    title: "Liberal Arts",
    description: "A comprehensive curriculum in humanities, social sciences, and arts",
    icon: <lucide.Book className="h-8 w-8 text-primary-800" />,
    link: "#",
  },
  {
    id: 2,
    title: "Science & Research",
    description: "Cutting-edge research opportunities in various scientific disciplines",
    icon: <lucide.TestTube className="h-8 w-8 text-primary-800" />,
    link: "#",
  },
  {
    id: 3,
    title: "Computer Science",
    description: "Advanced computing, programming, and software development",
    icon: <lucide.Code className="h-8 w-8 text-primary-800" />,
    link: "#",
  },
  {
    id: 4,
    title: "International Relations",
    description: "Global perspectives on politics, economics, and diplomacy",
    icon: <lucide.Globe className="h-8 w-8 text-primary-800" />,
    link: "#",
  },
  {
    id: 5,
    title: "Business & Economics",
    description: "Comprehensive education in commerce, finance, and management",
    icon: <lucide.Briefcase className="h-8 w-8 text-primary-800" />,
    link: "#",
  },
  {
    id: 6,
    title: "Honors Program",
    description: "Specialized curriculum for exceptional academic achievers",
    icon: <lucide.Award className="h-8 w-8 text-primary-800" />,
    link: "#",
  },
];

const FeaturedPrograms: React.FC = () => {
  return (
    <section className="section-padding">
      <div className="mb-12 text-center">
        <h2 className="mb-4">Academic Excellence</h2>
        <p className="max-w-2xl mx-auto text-neutral-600">
          Discover our diverse range of programs designed to nurture intellectual growth, creativity, and professional development.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {programs.map((program) => (
          <div 
            key={program.id}
            className="bg-white p-6 rounded-lg shadow-md border border-neutral-100 hover:shadow-lg hover:border-primary-100 transition-all duration-300"
          >
            <div className="mb-4">
              {program.icon}
            </div>
            <h3 className="text-xl font-bold mb-2">{program.title}</h3>
            <p className="text-neutral-600 mb-4">{program.description}</p>
            <a 
              href={program.link}
              className="text-primary-800 font-medium hover:text-primary-600 transition-colors"
            >
              Learn more →
            </a>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <a 
          href="#" 
          className="btn btn-outline"
        >
          View All Programs
        </a>
      </div>
    </section>
  );
};

export default FeaturedPrograms;