import React from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css'; // Import the styles

const ProgressSection = () => {
  // Sample data for placements, trainees, and trusted partners
  const placements = 80; // Represents 80% of placements
  const trainees = 60;  // Represents 60% of trainees
  const partners = 50;  // Represents 50% of trusted partners

  return (
    <section className="py-16 bg-gray-100 text-center">
      <h2 className="text-3xl font-bold mb-8">Our Achievements</h2>
      <div className="flex justify-around items-center">
        {/* Placements */}
        <div className="w-1/4">
          <CircularProgressbar
            value={placements}
            text={`${placements}%`}
            styles={{
              path: { stroke: '#4CAF50', strokeLinecap: 'round' },
              trail: { stroke: '#e6e6e6' },
              text: { fontSize: '24px', fill: '#4CAF50' },
            }}
          />
          <p className="mt-4 text-lg font-semibold">Placements</p>
        </div>

        {/* Trainees */}
        <div className="w-1/4">
          <CircularProgressbar
            value={trainees}
            text={`${trainees}%`}
            styles={{
              path: { stroke: '#2196F3', strokeLinecap: 'round' },
              trail: { stroke: '#e6e6e6' },
              text: { fontSize: '24px', fill: '#2196F3' },
            }}
          />
          <p className="mt-4 text-lg font-semibold">Trainees</p>
        </div>

        {/* Trusted Partners */}
        <div className="w-1/4">
          <CircularProgressbar
            value={partners}
            text={`${partners}%`}
            styles={{
              path: { stroke: '#FF9800', strokeLinecap: 'round' },
              trail: { stroke: '#e6e6e6' },
              text: { fontSize: '24px', fill: '#FF9800' },
            }}
          />
          <p className="mt-4 text-lg font-semibold">Trusted Partners</p>
        </div>
      </div>
    </section>
  );
};

export default ProgressSection;
