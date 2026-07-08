import { ExternalLink, Github, Star } from "lucide-react";

const projects = [
  {
    title: "MoneyMind",
    subtitle: "Personal Finance Dashboard",
    featured: true,
    description:
      "A modern finance dashboard with live balance calculations, interactive charts, transaction management, search, filtering, and persistent local storage.",
    tech: [
      "React",
      "Tailwind CSS",
      "Context API",
      "Recharts",
      "Local Storage",
    ],
    live: "https://money-mind-opal.vercel.app/",
    github: "https://github.com/Avik0333/MoneyMind",
  },
  {
    title: "CareerConnect",
    subtitle: "Internship Discovery Platform",
    description:
      "A multi-page internship portal featuring search, filters, saved jobs, dynamic routing, and reusable React components for a seamless browsing experience.",
    tech: [
      "React",
      "Tailwind CSS",
      "React Router",
      "Context API",
      "Local Storage",
    ],
    live: "https://career-content-alpha.vercel.app/",
    github: "https://github.com/Avik0333/CareerConnect",
  },
  {
    title: "TaskFlow",
    subtitle: "Task Management Application",
    description:
      "A responsive task management application implementing CRUD operations, Context API, authentication flow, and persistent storage.",
    tech: [
      "React",
      "Tailwind CSS",
      "Context API",
      "Local Storage",
    ],
    live: "https://task-flow-five-ochre.vercel.app/",
    github: "https://github.com/Avik0333/TaskFlow",
  },
];

export const Project = () => {
  return (
    <section
      id="projects"
      className="max-w-7xl mx-auto px-6 py-28"
    >
      <div className="text-center mb-20">
        <p className="text-violet-400 font-semibold uppercase tracking-[0.25em]">
          Portfolio
        </p>

        <h2 className="text-5xl font-bold mt-4">
          Featured Projects
        </h2>

        <p className="text-gray-400 max-w-2xl mx-auto mt-6 text-lg">
          A collection of React applications focused on
          modern UI, clean architecture, reusable components,
          and exceptional user experience.
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div
            key={project.title}
            className="
              group
              rounded-3xl
              border
              border-white/10
              bg-white/5
              backdrop-blur-md
              p-8
              transition-all
              duration-300
              hover:-translate-y-2
              hover:border-violet-500/60
              hover:shadow-2xl
              hover:shadow-violet-500/20
            "
          >
            {project.featured && (
              <div className="inline-flex items-center gap-2 bg-violet-600 text-white text-xs font-semibold px-4 py-2 rounded-full mb-6">
                <Star size={14} />
                Featured
              </div>
            )}

            <h3 className="text-3xl font-bold">
              {project.title}
            </h3>

            <p className="text-violet-400 mt-2 font-medium">
              {project.subtitle}
            </p>

            <p className="text-gray-400 leading-7 mt-6">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mt-8">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="
                    px-3
                    py-1
                    rounded-full
                    bg-violet-500/10
                    border
                    border-violet-500/20
                    text-sm
                    text-violet-300
                  "
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex gap-4 mt-10">
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  flex-1
                  flex
                  justify-center
                  items-center
                  gap-2
                  rounded-xl
                  bg-violet-600
                  hover:bg-violet-700
                  transition-all
                  py-3
                  font-semibold
                "
              >
                <ExternalLink size={18} />
                Live Demo
              </a>

              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  flex
                  justify-center
                  items-center
                  rounded-xl
                  border
                  border-white/10
                  hover:border-violet-500
                  px-5
                  transition-all
                "
              >
                <Github size={20} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};