'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

const NavbarLayoutContext = createContext({
  isHorizontal: true,
  toggleLayout: () => {},
});

interface NavbarLayoutProviderProps {
    children: ReactNode; // Correctly type the children prop
  }

export const NavbarLayoutProvider = ({ children }: NavbarLayoutProviderProps) => {
  const [isHorizontal, setIsHorizontal] = useState(true);

  useEffect(() => {
    const savedLayout = localStorage.getItem('navbarLayout');
    if (window.innerWidth < 640) {
      setIsHorizontal(true); // Force horizontal layout for small screens
    } else if (savedLayout) {
      setIsHorizontal(savedLayout === 'horizontal');
    }
  }, []);

  const toggleLayout = () => {
    const newLayout = !isHorizontal;
    setIsHorizontal(newLayout);
    localStorage.setItem('navbarLayout', newLayout ? 'horizontal' : 'vertical');
  };

  return (
    <NavbarLayoutContext.Provider value={{ isHorizontal, toggleLayout }}>
      {children}
    </NavbarLayoutContext.Provider>
  );
};

export const useNavbarLayout = () => useContext(NavbarLayoutContext);
