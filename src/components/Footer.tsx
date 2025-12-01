import { useNavigate, useLocation, Link } from "react-router-dom";
import logo from "@/assets/avidys-logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const navigate = useNavigate();
  const location = useLocation();

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Core Services", href: "/#services" },
    { label: "Engagement Models", href: "/engagement-models" },
    { label: "Our Impact", href: "/our-impact" },
    { label: "Leadership", href: "/leadership" },
    { label: "Blog", href: "https://www.avidys.net/blog", external: true },
  ];

  const handleHashNavigation = (hash: string) => {
    if (location.pathname === '/') {
      // Already on home page, just scroll
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // Navigate to home with hash, then scroll will happen via Navigation component's useEffect
      navigate('/' + hash);
    }
  };

  const handleHomeClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (location.pathname === '/') {
      // Already on home page, scroll to top
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      // Navigate to home, scroll to top will happen via Navigation component's useEffect
      navigate('/');
    }
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
        // Navigate to home with hash, then scroll will happen via Navigation component's useEffect
        navigate('/' + hash);
      }
    } else if (href.startsWith('/')) {
      // Handle route navigation using React Router
      navigate(href);
    }
  };

  return (
    <footer className="bg-muted/30 border-t border-border">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <Link 
            to="/" 
            onClick={handleHomeClick}
            className="flex items-center gap-3"
          >
            <img src={logo} alt="Avidys" className="h-24 w-auto" />
          </Link>

          <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
            {navLinks.map((link) => (
              link.external ? (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  {link.label}
                </a>
              ) : link.href === '/' ? (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={handleHomeClick}
                  className="hover:text-primary transition-colors"
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
                  className="hover:text-primary transition-colors"
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => {
                    window.scrollTo({ top: 0, behavior: "instant" });
                  }}
                  className="hover:text-primary transition-colors"
                >
                  {link.label}
                </Link>
              )
            ))}
          </div>

          <div className="flex flex-col items-center md:items-end gap-2 text-sm text-muted-foreground">
            <Link
              to="/Privacy-Policy"
              className="hover:text-primary transition-colors"
            >
              Privacy Policy
            </Link>
            <div>
              © {currentYear} Avidys. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
