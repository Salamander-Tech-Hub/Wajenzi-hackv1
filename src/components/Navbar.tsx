import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Menu from "../data/Menu";
import ThemeButton from "./ThemeButton";
import salamanderLogo from "../assets/salamanderlogo.jpeg";

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-gray-900/95 backdrop-blur-md border-b border-white/10' 
        : 'bg-black/80 backdrop-blur-md border-b border-white/10'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center">
              <img
                src={salamanderLogo}
                alt="Salamander Tech Hub logo"
                className="h-14 w-auto object-contain"
              />
            </Link>
          </div>

          {/* Navigation Menu */}
          <nav aria-label="Main Navigation" className="hidden md:flex space-x-10">
            {Menu.map((item, index) => (
              <Link
                key={index}
                to={item.path}
                className="text-base font-semibold text-gray-200 hover:text-yellow-300 transition-colors duration-200"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Inquire Button */}
          <div className="flex items-center">
            <ThemeButton to="/contact" variant="primary">Inquire</ThemeButton>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
