'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import HamburgerMenu from '../HamburgerMenu';
import Notification from '../Notification';
import ThemeToggle from '../ThemeToggle';
// import { usePathname } from 'next/navigation';
import { navLinks } from './NavLinks'; // Import shared navLinks
import StyledLink from '../StyledLink';
import { useNavbarLayout } from '../../context/NavbarLayoutContext';

import { BsArrowsAngleContract, BsArrowsAngleExpand } from 'react-icons/bs';



export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [notification, setNotification] = useState('');
  const [pendingTheme, setPendingTheme] = useState<boolean | null>(null);
  const { isHorizontal, toggleLayout } = useNavbarLayout();

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const shouldEnableDark = savedTheme === 'dark' || (!savedTheme && prefersDark);
    // const savedLayout = localStorage.getItem('navbarLayout');
    // if (savedTheme) {
    //   setIsHorizontal(savedLayout === 'horizontal');
    // }

    setIsDarkMode(shouldEnableDark);
    document.documentElement.classList.toggle('dark', shouldEnableDark);

    // const handleResize = () => {
    //   if(window.innerWidth < 640){
    //     toggleLayout(true);
    //   } else {
    //     const savedLayout = localStorage.getItem('navbarLayout');
    //     if (savedLayout) {
    //       setIsHorizontal(savedLayout === 'horizontal');
    //     }
    //   }
    // };

    // handleResize();

    // window.addEventListener('resize', handleResize);

    // return () => {
    //   window.removeEventListener('resize', handleResize);
    // };
  }, []);

  const handleThemeToggle = () => {
    const newTheme = !isDarkMode;
    setPendingTheme(newTheme);
    setNotification("Hold on! This feature might be buggy. Are you sure you want to proceed? 🛠️");
  };

  // const toggleLayout = () => {
  //   setIsHorizontal(!isHorizontal);
  //   localStorage.setItem('navbarLayout', !isHorizontal ? 'horizontal' : 'vertical');
  // };

  const confirmThemeToggle = () => {
    if (pendingTheme !== null) {
      setIsDarkMode(pendingTheme);
      localStorage.setItem('theme', pendingTheme ? 'dark' : 'light');
      document.documentElement.classList.toggle('dark', pendingTheme);
      setNotification('');
      setPendingTheme(null);
    }
  };

  const cancelThemeToggle = () => {
    setNotification('');
    setPendingTheme(null);
  };

  // const pathname = usePathname();

  return (
    <>
      <header className="fixed top-0 w-full z-50 bg-white/5 backdrop-blur-lg border-b border-gray-800 py-4 dark:bg-black/5">
        <nav className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          {/* Logo */}
          <div className="text-lg md:text-xl font-bold">
            <Link
              href="/"
              className="transform-gpu origin-bottom transition duration-300 ease-out hover:scale-150 hover:text-vintage-accent"
            >
              Vinay Danepalli
            </Link>
          </div>

          {/* Navigation Links and Theme Toggle */}

          {isHorizontal ? (
            <div className="hidden sm:flex sm:space-x-6 items-center">
              {navLinks.map((link) => (
                <StyledLink key={link.href} href={link.href}>
                  {link.label}
                </StyledLink>
              ))}
              <ThemeToggle isDarkMode={isDarkMode} onToggle={handleThemeToggle} />
            </div>
          ) : (
            <div className="fixed top-[10.5rem] right-0 w-48 bg-black/10 text-white flex flex-col items-center justify-center space-y-4 py-6">
              {navLinks.map((link) => (
                <StyledLink key={link.href} href={link.href} className="text-lg">
                  {link.label}
                </StyledLink>
              ))}
              <ThemeToggle isDarkMode={isDarkMode} onToggle={handleThemeToggle} />
            </div>
          )}

          {/* Hamburger Menu and Theme Toggle for Small Screens */}
          <div className={`flex items-center space-x-4 sm:hidden ${menuOpen ? 'hidden' : ''}`}>
            <ThemeToggle isDarkMode={isDarkMode} onToggle={handleThemeToggle} />
            <button
              className="text-white relative z-50"
              onClick={() => setMenuOpen(true)}
              aria-label="Open navigation"
            >
              <div className="w-6 h-0.5 bg-white mb-1 transition-all duration-300" />
              <div className="w-6 h-0.5 bg-white mb-1 transition-all duration-300" />
              <div className="w-6 h-0.5 bg-white transition-all duration-300" />
            </button>
          </div>
        </nav>
      </header>

      {/* Hamburger Menu */}
      <HamburgerMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} navLinks={navLinks} />

      {/* Notification */}
      {notification && (
        <Notification
          message={notification}
          onConfirm={confirmThemeToggle}
          onCancel={cancelThemeToggle}
        />
      )}

      {/* Fixed Button: Switch to Vertical/Horizontal */}
      <div className="fixed bottom-4 right-4 z-50">
        <button
          onClick={toggleLayout}
          className="sm:block hidden lg:flex items-center gap-2 bg-vintage-accent/10 text-black font-bold px-2 py-1 rounded-lg shadow-md hover:bg-vintage-accent/90 transition-transform transform-gpu hover:scale-125 duration-500 text-center"
          aria-label={`Switch to ${isHorizontal ? 'Vertical' : 'Horizontal'} Layout`}
          title={`Switch to ${isHorizontal ? 'Vertical' : 'Horizontal'} Layout`}
        >
          {isHorizontal ? (
            <>
              <BsArrowsAngleContract /> Switch to Vertical
            </>
          ) : (
            <>
              <BsArrowsAngleExpand /> Switch to Horizontal
            </>
          )}
        </button>
      </div>
    </>
  );
}