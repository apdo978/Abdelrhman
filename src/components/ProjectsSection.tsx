import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, Play, Code2, Sparkles } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import { useLanguage } from "@/hooks/use-language";
import { useState } from "react";
import myImage from '@/assets/imeges/ecbc22a4-cc19-43e1-97ba-beecee6cfc29.png';
import myImage2 from '@/assets/imeges/Screenshot 2025-07-26 185531.png';
import myImage3 from '@/assets/imeges/color.png';
import myImage4 from '@/assets/imeges/Screenshot 2025-07-26 183848.png';
import myImage5 from '@/assets/imeges/Screenshot 2025-07-26 191322.png';
import myImage6 from '@/assets/imeges/Screenshot 2025-10-02 194801.png';
import myImage7 from '@/assets/imeges/Screenshot 2025-10-02 195945.png';
import video0 from '@/assets/imeges/0827.gif';
import video1 from '@/assets/imeges/1002 (1).gif'; // Changed to GIF
import video2 from '@/assets/imeges/1002 (2).gif'; // Changed to GIF
// import video3 from '@/assets/imeges/video3.gif';
// import video4 from '@/assets/imeges/video4.gif';
// import video5 from '@/assets/imeges/video5.gif';


const projects = [
  {
    title: "Full E-Commerce Mobile (Cross-Platform) App",
    description: "I’ve built a feature-rich mobile app with Flutter, designed to deliver a complete e-commerce experience. + With my experience in Back-end development, I ensured seamless integration with the server.",
    technologies:  [
  "Flutter",
  "NodeJS",
  "ExpressJs (JWT, OAuth 2.0)",
  "REST APIs",
  "MongoDB",
  "Postman for Testing",
  "Git as Version Control",
  "GitHub for deploying the front website and saving the .apk as assets",
  "Docker container for backend and deploying",
  "Atlas for Database"
],
    features: [

  "Try Admin credentials To View Dashboard: admin@ceo.apdo 123456789",
 "🔐 User Authentication (JWT login, role-based access for Users/Admins)",
  "🛒 Shopping Cart with real-time updates & persistence",
  "📦 Order Workflow (checkout, multiple payments, tracking & history)",
  "👤 User Profile with order history & avatar support",
  "📊 Admin Dashboard for managing users, orders & analytics",
  "🎨 Modern UI/UX: Responsive design, smooth animations, optimized",
    ],
    demoLink: "https://abdelrhman-dev.me/E-commerce_Flutter/",
    codeLink: "https://github.com/apdo978/E-commerce_Flutter",
    image: myImage6,
    video: video0
  },
  {
    title: "Full Social Media App",
    description: "a dynamic, real-time social media web application built with the MEAN stack (MongoDB, Express.js, Angular, Node.js). Designed for seamless communication and user engagement, SocialApp offers a modern social networking experience with core features",
    technologies: ["Node.js", "Angular", "TypeScript", "WebSocket", "OOP"],
    features: [

"📢 Live Notifications and user activity tracking",

"🟢 Online / Offline Status Monitoring",
"📨 Read / Unread Message System",

"👥 Friend Requests & User Connections",

"📄 Post Creation, Likes, and Comments"
    ],
    demoLink: "https://apdo978.github.io/SocialApp/landing",
    codeLink: "https://github.com/apdo978/SocialApp",
    image: myImage4,
    video: video1
  },
  {
    title: "Full E-Commerce Web App",
    description: "A comprehensive e-commerce platform with dynamic dashboard and product management.",
    technologies: ["Angular", "Express.js", "MongoDB", "JWT"],
    features: [
      "Try Admin credentials To View Dashboard: admin@ceo.apdo 123456789",
      "Developed a full single-page application with dynamic dashboard",
      "Backend built using RESTful APIs in Node.js with JWT and OAuth",
      "Frontend with reusable Angular components focusing on clean UX",
      "Used MongoDB and followed MVC pattern"
    ],
    demoLink: "https://apdo978.github.io/E-commerce-MEAN/home",
    codeLink: "https://github.com/apdo978/full-e-commerce-for-nti-with-mean-technology",
    image: myImage2,
    video: video2
  },
  {
    title: " Full Real-time Chat App",
    description: "A WebSocket-based chat application with real-time messaging capabilities.",
    technologies: ["Node.js", "Angular", "TypeScript", "WebSocket", "OOP"],
    features: [
      "Used WebSocket, Node.js with TypeScript (OOP, modules, and type libraries)",
      "Angular - AngularComponent (TypeScript - OOP)",
      "Single repo architecture for maintainability"
    ],
    demoLink: "https://apdo978.github.io/webappchat/",
    codeLink: "https://github.com/apdo978/chatback?tab=License-1-ov-file",
    image: myImage,
    // video: video3
  },
  {
    title: "Business Portfolio - REACTJS",
    description: "A WebSocket-based chat application with real-time messaging capabilities.",
    technologies: ["React", "Ts","GSAP","Git","Git HUb"],
    features: [
      'responsive, multi - language portfolio website to showcase projects and skills.Built with',
"HTML, CSS, JavaScript, and GSAP for animation.Features include dark/ light mode toggling, smooth scrolling",
 " interactive projects previews"
    ],
    demoLink: "https://apdo978.github.io/Abdelrhman/",
    codeLink: "https://github.com/apdo978/Abdelrhman",
    image: myImage5,
    // video: video4
  },
  {
    title: "Flutter Portfolio Application",
    description: "A Flutter-based portfolio application showcasing my projects and skills.",
    technologies: ["Flutter", "Dart"],
    features: [
  " Dark/Light Theme System – Smooth transitions for an elegant user experience.",
  " Real Email Functionality – With auto-replies in Arabic and English for professional communication.",
  " Cross-Platform Support – Runs flawlessly on Web, Android, iOS, and Desktop.",
],
    demoLink: "https://abdelrhman-dev.me/Protofolio_Flutter/",
    codeLink: "https://github.com/apdo978/Abdelrhman",
    image: myImage7,
    // video: video5
  },
  // {
  //   title: "E-Commerce Frontend (React)",
  //   description: "A dynamic React-based frontend for e-commerce applications.",
  //   technologies: ["React", "Auth APIs", "Responsive UI"],
  //   features: [
  //     "Built dynamic React components for product views and cart",
  //     "Integrated user auth and backend APIs",
  //     "Ensured responsive and high-performance UI"
  //   ],
  //   demoLink: null,
  //   codeLink: "https://github.com/apdo978/E-commerce-React-",
  //   image: myImage3
  // },
  // {
  //   title: "Full CRUD App",
  //   description: "A complete CRUD application with server-side processing.",
  //   technologies: ["PHP", "MySQL", "JavaScript"],
  //   features: [
  //     "Developed server-side logic in PHP",
  //     "Managed database with MySQL",
  //     "Designed interactive frontend with vanilla JS and HTML/CSS"
  //   ],
  //   demoLink: null,
  //   codeLink: "#",
  //   image: myImage3
  // }
];

export default function ProjectsSection() {
    const { t } = useLanguage();
    const [hoveredProject, setHoveredProject] = useState<number | null>(null);
 
  return (
    <section id="projects" className="relative py-20 px-6 bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 dark:bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/5 dark:bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500/5 dark:bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <AnimatedSection>
          <div className="flex flex-col items-center text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 dark:bg-primary/20 backdrop-blur-sm mb-6">
              <Sparkles className="w-4 h-4 text-primary animate-pulse" />
              <span className="text-sm font-medium text-primary">{t("Featured Work")}</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-primary to-blue-600 dark:from-white dark:via-primary dark:to-blue-400 bg-clip-text text-transparent">
              {t("Projects")}
            </h2>
            <div className="flex items-center gap-2 mb-6">
              <div className="h-1 w-12 bg-gradient-to-r from-transparent to-primary rounded-full"></div>
              <div className="h-1 w-12 bg-primary rounded-full"></div>
              <div className="h-1 w-12 bg-gradient-to-r from-primary to-transparent rounded-full"></div>
            </div>
            <p className="text-lg text-muted-foreground dark:text-gray-300 max-w-2xl leading-relaxed">
              {t("some of my recent projects showcasing my full-stack development skills.")}
            </p>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <AnimatedSection key={index} delay={0.2 + index * 0.1}>
              {project.video ? (
              <Card 
                className="group relative overflow-hidden border-2 transition-all duration-500 hover:border-primary/50 dark:bg-gray-800/50 dark:border-gray-700/50 backdrop-blur-sm hover:shadow-2xl hover:shadow-primary/10 dark:hover:shadow-primary/20 hover:-translate-y-2"
                onMouseEnter={() => setHoveredProject(index)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                {/* Gradient Overlay Animation */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                
                {/* Featured Badge */}
                {index < 3 && (
                  <div className="absolute top-4 right-4 z-20 px-3 py-1 bg-gradient-to-r from-amber-500 to-orange-500 text-white text-xs font-bold rounded-full shadow-lg flex items-center gap-1">
                    <Sparkles className="w-3 h-3" />
                    Featured
                  </div>
                )}

                <div className="relative h-80 bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-800 overflow-hidden">
                  {/* Play Icon Overlay */}
                  {!hoveredProject && project.video && (
                    <div className="absolute inset-0 flex items-center justify-center z-10 bg-black/20 backdrop-blur-[2px] group-hover:opacity-0 transition-opacity duration-300">
                      <div className="w-16 h-16 rounded-full bg-white/90 dark:bg-gray-900/90 flex items-center justify-center shadow-2xl animate-pulse">
                        <Play className="w-8 h-8 text-primary ml-1" fill="currentColor" />
                      </div>
                    </div>
                  )}

                  {hoveredProject === index && project.video ? (
                    // Display GIF on hover
                    <img 
                      src={project.video}
                      alt={`${project.title} demo`}
                      className="h-full w-full object-cover scale-105 transition-transform duration-700"
                    />
                  ) : (
                    // Display static image when not hovering
                    <img 
                      src={project.image}
                      alt={project.title}
                      className="h-full w-full object-cover transition-all duration-700 group-hover:scale-110"
                    />
                  )}
                  
                  {/* Gradient Overlays */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-70"></div>
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Tech Stack Tags */}
                  <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-2">
                    {project.technologies.slice(0, 3).map((tech, i) => (
                      <span 
                        key={i} 
                        className="px-3 py-1.5 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg text-white text-xs font-medium shadow-lg transition-all duration-300 hover:bg-white/20 hover:scale-110"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-3 py-1.5 bg-primary/80 backdrop-blur-md rounded-lg text-white text-xs font-bold shadow-lg">
                        +{project.technologies.length - 3} more
                      </span>
                    )}
                  </div>
                </div>
                <CardHeader className="space-y-3">
                  <div className="flex items-start justify-between gap-2">
                    <CardTitle className="text-2xl font-bold dark:text-white group-hover:text-primary dark:group-hover:text-primary transition-colors">
                      {t(project.title)}
                    </CardTitle>
                    <Code2 className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0" />
                  </div>
                  <CardDescription className="dark:text-gray-300 text-sm leading-relaxed">
                    {t(project.description)}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  {/* Features with modern styling */}
                  <div className="space-y-2 max-h-48 overflow-y-auto custom-scrollbar">
                    {project.features.map((feature, i) => (
                      feature.includes("admin@ceo.apdo") ? (
                        <div key={i} className="p-3 bg-amber-50 dark:bg-amber-900/20 border-l-4 border-amber-500 rounded-r-lg">
                          <p className="text-xs font-medium text-amber-900 dark:text-amber-200 flex items-center gap-2">
                            <Sparkles className="w-3 h-3" />
                            {t(feature)}
                          </p>
                        </div>
                      ) : (
                        <div key={i} className="flex items-start gap-2 text-sm text-muted-foreground dark:text-gray-300">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                          <span className="leading-relaxed">{t(feature)}</span>
                        </div>
                      )
                    ))}
                  </div>
                </CardContent>
                
                <CardFooter className="flex gap-3 pt-6 border-t dark:border-gray-700">
                  {project.demoLink && (
                    <Button 
                      asChild 
                      size="sm" 
                      className="flex-1 bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-600/90 text-white shadow-lg hover:shadow-xl transition-all duration-300 group/btn"
                    >
                      <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                        <ExternalLink className="w-4 h-4 group-hover/btn:rotate-45 transition-transform duration-300" />
                        {t("Live Demo")}
                      </a>
                    </Button>
                  )}
                  <Button 
                    asChild 
                    variant="outline" 
                    size="sm"
                    className="flex-1 border-2 hover:border-primary hover:bg-primary/5 dark:border-gray-600 dark:hover:border-primary transition-all duration-300 group/btn"
                  >
                    <a href={project.codeLink} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                      <Github className="w-4 h-4 group-hover/btn:rotate-12 transition-transform duration-300" />
                      {t("Code")}
                    </a>
                  </Button>
                </CardFooter>
              </Card>) : (
                          <Card className="overflow-hidden hover:shadow-lg transition-shadow dark:bg-gray-800 dark:border-gray-700
                          dark:hover:shadow-gray-700 dark:hover:shadow-lg dark:hover:transition-shadow
                          ">
                <div className="h-80 bg-gray-200 dark:bg-gray-700 relative">
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
                      feature.includes("admin@ceo.apdo") ? <p className="special" key={i}>{t(feature)}</p> :
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
              </Card>) }
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
