import { useState, useEffect } from 'react';
import { useTheme } from './ThemeProvider';
import { Menu, X, Sun, Moon, Code } from 'lucide-react';
import { LanguageSwitcher } from './LanguageSwitcher';
import { useTranslation } from 'react-i18next';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { t } = useTranslation();

  const linkClassNames =
    "relative text-gray-700 dark:text-gray-300 font-medium transition-colors duration-300 ease-in-out " +
    "hover:text-primary after:absolute after:left-0 after:-bottom-1 after:w-full after:h-[2px] after:bg-primary " +
    "after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform after:duration-300";

  const buttonClassNames = "p-2 rounded-md hover:bg-muted/20 transition-colors duration-300";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 dark:bg-slate-900/90 backdrop-blur-md shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a
            href="#home"
            className="flex items-center space-x-2 text-primary hover:text-primary/80 transition-colors"
          >
            <Code size={28} />
            <span className="font-bold text-xl hidden sm:block">Gerelt-Od</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className={linkClassNames}>
                {t(`nav.${link.name.toLowerCase()}`)}
              </a>
            ))}
            <LanguageSwitcher />
            <button onClick={toggleTheme} className={buttonClassNames} aria-label="Toggle theme">
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden space-x-4">
            <LanguageSwitcher />
            <button onClick={toggleTheme} className={buttonClassNames} aria-label="Toggle theme">
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={buttonClassNames}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-slate-900 shadow-lg">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="py-2 text-base font-medium text-gray-700 dark:text-gray-300 hover:text-primary transition-colors duration-300 relative after:absolute after:left-0 after:-bottom-1 after:w-full after:h-[2px] after:bg-primary after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform after:duration-300"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {t(`nav.${link.name.toLowerCase()}`)}
                </a>
              ))}
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
