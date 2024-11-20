import React, { useState, useRef, useLayoutEffect } from 'react';

const DynamicWidthDiv = () => {
  const [width, setWidth] = useState(0);
  const divRef = useRef(null);

  const updateWidth = () => {
    if (divRef.current) {
      setWidth(divRef.current.offsetWidth);
    }
  };
  
  useLayoutEffect(() => {
    
    updateWidth();
    window.addEventListener('resize', updateWidth);

    return () => {
      window.removeEventListener('resize', updateWidth);
    };
  }, []);

  return (
    <div
      ref={divRef}
      style={{
        border: '1px solid black',
        padding: '10px',
        textAlign: 'center',
      }}
    >
      Width: {width}px
    </div>
  );
};

export default DynamicWidthDiv;
