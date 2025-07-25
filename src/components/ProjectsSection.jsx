import { ArrowRight, ExternalLink } from "lucide-react";
import jobTracker from "../assets/projectsImages/jobtracker.png";
import recipeBook from "../assets/projectsImages/rcipebook.png";
import tradePort from "../assets/projectsImages/tradeport.png";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    id: 1,
    title: "TradePort",
    description:
      "TradePort is a dynamic e-commerce web application where users can browse, buy, and manage products across various categories.",
    image: tradePort,
    tags: [
      "React",
      "TailwindCSS",
      "Vite",
      "Express",
      "MongoDB",
      "Firebase Auth",
      "JWT",
      "JavaScript",
    ],
    demoUrl: "https://b2b-wholesale-platform-57595.web.app/",
    githubUrl: "https://github.com/samin710/Trade-Port-Client",
  },
  {
    id: 2,
    title: "Recipe Book App",
    description:
      "The Recipe Book App is a dynamic web application that allows users to share and explore recipes with a range of interactive features.",
    image: recipeBook,
    tags: [
      "React",
      "TailwindCSS",
      "Vite",
      "Express",
      "MongoDB",
      "Firebase Auth",
      "JavaScript",
    ],
    demoUrl: "https://recipe-book-app-379ac.web.app/",
    githubUrl: "https://github.com/samin710/Recipe-Book-Client",
  },
  {
    id: 3,
    title: "Job Tracker",
    description:
      "Job Tracker is a job listing platform where applicants can browse jobs from multiple companies, view detailed job descriptions, and apply directly through the platform.",
    image: jobTracker,
    tags: ["React", "TailwindCSS", "Vite", "Firebase Auth", "JavaScript"],
    demoUrl: "https://job-tracker-41ddb.web.app/",
    githubUrl: "https://github.com/samin710/Job-Tracker",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto backdrop-blur-lg">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="md:h-60 h-56 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, key) => (
                    <span
                      key={key}
                      className="px-2 py-1 text-xs font-medium border rounded-full bg-primary/20 text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <FaGithub size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/samin710"
          >
            Check My Github <FaGithub size={16}></FaGithub><ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
