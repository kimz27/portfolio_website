import {Code, User, Briefcase, LifeBuoy, Cpu, Wrench, Brain} from "lucide-react";

export const AboutSection = () => {
    return (
        <section id="about" className="py-24 px-4 relative">
            {" "}
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    About <span className="text-primary">Me</span>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h3 className="text-2xl font-semibold">  Aspiring Web Developer & Tech Problem Solver</h3>
                        <p className="text-muted-foreground">
                            I'm a recent Computer Science graduate with hands-on experience in IT support and 
                            web technologies. I enjoy building clean, functional web interfaces and learning
                             how systems work behind the scenes.
                        </p>
                        <p className="text-muted-foreground">
                            My journey includes working with HTML, CSS, JavaScript, PHP, and MySQL - 
                            along with tackling real-world issues like network troubleshooting, 
                            device setup, and user support. I'm eager to grow as a developer, 
                            contribute to innovative teams, and keep learning every step of the way.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                            <a href="#contact" className="cosmic-button"> 
                                {""}
                                Get In Touch 
                            </a>
                            <a href="/Kimz-Mutale-CV.pdf" target="_blank" className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300">
                               Download CV 
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
                                    <h4 className="font-semibold text-lg"> Web Development</h4>
                                    <p className="text-muted-foreground">
                                        Building clean and responsive websites using HTML, CSS, JavaScript, and PHP. Focused on writing code that works and scales. 
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Wrench className="h-6 w-6 text-primary"/>
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg"> IT Support & Troubleshooting</h4>
                                    <p className="text-muted-foreground">
                                       Experience providing first-line IT support, resolving hardware/software issues, and configuring systems for staff and campus environments
                                    </p>
                                </div>
                            </div>
                            
                         </div>
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Brain className="h-6 w-6 text-primary"/>
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg"> Continuous Learning</h4>
                                    <p className="text-muted-foreground">
                                       Passionate about learning new technologies and sharpening problem-solving skills through real-world experience and self-driven projects.
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}