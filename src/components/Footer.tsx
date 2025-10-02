
import { Github, Linkedin, Mail, Heart, Code2, Sparkles, ArrowUp, MapPin, Phone, Send } from "lucide-react";
import { useLanguage } from "@/hooks/use-language";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { t } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);

  // Scroll to top functionality
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Check scroll position for back-to-top button
  useState(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  });

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Gradient Orbs */}
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-gradient-to-br from-primary/20 to-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-gradient-to-tr from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `linear-gradient(to right, rgba(255, 255, 255, 0.1) 1px, transparent 1px),
                             linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10 py-16 px-6">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-6">
              <h3 className="text-2xl md:text-3xl font-black mb-2">
                Abdelrhman
                <span className="bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent">.dev</span>
              </h3>
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <Code2 className="w-4 h-4 text-primary" />
                <span>{t("Full-Stack Developer")}</span>
              </div>
            </div>
            
            <p className="text-gray-300 mb-6 leading-relaxed">
              {t("Full-Stack Web Developer specializing in MEAN stack development with a passion for creating efficient, user-friendly applications.")}
            </p>
            
            {/* Social Links with Hover Effects */}
            <div className="flex items-center gap-3">
              <span className="text-sm text-gray-400 mr-2">{t("Follow me")}:</span>
              <motion.a 
                href="https://github.com/apdo978" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group relative w-10 h-10 rounded-xl bg-gray-800/50 hover:bg-gradient-to-br hover:from-gray-700 hover:to-gray-800 flex items-center justify-center transition-all duration-300 border border-gray-700 hover:border-gray-600"
                aria-label="GitHub Profile"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <Github className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </motion.a>
              
              <motion.a 
                href="https://linkedin.com/in/apdo978/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group relative w-10 h-10 rounded-xl bg-[#0077B5]/20 hover:bg-[#0077B5] flex items-center justify-center transition-all duration-300 border border-[#0077B5]/30 hover:border-[#0077B5]"
                aria-label="LinkedIn Profile"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </motion.a>
              
              <motion.a 
                href="mailto:talktoboda01@gmail.com" 
                className="group relative w-10 h-10 rounded-xl bg-red-500/20 hover:bg-red-500 flex items-center justify-center transition-all duration-300 border border-red-500/30 hover:border-red-500"
                aria-label="Email Contact"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </motion.a>
            </div>
          </motion.div>
          
          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-blue-500 flex items-center justify-center">
                <Sparkles className="w-4 h-4" />
              </div>
              {t("Quick Links")}
            </h3>
            <ul className="space-y-3">
              {[
                { name: "About", href: "#about" },
                { name: "Skills", href: "#skills" },
                { name: "Projects", href: "#projects" },
                { name: "Experience", href: "#experience" },
                { name: "Contact", href: "#contact" },
              ].map((link, index) => (
                <motion.li 
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.1 + index * 0.05 }}
                >
                  <a 
                    href={link.href} 
                    className="group flex items-center gap-2 text-gray-300 hover:text-white transition-all duration-300"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-gray-600 group-hover:bg-primary group-hover:w-6 transition-all duration-300"></div>
                    <span className="group-hover:translate-x-1 transition-transform duration-300">{t(link.name)}</span>
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
          
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                <Send className="w-4 h-4" />
              </div>
              {t("Contact Info")}
            </h3>
            <ul className="space-y-4">
              <motion.li 
                className="flex items-start gap-3 group"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.2 }}
              >
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-blue-500/30 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Mail className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <span className="text-sm text-gray-400 block mb-1">{t("Email")}</span>
                  <a href="mailto:talktoboda01@gmail.com" className="text-gray-200 hover:text-primary transition-colors">
                    talktoboda01@gmail.com
                  </a>
                </div>
              </motion.li>
              
              <motion.li 
                className="flex items-start gap-3 group"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.25 }}
              >
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-green-500/20 to-emerald-500/20 border border-green-500/30 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Phone className="w-5 h-5 text-green-400" />
                </div>
                <div>
                  <span className="text-sm text-gray-400 block mb-1">{t("Phone")}</span>
                  <a href="tel:+201271175532" className="text-gray-200 hover:text-primary transition-colors">
                    +20 127 117 5532
                  </a>
                </div>
              </motion.li>
              
              <motion.li 
                className="flex items-start gap-3 group"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.3 }}
              >
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-orange-500/20 to-red-500/20 border border-orange-500/30 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <MapPin className="w-5 h-5 text-orange-400" />
                </div>
                <div>
                  <span className="text-sm text-gray-400 block mb-1">{t("Location")}</span>
                  <span className="text-gray-200">
                    {t("6th of October City, Giza, Egypt")}
                  </span>
                </div>
              </motion.li>
            </ul>
          </motion.div>
        </div>
        
        {/* Bottom Bar */}
        <motion.div 
          className="relative border-t border-gray-800/50 mt-12 pt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {/* Decorative gradient line */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-[1px] bg-gradient-to-r from-transparent via-primary to-transparent" />
          
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <motion.p 
              className="text-gray-400 flex items-center gap-2"
              whileHover={{ scale: 1.02 }}
            >
              Made with 
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity, repeatDelay: 2 }}
              >
                <Heart className="inline w-4 h-4 text-red-500 fill-red-500" />
              </motion.span>
              by{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-400 to-primary font-medium">
                Abdelrhman Mohamed
              </span>
            </motion.p>
            
            <motion.p 
              className="text-sm text-gray-500 flex items-center gap-2"
              initial={{ opacity: 0.5 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <Code2 className="w-4 h-4" />
              &copy; {currentYear} {t("All rights reserved.")}
            </motion.p>
          </div>
        </motion.div>
      </div>

      {/* Back to Top Button */}
      {isVisible && (
        <motion.button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-12 h-12 rounded-full bg-gradient-to-br from-primary to-blue-600 text-white shadow-lg hover:shadow-primary/50 flex items-center justify-center z-50 group"
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          exit={{ scale: 0, rotate: 180 }}
          whileHover={{ scale: 1.1, y: -2 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
        >
          <ArrowUp className="w-5 h-5 group-hover:animate-bounce" />
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary to-blue-600 opacity-0 group-hover:opacity-100 blur-lg transition-opacity" />
        </motion.button>
      )}
    </footer>
  );
}
