import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { MENU_ITEMS, PERSONAL_INFO } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { Menu, X, Terminal } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when clicking a link
  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  // Check if a section is active based on URL hash
  const isActive = (href: string) => {
    return location === "/" && (location + href === "/" + href);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-sm py-2"
          : "bg-transparent dark:bg-transparent py-4"
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center cursor-pointer"
            >
              <h1 className="text-xl font-bold gradient-text">Insiya Raja</h1>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="hidden md:flex items-center space-x-1"
          >
            {MENU_ITEMS.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className={`nav-link ${isActive(item.href) ? "nav-link-active" : ""}`}
              >
                {item.label}
              </a>
            ))}
            <a 
              href="/insiya-raja-resume.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="ml-4"
            >
              {/* <Button variant="outline" size="sm">
                Resume
              </Button> */}
            </a>
          </motion.nav>

          {/* Theme Toggle + Mobile Menu Button */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2"
          >
            <div className="hidden md:block">
              <ThemeToggle />
            </div>
            
            <div className="flex md:hidden items-center">
              <ThemeToggle />
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <X /> : <Menu />}
              </Button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white/95 dark:bg-gray-900/95 backdrop-blur-md"
          >
            <div className="container-custom py-4 flex flex-col space-y-3">
              {MENU_ITEMS.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className={`py-2 px-4 text-base hover:text-primary ${
                    isActive(item.href) ? "text-primary font-medium" : ""
                  }`}
                  onClick={handleLinkClick}
                >
                  {item.label}
                </a>
              ))}
              <a 
                href="/insiya-raja-resume.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="py-2 px-4"
                onClick={handleLinkClick}
              >
                {/* <Button variant="outline" size="sm" className="w-full">
                  Resume
                </Button> */}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
