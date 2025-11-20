import { ArrowDown } from "lucide-react"

export const HeroSection = () => {
    return <section id="home" className="relative flex flex-col items-center justify-center px-4 min-h-screen">
        <div className="container max-w-4xl mx-auto text-center z-10">
            <div className="space-y-6">
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                    <span className="opacity-0 animate-fade-in">Hi, I'm</span>
                    <span className="text-primary opacity-0 animate-fade-in-delay-1"> {" "} Avik</span>
                    <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2"> {" "} Sehgal</span>
                </h1>

                <p className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-4">
                    I’m a technology enthusiast driven by curiosity and precision.
                    Currently pursuing my B.Tech in Robotics and Automation at Symbiosis Institute of Technology, Pune, I focus on integrating artificial intelligence, software engineering, and automation to build efficient, intelligent systems.
                    My work blends analytical thinking with creative problem-solving — transforming ideas into impactful digital experiences.
                </p>

                <div className="opacity-0 animate-fade-in-delay-4 pt-4">
                    <a href="#projects" className="cosmic-button">
                        View My Work
                    </a>
                </div>
            </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -transform-x-1/2 flex flex-col items-center animate-bounce">
            <span className="text-sm text-muted-foreground mb-2"> Scroll </span>
            <ArrowDown className="h-5 w-5 text-primary"/>
        </div>
    </section>
}