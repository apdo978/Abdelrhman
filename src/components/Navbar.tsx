
import { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Menu, X, Moon, Sun, Globe, Sparkles } from "lucide-react";
import { useTheme } from "@/hooks/use-theme";
import { useLanguage } from "@/hooks/use-language";
import { motion, AnimatePresence } from "framer-motion";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const navItems = [
  { title: "About", href: "#about" },
  { title: "Skills", href: "#skills" },
  { title: "Projects", href: "#projects" },
  { title: "Experience", href: "#experience" },
  { title: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { language, setLanguage, t } = useLanguage();
  const themeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled]);

  const handleThemeToggle = () => {
    toggleTheme();
    
    // Add animation class
    if (themeButtonRef.current) {
      themeButtonRef.current.classList.add("theme-toggle-animation");
      setTimeout(() => {
        themeButtonRef.current?.classList.remove("theme-toggle-animation");
      }, 500);
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-300 px-4 md:px-8",
        scrolled
          ? "bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl shadow-lg shadow-primary/5 py-2 border-b border-gray-200/50 dark:border-gray-800/50"
          : "bg-transparent py-4"
      )}
    >
      {/* Gradient border bottom */}
      {scrolled && (
        <motion.div 
          className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.5 }}
        />
      )}
      
      <div className="max-w-7xl mx-auto flex justify-between items-center relative">
        <motion.a
          href="#"
          className="relative text-lg md:text-2xl font-bold text-secondary dark:text-white group"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="relative z-10">
            Abdelrhman<span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-500 to-purple-500">-dev</span>
          </span>
          <motion.div
            className="absolute -inset-2 bg-gradient-to-r from-primary/0 via-primary/10 to-purple-500/0 rounded-lg opacity-0 group-hover:opacity-100 blur-sm -z-10"
            initial={false}
          />
          <Sparkles className="absolute -top-1 -right-6 w-4 h-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
        </motion.a>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-1">
          {navItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <a
                href={item.href}
                className="relative px-4 py-2 text-muted-foreground dark:text-gray-300 hover:text-primary dark:hover:text-primary font-medium transition-colors group"
              >
                <span className="relative z-10">{t(item.title)}</span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/10 to-primary/0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"
                  layoutId={`nav-${item.title}`}
                />
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-primary to-blue-500 group-hover:w-full transition-all duration-300" />
              </a>
            </motion.div>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <Button variant="ghost" size="icon" className="relative group" aria-label="Select Language">
                  <Globe className="h-5 w-5" />
                  <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-primary/0 to-blue-500/0 group-hover:from-primary/20 group-hover:to-blue-500/20 transition-all" />
                </Button>
              </motion.div>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="backdrop-blur-xl bg-white/95 dark:bg-gray-900/95 border-2 border-gray-200 dark:border-gray-800">
              <DropdownMenuItem onClick={() => setLanguage('en')} className="cursor-pointer hover:bg-primary/10">
                English {language === 'en' && '✓'}
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setLanguage('ar')} className="cursor-pointer hover:bg-primary/10">
                العربية {language === 'ar' && '✓'}
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setLanguage('de')} className="cursor-pointer hover:bg-primary/10">
                Deutsch {language === 'de' && '✓'}
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <motion.div whileHover={{ scale: 1.1, rotate: 180 }} whileTap={{ scale: 0.9 }}>
            <Button 
              ref={themeButtonRef}
              variant="ghost" 
              size="icon"
              onClick={handleThemeToggle}
              className="relative group"
              aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              <AnimatePresence mode="wait">
                {theme === 'dark' ? (
                  <motion.div
                    key="sun"
                    initial={{ rotate: -90, scale: 0 }}
                    animate={{ rotate: 0, scale: 1 }}
                    exit={{ rotate: 90, scale: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Sun className="h-5 w-5" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="moon"
                    initial={{ rotate: 90, scale: 0 }}
                    animate={{ rotate: 0, scale: 1 }}
                    exit={{ rotate: -90, scale: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Moon className="h-5 w-5" />
                  </motion.div>
                )}
              </AnimatePresence>
              <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-yellow-500/0 to-orange-500/0 dark:from-blue-500/0 dark:to-purple-500/0 group-hover:from-yellow-500/20 group-hover:to-orange-500/20 dark:group-hover:from-blue-500/20 dark:group-hover:to-purple-500/20 transition-all" />
            </Button>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button asChild className="relative overflow-hidden bg-gradient-to-r from-primary via-blue-600 to-purple-600 hover:shadow-lg hover:shadow-primary/50 transition-all group">
              <a href="#contact" className="relative z-10">
                <Sparkles className="w-4 h-4 mr-2 group-hover:rotate-12 transition-transform" />
                {t('Hire Me')}
              </a>
            </Button>
          </motion.div>
        </div>

        {/* Mobile Nav Toggle */}
        <div className="flex md:hidden items-center gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Select Language">
                <Globe className="h-5 w-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => setLanguage('en')}>
                English {language === 'en' && '✓'}
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setLanguage('ar')}>
                العربية {language === 'ar' && '✓'}
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setLanguage('de')}>
                Deutsch {language === 'de' && '✓'}
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Button 
            ref={themeButtonRef}
            variant="ghost" 
            size="icon"
            onClick={handleThemeToggle}
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>

          <button
            className="focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isOpen && (
            <motion.div 
              className="absolute top-full left-0 right-0 bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl shadow-2xl py-6 flex flex-col items-center gap-4 md:hidden border-b-2 border-primary/20"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
            >
              {/* Gradient top border */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent" />
              
              {navItems.map((item, index) => (
                <motion.a
                  key={item.title}
                  href={item.href}
                  className="relative text-muted-foreground dark:text-gray-300 hover:text-primary dark:hover:text-primary font-medium transition-colors px-6 py-2 group"
                  onClick={() => setIsOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <span className="relative z-10">{t(item.title)}</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/10 to-primary/0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity" />
                </motion.a>
              ))}
              
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: navItems.length * 0.05 }}
              >
                <Button asChild className="bg-gradient-to-r from-primary via-blue-600 to-purple-600 hover:shadow-lg hover:shadow-primary/50">
                  <a href="#contact" onClick={() => setIsOpen(false)}>
                    <Sparkles className="w-4 h-4 mr-2" />
                    {t('Hire Me')}
                  </a>
                </Button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}
