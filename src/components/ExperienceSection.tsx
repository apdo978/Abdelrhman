
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import AnimatedSection from "./AnimatedSection";
import { useLanguage } from "@/hooks/use-language";

const certifications = [
  {
    title: "WebSocket Communications with Node and Angular",
    issuer: "LinkedIn Learning",
    date: "2023"
  },
  {
    title: "Angular NTI - Modern Angular dev",
    issuer: "National Telecommunication Institute",
    date: "2023"
  },
  {
    title: "Node.js (Explore Web Development with Node.js)",
    issuer: "LinkedIn Learning",
    details: "Express/NestJS, Mongoose, Sequelize",
    date: "2023"
  },
  {
    title: "React (Creating and Hosting a Full-Stack Site)",
    issuer: "LinkedIn Learning",
    details: "Component-based frontends, library",
    date: "2022"
  },
  {
    title: "Git/GitHub",
    details: "Proficient in version control, collaborative workflows, and repository management",
    date: "2022"
  },
  {
    title: "Web Security Certifications",
    details: "PortSwigger Labs, eWAPT, EJPT",
    date: "2021"
  },
];

const education = [
  {
    degree: "MEAN-Stack and Full-Web Application Developer",
    institution: "NTI-National Telecommunication Institute",
    date: "Jan 2025"
  },
  {
    degree: "Bachelor of Pharmacy (Pharm D)",
    institution: "Faculty of Pharmacy, Al-Azhar University",
    date: "July 2024"
  }
];

export default function ExperienceSection() {
  const { t } = useLanguage();
  
  return (
    <section id="experience" className="py-16 px-6 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection>
          <div className="flex flex-col items-center text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white">
              {t("Experience")} & <span className="text-primary">{t("Education")}</span>
            </h2>
            <div className="w-24 h-1 bg-primary mb-6"></div>
            <p className="text-muted-foreground max-w-2xl dark:text-gray-300">
              {t("My professional journey, certifications, and educational background.")}
            </p>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <AnimatedSection delay={0.3}>
              <h3 className="text-2xl font-semibold mb-6 text-secondary dark:text-white">{t("Certifications")}</h3>
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <AnimatedSection key={index} delay={0.4 + index * 0.05}>
                    <Card className="dark:bg-gray-700">
                      <CardHeader className="py-4 px-6">
                        <CardTitle className="text-lg dark:text-white">{t(cert.title)}</CardTitle>
                      </CardHeader>
                      <CardContent className="py-2 px-6">
                        <div className="flex justify-between text-sm text-muted-foreground dark:text-gray-300">
                          <span>{t(cert.issuer || cert.details)}</span>
                          <span>{cert.date}</span>
                        </div>
                        {cert.issuer && cert.details && (
                          <p className="text-sm text-muted-foreground dark:text-gray-300 mt-2">{t(cert.details)}</p>
                        )}
                      </CardContent>
                    </Card>
                  </AnimatedSection>
                ))}
              </div>
            </AnimatedSection>
          </div>

          <div>
            <AnimatedSection delay={0.5}>
              <h3 className="text-2xl font-semibold mb-6 text-secondary dark:text-white">{t("Education")}</h3>
              <div className="space-y-4">
                {education.map((edu, index) => (
                  <AnimatedSection key={index} delay={0.6 + index * 0.1}>
                    <Card className="dark:bg-gray-700">
                      <CardHeader className="py-4 px-6">
                        <CardTitle className="text-lg dark:text-white">{t(edu.degree)}</CardTitle>
                      </CardHeader>
                      <CardContent className="py-2 px-6">
                        <div className="flex justify-between text-sm text-muted-foreground dark:text-gray-300">
                          <span>{t(edu.institution)}</span>
                          <span>{t("Graduated")}: {edu.date}</span>
                        </div>
                      </CardContent>
                    </Card>
                  </AnimatedSection>
                ))}

                <div className="mt-8">
                  <AnimatedSection delay={0.8}>
                    <h3 className="text-2xl font-semibold mb-6 text-secondary dark:text-white">{t("Languages")}</h3>
                    <Card className="dark:bg-gray-700">
                      <CardContent className="py-4 px-6">
                        <ul className="space-y-2">
                          <li className="flex justify-between">
                            <span className="font-medium dark:text-white">{t("Arabic")}</span>
                            <span className="text-muted-foreground dark:text-gray-300">{t("Native")}</span>
                          </li>
                          <li className="flex justify-between">
                            <span className="font-medium dark:text-white">{t("English")}</span>
                            <span className="text-muted-foreground dark:text-gray-300">{t("Fluent")}</span>
                          </li>
                          <li className="flex justify-between">
                            <span className="font-medium dark:text-white">{t("German")}</span>
                            <span className="text-muted-foreground dark:text-gray-300">{t("Intermediate")}</span>
                          </li>
                        </ul>
                      </CardContent>
                    </Card>
                  </AnimatedSection>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
}
