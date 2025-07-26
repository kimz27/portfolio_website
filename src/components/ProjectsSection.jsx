import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
    {
        id: 1,
        title: "Portfolio Website",
        description: "A personal portfolio website showcasing my skills and projects.",
        image: "/projects/project1.jpg",
        tags: ["React", "Tailwind CSS", "JavaScript"],
        demoURL: "#",
        gitthubURL: "#"
    },
    {
        id: 2,
        title: "Basic E-commerce Website",
        description: "A basic e-commerce web app for a fictional fruit business with user-auth and local server testing.",
        image: "/projects/project2.png",
        tags: ["HTML", "CSS", "JavaScript", "PHP", "MySQL", "PHPMailer"],
        demoURL: "#",
        gitthubURL: "https://github.com/kimz27/SmithApples"
    },
    {
        id: 3,
        title: "Intelligent Library Catalog",
        description: "AI-driven web application that allows users to interact with a library's catalog using natural language queries and book cover image recognition",
        image: "/projects/project3.png ",
        tags: ["Streamlit", "LangChain", "OpenAI GPT-4 Turbo","Gemini Vision"],
        demoURL: "#",
        gitthubURL: "https://github.com/kimz27/final_year_project" 
    }
];

export const ProjectsSection = () => {
    return (
        <section id="projects" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    Featured <span className="text-primary">Projects</span>
                    </h2>
                    <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                        Here are some of the projects I’ve worked on that showcase my skills, creativity, and problem-solving approach.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {projects.map((project,key) => (
                            <div key={key} 
                                 className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
                            >
                                <div className="h-48 overflow-hidden">
                                    <img 
                                        src={project.image} 
                                        alt={project.title} 
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                                    />
                                </div>
                                <div className="p-6">
                                        <div className="flex flex-wrap gap-2 mb-4">
                                            {project.tags.map((tag)=>(
                                                <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">{tag}</span>
                                            ))}
                                        </div>
                                    
                                    <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                                    <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                                    <div className="flex justify-between items-center">
                                        <div className="flex space-x-3">
                                            <a href={project.demoURL} target="_blank" className="text-foreground/80 hover:text-primary transition-colors duration-300">
                                                <ExternalLink size={20}/>
                                            </a>
                                            <a href={project.gitthubURL} title="View Repository" target="_blank" className="text-foreground/80 hover:text-primary transition-colors duration-300">
                                                <Github size={20}/>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="text-center mt-12">
                        <a href="https://github.com/kimz27" target="_blank" className="cosmic-button w-fit flex items-center mx-auto gap-2">
                            Check My GitHub <ArrowRight size={16}/>
                        </a>
                    </div>
            </div>
            
        </section>
    );
}