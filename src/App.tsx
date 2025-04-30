import React from "react";
import {
  Beaker,
  Globe,
  Leaf,
  Orbit,
  Search,
  Bookmark,
  Menu,
  X,
} from "lucide-react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import FeaturedArticle from "./components/FeaturedArticle";
import ArticleGrid from "./components/ArticleGrid";
import ModelViewer from "./components/3d/ModelViewer";

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [activeTab, setActiveTab] = React.useState("featured");

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
      <Header
        mobileMenuOpen={mobileMenuOpen}
        toggleMobileMenu={toggleMobileMenu}
      />

      {/* Navigation Tabs */}
      <div className="bg-white shadow-sm sticky top-16 z-10">
        <div className="container mx-auto px-4">
          <div className="flex overflow-x-auto scrollbar-hide py-2">
            <button
              onClick={() => setActiveTab("featured")}
              className={`px-4 py-2 mx-1 rounded-full flex items-center whitespace-nowrap transition-all ${
                activeTab === "featured"
                  ? "bg-primary-500 text-white font-semibold"
                  : "bg-gray-100 hover:bg-gray-200"
              }`}
            >
              Featured
            </button>
            <button
              onClick={() => setActiveTab("earth")}
              className={`px-4 py-2 mx-1 rounded-full flex items-center whitespace-nowrap transition-all ${
                activeTab === "earth"
                  ? "bg-warning-500 text-white font-semibold"
                  : "bg-gray-100 hover:bg-gray-200"
              }`}
            >
              <Globe className="w-4 h-4 mr-2" />
              Earth Science
            </button>
            <button
              onClick={() => setActiveTab("biology")}
              className={`px-4 py-2 mx-1 rounded-full flex items-center whitespace-nowrap transition-all ${
                activeTab === "biology"
                  ? "bg-success-500 text-white font-semibold"
                  : "bg-gray-100 hover:bg-gray-200"
              }`}
            >
              <Leaf className="w-4 h-4 mr-2" />
              Biology
            </button>
            <button
              onClick={() => setActiveTab("chemistry")}
              className={`px-4 py-2 mx-1 rounded-full flex items-center whitespace-nowrap transition-all ${
                activeTab === "chemistry"
                  ? "bg-accent-500 text-white font-semibold"
                  : "bg-gray-100 hover:bg-gray-200"
              }`}
            >
              <Beaker className="w-4 h-4 mr-2" />
              Chemistry
            </button>
            <button
              onClick={() => setActiveTab("physics")}
              className={`px-4 py-2 mx-1 rounded-full flex items-center whitespace-nowrap transition-all ${
                activeTab === "physics"
                  ? "bg-primary-400 text-white font-semibold"
                  : "bg-gray-100 hover:bg-gray-200"
              }`}
            >
              <Orbit className="w-4 h-4 mr-2" />
              Physics
            </button>
          </div>
        </div>
      </div>

      <main className="flex-grow">
        {activeTab === "featured" && (
          <div className="container mx-auto px-4 py-8">
            <FeaturedArticle />

            <div className="my-12">
              <h2 className="text-2xl font-bold mb-6">
                Featured 3D Model: Solar System
              </h2>
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="h-96 w-full bg-gray-900 relative">
                  <ModelViewer modelType="solarSystem" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">
                    Explore Our Solar System
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Interact with this 3D model to learn about planets, their
                    orbits, and interesting facts about our solar system. Click
                    on any planet to zoom in and discover more!
                  </p>
                  <div className="flex space-x-2">
                    <span className="px-3 py-1 bg-warning-100 text-warning-800 rounded-full text-sm">
                      Grade 5
                    </span>
                    <span className="px-3 py-1 bg-primary-100 text-primary-800 rounded-full text-sm">
                      Solar System
                    </span>
                    <span className="px-3 py-1 bg-success-100 text-success-800 rounded-full text-sm">
                      Interactive
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <ArticleGrid />
          </div>
        )}

        {activeTab === "earth" && (
          <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-8 text-warning-700">
              Earth Science
            </h1>

            <div className="my-8">
              <h2 className="text-2xl font-bold mb-6">
                Featured 3D Model: Volcano
              </h2>
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="h-96 w-full bg-gray-900 relative">
                  <ModelViewer modelType="volcano" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Inside a Volcano</h3>
                  <p className="text-gray-700 mb-4">
                    Explore the interior structure of a volcano and learn about
                    how eruptions happen. This interactive model shows the magma
                    chamber, vent, and different types of volcanic rock
                    formations.
                  </p>
                  <div className="flex space-x-2">
                    <span className="px-3 py-1 bg-warning-100 text-warning-800 rounded-full text-sm">
                      Grade 6
                    </span>
                    <span className="px-3 py-1 bg-warning-100 text-warning-800 rounded-full text-sm">
                      Volcanoes
                    </span>
                    <span className="px-3 py-1 bg-success-100 text-success-800 rounded-full text-sm">
                      Interactive
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Weather Patterns & Climate",
                  image:
                    "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                  grade: "Grade 5",
                  tags: ["Weather", "Climate"],
                },
                {
                  title: "Rock Cycle & Formations",
                  image:
                    "https://images.pexels.com/photos/1029604/pexels-photo-1029604.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                  grade: "Grade 6",
                  tags: ["Geology", "Rocks"],
                },
                {
                  title: "Water Cycle & Conservation",
                  image:
                    "https://images.pexels.com/photos/1571442/pexels-photo-1571442.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                  grade: "Grade 5",
                  tags: ["Water", "Conservation"],
                },
              ].map((article, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-md overflow-hidden transform transition-transform hover:scale-[1.02]"
                >
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-lg font-semibold mb-2">
                      {article.title}
                    </h3>
                    <div className="flex flex-wrap gap-2 mt-4">
                      <span className="px-2 py-1 bg-warning-100 text-warning-800 rounded-full text-xs">
                        {article.grade}
                      </span>
                      {article.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-2 py-1 bg-gray-100 text-gray-800 rounded-full text-xs"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Other tabs content would be similar */}
        {activeTab === "biology" && (
          <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-8 text-success-700">
              Biology
            </h1>
            <div className="my-8">
              <h2 className="text-2xl font-bold mb-6">
                Featured 3D Model: Plant Cell
              </h2>
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="h-96 w-full bg-gray-900 relative">
                  <ModelViewer modelType="plantCell" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">
                    Inside a Plant Cell
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Discover the inner workings of a plant cell! Rotate, zoom,
                    and click on different organelles to learn about their
                    functions and how they help plants survive.
                  </p>
                  <div className="flex space-x-2">
                    <span className="px-3 py-1 bg-success-100 text-success-800 rounded-full text-sm">
                      Grade 5
                    </span>
                    <span className="px-3 py-1 bg-success-100 text-success-800 rounded-full text-sm">
                      Cell Biology
                    </span>
                    <span className="px-3 py-1 bg-success-100 text-success-800 rounded-full text-sm">
                      Interactive
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* More biology content would go here */}
          </div>
        )}

        {activeTab === "chemistry" && (
          <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-8 text-accent-700">
              Chemistry
            </h1>
            <div className="my-8">
              <h2 className="text-2xl font-bold mb-6">
                Featured 3D Model: Atom Structure
              </h2>
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="h-96 w-full bg-gray-900 relative">
                  <ModelViewer modelType="atom" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">
                    Explore Atomic Structure
                  </h3>
                  <p className="text-gray-700 mb-4">
                    See how protons, neutrons, and electrons make up an atom in
                    this interactive model. Learn about the basic building
                    blocks of all matter!
                  </p>
                  <div className="flex space-x-2">
                    <span className="px-3 py-1 bg-accent-100 text-accent-800 rounded-full text-sm">
                      Grade 6
                    </span>
                    <span className="px-3 py-1 bg-accent-100 text-accent-800 rounded-full text-sm">
                      Atoms
                    </span>
                    <span className="px-3 py-1 bg-success-100 text-success-800 rounded-full text-sm">
                      Interactive
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* More chemistry content would go here */}
          </div>
        )}

        {activeTab === "physics" && (
          <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-8 text-primary-700">
              Physics
            </h1>
            <div className="my-8">
              <h2 className="text-2xl font-bold mb-6">
                Featured 3D Model: Simple Machines
              </h2>
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="h-96 w-full bg-gray-900 relative">
                  <ModelViewer modelType="simpleMachine" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">
                    Simple Machines in Action
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Interact with this model to see how levers, pulleys, and
                    inclined planes work. Experiment with different weights and
                    see physics in action!
                  </p>
                  <div className="flex space-x-2">
                    <span className="px-3 py-1 bg-primary-100 text-primary-800 rounded-full text-sm">
                      Grade 5-6
                    </span>
                    <span className="px-3 py-1 bg-primary-100 text-primary-800 rounded-full text-sm">
                      Forces
                    </span>
                    <span className="px-3 py-1 bg-success-100 text-success-800 rounded-full text-sm">
                      Interactive
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* More physics content would go here */}
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}

export default App;
