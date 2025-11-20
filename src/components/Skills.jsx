import { useState } from "react";
import { cn } from "../lib/utils";

const skills = [
  // 🧠 Programming Languages
  { name: "Python", level: 85, category: "Backend" },
  { name: "JavaScript (ES6+)", level: 80, category: "Full Stack" },
  { name: "C", level: 70, category: "Robotics" },
  { name: "C++", level: 70, category: "Robotics" },

  // 🌐 Web Development
  { name: "React.js", level: 80, category: "Frontend" },
  { name: "Node.js", level: 70, category: "Backend" },
  { name: "Express.js", level: 70, category: "Backend" },
  { name: "HTML5", level: 85, category: "Frontend" },
  { name: "CSS3", level: 85, category: "Frontend" },
  { name: "Tailwind CSS", level: 85, category: "Frontend" },
  { name: "MongoDB", level: 65, category: "Backend" },
  { name: "Firebase", level: 65, category: "Backend" },

  // 🤖 AI & Automation
  { name: "Machine Learning", level: 60, category: "AI" },
  { name: "Data Analysis (NumPy, Pandas, Matplotlib)", level: 70, category: "AI" },
  { name: "Automation Scripts", level: 75, category: "AI" },

  // ⚙️ Tools & Platforms
  { name: "Git & GitHub", level: 80, category: "Tools" },
  { name: "VS Code", level: 85, category: "Tools" },
  { name: "Jupyter Notebook", level: 75, category: "Tools" },
  { name: "Postman", level: 70, category: "Tools" },
  { name: "NPM / Vite", level: 70, category: "Tools" },
  { name: "LibreOffice Base", level: 65, category: "Tools" },

  // 🎨 Design & Creative Tech
  { name: "Adobe Premiere Pro", level: 85, category: "Design" },
  { name: "Figma", level: 70, category: "Design" },
  { name: "Canva", level: 70, category: "Design" },

  // 🤖 Robotics & Embedded Systems
  { name: "Arduino", level: 70, category: "Robotics" },
  { name: "Sensors & Actuators", level: 60, category: "Robotics" },
  { name: "Circuit Simulation (TinkerCAD / Proteus)", level: 60, category: "Robotics" }
];


const categories = ["All", "Frontend", "Backend", "Full Stack", "AI", "Robotics", "Tools", "Design"]



export const Skills = () => {

    const [activeCategory, setActiveCategory] = useState("All")

    const filteredSkills = skills.filter((skill) => activeCategory === "All" || skill.category === activeCategory)

    return <section id="skills" className="py-24 px-4 relative bg-secondary/30">

        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                My <span className="text-primary"> Skills</span>
            </h2>

            <div className="flex flex-wrap justify-center gap-4 mb-12">
                {categories.map((category, key) => (
                    <button key={key} className={cn("px-5 py-2 rounded-full transition-colors duration-300 capitalize", activeCategory === category ? "bg-primary text-primary-foreground" : "bg-secondary/70 text-foreground hover:bg-secondary")} onClick={() => setActiveCategory(category)}>
                        {category}
                    </button>
                ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                {filteredSkills.map((skill, key) => (
                    <div key={key} className="bg-card p-6 rounded-lg shadow-xs card-hover">
                        <div className="text-left mb-4">
                            <h3 className="font-semibold text-lg">
                                {skill.name}
                            </h3>
                        </div>
                        <div className="w-full bg-secondary-/50 h-2 rounded-full overflow-hidden">
                            <div className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]" style={{width: skill.level + "%"}}/>
                        </div>
                        <div className="text-right mt-1 ">
                            <span className="text-sm text-muted-foreground">{skill.level}%</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
}