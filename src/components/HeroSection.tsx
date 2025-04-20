import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "@/hooks/use-language";
import { TypeAnimation } from 'react-type-animation';

export default function HeroSection() {
    const { t } = useLanguage();
  
  return (
    <section id="hero" className="min-h-screen flex items-center pt-20 pb-16 px-6">
      <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">
        <div className="order-2 md:order-1">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
             <TypeAnimation
      sequence={[
        t("Hello, I'm Abdelrhman Muhamed"), // النص اللي هيظهر
        5000,                 // استنى ثانية بعد الكتابة
        '',                   // امسح
        500,                  // استنى نص ثانية
        t('Full-Stack Web Developer'),
        5000,
        '',
        500,
      ]}
      wrapper="span"
      speed={20} // سرعة الكتابة (أقل = أبطأ)
      style={{ fontSize: '1em', display: 'inline-block', color: 'white' }}
      repeat={Infinity}
    />
            <span className="text-primary">{} </span>
          </h1>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-6 text-muted-foreground">
            {t('Full-Stack Web Developer')}
          </h2>
          <h3 className="text-1xl md:text-2xl lg:text-3xl font-semibold mb-6 text-muted-foreground">
            {t("NTI-Certified")}
          </h3>
          <p className="text-lg text-muted-foreground mb-8 max-w-xl">
            {t("Innovative and detail-oriented developer with strong experience in front-end and back-end development using Angular, Node.js, React, Python and PHP. Passionate about building scalable and secure web applications.")}
          </p>
          
          <div className="flex flex-wrap gap-4">
            <Button asChild size="lg">
              <a href="#contact">{t("Get In Touch")}</a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="#projects">{t("View Projects")}</a>
            </Button>
            <Button asChild variant="outline" size="lg">
               <a href="./../../public/proj (1).pdf" download>{t("Download CV")}</a>
            </Button>
          </div>

          <div className="flex gap-6 mt-8">
            <a 
              href="https://github.com/apdo978" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-white hover:opacity-90 transition-opacity"
              aria-label="GitHub Profile"
            >
              <Github size={24} />
            </a>
            <a 
              href="https://linkedin.com/in/apdo978/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-[#0077B5] flex items-center justify-center text-white hover:opacity-90 transition-opacity"
              aria-label="LinkedIn Profile"
            >
              <Linkedin size={24} />
            </a>
            <a 
              href="mailto:talktobooda01@gmail.com" 
              className="w-12 h-12 rounded-full bg-red-500 flex items-center justify-center text-white hover:opacity-90 transition-opacity"
              aria-label="Email"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, type: "spring", stiffness: 100 }}
          className="order-1 md:order-2 flex justify-center"
        >
          <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden relative ring-4 ring-primary/20 ring-offset-4 shadow-xl">
            <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary opacity-90"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-6xl md:text-7xl text-white font-bold">AM</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
