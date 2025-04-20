
import { Card, CardContent } from "@/components/ui/card";
import { Briefcase, Code, User } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import { useLanguage } from "@/hooks/use-language";

export default function AboutSection() {
  const { t } = useLanguage();
  
  return (
    <section id="about" className="py-16 px-6 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection>
          <div className="flex flex-col items-center text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white">
              {t("About")} 
            </h2>
            <div className="w-24 h-1 bg-primary mb-6"></div>
            <p className="text-muted-foreground max-w-2xl dark:text-gray-300">
              {t("Innovative and detail-oriented Full-Stack Web Developer with strong experience in front-end and back-end development.")}
            </p>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-8">
          <AnimatedSection delay={0.3}>
           <Card className="hover:shadow-lg transition-shadow dark:bg-gray-800 dark:hover:shadow-gray-700">
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <User className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 dark:text-white">{t("Who I Am")}</h3>
                  <p className="text-muted-foreground dark:text-gray-300">
                    {t("A certified Full-Stack Web Developer from NTI with a passion for creating efficient, user-friendly applications. I hold a Bachelor's degree in Pharmacy and have transitioned my analytical skills to software development.")}
                  </p>
                </div>
              </CardContent>
            </Card>
          </AnimatedSection>
            <Card className="hover:shadow-lg transition-shadow dark:bg-gray-800 dark:hover:shadow-gray-700">  <CardContent className="p-6">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Code className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3 dark:text-white">{t("What I Do")}</h3>
                <p className="text-muted-foreground dark:text-gray-300">
                  {t("I specialize in building full-stack web applications with a keen focus on performance, real-time communication, and seamless UI/UX. I apply best security practices and automation techniques in all my work.")}
                </p>
              </div>
            </CardContent>
          </Card>

          <AnimatedSection delay={0.5}>
             <Card className="hover:shadow-lg transition-shadow dark:bg-gray-800 dark:hover:shadow-gray-700">
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Briefcase className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 dark:text-white">{t("My Approach")}</h3>
                  <p className="text-muted-foreground dark:text-gray-300">
                    {t("I believe in problem-solving, team collaboration, and adaptability. My multilingual background (Arabic, English, German) enhances my ability to work in diverse teams and communicate effectively.")}
                  </p>
                </div>
              </CardContent>
            </Card>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
