
import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-black py-8 border-t border-gray-900 text-center text-gray-600 text-xs uppercase tracking-widest">
      &copy; {currentYear} Zenith Digital. Excellence in Visuals.
    </footer>
  );
};

export default Footer;
