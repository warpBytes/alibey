'use client';

import { useState } from 'react';

const CookieBanner = () => {
  const [isVisible, setIsVisible] = useState(true);

  const handleDismiss = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-foreground bg-background">
      <div className="content-wrapper flex items-center justify-between py-6">
        <p className="text-sm text-neutral600">
          This website uses essential cookies set by external providers to
          ensure proper functionality.
          <br />
          By continuing to use this site, you accept their use.
        </p>
        <button
          onClick={handleDismiss}
          className="ml-4 h-[30px] border-b border-foreground text-foreground"
        >
          Dismiss
        </button>
      </div>
    </div>
  );
};

export default CookieBanner;
