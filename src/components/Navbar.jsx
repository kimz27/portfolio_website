import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { ThemeToggle } from "../components/ThemeToggle";

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
      
      // Update active section based on scroll position
      const sections = navItems.map(item => item.href.substring(1));
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMenuOpen && !event.target.closest('[data-mobile-menu]')) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener('click', handleClickOutside);
      document.body.style.overflow = 'hidden'; // Prevent background scroll
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('click', handleClickOutside);
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const handleNavClick = (href) => {
    setIsMenuOpen(false);
    // Smooth scroll to section
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      className={cn(
        "fixed top-0 w-full z-40 transition-all duration-300",
        isScrolled ? "py-3" : "py-5"
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo Pill */}
        <div className="relative bg-white/10 dark:bg-black/10 backdrop-blur-lg border border-white/20 dark:border-white/10 rounded-full px-6 py-3 shadow-2xl shadow-black/10 dark:shadow-black/30">
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/20 via-white/5 to-transparent dark:from-white/10 dark:via-white/5 dark:to-transparent pointer-events-none"></div>
          <a
            className="relative z-10 text-xl font-bold text-primary flex items-center group"
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#hero');
            }}
          >
            <span className="relative z-10">
              <span className="text-glow text-foreground group-hover:text-primary transition-colors duration-300">
                Kimz
              </span>
              <span className="ml-1 opacity-80">Portfolio</span>
            </span>
          </a>
        </div>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center relative bg-white/10 dark:bg-black/10 backdrop-blur-xl border border-white/20 dark:border-white/10 rounded-full px-6 py-3 shadow-2xl shadow-black/10 dark:shadow-black/30 space-x-6">
          
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/20 via-white/5 to-transparent dark:from-white/10 dark:via-white/5 dark:to-transparent pointer-events-none"></div>
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(item.href);
              }}
              className={cn(
                "relative z-10 text-sm font-medium transition-all duration-300 hover:text-primary px-3 py-1.5 rounded-full",
                activeSection === item.href.substring(1)
                  ? "text-primary bg-white/20 dark:bg-white/10 shadow-lg backdrop-blur-sm"
                  : "text-foreground/80 hover:bg-white/10 dark:hover:bg-white/5"
              )}
            >
              {item.name}
            </a>
          ))}
          <div className="relative z-10 w-px h-6 bg-white/20 dark:bg-white/10"></div>
          <div className="relative z-10">
            <ThemeToggle />
          </div>
        </div>

        {/* Mobile - Theme toggle and burger */}
        <div className="md:hidden flex items-center space-x-3">
          <ThemeToggle />
          <button
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="p-2 text-foreground z-50 hover:text-primary transition-colors duration-200"
            aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
            data-mobile-menu
          >
            <div className="relative w-6 h-6">
              <Menu 
                size={24} 
                className={cn(
                  "absolute inset-0 transition-all duration-300",
                  isMenuOpen ? "opacity-0 rotate-180" : "opacity-100 rotate-0"
                )}
              />
              <X 
                size={24} 
                className={cn(
                  "absolute inset-0 transition-all duration-300",
                  isMenuOpen ? "opacity-100 rotate-0" : "opacity-0 -rotate-180"
                )}
              />
            </div>
          </button>
        </div>

        {/* Mobile nav menu */}
        <div
          className={cn(
            "fixed inset-0 bg-background/95 backdrop-blur-md z-40 md:hidden",
            "transition-all duration-300 ease-in-out",
            isMenuOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          )}
          data-mobile-menu
        >
          <div className="flex flex-col items-center justify-center h-full space-y-8">
            {navItems.map((item, index) => (
              <a
                key={item.name}
                href={item.href}
                className={cn(
                  "text-2xl font-medium transition-all duration-300 hover:text-primary hover:scale-105",
                  "transform translate-y-4 opacity-0",
                  isMenuOpen && "translate-y-0 opacity-100",
                  activeSection === item.href.substring(1)
                    ? "text-primary"
                    : "text-foreground/80"
                )}
                style={{
                  transitionDelay: isMenuOpen ? `${index * 100}ms` : '0ms'
                }}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};