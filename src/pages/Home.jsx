import {StarBackground} from "../components/StarBackground";
import { HeroSection } from "../components/HeroSection";
import { Navbar } from "@/components/Navbar";
import { AboutSection } from "../components/AboutSection";
import { SkillsSection } from "../components/SkillsSection";
import { ProjectsSection } from "../components/ProjectsSection";
import { ContactSection } from "../components/ContactSection";
import {Footer} from "../components/Footer"

export const Home = () => {
    return <div className="min-h-screen bg-background text-foreground overflow-x-hidden">

        {/* Backgroung effects */}
        <StarBackground />

        {/* Navbar */}
        <Navbar />   

        {/* Main content */}
        <main>
            <HeroSection />
            <AboutSection />
            <SkillsSection/>
            <ProjectsSection/>
            <ContactSection />
        </main>
        {/* Footer */}
        <Footer/>
    </div>

};