import { useState } from "react";

const Skills = () => {
  const [activeTab, setActiveTab] = useState("top-skills");

  return (
    <section className="section section-skills py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold">
            Top design and engineering skills
          </h2>
        </div>
        <div className="skills-tab-block">
          <div className="slide-menu-box mb-6">
            <ul className="flex justify-center space-x-4 border-b border-gray-300">
              <li>
                <button
                  className={`px-4 py-2 text-sm font-semibold ${
                    activeTab === "top-skills"
                      ? "text-blue-500 border-b-2 border-blue-500"
                      : "text-gray-500"
                  }`}
                  onClick={() => setActiveTab("top-skills")}
                >
                  Top skills
                </button>
              </li>
              <li>
                <button
                  className={`px-4 py-2 text-sm font-semibold ${
                    activeTab === "top-software"
                      ? "text-blue-500 border-b-2 border-blue-500"
                      : "text-gray-500"
                  }`}
                  onClick={() => setActiveTab("top-software")}
                >
                  Top software
                </button>
              </li>
              <li>
                <button
                  className={`px-4 py-2 text-sm font-semibold ${
                    activeTab === "us-designers"
                      ? "text-blue-500 border-b-2 border-blue-500"
                      : "text-gray-500"
                  }`}
                  onClick={() => setActiveTab("us-designers")}
                >
                  US designers
                </button>
              </li>
              <li>
                <button
                  className={`px-4 py-2 text-sm font-semibold ${
                    activeTab === "trending-skills"
                      ? "text-blue-500 border-b-2 border-blue-500"
                      : "text-gray-500"
                  }`}
                  onClick={() => setActiveTab("trending-skills")}
                >
                  Trending skills
                </button>
              </li>
            </ul>
          </div>

          <div className="tab-content">
            {activeTab === "top-skills" && (
              <div className="tab-pane fade show active">
                <ul className="skills-list text-center space-y-2">
                  {/* Add skills here */}
                  <li>Skill 1</li>
                  <li>Skill 2</li>
                  <li>Skill 3</li>
                </ul>
              </div>
            )}
            {activeTab === "top-software" && (
              <div className="tab-pane fade">
                <ul className="skills-list text-center space-y-2">
                  {/* Add software here */}
                  <li>Software 1</li>
                  <li>Software 2</li>
                  <li>Software 3</li>
                </ul>
              </div>
            )}
            {activeTab === "us-designers" && (
              <div className="tab-pane fade">
                <ul className="skills-list text-center space-y-2">
                  {/* Add US designers here */}
                  <li>Designer 1</li>
                  <li>Designer 2</li>
                  <li>Designer 3</li>
                </ul>
              </div>
            )}
            {activeTab === "trending-skills" && (
              <div className="tab-pane fade">
                <ul className="skills-list text-center space-y-2">
                  {/* Add trending skills here */}
                  <li>Trending Skill 1</li>
                  <li>Trending Skill 2</li>
                  <li>Trending Skill 3</li>
                </ul>
              </div>
            )}
          </div>
        </div>
        <div className="text-center mt-8">
          <a
            href="/hire"
            className="btn btn-lg border border-gray-800 text-gray-800 px-6 py-3 rounded-lg hover:bg-gray-800 hover:text-white transition duration-300"
          >
            Browse all skills
          </a>
        </div>
      </div>
    </section>
  );
};

export default Skills;
