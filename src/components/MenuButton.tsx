'use client'

interface MenuButtonProps {
  isOpen: boolean;
  onClick: () => void;
}

export function MenuButton({ isOpen, onClick }: MenuButtonProps) {
  return (
    <button
      onClick={onClick}
      className="lg:hidden p-2 focus:outline-none"
      aria-label={isOpen ? "Close menu" : "Open menu"}
    >
      <div className="w-6 h-5 relative flex flex-col justify-between">
        <span className={`w-full h-0.5 bg-theme-primary transform transition-all duration-300 ${
          isOpen ? 'rotate-45 translate-y-2' : ''
        }`} />
        <span className={`w-full h-0.5 bg-theme-primary transition-all duration-300 ${
          isOpen ? 'opacity-0' : ''
        }`} />
        <span className={`w-full h-0.5 bg-theme-primary transform transition-all duration-300 ${
          isOpen ? '-rotate-45 -translate-y-2' : ''
        }`} />
      </div>
    </button>
  );
} 