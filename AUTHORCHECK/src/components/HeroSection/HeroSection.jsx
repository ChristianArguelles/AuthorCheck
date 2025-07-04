import React from 'react';
import styles from './HeroSection.module.css';

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-b from-white to-gray-100 py-20 px-6 text-center">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Welcome to <span className="text-blue-600">AuthorCheck</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-700 mb-8">
          Detect whether a text was written by a human or AI. Analyze content for authorship, sentiment, and linguistic features with ease.
        </p>
        <a
          href="#upload"
          className="inline-block px-8 py-3 bg-blue-600 text-white rounded-full shadow hover:bg-blue-700 transition duration-300"
        >
          Get Started
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
