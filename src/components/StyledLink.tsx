'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface StyledLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string; // Optional additional classes
  onClick?: () => void; // Optional onClick handler
}

const StyledLink: React.FC<StyledLinkProps> = ({ href, children, className = '', onClick }) => {
  const pathname = usePathname();

  // Define base styles
  const baseStyles = `inline-block transform-gpu origin-bottom transition-transform duration-300 ease-out hover:scale-150 hover:text-vintage-accent hover:bg-white/4 px-2 py-1 rounded`;

  // Check if the current pathname matches the link's href
  const isActive = pathname === href;
  const activeStyles = isActive ? 'text-vintage-accent font-bold underline' : '';

  return (
    <Link href={href} onClick={onClick} className={`${baseStyles} ${activeStyles} ${className}`}>
      {children}
    </Link>
  );
};

export default StyledLink;
