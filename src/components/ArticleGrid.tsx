import React from "react";
import { Bookmark } from "lucide-react";

const ArticleGrid: React.FC = () => {
  const articles = [
    {
      id: 1,
      title: "Inside a Plant Cell: 3D Tour",
      excerpt:
        "Explore the organelles and structures that make up plant cells and how they work together.",
      image:
        "https://images.pexels.com/photos/1526/dark-blur-blurred-gradient.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      category: "Biology",
      categoryColor: "bg-success-500",
      grade: "Grade 5",
      has3dModel: true,
    },
    {
      id: 2,
      title: "Weather Patterns and Climate Change",
      excerpt:
        "Learn about different weather phenomena and how our climate is changing over time.",
      image:
        "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      category: "Earth Science",
      categoryColor: "bg-warning-500",
      grade: "Grade 6",
      has3dModel: false,
    },
    {
      id: 3,
      title: "Simple Machines: Making Work Easier",
      excerpt:
        "Discover how levers, pulleys, and other simple machines help us do work with less effort.",
      image:
        "https://images.pexels.com/photos/162553/keys-workshop-mechanic-tools-162553.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      category: "Physics",
      categoryColor: "bg-primary-500",
      grade: "Grade 5",
      has3dModel: true,
    },
    {
      id: 4,
      title: "States of Matter: Solids, Liquids, and Gases",
      excerpt:
        "Explore how molecules behave differently in various states of matter and what causes changes between states.",
      image:
        "https://images.pexels.com/photos/220067/pexels-photo-220067.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      category: "Chemistry",
      categoryColor: "bg-accent-500",
      grade: "Grade 6",
      has3dModel: true,
    },
    {
      id: 5,
      title: "The Water Cycle: Nature's Recycling System",
      excerpt:
        "Follow a water droplet's journey through evaporation, condensation, and precipitation.",
      image:
        "https://images.pexels.com/photos/1571442/pexels-photo-1571442.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      category: "Earth Science",
      categoryColor: "bg-warning-500",
      grade: "Grade 5",
      has3dModel: true,
    },
    {
      id: 6,
      title: "Animals and Their Adaptations",
      excerpt:
        "Discover how different animals have evolved unique features to survive in their environments.",
      image:
        "https://images.pexels.com/photos/247376/pexels-photo-247376.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      category: "Biology",
      categoryColor: "bg-success-500",
      grade: "Grade 6",
      has3dModel: false,
    },
  ];

  return (
    <section className="mt-12">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Popular Articles</h2>
        <button className="text-primary-600 hover:text-primary-700 font-medium">
          View All
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((article) => (
          <div
            key={article.id}
            className="bg-white rounded-lg shadow-md overflow-hidden transform transition-transform hover:scale-[1.02]"
          >
            <div className="relative">
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-48 object-cover"
              />
              <div className="absolute top-0 left-0 m-3">
                <span
                  className={`${article.categoryColor} text-white px-3 py-1 rounded-full text-xs`}
                >
                  {article.category}
                </span>
              </div>
              <button className="absolute top-0 right-0 m-3 bg-white/80 p-2 rounded-full hover:bg-white transition-colors">
                <Bookmark className="h-4 w-4 text-gray-700" />
              </button>
              {article.has3dModel && (
                <div className="absolute bottom-0 right-0 m-3">
                  <span className="bg-accent-500 text-white px-3 py-1 rounded-full text-xs flex items-center">
                    <span className="mr-1">🔍</span> 3D Model
                  </span>
                </div>
              )}
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">{article.title}</h3>
              <p className="text-gray-600 mb-4 text-sm">{article.excerpt}</p>
              <div className="flex justify-between items-center">
                <span className="text-xs text-gray-500">{article.grade}</span>
                <button className="text-primary-600 hover:text-primary-700 text-sm font-medium">
                  Read More
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ArticleGrid;

