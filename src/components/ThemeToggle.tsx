'use client';

interface ThemeToggleProps {
  isDarkMode: boolean;
  onToggle: () => void;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ isDarkMode, onToggle }) => {
  return (
    <button
      className="text-white w-8 h-8 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition duration-700 ease-out"
      onClick={onToggle}
    >
      {isDarkMode ? '🌙' : '🌞'}
    </button>
  );
};

export default ThemeToggle;
