
import { Github, Linkedin, Mail } from "lucide-react";
import { useLanguage } from "@/hooks/use-language";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { t } = useLanguage();

  return (
    <footer className="bg-secondary text-white py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">Abdelrhman<span className="text-primary">.dev</span></h3>
            <p className="text-gray-300 mb-4">
              {t("Full-Stack Web Developer specializing in MEAN stack development with a passion for creating efficient, user-friendly applications.")}
            </p>
            <div className="flex gap-4">
              <a 
                href="https://github.com/apdo978" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
                aria-label="GitHub Profile"
              >
                <Github size={20} />
              </a>
              <a 
                href="https://linkedin.com/in/apdo978/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
                aria-label="LinkedIn Profile"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="mailto:talktobooda01@gmail.com" 
                className="text-gray-300 hover:text-white transition-colors"
                aria-label="Email Contact"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">{t("Quick Links")}</h3>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-gray-300 hover:text-white transition-colors">{t("About")}</a>
              </li>
              <li>
                <a href="#skills" className="text-gray-300 hover:text-white transition-colors">{t("Skills")}</a>
              </li>
              <li>
                <a href="#projects" className="text-gray-300 hover:text-white transition-colors">{t("Projects")}</a>
              </li>
              <li>
                <a href="#experience" className="text-gray-300 hover:text-white transition-colors">{t("Experience")}</a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-white transition-colors">{t("Contact")}</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">{t("Contact Info")}</h3>
            <ul className="space-y-2">
              <li className="text-gray-300">
                <span className="font-medium block">{t("Email")}:</span>
                talktobooda01@gmail.com
              </li>
              <li className="text-gray-300">
                <span className="font-medium block">{t("Phone")}:</span>
                +20 127 117 5532
              </li>
              <li className="text-gray-300">
                <span className="font-medium block">{t("Location")}:</span>
                {t("6th of October City, Giza, Egypt")}
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-700 text-center text-gray-400">
          <p>&copy; {currentYear} Abdelrhman Muhamed. {t("All rights reserved.")}</p>
        </div>
      </div>
    </footer>
  );
}
