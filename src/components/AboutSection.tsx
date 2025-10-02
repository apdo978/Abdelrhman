
import { Card, CardContent } from "@/components/ui/card";
import { Briefcase, Code, User, Sparkles, Target, Rocket, Heart, Zap, Globe, Award } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import { useLanguage } from "@/hooks/use-language";
import { useState } from "react";

export default function AboutSection() {
  const { t } = useLanguage();
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  
  return (
    <section id="about" className="relative py-20 px-6 bg-gradient-to-br from-white via-blue-50/30 to-purple-50/30 dark:from-gray-950 dark:via-blue-950/20 dark:to-purple-950/20 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Gradient Orbs */}
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-blue-400/20 to-purple-400/20 dark:from-blue-600/30 dark:to-purple-600/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-pink-400/20 to-orange-400/20 dark:from-pink-600/30 dark:to-orange-600/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-br from-cyan-400/10 to-blue-400/10 dark:from-cyan-600/20 dark:to-blue-600/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        
        {/* Floating Particles */}
        <div className="absolute top-20 left-20 w-2 h-2 bg-primary/30 rounded-full animate-float"></div>
        <div className="absolute top-40 right-32 w-3 h-3 bg-purple-500/30 rounded-full animate-float" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute bottom-32 left-40 w-2 h-2 bg-blue-500/30 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-20 right-20 w-3 h-3 bg-pink-500/30 rounded-full animate-float" style={{ animationDelay: '1.5s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <AnimatedSection>
          <div className="flex flex-col items-center text-center mb-16">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 dark:from-blue-500/20 dark:via-purple-500/20 dark:to-pink-500/20 backdrop-blur-sm border border-primary/20 mb-6 shadow-lg">
              <Heart className="w-4 h-4 text-pink-500 animate-pulse" />
              <span className="text-sm font-semibold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                {t("Get to Know Me")}
              </span>
              <Sparkles className="w-4 h-4 text-purple-500 animate-pulse" />
            </div>

            {/* Title with 3D effect */}
            <h2 className="text-5xl md:text-7xl font-black mb-6 relative">
              <span className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 blur-2xl opacity-30"></span>
              <span className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent">
                {t("About")} Me
              </span>
            </h2>

            {/* Animated Decorative Line */}
            <div className="flex items-center gap-3 mb-6">
              <div className="h-1 w-20 bg-gradient-to-r from-transparent via-blue-500 to-purple-500 rounded-full animate-pulse"></div>
              <div className="relative">
                <Zap className="w-6 h-6 text-purple-500 animate-pulse" />
                <div className="absolute inset-0 bg-purple-500 blur-xl opacity-50 animate-pulse"></div>
              </div>
              <div className="h-1 w-20 bg-gradient-to-l from-transparent via-purple-500 to-pink-500 rounded-full animate-pulse"></div>
            </div>

            <p className="text-lg md:text-xl text-muted-foreground dark:text-gray-300 max-w-3xl leading-relaxed">
              {t("Innovative and detail-oriented Full-Stack Web Developer with strong experience in front-end and back-end development.")}
            </p>

            {/* Quick Stats */}
            <div className="flex flex-wrap items-center justify-center gap-8 mt-10">
              <div className="group text-center">
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent group-hover:scale-110 transition-transform">
                  5+
                </div>
                <div className="text-xs md:text-sm text-muted-foreground dark:text-gray-400">{t("Years Experience")}</div>
              </div>
              <div className="h-12 w-px bg-gradient-to-b from-transparent via-primary to-transparent"></div>
              <div className="group text-center">
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent group-hover:scale-110 transition-transform">
                  50+
                </div>
                <div className="text-xs md:text-sm text-muted-foreground dark:text-gray-400">{t("Projects Completed")}</div>
              </div>
              <div className="h-12 w-px bg-gradient-to-b from-transparent via-primary to-transparent"></div>
              <div className="group text-center">
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent group-hover:scale-110 transition-transform">
                  15+
                </div>
                <div className="text-xs md:text-sm text-muted-foreground dark:text-gray-400">{t("Certifications")}</div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Card 1 - Who I Am */}
          <AnimatedSection delay={0.2}>
            <Card 
              className="group relative overflow-hidden border-2 border-transparent hover:border-blue-500/50 transition-all duration-500 dark:bg-gray-800/50 backdrop-blur-sm hover:shadow-2xl hover:shadow-blue-500/20 hover:-translate-y-2"
              onMouseEnter={() => setHoveredCard(0)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Gradient Background Animation */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Shimmer Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>

              {/* Animated Corner Accent */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-500/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <CardContent className="p-8 relative">
                <div className="flex flex-col items-center text-center">
                  {/* Icon with 3D effect */}
                  <div className="relative mb-6">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500 animate-pulse"></div>
                    <div className="relative w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 p-0.5 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                      <div className="w-full h-full bg-white dark:bg-gray-800 rounded-[14px] flex items-center justify-center">
                        <User className="w-10 h-10 text-blue-500 group-hover:scale-110 transition-transform duration-300" />
                      </div>
                    </div>
                    {/* Floating badge */}
                    {hoveredCard === 0 && (
                      <div className="absolute -top-2 -right-2 animate-bounce">
                        <Award className="w-6 h-6 text-blue-500" />
                      </div>
                    )}
                  </div>

                  <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300">
                    {t("Who I Am")}
                  </h3>
                  
                  <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mb-4 group-hover:w-20 transition-all duration-300"></div>
                  
                  <p className="text-muted-foreground dark:text-gray-300 leading-relaxed">
                    {t("A certified Full-Stack Web Developer from NTI with a passion for creating efficient, user-friendly applications. I hold a Bachelor's degree in Pharmacy and have transitioned my analytical skills to software development.")}
                  </p>

                  {/* Bottom accent line */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                </div>
              </CardContent>
            </Card>
          </AnimatedSection>

          {/* Card 2 - What I Do */}
          <AnimatedSection delay={0.3}>
            <Card 
              className="group relative overflow-hidden border-2 border-transparent hover:border-purple-500/50 transition-all duration-500 dark:bg-gray-800/50 backdrop-blur-sm hover:shadow-2xl hover:shadow-purple-500/20 hover:-translate-y-2"
              onMouseEnter={() => setHoveredCard(1)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Gradient Background Animation */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-pink-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Shimmer Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>

              {/* Animated Corner Accent */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-purple-500/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <CardContent className="p-8 relative">
                <div className="flex flex-col items-center text-center">
                  {/* Icon with 3D effect */}
                  <div className="relative mb-6">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500 animate-pulse"></div>
                    <div className="relative w-20 h-20 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 p-0.5 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                      <div className="w-full h-full bg-white dark:bg-gray-800 rounded-[14px] flex items-center justify-center">
                        <Code className="w-10 h-10 text-purple-500 group-hover:scale-110 transition-transform duration-300" />
                      </div>
                    </div>
                    {/* Floating badge */}
                    {hoveredCard === 1 && (
                      <div className="absolute -top-2 -right-2 animate-bounce">
                        <Rocket className="w-6 h-6 text-purple-500" />
                      </div>
                    )}
                  </div>

                  <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300">
                    {t("What I Do")}
                  </h3>
                  
                  <div className="w-12 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mb-4 group-hover:w-20 transition-all duration-300"></div>
                  
                  <p className="text-muted-foreground dark:text-gray-300 leading-relaxed">
                    {t("I specialize in building full-stack web applications with a keen focus on performance, real-time communication, and seamless UI/UX. I apply best security practices and automation techniques in all my work.")}
                  </p>

                  {/* Bottom accent line */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 to-pink-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                </div>
              </CardContent>
            </Card>
          </AnimatedSection>

          {/* Card 3 - My Approach */}
          <AnimatedSection delay={0.4}>
            <Card 
              className="group relative overflow-hidden border-2 border-transparent hover:border-orange-500/50 transition-all duration-500 dark:bg-gray-800/50 backdrop-blur-sm hover:shadow-2xl hover:shadow-orange-500/20 hover:-translate-y-2"
              onMouseEnter={() => setHoveredCard(2)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Gradient Background Animation */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 via-red-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Shimmer Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>

              {/* Animated Corner Accent */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-orange-500/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <CardContent className="p-8 relative">
                <div className="flex flex-col items-center text-center">
                  {/* Icon with 3D effect */}
                  <div className="relative mb-6">
                    <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500 animate-pulse"></div>
                    <div className="relative w-20 h-20 rounded-2xl bg-gradient-to-br from-orange-500 to-red-500 p-0.5 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                      <div className="w-full h-full bg-white dark:bg-gray-800 rounded-[14px] flex items-center justify-center">
                        <Target className="w-10 h-10 text-orange-500 group-hover:scale-110 transition-transform duration-300" />
                      </div>
                    </div>
                    {/* Floating badge */}
                    {hoveredCard === 2 && (
                      <div className="absolute -top-2 -right-2 animate-bounce">
                        <Globe className="w-6 h-6 text-orange-500" />
                      </div>
                    )}
                  </div>

                  <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300">
                    {t("My Approach")}
                  </h3>
                  
                  <div className="w-12 h-1 bg-gradient-to-r from-orange-500 to-red-500 rounded-full mb-4 group-hover:w-20 transition-all duration-300"></div>
                  
                  <p className="text-muted-foreground dark:text-gray-300 leading-relaxed">
                    {t("I believe in problem-solving, team collaboration, and adaptability. My multilingual background (Arabic, English, German) enhances my ability to work in diverse teams and communicate effectively.")}
                  </p>

                  {/* Bottom accent line */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 to-red-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                </div>
              </CardContent>
            </Card>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
