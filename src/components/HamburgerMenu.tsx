'use client';

// import Link from 'next/link';
// import { usePathname } from 'next/navigation';
import StyledLink from './StyledLink';


interface HamburgerMenuProps {
  isOpen: boolean;
  onClose: () => void;
  navLinks: { href: string; label: string }[];
}

const HamburgerMenu: React.FC<HamburgerMenuProps> = ({ isOpen, onClose, navLinks }) => {
  // const pathname = usePathname();

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 top-[4.5rem] bg-black/30 backdrop-blur-sm z-40"
          onClick={onClose}
          aria-hidden="true"
        ></div>
      )}
      <div
        className={`fixed top-0 right-0 h-screen max-w-[15rem] w-auto z-50 transform transition-transform duration-[500ms] ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="h-[4.5rem] bg-transparent"></div>
        <div className="h-[calc(100vh-4.5rem)] bg-black/80 text-white">
          <button
            className="absolute top-4 right-4 flex items-center justify-center w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 transition"
            onClick={onClose}
            aria-label="Close navigation"
          >
            <span className="block relative w-6 h-6">
              <span className="absolute w-[24px] h-[2px] bg-white rounded-lg rotate-45 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
              <span className="absolute w-[18px] h-[2px] bg-white rounded-lg -rotate-45 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
            </span>
          </button>
          <ul className="flex flex-col space-y-6 px-6 pt-6">
            {navLinks.map((link) => (
              <li key={link.href}>
                <StyledLink href={link.href} className="text-lg" onClick={onClose}>
                  {link.label}
                </StyledLink>
                {/* <Link
                  href={link.href}
                  className={`inline-block text-lg transform-gpu origin-bottom transition-transform duration-300 ease-out hover:scale-125 hover:text-vintage-accent ${
                    pathname === link.href ? 'text-vintage-accent font-bold underline' : ''
                  }`}
                  onClick={onClose}
                >
                  {link.label}
                </Link> */}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default HamburgerMenu;
