import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import { useLanguage } from "@/hooks/use-language";

const projects = [
  {
    title: "Real-time Chat App",
    description: "A WebSocket-based chat application with real-time messaging capabilities.",
    technologies: ["Node.js", "Angular", "TypeScript", "WebSocket", "OOP"],
    features: [
      "Used WebSocket, Node.js with TypeScript (OOP, modules, and type libraries)",
      "Angular - AngularComponent (TypeScript - OOP)",
      "Single repo architecture for maintainability"
    ],
    demoLink: "https://apdo978.github.io/webappchat/",
    codeLink: "https://github.com/apdo978/chatback?tab=License-1-ov-file",
    image: "/lovable-uploads/ecbc22a4-cc19-43e1-97ba-beecee6cfc29.png"
  },
  {
    title: "Full E-Commerce Web App",
    description: "A comprehensive e-commerce platform with dynamic dashboard and product management.",
    technologies: ["Angular", "Express.js", "MongoDB", "JWT"],
    features: [
      "Developed a full single-page application with dynamic dashboard",
      "Backend built using RESTful APIs in Node.js with JWT and OAuth",
      "Frontend with reusable Angular components focusing on clean UX",
      "Used MongoDB and followed MVC pattern"
    ],
    demoLink: null,
    codeLink: "https://github.com/apdo978/full-e-commerce-for-nti-with-mean-technology",
    image: "/lovable-uploads/ecommerce-website-design-examples-1024x768.jpg"
  },
  {
    title: "E-Commerce Frontend (React)",
    description: "A dynamic React-based frontend for e-commerce applications.",
    technologies: ["React", "Auth APIs", "Responsive UI"],
    features: [
      "Built dynamic React components for product views and cart",
      "Integrated user auth and backend APIs",
      "Ensured responsive and high-performance UI"
    ],
    demoLink: null,
    codeLink: "https://github.com/apdo978/E-commerce-React-",
    image: "/lovable-uploads/color.png"
  },
  {
    title: "Full CRUD App",
    description: "A complete CRUD application with server-side processing.",
    technologies: ["PHP", "MySQL", "JavaScript"],
    features: [
      "Developed server-side logic in PHP",
      "Managed database with MySQL",
      "Designed interactive frontend with vanilla JS and HTML/CSS"
    ],
    demoLink: null,
    codeLink: "#",
    image: "/lovable-uploads/color.png"
  }
];

export default function ProjectsSection() {
    const { t } = useLanguage();
 
  return (
    <section id="projects" className="py-16 px-6 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection>
          <div className="flex flex-col items-center text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white">
               <span className="text-primary">{t("Projects")}</span>
            </h2>
            <div className="w-24 h-1 bg-primary mb-6"></div>
            <p className="text-muted-foreground dark:text-gray-300 max-w-2xl">
              {t("some of my recent projects showcasing my full-stack development skills.")}
            </p>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <AnimatedSection key={index} delay={0.2 + index * 0.1}>
              <Card className="overflow-hidden hover:shadow-lg transition-shadow dark:bg-gray-800 dark:border-gray-700">
                <div className="h-48 bg-gray-200 dark:bg-gray-700 relative">
                  <img 
                    src={project.image }
                    alt={project.title}
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 flex gap-2">
                    {project.technologies.slice(0, 4).map((tech, i) => (
                      <span key={i} className="px-2 py-1 bg-black/50 backdrop-blur-sm rounded text-white text-xs">
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 bg-black/50 backdrop-blur-sm rounded text-white text-xs">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl dark:text-white">{t(project.title)}</CardTitle>
                  <CardDescription className="dark:text-gray-300">{t(project.description)}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 text-sm text-muted-foreground dark:text-gray-300 space-y-1">
                    {project.features.map((feature, i) => (
                      <li key={i}>{t(feature)}</li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter className="flex gap-3">
                  {project.demoLink && (
                    <Button 
                      asChild 
                      variant="secondary" 
                      size="sm" 
                      className="dark:bg-black dark:hover:bg-gray-700 dark:hover:text-white transition-colors"
                    >
                      <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
                      {t("Live Demo")}
                      </a>
                    </Button>
                  )}
                  <Button asChild variant="outline" size="sm">
                    <a href={project.codeLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1">
                      <Github size={16} /> {t("Code")}
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
