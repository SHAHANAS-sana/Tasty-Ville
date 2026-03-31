'use client';

import { useEffect } from 'react';

export default function Navbar() {
  useEffect(() => {
    // Suppress fdprocessedid attribute warning
    const handleAttributeWarning = () => {
      const elements = document.querySelectorAll('[fdprocessedid]');
      elements.forEach(el => {
        el.removeAttribute('fdprocessedid');
      });
    };

    handleAttributeWarning();
    window.addEventListener('load', handleAttributeWarning);

    return () => window.removeEventListener('load', handleAttributeWarning);
  }, []);

  return (
    <nav>
      {/* Your navbar content */}
      <button>Your Button</button>
    </nav>
  );
}
