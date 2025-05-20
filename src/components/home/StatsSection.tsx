import React, { useState, useEffect, useRef } from 'react';

const stats = [
  { id: 1, label: "Years of Excellence", value: 25 },
  { id: 2, label: "Faculty Members", value: 120 },
  { id: 3, label: "Student to Faculty Ratio", value: 12, suffix: ':1' },
  { id: 4, label: "Academic Programs", value: 50 },
  { id: 5, label: "Research Publications", value: 320 },
  { id: 6, label: "Campus Area (Acres)", value: 75 }
];

const StatsSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="section-padding bg-neutral-50 rounded-xl">
      <div className="mb-12 text-center">
        <h2 className="mb-4">Athena Academy by the Numbers</h2>
        <p className="max-w-2xl mx-auto text-neutral-600">
          Our commitment to educational excellence is reflected in our statistics.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
        {stats.map((stat) => (
          <div 
            key={stat.id} 
            className="bg-white p-6 rounded-lg shadow-sm text-center transform transition-all duration-700 hover:shadow-md"
          >
            <div 
              className={`text-3xl md:text-4xl font-bold text-primary-800 mb-2 ${
                isVisible ? 'animate-counter' : ''
              }`}
            >
              {isVisible ? stat.value : 0}{stat.suffix || ''}
            </div>
            <p className="text-neutral-600 font-medium">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsSection;