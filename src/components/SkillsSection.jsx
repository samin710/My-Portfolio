import { useState } from "react";
import { cn } from "@/lib/utils";

const skills = [
  // Machine Learning

  {
    name: "Neural Networks & Deep Learning",
    level: 90,
    category: "machine learning",
  },
  { name: "Data Preprocessing", level: 95, category: "machine learning" },
  {
    name: "Regression & Classification",
    level: 95,
    category: "machine learning",
  },
  {
    name: "Model Evaluation & Optimization",
    level: 92,
    category: "machine learning",
  },
  {
    name: "Supervised & Unsupervised Learning",
    level: 98,
    category: "machine learning",
  },
  {
    name: "Feature Engineering",
    level: 88,
    category: "machine learning",
  },

  // Frontend
  { name: "HTML/CSS", level: 90, category: "frontend" },
  { name: "React", level: 80, category: "frontend" },
  { name: "Tailwind CSS", level: 92, category: "frontend" },
  { name: "Axios", level: 70, category: "frontend" },

  // Backend
  { name: "Node.js", level: 80, category: "backend" },
  { name: "Express", level: 75, category: "backend" },
  { name: "MongoDB", level: 70, category: "backend" },

  // Tools
  { name: "TensorFlow", level: 92, category: "tools" },
  { name: "Scikit-learn", level: 90, category: "tools" },
  { name: "PyTorch", level: 88, category: "tools" },
  { name: "Pandas & NumPy", level: 93, category: "tools" },
  { name: "Matplotlib & Seaborn", level: 95, category: "tools" },
  { name: "Keras", level: 80, category: "tools" },
  { name: "Git/GitHub", level: 75, category: "tools" },
  { name: "VS Code", level: 88, category: "tools" },
  { name: "Firebase Authentication", level: 75, category: "tools" },

  // Language
  {
    name: "Python",
    level: 92,
    category: "language",
  },
  { name: "JavaScript", level: 85, category: "language" },
  { name: "C++", level: 95, category: "language" },
  { name: "C", level: 92, category: "language" },
];

const categories = [
  "all",
  "machine learning",
  "frontend",
  "backend",
  "tools",
  "language",
];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [showAllSkills, setShowAllSkills] = useState(false);

  const filteredSkills =
    activeCategory === "all"
      ? showAllSkills
        ? skills
        : skills
            .slice()
            .sort((a, b) => b.level - a.level)
            .slice(0, 6)
      : skills.filter((skill) => skill.category === activeCategory);
  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary"> Skills</span>
        </h2>

        <div className="flex flex-col md:flex-row justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => {
                setActiveCategory(category);
                setShowAllSkills(false);
              }}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-foreground hover:bd-secondary border"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-card p-6 rounded-lg shadow-xs card-hover"
            >
              <div className="text-left mb-4">
                <h3 className="font-semibold text-lg"> {skill.name}</h3>
              </div>
              <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                  style={{ width: skill.level + "%" }}
                />
              </div>

              <div className="text-right mt-1">
                <span className="text-sm text-muted-foreground">
                  {skill.level}%
                </span>
              </div>
            </div>
          ))}
        </div>

        {activeCategory === "all" && (
          <div className="text-center mt-12">
            <button
              className="cosmic-button w-fit flex items-center mx-auto gap-2"
              onClick={() => setShowAllSkills((prev) => !prev)}
            >
              {showAllSkills ? "Show Less" : "Show All Skills"}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
