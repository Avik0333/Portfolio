import { Briefcase, Code, User } from "lucide-react"

export const AboutMe = () => {
    return <section id="about" className="py-24 px-4 relative">
        {" "}
        <div className="container max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                About <span className="text-primary"> Me </span>
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-2 gap-12 items-center ">
                <div className="space-y-6">
                    <h3 className="text-2xl font-semibold">
                        AI & Full-Stack Developer
                    </h3>

                    <p className="text-muted-foreground">
                        My journey in technology began with a fascination for how logic and creativity intertwine — how a few lines of code can bring complex ideas to life. Over time, this curiosity evolved into a focused pursuit of building systems that think, learn, and adapt.
                    </p>

                    <p className="text-muted-foreground">
                        Alongside my academics, I’m continuously expanding my skills through AI and software development projects, learning from open-source communities, and experimenting with real-world automation challenges. My approach combines structured problem-solving with a creative mindset, allowing me to design solutions that are both efficient and meaningful.
                    </p>

                    <p className="text-muted-foreground">
                        Beyond coding, I enjoy exploring design, innovation, and how technology shapes human experiences — always seeking the balance between precision and imagination.
                    </p>

                    <p className="text-muted-foreground text-primary">
                        I aim to contribute to a future where intelligent systems make technology feel seamless, purposeful, and human.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                        <a href="#contact" className="cosmic-button">
                            {" "}
                            Get In Touch
                        </a>
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-6">
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Code className="h-6 w-6 text-primary"/>
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg">
                                    Full Stack Development
                                </h4>
                                <p className="text-muted-foreground">
                                    I build end-to-end web applications with a focus on clean architecture, responsive design, and efficient performance — from intuitive front-end interfaces to robust back-end systems.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <User className="h-6 w-6 text-primary"/>
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg">Artificial Intelligence & Automation</h4>
                                <p className="text-muted-foreground">
                                    Exploring the integration of AI models into real-world applications, automating processes, and designing systems that learn and adapt intelligently.
                                </p>    
                            </div>
                        </div>
                    </div>
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Briefcase className="h-6 w-6 text-primary"/>
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg">Problem Solving & Innovation</h4>
                                <p className="text-muted-foreground">
                                    I approach challenges with analytical precision and creative thinking — developing solutions that are practical, scalable, and driven by curiosity.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
}