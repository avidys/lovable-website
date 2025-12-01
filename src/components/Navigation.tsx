import { useState, useEffect, useRef } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/avidys-logo.png";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const prevPathnameRef = useRef(location.pathname);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    // Check initial scroll position
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle scrolling to hash after navigation or scroll to top
  useEffect(() => {
    const pathnameChanged = prevPathnameRef.current !== location.pathname;
    prevPathnameRef.current = location.pathname;

    if (pathnameChanged) {
      // Immediately scroll to top and make header opaque when pathname changes
      window.scrollTo({ top: 0, behavior: "instant" });
      setIsScrolled(true); // Force header to be opaque
      
      // Then handle hash if present
      if (location.hash) {
        // Small delay to ensure page is rendered
        setTimeout(() => {
          const scrollToHash = () => {
            const element = document.querySelector(location.hash);
            if (element) {
              element.scrollIntoView({ behavior: "smooth" });
              return true;
            }
            return false;
          };

          // Try immediately, then retry with delays if element not found
          if (!scrollToHash()) {
            setTimeout(() => {
              if (!scrollToHash()) {
                setTimeout(scrollToHash, 200);
              }
            }, 100);
          }
        }, 50);
      }
    } else if (location.hash) {
      // Hash changed on same page
      const scrollToHash = () => {
        const element = document.querySelector(location.hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
          return true;
        }
        return false;
      };

      // Try immediately, then retry with delays if element not found
      if (!scrollToHash()) {
        const timeout1 = setTimeout(() => {
          if (!scrollToHash()) {
            setTimeout(scrollToHash, 200);
          }
        }, 100);
        return () => clearTimeout(timeout1);
      }
    }
  }, [location]);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Core Services", href: "/#services" },
    { label: "Engagement Models", href: "/engagement-models" },
    { label: "Our Impact", href: "/our-impact" },
    { label: "Leadership", href: "/leadership" },
    { label: "Blog", href: "https://www.avidys.net/blog", external: true },
  ];

  const handleHomeClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (location.pathname === '/') {
      // Already on home page, scroll to top
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      // Navigate to home, scroll to top will happen via useEffect
      navigate('/');
    }
    setIsMobileMenuOpen(false);
  };

  const handleNavigation = (href: string) => {
    if (href.startsWith('/#')) {
      // Handle hash links - navigate to home first if not already there
      const hash = href.substring(1); // Get the hash part (#services)
      if (location.pathname === '/') {
        // Already on home page, just scroll
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      } else {
        // Navigate to home with hash, then scroll will happen via useEffect
        navigate('/' + hash);
      }
    } else if (href.startsWith('/')) {
      // Handle route navigation using React Router - scroll to top will happen via useEffect
      navigate(href);
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? "bg-background/95 backdrop-blur-md border-b border-border/50 shadow-[0_4px_20px_rgba(0,0,0,0.1)]" 
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <a 
              href="/" 
              onClick={handleHomeClick}
              className="flex items-center group"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-primary/20 rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <img src={logo} alt="Avidys" className="h-12 w-auto relative z-10 transition-transform duration-300 group-hover:scale-105" />
              </div>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                link.external ? (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="relative px-4 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors group"
                  >
                    <span className="relative z-10">{link.label}</span>
                    <div className="absolute inset-0 bg-primary/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-primary to-accent group-hover:w-3/4 transition-all duration-300" />
                  </a>
                ) : link.href === '/' ? (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={handleHomeClick}
                    className="relative px-4 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors group"
                  >
                    <span className="relative z-10">{link.label}</span>
                    <div className="absolute inset-0 bg-primary/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-primary to-accent group-hover:w-3/4 transition-all duration-300" />
                  </a>
                ) : link.href.startsWith('/#') ? (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => { 
                      e.preventDefault(); 
                      handleNavigation(link.href);
                    }}
                    className="relative px-4 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors group"
                  >
                    <span className="relative z-10">{link.label}</span>
                    <div className="absolute inset-0 bg-primary/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-primary to-accent group-hover:w-3/4 transition-all duration-300" />
                  </a>
                ) : (
                  <Link
                    key={link.href}
                    to={link.href}
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      // Immediately scroll to top and make header opaque
                      window.scrollTo({ top: 0, behavior: "instant" });
                      setIsScrolled(true);
                    }}
                    className="relative px-4 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors group"
                  >
                    <span className="relative z-10">{link.label}</span>
                    <div className="absolute inset-0 bg-primary/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-primary to-accent group-hover:w-3/4 transition-all duration-300" />
                  </Link>
                )
              ))}
              <a
                href="https://calendly.com/avidys_meeting"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-2 px-6 py-2 rounded-lg bg-gradient-to-r from-primary to-accent text-background font-medium hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 hover:scale-105"
              >
                Get Started
              </a>
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden hover:bg-primary/10 transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-background/98 backdrop-blur-lg lg:hidden pt-20 animate-fade-in">
          <div className="container mx-auto px-4 py-8 flex flex-col gap-2">
            {navLinks.map((link, index) => (
              link.external ? (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg font-medium text-foreground hover:text-primary transition-all py-3 px-4 rounded-lg hover:bg-primary/10 animate-slide-right"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  {link.label}
                </a>
              ) : link.href === '/' ? (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={handleHomeClick}
                  className="text-lg font-medium text-foreground hover:text-primary transition-all py-3 px-4 rounded-lg hover:bg-primary/10 animate-slide-right"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  {link.label}
                </a>
              ) : link.href.startsWith('/#') ? (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => { 
                    e.preventDefault(); 
                    handleNavigation(link.href);
                  }}
                  className="text-lg font-medium text-foreground hover:text-primary transition-all py-3 px-4 rounded-lg hover:bg-primary/10 animate-slide-right"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    // Immediately scroll to top and make header opaque
                    window.scrollTo({ top: 0, behavior: "instant" });
                    setIsScrolled(true);
                  }}
                  className="text-lg font-medium text-foreground hover:text-primary transition-all py-3 px-4 rounded-lg hover:bg-primary/10 animate-slide-right"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  {link.label}
                </Link>
              )
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Navigation;
