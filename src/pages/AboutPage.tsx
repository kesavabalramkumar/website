import React from 'react';
import { BookOpen, Clock, Users, Award } from 'lucide-react';

const AboutPage: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-primary-800">
        <div className="absolute inset-0 overflow-hidden">
          <img 
            src="https://images.pexels.com/photos/159490/yale-university-landscape-universities-schools-159490.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750" 
            alt="Campus" 
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="container-custom relative z-10">
          <div className="text-center text-white">
            <h1 className="mb-6">About Athena Academy</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto font-light">
              Shaping minds and building futures through excellence in education since 1995.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-primary-50 p-8 rounded-lg">
              <h2 className="text-2xl font-bold text-primary-800 mb-6">Our Mission</h2>
              <p className="text-neutral-700 mb-4">
                At Athena Academy, our mission is to provide a transformative educational experience that nurtures intellectual curiosity, fosters personal growth, and inspires a lifelong pursuit of knowledge and excellence.
              </p>
              <p className="text-neutral-700">
                We aim to develop well-rounded individuals who possess not only academic prowess but also critical thinking skills, ethical judgment, and a commitment to serving their communities.
              </p>
            </div>

            <div className="bg-secondary-50 p-8 rounded-lg">
              <h2 className="text-2xl font-bold text-secondary-700 mb-6">Our Vision</h2>
              <p className="text-neutral-700 mb-4">
                We envision Athena Academy as a leading educational institution renowned for its innovative approaches to learning, dedication to academic excellence, and commitment to producing graduates who are prepared to thrive in a rapidly changing world.
              </p>
              <p className="text-neutral-700">
                Our vision is to be at the forefront of educational advancement, serving as a model for how traditional academic rigor can be integrated with modern pedagogical approaches.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 bg-neutral-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="mb-4">Our Core Values</h2>
            <p className="max-w-2xl mx-auto text-neutral-600">
              The principles that guide our educational approach and institutional practices.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="mb-4 inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-100 text-primary-800">
                <BookOpen size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">Excellence</h3>
              <p className="text-neutral-600">
                We strive for excellence in all endeavors, encouraging our students and faculty to surpass expectations and achieve their highest potential.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="mb-4 inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary-100 text-secondary-700">
                <Users size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">Community</h3>
              <p className="text-neutral-600">
                We foster a diverse, inclusive, and supportive community where respect, collaboration, and mutual understanding flourish.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="mb-4 inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-100 text-primary-800">
                <Award size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">Integrity</h3>
              <p className="text-neutral-600">
                We uphold the highest standards of honesty, transparency, and ethical behavior in all our academic and administrative practices.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="mb-4 inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary-100 text-secondary-700">
                <Clock size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">Innovation</h3>
              <p className="text-neutral-600">
                We embrace creative thinking, adaptability, and continuous improvement in our educational methodologies and institutional operations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* History */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="mb-6">Our History</h2>
              <div className="space-y-4 text-neutral-700">
                <p>
                  Founded in 1995 by Dr. Eleanor Richards, Athena Academy began as a small institution dedicated to providing exceptional education with a focus on critical thinking and ethical leadership.
                </p>
                <p>
                  Over the decades, we have grown from a modest campus with just 50 students to a prestigious institution serving over 2,000 students annually. Our growth has been guided by our unwavering commitment to educational excellence and student success.
                </p>
                <p>
                  Throughout our history, we have continually adapted to the changing educational landscape while maintaining our core values and traditions. Today, Athena Academy stands as a testament to the vision of our founders and the dedication of generations of faculty, staff, and students.
                </p>
                <p>
                  As we look to the future, we remain committed to building on our rich legacy while embracing innovation and meeting the evolving needs of our students in a rapidly changing world.
                </p>
              </div>
            </div>
            <div className="order-first lg:order-last grid grid-cols-2 gap-4">
              <img 
                src="https://images.pexels.com/photos/207692/pexels-photo-207692.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750" 
                alt="Historic Campus" 
                className="rounded-lg w-full h-48 object-cover"
              />
              <img 
                src="https://images.pexels.com/photos/256490/pexels-photo-256490.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750" 
                alt="Campus Architecture" 
                className="rounded-lg w-full h-48 object-cover"
              />
              <img 
                src="https://images.pexels.com/photos/159740/library-la-trobe-study-students-159740.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750" 
                alt="Library" 
                className="rounded-lg w-full h-48 object-cover"
              />
              <img 
                src="https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750" 
                alt="Modern Campus" 
                className="rounded-lg w-full h-48 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-16 bg-neutral-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="mb-4">Our Leadership</h2>
            <p className="max-w-2xl mx-auto text-neutral-600">
              Meet the dedicated professionals guiding Athena Academy's mission and vision.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Dr. Eleanor Richards",
                title: "President & Founder",
                image: "https://images.pexels.com/photos/3796217/pexels-photo-3796217.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
                bio: "Dr. Richards founded Athena Academy with a vision to provide a transformative educational experience that nurtures intellectual curiosity and personal growth."
              },
              {
                name: "Dr. Marcus Chen",
                title: "Academic Dean",
                image: "https://images.pexels.com/photos/8459/university-student-studying-exam-8459.jpg?auto=compress&cs=tinysrgb&w=1260&h=750",
                bio: "With over 20 years of experience in higher education, Dr. Chen oversees the academic programs and ensures educational excellence across all departments."
              },
              {
                name: "Prof. Sarah Williams",
                title: "Director of Research",
                image: "https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
                bio: "Prof. Williams leads our research initiatives, fostering innovation and scholarly inquiry among faculty and students alike."
              }
            ].map((leader, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md">
                <img 
                  src={leader.image} 
                  alt={leader.name} 
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-primary-800 mb-1">{leader.name}</h3>
                  <p className="text-secondary-600 font-medium mb-4">{leader.title}</p>
                  <p className="text-neutral-600">{leader.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;