import { ThemeToggle } from "../components/ThemeToggle"
import { StarBackground } from "../components/StarBackground"
import { Navbar } from "../components/Navbar"
import { HeroSection } from "../components/HeroSection"
import { AboutMe } from "../components/AboutMe"
import { Skills } from "../components/Skills"
import { Project } from "../components/Projects"
import { Contact } from "../components/Contact"
import { Footer } from "../components/Footer"

export const Home = () => {
    return <div className="min-h-screen bg-background text-foreground overflow-x-hidden">

        {/* Theme Toggle */}
            <ThemeToggle />
        {/* Background effects */}
            <StarBackground />
        {/* Navbar */}
            <Navbar />
        {/* Main */}
            <main>
                <HeroSection />
                <AboutMe />
                <Skills />
                {/* <Project /> */}
                <Contact />
            </main>
        {/* Footer */}
        <Footer />
    </div>
}