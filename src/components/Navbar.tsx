import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const navLinks = [
    { name: 'About', href: '#hero' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
    { name: 'My Feeds', href: '/feeds' },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (location.pathname === '/' && location.hash) {
      const element = document.querySelector(location.hash);
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    }
  }, [location]);

  const handleNavClick = (e: React.MouseEvent, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      setIsOpen(false);
      if (location.pathname !== '/') {
        navigate(`/${href}`);
      } else {
        const element = document.querySelector(href);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      setIsOpen(false);
    }
  };

  return (
    <>
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-sm shadow-sm border-b border-slate-200'
            : 'bg-white/80 backdrop-blur-sm'
        }`}
      >
        <div className="container mx-auto px-6 md:px-16 py-4 flex justify-between items-center">
          <div className="text-xl font-bold text-blue-600 tracking-tight">
            RFA
          </div>
          <nav className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href.startsWith('#') ? `/${link.href}` : link.href}
                className="px-3 py-2 text-sm font-medium text-slate-600 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors duration-200"
                onClick={(e) => handleNavClick(e, link.href)}
              >
                {link.name}
              </Link>
            ))}
          </nav>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-slate-600 hover:text-blue-600 transition-colors p-1"
            aria-label="Toggle menu"
          >
            {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
          </button>
        </div>
      </header>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-40 md:hidden"
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="fixed top-0 right-0 h-full w-3/4 max-w-xs bg-white shadow-xl z-50 md:hidden"
            >
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-5 right-5 text-slate-500 hover:text-slate-800 transition-colors"
              >
                <FaTimes size={20} />
              </button>
              <nav className="flex flex-col items-center justify-center h-full space-y-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.href.startsWith('#') ? `/${link.href}` : link.href}
                    className="text-xl font-medium text-slate-700 hover:text-blue-600 transition-colors"
                    onClick={(e) => handleNavClick(e, link.href)}
                  >
                    {link.name}
                  </Link>
                ))}
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
