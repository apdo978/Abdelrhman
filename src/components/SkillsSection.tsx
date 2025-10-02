
import { Card, CardContent } from "@/components/ui/card";
import AnimatedSection from "./AnimatedSection";
import { useLanguage } from "@/hooks/use-language";
import { Code2, Database, Shield, Cloud, Workflow, Palette, Terminal, Zap, Sparkles, LucideIcon } from "lucide-react";
import { useState } from "react";

// Icon mapping for categories
const categoryIcons: { [key: string]: LucideIcon } = {
  "Frontend": Code2,
  "Backend": Terminal,
  "Databases": Database,
  "DevOps": Workflow,
  "Languages": Code2,
  "Design Principles": Palette,
  "Version Control": Workflow,
  "Security": Shield,
  "Cloud": Cloud,
  "Testing": Zap,
  "WebRTC": Zap,
  "Frameworks": Code2,
  "Web Technologies": Terminal,
  "Mobile Development": Code2,
  "UI/UX": Palette,
  "SEO": Zap,
  "APIs": Terminal,
  "Authentication": Shield,
};

// Color schemes for categories
const categoryColors: { [key: string]: string } = {
  "Frontend": "from-blue-500 to-cyan-500",
  "Backend": "from-green-500 to-emerald-500",
  "Databases": "from-purple-500 to-pink-500",
  "DevOps": "from-orange-500 to-red-500",
  "Languages": "from-indigo-500 to-blue-500",
  "Design Principles": "from-pink-500 to-rose-500",
  "Version Control": "from-teal-500 to-cyan-500",
  "Security": "from-red-500 to-orange-500",
  "Cloud": "from-sky-500 to-blue-500",
  "Testing": "from-yellow-500 to-amber-500",
  "WebRTC": "from-violet-500 to-purple-500",
  "Frameworks": "from-emerald-500 to-teal-500",
  "Web Technologies": "from-cyan-500 to-blue-500",
  "Mobile Development": "from-fuchsia-500 to-pink-500",
  "UI/UX": "from-rose-500 to-pink-500",
  "SEO": "from-lime-500 to-green-500",
  "APIs": "from-blue-500 to-indigo-500",
  "Authentication": "from-amber-500 to-orange-500",
};

const skills = [
  {
    category: "Frontend",
    items: ["Angular", "React.js", "HTML5", "CSS3", "Bootstrap", "Tailwind CSS", "Flask"],
    featured: true
  },
  {
    category: "Backend",
    items: ["Node.js", "Express.js","REST APIs", "Python Core", "Django", "PHP Native", "NestJS"],
    featured: true
  },
  {
    category: "Databases",
    items: ["SQL", "NOSQL"]
  },
  {
    category: "DevOps",
    items: ["Docker", "Kubernetes", "CI/CD", "GitHub Actions"],
    featured: true
  },
  {
    category: "Languages",
    items: ["JavaScript", "TypeScript","NodeJS", "Python", "PHP", "C++", "SQL", "Bash", "HTML,CSS,Sass"]
  },
  {
    category: "Design Principles",
    items: ["OOP", "MVC", "MVVM"]
  },
  {
    category: "Version Control",
    items: ["Git", "GitHub"]
  },
  {
    category: "Security",
    items: ["OAuth", "JWT", "OWASP", "eWAPT", "EJPT"],
    featured: true
  },
  {
    category: "Cloud",
    items: ["AWS", "Google Cloud", "Firebase"]
  },
  {
    category: "Testing",
    items: ["Postman"]
  },
  {
    category: "WebRTC",
    items: ["Socket.io", "WebRTC"]
  },
  {
    category: "Frameworks",
    items: ["Flask", "Django", "NestJS","Express.js", "FastAPI","Laravel"]
  },
  {
    category: "Web Technologies",
    items: ["REST APIs", "GraphQL", "WebSockets"]
  },
  {
    category: "Mobile Development",
    items: ["React Native", "Flutter"]
  },
  {
    category: "UI/UX",
    items: ["Adobe XD"]
  },
  {
    category: "SEO",
    items: ["Google Analytics", "Google Search Console"]
  },
  {
    category: "APIs",
    items: ["RESTful APIs", "GraphQL APIs"]
  },
  {
    category: "Authentication",
    items: ["OAuth2", "JWT"]
  },
];

export default function SkillsSection() {
  const { t } = useLanguage();
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  
  return (
    <section id="skills" className="relative py-20 px-6 bg-gradient-to-br from-white via-gray-50 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 overflow-hidden">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20 dark:opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(to right, hsl(var(--primary) / 0.1) 1px, transparent 1px),
                           linear-gradient(to bottom, hsl(var(--primary) / 0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      {/* Floating Orbs */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-blue-500/10 dark:bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-64 h-64 bg-purple-500/10 dark:bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-500/5 dark:bg-pink-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <AnimatedSection>
          <div className="flex flex-col items-center text-center mb-16">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary/10 to-blue-500/10 dark:from-primary/20 dark:to-blue-500/20 backdrop-blur-sm border border-primary/20 mb-6">
              <Zap className="w-4 h-4 text-primary animate-pulse" />
              <span className="text-sm font-semibold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                {t("Tech Stack")}
              </span>
            </div>

            {/* Title with gradient */}
            <h2 className="text-5xl md:text-7xl font-black mb-6">
              <span className="bg-gradient-to-r from-gray-900 via-primary to-purple-600 dark:from-white dark:via-primary dark:to-purple-400 bg-clip-text text-transparent">
                {t("Technical Skills")}
              </span>
            </h2>

            {/* Decorative Line */}
            <div className="flex items-center gap-3 mb-6">
              <div className="h-1 w-16 bg-gradient-to-r from-transparent via-primary to-blue-500 rounded-full"></div>
              <Sparkles className="w-5 h-5 text-primary animate-pulse" />
              <div className="h-1 w-16 bg-gradient-to-l from-transparent via-primary to-blue-500 rounded-full"></div>
            </div>

            <p className="text-lg text-muted-foreground dark:text-gray-300 max-w-3xl leading-relaxed">
              {t("My technical toolkit spans frontend, backend, databases, and security.")}
            </p>

            {/* Stats */}
            <div className="flex flex-wrap items-center justify-center gap-8 mt-8">
              <div className="text-center">
                <div className="text-3xl font-bold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                  {skills.length}+
                </div>
                <div className="text-sm text-muted-foreground dark:text-gray-400">Categories</div>
              </div>
              <div className="h-12 w-px bg-gradient-to-b from-transparent via-primary to-transparent"></div>
              <div className="text-center">
                <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  {skills.reduce((acc, skill) => acc + skill.items.length, 0)}+
                </div>
                <div className="text-sm text-muted-foreground dark:text-gray-400">Technologies</div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => {
            const IconComponent = categoryIcons[skill.category] || Code2;
            const colorScheme = categoryColors[skill.category] || "from-gray-500 to-gray-600";
            const isActive = activeCategory === skill.category;

            return (
              <AnimatedSection key={index} delay={0.1 + index * 0.05}>
                <Card 
                  className={`group relative overflow-hidden border-2 transition-all duration-500 cursor-pointer
                    ${isActive ? 'border-primary shadow-2xl shadow-primary/20 scale-105' : 'border-transparent hover:border-primary/30'}
                    dark:bg-gray-800/50 backdrop-blur-sm hover:shadow-xl dark:hover:shadow-primary/10 hover:-translate-y-1`}
                  onClick={() => setActiveCategory(isActive ? null : skill.category)}
                  onMouseEnter={() => setActiveCategory(skill.category)}
                  onMouseLeave={() => setActiveCategory(null)}
                >
                  {/* Gradient Background Animation */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${colorScheme} opacity-0 group-hover:opacity-5 dark:group-hover:opacity-10 transition-opacity duration-500`}></div>
                  
                  {/* Shimmer Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>

                  {/* Featured Badge */}
                  {skill.featured && (
                    <div className="absolute top-3 right-3 z-10">
                      <div className={`px-2 py-1 rounded-full bg-gradient-to-r ${colorScheme} text-white text-[10px] font-bold shadow-lg flex items-center gap-1`}>
                        <Sparkles className="w-2.5 h-2.5" />
                        Featured
                      </div>
                    </div>
                  )}

                  <CardContent className="p-6 relative">
                    {/* Icon Header */}
                    <div className="flex items-center gap-3 mb-5">
                      <div className={`relative w-12 h-12 rounded-xl bg-gradient-to-br ${colorScheme} p-0.5 group-hover:scale-110 transition-transform duration-300`}>
                        <div className="w-full h-full bg-white dark:bg-gray-800 rounded-[10px] flex items-center justify-center">
                          <IconComponent className={`w-6 h-6 bg-gradient-to-br ${colorScheme} bg-clip-text text-transparent`} />
                        </div>
                      </div>
                      
                      <div className="flex-1">
                        <h3 className={`text-xl font-bold bg-gradient-to-r ${colorScheme} bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300 inline-block`}>
                          {t(skill.category)}
                        </h3>
                        <div className="flex items-center gap-1 mt-1">
                          <div className={`h-1 w-8 rounded-full bg-gradient-to-r ${colorScheme} group-hover:w-12 transition-all duration-300`}></div>
                          <div className="text-xs text-muted-foreground dark:text-gray-400">
                            {skill.items.length} {skill.items.length === 1 ? 'skill' : 'skills'}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Skills Tags */}
                    <div className="flex flex-wrap gap-2">
                      {skill.items.map((item, i) => (
                        <span
                          key={i}
                          onMouseEnter={() => setHoveredSkill(`${skill.category}-${item}`)}
                          onMouseLeave={() => setHoveredSkill(null)}
                          className={`group/tag relative px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-300 cursor-pointer
                            ${hoveredSkill === `${skill.category}-${item}` 
                              ? `bg-gradient-to-r ${colorScheme} text-white shadow-lg scale-110 z-10` 
                              : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 hover:scale-105'
                            }`}
                        >
                          {/* Glow effect on hover */}
                          {hoveredSkill === `${skill.category}-${item}` && (
                            <div className={`absolute inset-0 rounded-lg bg-gradient-to-r ${colorScheme} blur-md opacity-50 -z-10`}></div>
                          )}
                          {item}
                        </span>
                      ))}
                    </div>

                    {/* Hover Indicator */}
                    <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${colorScheme} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}></div>
                  </CardContent>
                </Card>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}
