"use client";

import React, { useEffect, useRef } from "react";

const AutoScroll: React.FC<{
  children: React.ReactNode;
  speed?: number; // Optional speed parameter
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

      const interval = setInterval(scroll, speed); // Adjust speed here

      return () => clearInterval(interval); // Cleanup on unmount
    }
  }, [speed]);

  return (
    <div
      ref={scrollRef}
      className="overflow-y-auto h-full w-full"
      style={{
        maxHeight: "300px", // Adjust container height if needed
        scrollbarWidth: "none", // Hide scrollbar in Firefox
        msOverflowStyle: "none", // Hide scrollbar in Internet Explorer/Edge
        overscrollBehavior: "contain", // Prevent bounce effects
      }}
    >
      {children}
    </div>
  );
};

export default AutoScroll;
