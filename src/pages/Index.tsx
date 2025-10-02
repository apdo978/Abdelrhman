
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import ExperienceSection from "@/components/ExperienceSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import SalatReminder from "../components/salat";
import PageLoader from "@/components/PageLoader";
const Index = () => {
  useEffect(() => {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (!targetId) return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth'
          });
        }
      });
    });
  }, []);

  return (
    <>
      <PageLoader />
      <div className="font-sans sections antialiased bg-white dark:bg-gray-900 transition-colors duration-300">
        <Navbar />
      <div className="section">
        <HeroSection />
      </div>
      <div className="section">
        <AboutSection />
      </div>
      <div className="section">
        <SkillsSection />
      </div>
      <div className="section">
        <ProjectsSection />
      </div>
      <div className="section">
        <ExperienceSection />
      </div>
      <SalatReminder />
      <div className="section">
        <ContactSection />
      </div>
      <div className="section">
      <Footer />
      </div>
        <ScrollToTopButton />
      </div>
    </>
  );
};

export default Index;
