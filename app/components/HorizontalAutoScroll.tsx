"use client";

import React, { useEffect, useRef } from "react";

const HorizontalAutoScroll: React.FC<{
  children: React.ReactNode;
  speed?: number; // Speed for scrolling
}> = ({ children, speed = 50 }) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = scrollRef.current;

    if (element) {
        const scroll = () => {
          // Perform vertical scrolling
          element.scrollBy({ top: 1, behavior: "smooth" });
  
          // Check if close to the bottom and reset
          if (element.scrollTop + element.clientHeight >= element.scrollHeight - 2) {
            element.scrollTo({ top: 0, behavior: "instant" });
          }
        };

      const interval = setInterval(scroll, speed);

      return () => clearInterval(interval); // Cleanup on unmount
    }
  }, [speed]);

  return (
    <div
      ref={scrollRef}
      className="overflow-x-auto w-full"
      style={{
        whiteSpace: "nowrap", // Prevent wrapping of children
        scrollbarWidth: "none", // Hide scrollbar for Firefox
        msOverflowStyle: "none", // Hide scrollbar for IE/Edge
        overscrollBehavior: "contain", // Prevent bounce effects
      }}
    >
      {children}
    </div>
  );
};

export default HorizontalAutoScroll;
