import { Link, useLocation } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';
import { Menu, X, ChevronDown } from 'lucide-react';
import React, { useState, useEffect } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const location = useLocation();

  const handleHomeClick = (e: React.MouseEvent) => {
    if (location.pathname === '/') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    { name: "rental packages", path: "/services/rental-packages" },
    { name: "weddings", path: "/services/weddings" },
    { name: "live shows & full production", path: "/services/live-shows-full-production" },
    { name: "cultural events", path: "/services/cultural-events" },
    { name: "corporate", path: "/services/corporate-events" },
    { name: "parties & social events", path: "/services/parties-social-events" }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 dark:bg-black/90 backdrop-blur-md py-1 shadow-sm' : 'bg-transparent pt-0 pb-2'}`}>
      <div className="w-full pr-4 md:pr-8 pl-0 flex items-center justify-between relative">
        <Link to="/" onClick={handleHomeClick} className="flex items-center z-10">
          <img 
            src="https://i.postimg.cc/Jn1KMzGt/1.png" 
            alt="Highlight Pro Logo" 
            className="h-16 md:h-20 w-auto object-contain dark:hidden"
            referrerPolicy="no-referrer"
          />
          <img 
            src="https://i.postimg.cc/vBQXbZcG/2.png" 
            alt="Highlight Pro Logo" 
            className="h-16 md:h-20 w-auto object-contain hidden dark:block"
            referrerPolicy="no-referrer"
          />
        </Link>

        {/* Desktop Nav - Centered */}
        <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 items-center gap-12 z-10">
          {location.pathname !== '/' && (
            <Link to="/" className="text-sm font-medium text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white transition-colors uppercase">Home</Link>
          )}
          <div className="relative group">
            <Link to="/services" className="flex items-center gap-1 text-sm font-medium text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white transition-colors uppercase py-2">
              Services <ChevronDown size={14} />
            </Link>
            <div className="absolute top-full left-0 mt-0 w-64 bg-transparent opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 flex flex-col py-2">
              {services.map((s, i) => (
                <Link key={i} to={s.path} className="px-4 py-2 text-sm font-medium text-zinc-600 dark:text-zinc-300 hover:text-orange-600 dark:hover:text-orange-400 transition-colors capitalize drop-shadow-md">
                  {s.name}
                </Link>
              ))}
            </div>
          </div>

          <Link to="/projects" className="text-sm font-medium text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white transition-colors uppercase">Projects</Link>
          <Link to="/gallery" className="text-sm font-medium text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white transition-colors uppercase">Gallery</Link>
          <Link to="/about" className="text-sm font-medium text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white transition-colors uppercase">About Us</Link>
        </div>

        {/* Right Actions */}
        <div className="hidden md:flex items-center gap-6 z-10">
          <ThemeToggle />
          <Link to="/contact" className="text-orange-700 dark:text-orange-500 font-bold uppercase tracking-widest hover:text-orange-800 dark:hover:text-orange-400 transition-colors text-sm">
            Contact Us
          </Link>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center gap-4 z-10">
          <ThemeToggle />
          <button onClick={() => setIsOpen(!isOpen)} className="text-zinc-900 dark:text-white">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white dark:bg-black border-t border-zinc-200 dark:border-zinc-800 p-6 flex flex-col gap-4 shadow-xl max-h-[80vh] overflow-y-auto">
          {location.pathname !== '/' && (
            <Link to="/" onClick={() => setIsOpen(false)} className="text-lg font-medium text-zinc-900 dark:text-white uppercase">Home</Link>
          )}
          <Link to="/about" onClick={() => setIsOpen(false)} className="text-lg font-medium text-zinc-900 dark:text-white uppercase">About Us</Link>
          <Link to="/projects" onClick={() => setIsOpen(false)} className="text-lg font-medium text-zinc-900 dark:text-white uppercase">Projects</Link>
          <Link to="/gallery" onClick={() => setIsOpen(false)} className="text-lg font-medium text-zinc-900 dark:text-white uppercase">Gallery</Link>

          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <Link to="/services" onClick={() => setIsOpen(false)} className="text-lg font-medium text-zinc-900 dark:text-white uppercase">
                Services
              </Link>
              <button onClick={() => setServicesOpen(!servicesOpen)} className="p-2 text-zinc-900 dark:text-white">
                <ChevronDown size={20} className={`transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
              </button>
            </div>
            {servicesOpen && (
              <div className="flex flex-col pl-4 border-l-2 border-zinc-200 dark:border-zinc-800 gap-3 mt-2">
                {services.map((s, i) => (
                  <Link key={i} to={s.path} onClick={() => setIsOpen(false)} className="text-zinc-600 dark:text-zinc-400 capitalize">
                    {s.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <div className="flex flex-col gap-3 mt-4">
            <Link to="/contact" onClick={() => setIsOpen(false)} className="text-orange-700 dark:text-orange-500 font-bold uppercase tracking-widest hover:text-orange-800 dark:hover:text-orange-400 transition-colors text-center py-3">
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
