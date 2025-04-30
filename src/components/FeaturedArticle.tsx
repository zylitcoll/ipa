import React from "react";
import { ArrowRight } from "lucide-react";

const FeaturedArticle: React.FC = () => {
  return (
    <section className="relative">
      <div className="bg-gradient-to-r from-primary-500 to-accent-500 rounded-2xl overflow-hidden shadow-xl">
        <div className="md:flex">
          <div className="md:w-1/2 p-8 md:p-12">
            <span className="inline-block px-3 py-1 bg-white text-primary-700 rounded-full text-sm font-medium mb-4">
              Featured Article
            </span>
            <h1 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-4">
              The Amazing Journey Through Our Solar System
            </h1>
            <p className="text-white/90 mb-6 text-lg">
              Explore the planets, moons, and other celestial bodies that make
              up our cosmic neighborhood. Learn fascinating facts about each
              planet and how they relate to each other.
            </p>
            <div className="flex flex-wrap gap-3 mb-6">
              <span className="px-3 py-1 bg-white/20 text-white rounded-full text-sm">
                Grade 5-6
              </span>
              <span className="px-3 py-1 bg-white/20 text-white rounded-full text-sm">
                Astronomy
              </span>
              <span className="px-3 py-1 bg-white/20 text-white rounded-full text-sm">
                Solar System
              </span>
            </div>
            <button className="bg-white text-primary-600 hover:bg-gray-100 px-6 py-3 rounded-full inline-flex items-center font-medium transition-colors group">
              Read Article
              <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
          <div className="md:w-1/2 relative">
            <img
              src="https://images.pexels.com/photos/41951/solar-system-emergence-spitzer-telescope-telescope-41951.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Solar System"
              className="h-64 md:h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent md:bg-gradient-to-r md:from-primary-500/60 md:to-transparent"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedArticle;

