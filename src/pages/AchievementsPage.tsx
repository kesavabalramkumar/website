import React from 'react';
import { Medal, Trophy, Star, Award, Users, BookOpen } from 'lucide-react';

interface Achievement {
  id: number;
  title: string;
  description: string;
  year: string;
  icon: React.ReactNode;
  category: string;
}

const achievements: Achievement[] = [
  {
    id: 1,
    title: "National Science Excellence Award",
    description: "Recognized for outstanding contributions to scientific research and innovation in educational methodologies.",
    year: "2024",
    icon: <Trophy className="h-8 w-8 text-secondary-500" />,
    category: "Institutional"
  },
  {
    id: 2,
    title: "International Mathematics Olympiad - Gold Medal",
    description: "Student Jane Doe won the gold medal at the International Mathematics Olympiad, bringing recognition to our mathematics program.",
    year: "2024",
    icon: <Medal className="h-8 w-8 text-secondary-500" />,
    category: "Student"
  },
  {
    id: 3,
    title: "Top 10 Educational Institutions",
    description: "Ranked among the top 10 educational institutions nationwide by Education Excellence Magazine.",
    year: "2023",
    icon: <Star className="h-8 w-8 text-secondary-500" />,
    category: "Ranking"
  },
  {
    id: 4,
    title: "National Debate Championship",
    description: "Our debate team secured the national championship, demonstrating exceptional critical thinking and persuasive skills.",
    year: "2023",
    icon: <Award className="h-8 w-8 text-secondary-500" />,
    category: "Student"
  },
  {
    id: 5,
    title: "Research Grant for Quantum Computing",
    description: "Awarded a $2 million research grant to advance studies in quantum computing and its applications.",
    year: "2023",
    icon: <BookOpen className="h-8 w-8 text-secondary-500" />,
    category: "Research"
  },
  {
    id: 6,
    title: "Community Service Excellence Award",
    description: "Recognized for outstanding community engagement initiatives led by students and faculty.",
    year: "2022",
    icon: <Users className="h-8 w-8 text-secondary-500" />,
    category: "Community"
  },
  {
    id: 7,
    title: "Environmental Sustainability Recognition",
    description: "Awarded for implementing eco-friendly campus initiatives and sustainability curriculum.",
    year: "2022",
    icon: <Award className="h-8 w-8 text-secondary-500" />,
    category: "Institutional"
  },
  {
    id: 8,
    title: "National Robotics Competition - First Place",
    description: "Our robotics team won first place in the National Robotics Competition with their innovative design.",
    year: "2021",
    icon: <Trophy className="h-8 w-8 text-secondary-500" />,
    category: "Student"
  },
];

const AchievementsPage: React.FC = () => {
  const [filter, setFilter] = React.useState<string>('All');
  const categories = ['All', ...Array.from(new Set(achievements.map(a => a.category)))];
  
  const filteredAchievements = filter === 'All' 
    ? achievements 
    : achievements.filter(a => a.category === filter);

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-primary-800">
        <div className="absolute inset-0 overflow-hidden">
          <img 
            src="https://images.pexels.com/photos/1656666/pexels-photo-1656666.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750" 
            alt="Academic Achievement" 
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="container-custom relative z-10">
          <div className="text-center text-white">
            <h1 className="mb-6">Academic Achievements</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto font-light">
              Celebrating excellence, innovation, and the remarkable accomplishments of our students and faculty.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Banner */}
      <section className="py-12 bg-primary-50">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="p-4">
              <p className="text-4xl font-bold text-primary-800">120+</p>
              <p className="text-neutral-600 font-medium">Academic Awards</p>
            </div>
            <div className="p-4">
              <p className="text-4xl font-bold text-primary-800">85%</p>
              <p className="text-neutral-600 font-medium">Graduate Success Rate</p>
            </div>
            <div className="p-4">
              <p className="text-4xl font-bold text-primary-800">50+</p>
              <p className="text-neutral-600 font-medium">Research Publications</p>
            </div>
            <div className="p-4">
              <p className="text-4xl font-bold text-primary-800">30+</p>
              <p className="text-neutral-600 font-medium">National Champions</p>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements List Section */}
      <section className="py-16">
        <div className="container-custom">
          {/* Filter Buttons */}
          <div className="mb-12">
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setFilter(category)}
                  className={`px-4 py-2 rounded-md transition-colors ${
                    filter === category
                      ? 'bg-primary-800 text-white'
                      : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Achievements Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredAchievements.map(achievement => (
              <div
                key={achievement.id}
                className="bg-white p-6 rounded-lg shadow-md border border-neutral-100 hover:shadow-lg transition-all"
              >
                <div className="flex items-start">
                  <div className="mr-4 mt-1">
                    {achievement.icon}
                  </div>
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="text-xl font-bold text-primary-800">{achievement.title}</h3>
                      <span className="bg-primary-50 text-primary-800 px-3 py-1 rounded-full text-sm font-medium">
                        {achievement.year}
                      </span>
                    </div>
                    <p className="text-neutral-600 mb-3">{achievement.description}</p>
                    <span className="inline-block bg-secondary-100 text-secondary-800 px-2 py-1 rounded text-sm font-medium">
                      {achievement.category}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-primary-800 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Join Our Legacy of Excellence</h2>
          <p className="text-xl max-w-3xl mx-auto mb-8 text-primary-100">
            Become part of an institution that celebrates achievement and helps students reach their highest potential.
          </p>
          <a 
            href="#" 
            className="btn bg-white text-primary-800 hover:bg-primary-50 px-8 py-3 rounded-md font-medium"
          >
            Apply Now
          </a>
        </div>
      </section>
    </>
  );
};

export default AchievementsPage;