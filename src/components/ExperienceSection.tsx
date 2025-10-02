
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import AnimatedSection from "./AnimatedSection";
import { useLanguage } from "@/hooks/use-language";
import { Calendar, Award, GraduationCap, Globe, LucideIcon, Sparkles, ExternalLink, Star } from "lucide-react";
import { motion } from "framer-motion";
import NTICert from "@/assets/imeges/Abdelrhman Muhamed Abdelghafar Muhammed (1).pdf"
import WebSocketCert from "@/assets/imeges/CertificateOfCompletion_WebSocket Communications with Node and Angular.pdf"
import german from "@/assets/imeges/CertificateOfCompletion_German for Absolute Beginners.pdf"
import NetworkCert from "@/assets/imeges/Course_Certificate_En.pdf"
import EJPT from "@/assets/imeges/Course_Certificate_En (1).pdf"
import PythonCert from "@/assets/imeges/Course_Certificate_En (2).pdf"
import NetworkCert2 from "@/assets/imeges/Course_Certificate_En (3).pdf"
import RHCert from "@/assets/imeges/Course_Certificate_En (4).pdf"
import nodeRest from "@/assets/imeges/CertificateOfCompletion_Node.js Essential Training.pdf"
import noderest2 from "@/assets/imeges/CertificateOfCompletion_Node.js Essential Training.pdf"




// Define types for timeline items
interface BaseTimelineItem {
  date: string;
  type: string;
  icon: LucideIcon;
  links?: string;
}

interface CertificationItem extends BaseTimelineItem {
  title: string;
  issuer?: string;
  details?: string;
  type: 'certification';
}

interface EducationItem extends BaseTimelineItem {
  degree: string;
  institution: string;
  type: 'education';
}

interface LanguageItem extends BaseTimelineItem {
  title: string;
  level: string;
  type: 'language';
}

type TimelineItem = CertificationItem | EducationItem | LanguageItem;

const certifications: CertificationItem[] = [
  {
    title: "WebSocket Communications with Node and Angular",
    issuer: "LinkedIn Learning",
    date: "2025",
    links: WebSocketCert,
    type: "certification",
    icon: Award
  },
  {
    title: "Computer Network Fundamentals",
    issuer: "ComptiaN+ By Mahara-Tech",
    date: "2024",
    links: NetworkCert,
    type: "certification",
    icon: Award
  },
  {
    title: "Ethical Hacking",
    issuer: "Cisco e-jpwt By Mahara-Tech",
    details: "Ethical Hacking and Penetration Testing",
    date: "2024",
    links: EJPT,
    type: "certification",
    icon: Award
  },
  {
    title: "python programming",
    issuer: "mahara-tech",
    date: "2024",
    links: PythonCert,
    type: "certification",
    icon: Award
  },
  {
    title: "Implementation of Computer Network Fundamentals",
    issuer: "Cisco By mahara-tech",
    date: "2024",
    links: NetworkCert2,
    type: "certification",
    icon: Award
  },
  {
    title: "Red Hat System Administration I",
    details: "Enterprise Linux by mahara-tech",
    date: "2024",
    links: RHCert,
    type: "certification",
    icon: Award
  },
  {
    title: "Web Security Certifications",
    details: "PortSwigger Labs, eWAPT, EJPT",
    date: "2024",
    type: "certification",
    icon: Award
  },
];

const education: EducationItem[] = [
  {
    degree: "MEAN-Stack and Full-Web Application Developer",
    institution: "NTI-National Telecommunication Institute",
    date: "Jan 2025",
    links: NTICert,
    type: 'education',
    icon: GraduationCap
  },
];

const languages: LanguageItem[] = [
  {
    title: "Arabic",
    level: "Native",
    date: "Native",
    type: "language",
    icon: Globe
  },
  {
    title: "English", 
    level: "Fluent",
    date: "Fluent",
    type: "language",
    icon: Globe
  },
  {
    title: "German",
    level: "Intermediate", 
    date: "Intermediate",
    links: german,
    type: "language",
    icon: Globe
  }
];

// Combine all timeline items and sort by date
const timelineItems = [...education, ...certifications, ...languages].sort((a, b) => {
  const dateA = a.date === "Native" || a.date === "Fluent" || a.date === "Intermediate" ? "2020" : a.date;
  const dateB = b.date === "Native" || b.date === "Fluent" || b.date === "Intermediate" ? "2020" : b.date;
  return new Date(dateB).getTime() - new Date(dateA).getTime();
});

export default function ExperienceSection() {
  const { t } = useLanguage();
  
  const getTypeColor = (type: string) => {
    switch (type) {
      case 'education':
        return 'bg-blue-500';
      case 'certification':
        return 'bg-green-500';
      case 'language':
        return 'bg-purple-500';
      default:
        return 'bg-gray-500';
    }
  };

  const getTypeLabel = (type: string) => {
    switch (type) {
      case 'education':
        return t('Education');
      case 'certification':
        return t('Certification');
      case 'language':
        return t('Language');
      default:
        return '';
    }
  };
  
  return (
    <section id="experience" className="relative py-20 px-6 bg-gray-50 dark:bg-gray-900 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-primary/10 via-blue-500/10 to-transparent rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-tl from-purple-500/10 via-pink-500/10 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
        
        {/* Floating stars */}
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [0, 1, 0],
              rotate: [0, 180, 360],
              opacity: [0, 0.6, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          >
            <Star className="w-4 h-4 text-primary/40 fill-primary/40" />
          </motion.div>
        ))}
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <AnimatedSection>
          <div className="flex flex-col items-center text-center mb-16">
            <motion.div 
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 border border-blue-500/20 mb-4"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">{t("Professional Journey")}</span>
            </motion.div>
            
            <motion.h2 
              className="text-4xl md:text-5xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="bg-gradient-to-r from-gray-900 via-primary to-gray-900 dark:from-white dark:via-primary dark:to-white bg-clip-text text-transparent">
                {t("Experience")} & {t("Education")}
              </span>
            </motion.h2>
            
            <motion.div 
              className="h-1.5 w-32 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full mb-6"
              initial={{ width: 0 }}
              whileInView={{ width: 128 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.8 }}
            />
            
            <motion.p 
              className="text-muted-foreground max-w-2xl dark:text-gray-300 text-lg"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              {t("My professional journey, certifications, and educational background.")}
            </motion.p>
          </div>
        </AnimatedSection>

        {/* Timeline */}
        <div className="relative">
          {/* Enhanced Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 rounded-full opacity-30"></div>
          <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 rounded-full blur-sm"></div>
          
          {/* Timeline Items */}
          <div className="space-y-12">
            {timelineItems.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <AnimatedSection key={index} delay={0.2 + index * 0.1}>
                  <motion.div 
                    className="flex items-start gap-6"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    {/* Enhanced Timeline Node */}
                    <div className="relative flex-shrink-0 group">
                      {/* Pulsing rings */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className={`w-16 h-16 rounded-full ${getTypeColor(item.type)} opacity-20 animate-ping`}></div>
                      </div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className={`w-20 h-20 rounded-full ${getTypeColor(item.type)} opacity-10 animate-pulse`}></div>
                      </div>
                      
                      {/* Main icon container */}
                      <motion.div 
                        className={`relative w-16 h-16 rounded-full ${getTypeColor(item.type)} flex items-center justify-center shadow-lg shadow-${item.type === 'education' ? 'blue' : item.type === 'certification' ? 'green' : 'purple'}-500/50 z-10`}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <IconComponent className="w-8 h-8 text-white" />
                        
                        {/* Sparkle effect on hover */}
                        <motion.div
                          className="absolute inset-0 rounded-full bg-white opacity-0 group-hover:opacity-20"
                          initial={false}
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ duration: 1, repeat: Infinity }}
                        />
                      </motion.div>
                    </div>

                    {/* Enhanced Timeline Content */}
                    <div className="flex-1 min-w-0">
                      <motion.div
                        whileHover={{ y: -4 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <Card className="relative dark:bg-gray-800/50 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-300 border-2 dark:border-gray-700 hover:border-primary/50 overflow-hidden group">
                          {/* Gradient overlay on hover */}
                          <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-blue-500/0 to-purple-500/0 group-hover:from-primary/5 group-hover:via-blue-500/5 group-hover:to-purple-500/5 transition-all duration-500" />
                          
                          {/* Corner accent */}
                          <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                          
                          <CardHeader className="pb-3 relative z-10">
                            <div className="flex items-start justify-between gap-4">
                              <div className="flex-1">
                                <div className="flex items-center gap-2 mb-3 flex-wrap">
                                  <motion.span 
                                    className={`px-3 py-1.5 rounded-full text-xs font-semibold text-white ${getTypeColor(item.type)} shadow-lg flex items-center gap-1`}
                                    whileHover={{ scale: 1.05 }}
                                  >
                                    <Sparkles className="w-3 h-3" />
                                    {getTypeLabel(item.type)}
                                  </motion.span>
                                  <div className="flex items-center gap-1.5 text-sm text-muted-foreground dark:text-gray-400 px-2 py-1 rounded-lg bg-gray-100 dark:bg-gray-700/50">
                                    <Calendar className="w-4 h-4" />
                                    <span className="font-medium">{item.date}</span>
                                  </div>
                                </div>
                                <CardTitle className="text-xl dark:text-white group-hover:text-primary dark:group-hover:text-primary transition-colors duration-300 font-bold">
                                  {item.type === 'education' 
                                    ? t((item as EducationItem).degree)
                                    : t((item as CertificationItem | LanguageItem).title)
                                  }
                                </CardTitle>
                              </div>
                            </div>
                          </CardHeader>
                          <CardContent className="pt-0 relative z-10">
                            {((item.type === 'certification' && (item as CertificationItem).issuer) || 
                              (item.type === 'education' && (item as EducationItem).institution)) && (
                              <div className="flex items-start gap-2 mb-2">
                                <Award className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                                <p className="text-muted-foreground dark:text-gray-300 font-medium">
                                  {item.type === 'education' 
                                    ? t((item as EducationItem).institution)
                                    : t((item as CertificationItem).issuer || '')
                                  }
                                </p>
                              </div>
                            )}
                            {item.type === 'certification' && (item as CertificationItem).details && (
                              <p className="text-sm text-muted-foreground dark:text-gray-400 mb-3 pl-6">
                                {t((item as CertificationItem).details!)}
                              </p>
                            )}
                            {item.type === 'language' && (item as LanguageItem).level && (
                              <div className="flex items-center gap-2">
                                <div className="flex-1">
                                  <div className="flex items-center justify-between mb-1">
                                    <span className="text-sm font-medium dark:text-gray-300">{t("Level")}</span>
                                    <span className="text-sm font-bold text-primary">{t((item as LanguageItem).level)}</span>
                                  </div>
                                  <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                                    <div 
                                      className="h-full bg-gradient-to-r from-primary to-blue-500 rounded-full"
                                      style={{ 
                                        width: (item as LanguageItem).level === 'Native' ? '100%' : 
                                               (item as LanguageItem).level === 'Fluent' ? '90%' : '70%' 
                                      }}
                                    />
                                  </div>
                                </div>
                              </div>
                            )}
                            {item.links && (
                              <motion.button
                                className="mt-4 inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-semibold ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-gradient-to-r from-primary via-blue-600 to-purple-600 text-white hover:shadow-lg hover:shadow-primary/50 h-10 px-5 group/btn"
                                onClick={(e) => {
                                  e.preventDefault();
                                  window.open(item.links, '_blank');
                                }}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                              >
                                <ExternalLink className="w-4 h-4 group-hover/btn:rotate-12 transition-transform" />
                                {t("View Certificate")}
                              </motion.button>
                            )}
                          </CardContent>
                        </Card>
                      </motion.div>
                    </div>
                  </motion.div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
