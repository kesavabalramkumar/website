import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

// Sample news data
const newsArticles = [
  {
    id: 1,
    title: "Athena Academy Tops National Rankings for STEM Education",
    excerpt: "Our institution has been recognized for excellence in science, technology, engineering, and mathematics education.",
    date: "May 15, 2025",
    image: "https://images.pexels.com/photos/4144923/pexels-photo-4144923.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
    category: "Achievement"
  },
  {
    id: 2,
    title: "New State-of-the-Art Science Wing Opening Next Fall",
    excerpt: "Athena Academy is pleased to announce the upcoming launch of our new science facilities, featuring cutting-edge technology.",
    date: "May 10, 2025",
    image: "https://images.pexels.com/photos/256520/pexels-photo-256520.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
    category: "Campus"
  },
  {
    id: 3,
    title: "Student Wins International Mathematics Olympiad",
    excerpt: "Congratulations to Jane Smith for bringing home the gold medal at this year's International Mathematics Olympiad.",
    date: "May 5, 2025",
    image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
    category: "Student Success"
  }
];

const NewsSection: React.FC = () => {
  return (
    <section className="section-padding">
      <div className="mb-12 text-center">
        <h2 className="mb-4">Latest News & Updates</h2>
        <p className="max-w-2xl mx-auto text-neutral-600">
          Stay informed about campus events, student achievements, and important announcements at Athena Academy.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {newsArticles.map((article) => (
          <article 
            key={article.id} 
            className="card group hover:transform hover:translate-y-[-8px]"
          >
            <div className="relative h-48 overflow-hidden">
              <img 
                src={article.image} 
                alt={article.title} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <span className="absolute top-4 left-4 bg-primary-800 text-white text-xs font-semibold px-2 py-1 rounded">
                {article.category}
              </span>
            </div>
            <div className="p-6">
              <p className="text-sm text-neutral-500 mb-2">{article.date}</p>
              <h3 className="text-xl font-bold mb-2 group-hover:text-primary-800 transition-colors">
                {article.title}
              </h3>
              <p className="text-neutral-600 mb-4">{article.excerpt}</p>
              <a href="#" className="inline-flex items-center font-medium text-primary-800 hover:text-primary-700">
                Read More <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-12 text-center">
        <Link 
          to="/news" 
          className="inline-flex items-center font-medium text-primary-800 hover:text-primary-700"
        >
          View All News <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
      </div>
    </section>
  );
};

export default NewsSection;