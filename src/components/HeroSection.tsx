import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Download, Sparkles, Code2, Rocket, ArrowRight, Star } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "@/hooks/use-language";
import { TypeAnimation } from 'react-type-animation';
import pdf from "@/assets/imeges/cv (1).pdf";
import { useState, useEffect } from "react";

export default function HeroSection() {
    const { t } = useLanguage();
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
      const handleMouseMove = (e: MouseEvent) => {
        setMousePosition({ x: e.clientX, y: e.clientY });
      };
      window.addEventListener('mousemove', handleMouseMove);
      return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);
  
  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-20 pb-16 px-6 overflow-hidden bg-gradient-to-br from-white via-blue-50/50 to-purple-50/50 dark:from-gray-950 dark:via-blue-950/30 dark:to-purple-950/30">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-20 dark:opacity-10"
          style={{
            backgroundImage: `linear-gradient(to right, hsl(var(--primary) / 0.1) 1px, transparent 1px),
                             linear-gradient(to bottom, hsl(var(--primary) / 0.1) 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }}
        />
        
        {/* Gradient Orbs */}
        <motion.div 
          className="absolute w-[500px] h-[500px] rounded-full blur-3xl opacity-30"
          style={{
            background: 'radial-gradient(circle, rgba(59, 130, 246, 0.5) 0%, transparent 70%)',
            left: mousePosition.x - 250,
            top: mousePosition.y - 250,
          }}
          transition={{ type: "spring", damping: 30, stiffness: 200 }}
        />
        
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-purple-400/30 to-pink-400/30 dark:from-purple-600/40 dark:to-pink-600/40 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-blue-400/30 to-cyan-400/30 dark:from-blue-600/40 dark:to-cyan-600/40 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        
        {/* Floating Particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary/30 rounded-full"
            initial={{ 
              x: Math.random() * window.innerWidth, 
              y: Math.random() * window.innerHeight,
              scale: Math.random() * 2
            }}
            animate={{ 
              y: [null, Math.random() * window.innerHeight],
              x: [null, Math.random() * window.innerWidth],
            }}
            transition={{ 
              duration: Math.random() * 10 + 10, 
              repeat: Infinity, 
              repeatType: "reverse" 
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div 
          className="order-2 md:order-1 space-y-6"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Badge */}
          {/* <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary/10 via-purple-500/10 to-pink-500/10 dark:from-primary/20 dark:via-purple-500/20 dark:to-pink-500/20 backdrop-blur-sm border border-primary/30 shadow-lg"
          >
            <Sparkles className="w-4 h-4 text-primary animate-pulse" />
            <span className="text-sm font-semibold bg-gradient-to-r from-primary via-purple-600 to-pink-600 bg-clip-text text-transparent">
              {t("Available for Work")}
            </span>
            <Star className="w-4 h-4 text-pink-500 animate-pulse" />
          </motion.div> */}

          {/* Greeting */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="space-y-2"
          >
            <p className="text-lg text-muted-foreground dark:text-gray-400 flex items-center gap-2">
              <span className="animate-wave inline-block">👋</span>
              {t("Hello, I'm")}
            </p>
          </motion.div>

          {/* Main Title with TypeAnimation */}
          <motion.h1 
            className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <span className="bg-gradient-to-r from-gray-900 via-primary to-purple-600 dark:from-white dark:via-primary dark:to-purple-400 bg-clip-text text-transparent">
              Abdelrhman
            </span>
            <br />
            <TypeAnimation
              sequence={[
                'Full-Stack Web Developer',
                3000,
                'Mobile Developer ',
                3000,
                // 'Problem Solver',
                // 3000,
                'Tech Enthusiast',
                3000,
              ]}
              wrapper="span"
              speed={50}
              className="bg-gradient-to-r from-blue-600 via-cyan-600 to-purple-600 dark:from-blue-400 dark:via-cyan-400 dark:to-purple-400 bg-clip-text text-transparent"
              repeat={Infinity}
            />
          </motion.h1>

          {/* Subtitle Badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="flex flex-wrap gap-3"
          >
            <span className="px-4 py-2 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white text-sm font-semibold shadow-lg flex items-center gap-2">
              <Code2 className="w-4 h-4" />
              {t('Full-Stack Web Developer')}
            </span>
            <span className="px-4 py-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm font-semibold shadow-lg flex items-center gap-2">
              <Rocket className="w-4 h-4" />
              {t("NTI-Certified")}
            </span>
          </motion.div>

          {/* Description */}
          <motion.p 
            className="text-lg text-muted-foreground dark:text-gray-300 max-w-xl leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
          >
            {t("Innovative and detail-oriented developer with strong experience in front-end and back-end development using Angular, Node.js, React, Python and PHP. Passionate about building scalable and secure web applications.")}
          </motion.p>
          
          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1 }}
          >
            <Button 
              asChild 
              size="lg"
              className="group bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-600/90 text-white shadow-xl hover:shadow-2xl hover:shadow-primary/50 transition-all duration-300"
            >
              <a href="#contact" className="flex items-center gap-2">
                {t("Get In Touch")}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            
            <Button 
              asChild 
              variant="outline" 
              size="lg"
              className="group border-2 hover:border-primary hover:bg-primary/5 transition-all duration-300"
            >
              <a href="#projects" className="flex items-center gap-2">
                {t("View Projects")}
                <Code2 className="w-4 h-4 group-hover:rotate-12 transition-transform" />
              </a>
            </Button>
            
            <Button 
              asChild 
              variant="outline" 
              size="lg"
              className="group border-2 border-purple-500/50 hover:border-purple-500 hover:bg-purple-500/5 transition-all duration-300"
            >
              <a 
                href={pdf}   
                onClick={(e) => {
                  e.preventDefault();
                  window.open(pdf, '_blank'); 
                  const link = document.createElement('a');
                  link.href = pdf;
                  link.download = 'Abdelrhman-CV.pdf'; 
                  link.click(); 
                }} 
                className="flex items-center gap-2"
              >
                <Download className="w-4 h-4 group-hover:animate-bounce" />
                {t("Download CV")}
              </a>
            </Button>
          </motion.div>

          {/* Social Links */}
          <motion.div 
            className="flex items-center gap-4 pt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3 }}
          >
            <span className="text-sm text-muted-foreground dark:text-gray-400">{t("Connect with me")}:</span>
            <div className="flex gap-3">
              <motion.a 
                href="https://github.com/apdo978" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group relative w-12 h-12 rounded-xl bg-gradient-to-br from-gray-800 to-gray-900 dark:from-gray-700 dark:to-gray-800 flex items-center justify-center text-white shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
                aria-label="GitHub Profile"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <Github className="w-6 h-6 relative z-10" />
              </motion.a>
              
              <motion.a 
                href="https://linkedin.com/in/apdo978/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group relative w-12 h-12 rounded-xl bg-gradient-to-br from-[#0077B5] to-[#005582] flex items-center justify-center text-white shadow-lg hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-300 overflow-hidden"
                aria-label="LinkedIn Profile"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <Linkedin className="w-6 h-6 relative z-10" />
              </motion.a>
              
              <motion.a 
                href="mailto:talktoboda01@gmail.com" 
                className="group relative w-12 h-12 rounded-xl bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center text-white shadow-lg hover:shadow-2xl hover:shadow-red-500/50 transition-all duration-300 overflow-hidden"
                aria-label="Email"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <Mail className="w-6 h-6 relative z-10" />
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
        
        {/* Avatar/Profile Section */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
          className="order-1 md:order-2 flex justify-center relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Floating Elements Around Avatar */}
          <motion.div
            className="absolute -top-8 -left-8 w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center shadow-2xl"
            animate={{ 
              y: isHovered ? -10 : 0,
              rotate: isHovered ? 10 : 0,
            }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <Code2 className="w-8 h-8 text-white" />
          </motion.div>

          <motion.div
            className="absolute -top-8 -right-8 w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center shadow-2xl"
            animate={{ 
              y: isHovered ? -10 : 0,
              rotate: isHovered ? -10 : 0,
            }}
            transition={{ type: "spring", stiffness: 200, delay: 0.1 }}
          >
            <Rocket className="w-8 h-8 text-white" />
          </motion.div>

          <motion.div
            className="absolute -bottom-8 -left-8 w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center shadow-2xl"
            animate={{ 
              y: isHovered ? 10 : 0,
              rotate: isHovered ? -10 : 0,
            }}
            transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
          >
            <Sparkles className="w-8 h-8 text-white" />
          </motion.div>

          <motion.div
            className="absolute -bottom-8 -right-8 w-16 h-16 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center shadow-2xl"
            animate={{ 
              y: isHovered ? 10 : 0,
              rotate: isHovered ? 10 : 0,
            }}
            transition={{ type: "spring", stiffness: 200, delay: 0.3 }}
          >
            <Star className="w-8 h-8 text-white" />
          </motion.div>

          {/* Main Avatar */}
          <div className="relative">
            {/* Animated Rings */}
            <motion.div
              className="absolute inset-0 rounded-full border-4 border-primary/30"
              animate={{ 
                scale: isHovered ? [1, 1.1, 1] : 1,
                rotate: 360 
              }}
              transition={{ 
                scale: { duration: 2, repeat: Infinity },
                rotate: { duration: 20, repeat: Infinity, ease: "linear" }
              }}
              style={{ width: 'calc(100% + 40px)', height: 'calc(100% + 40px)', left: '-20px', top: '-20px' }}
            />
            
            <motion.div
              className="absolute inset-0 rounded-full border-4 border-purple-500/30"
              animate={{ 
                scale: isHovered ? [1, 1.15, 1] : 1,
                rotate: -360 
              }}
              transition={{ 
                scale: { duration: 2, repeat: Infinity, delay: 0.5 },
                rotate: { duration: 25, repeat: Infinity, ease: "linear" }
              }}
              style={{ width: 'calc(100% + 60px)', height: 'calc(100% + 60px)', left: '-30px', top: '-30px' }}
            />

            {/* Avatar Container */}
            <motion.div 
              className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden shadow-2xl"
              animate={{ 
                boxShadow: isHovered 
                  ? "0 25px 50px -12px rgba(59, 130, 246, 0.5)" 
                  : "0 20px 25px -5px rgba(0, 0, 0, 0.1)"
              }}
            >
              {/* Gradient Background */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-br from-primary via-purple-500 to-pink-500"
                animate={{ 
                  rotate: isHovered ? 360 : 0,
                  scale: isHovered ? 1.1 : 1
                }}
                transition={{ duration: 1 }}
              />
              
              {/* Overlay Pattern */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
              
              {/* Animated Mesh Gradient */}
              <motion.div
                className="absolute inset-0"
                animate={{ 
                  background: isHovered 
                    ? ["linear-gradient(45deg, rgba(59,130,246,0.3) 0%, rgba(147,51,234,0.3) 100%)",
                       "linear-gradient(135deg, rgba(147,51,234,0.3) 0%, rgba(236,72,153,0.3) 100%)",
                       "linear-gradient(225deg, rgba(236,72,153,0.3) 0%, rgba(59,130,246,0.3) 100%)"]
                    : "linear-gradient(45deg, transparent 0%, transparent 100%)"
                }}
                transition={{ duration: 3, repeat: Infinity }}
              />

              {/* Initials */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.span 
                  className="text-7xl md:text-8xl text-white font-black tracking-tight"
                  animate={{ 
                    scale: isHovered ? [1, 1.1, 1] : 1,
                  }}
                  transition={{ duration: 0.5 }}
                >
                  AM
                </motion.span>
              </div>

              {/* Shine Effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                animate={{ x: isHovered ? ["100%", "-100%"] : "100%" }}
                transition={{ duration: 1.5, repeat: isHovered ? Infinity : 0, repeatDelay: 1 }}
                style={{ transform: "skewX(-20deg)" }}
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
