
import { Card, CardContent } from "@/components/ui/card";
import AnimatedSection from "./AnimatedSection";
import { useLanguage } from "@/hooks/use-language";

const skills = [
  {
    category: "Frontend",
    items: ["Angular", "React.js", "HTML5", "CSS5", "Bootstrap", "Tailwind", "Flask"]
  },
  {
    category: "Backend",
    items: ["Node.js", "Express.js", "Python Core", "Django", "PHP Native", "NestJS"]
  },
  {
    category: "Databases",
    items: ["MongoDB", "MySQL"]
  },
  {
    category: "Languages",
    items: ["JavaScript", "TypeScript", "Python", "PHP", "C++", "SQL", "Bash", "HTML,CSS,Sass"]
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
    items: ["OAuth", "JWT", "OWASP ", "eWAPT", "EJPT"]
  }
];

export default function SkillsSection() {
  const { t } = useLanguage();
  
  return (
    <section id="skills" className="py-16 px-6 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection>
          <div className="flex flex-col items-center text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white">
              {t("Technical Skills")} 
            </h2>
            <div className="w-24 h-1 bg-primary mb-6"></div>
            <p className="text-muted-foreground max-w-2xl dark:text-gray-300">
              {t("My technical toolkit spans frontend, backend, databases, and security.")}
            </p>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <AnimatedSection key={index} delay={0.2 + index * 0.1}>
          <Card className="hover:shadow-lg transition-shadow dark:bg-gray-700 dark:hover:shadow-gray-700">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4 text-primary">
                    {t(skill.category)}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {skill.items.map((item, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 rounded-full bg-primary/10 text-secondary dark:text-white text-sm dark:bg-gray-600 transition-transform transform hover:scale-105 hover:bg-primary dark:hover:bg-black dark:hover:cursor-pointer  hover:text-white"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
