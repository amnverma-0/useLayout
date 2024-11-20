import React, { useState, useRef, useLayoutEffect } from 'react';

const StickyHeader = () => {
  const headerRef = useRef(null);
  const [isSticky, setIsSticky] = useState(false);

  useLayoutEffect(() => {
    const handleScroll = () => {
      const header = headerRef.current;
      if (header) {
        setIsSticky(window.scrollY > header.offsetTop);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <header
        ref={headerRef}
        style={{
          position: isSticky ? 'fixed' : 'static',
          top: isSticky ? 0 : 'auto',
          width: '100%',
          backgroundColor: '#fff',
          boxShadow: isSticky ? '0px 2px 5px rgba(0,0,0,0.1)' : 'none',
          zIndex: 1000,
          padding: '10px 20px',
          transition: 'box-shadow 0.3s ease',
        }}
      >
        <h1>Sticky Header</h1>
      </header>
      <main
        style={{
          marginTop: isSticky ? '60px' : '0',
          padding: '20px',
          lineHeight: '1.6',
        }}
      >
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a risus
          et lacus consectetur convallis. Cras feugiat quam vel ex pulvinar
          convallis.
        </p>
        <p>
          Proin nec odio in libero eleifend vehicula non non nulla. Donec sed
          libero eu purus cursus ullamcorper a in massa. Integer ultricies erat
          ut turpis consectetur, quis egestas tortor aliquet.
        </p>
        <p>
          Duis eu ante vitae mi efficitur aliquet. Suspendisse quis turpis
          pharetra, hendrerit odio non, eleifend lorem. Pellentesque habitant
          morbi tristique senectus et netus et malesuada fames ac turpis
          egestas.
        </p>
        {/* Add more content to allow scrolling */}
        {[...Array(50)].map((_, i) => (
          <p key={i}>
            This is filler content to demonstrate scrolling. Line {i + 1}.
          </p>
        ))}
      </main>
    </div>
  );
};

export default StickyHeader;
