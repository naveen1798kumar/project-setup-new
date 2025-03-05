import React from 'react';
import CountUp from 'react-countup';

const StatsSection = () => {
  // Sample data for placements, trainees, and trusted partners
  const placements = 1500;
  const trainees = 1200;
  const partners = 300;

  return (
    <section className="py-16 bg-gray-200 text-center">
      <h2 className="text-3xl font-bold mb-8">Our Achievements</h2>
      <div className="flex justify-around items-center">
        {/* Placements */}
        <div className="w-1/4">
          <h3 className="text-4xl font-extrabold text-green-500">
            <CountUp end={placements} duration={3} separator="," />
          </h3>
          <p className="mt-4 text-lg font-semibold text-gray-600">Placements</p>
        </div>

        {/* Trainees */}
        <div className="w-1/4">
          <h3 className="text-4xl font-extrabold text-blue-500">
            <CountUp end={trainees} duration={3} separator="," />
          </h3>
          <p className="mt-4 text-lg font-semibold text-gray-600">Trainees</p>
        </div>

        {/* Trusted Partners */}
        <div className="w-1/4">
          <h3 className="text-4xl font-extrabold text-orange-500">
            <CountUp end={partners} duration={3} separator="," />
          </h3>
          <p className="mt-4 text-lg font-semibold text-gray-600">Trusted Partners</p>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
