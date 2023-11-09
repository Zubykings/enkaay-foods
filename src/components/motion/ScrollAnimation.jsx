import React, { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";

const ScrollAnimation = ({ children }) => {
  const controls = useAnimation();
  const ref = useRef();

  const handleScroll = () => {
    const element = ref.current;
    const elementTop = element.offsetTop;
    const elementHeight = element.offsetHeight;
    const windowHeight = window.innerHeight;
    const scrollY = window.scrollY;

    // Calculate the bottom edge of the element
    const elementBottom = elementTop + elementHeight;

    // Check if the element is completely outside the viewport
    if (elementBottom < scrollY || elementTop > scrollY + windowHeight * 0.1) {
      controls.start({ opacity: 0, y: 50, transition: { duration: 0.5 } });
    } else {
      controls.start({ opacity: 1, y: 0, transition: { duration: 0.5 } });
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return <motion.div ref={ref} initial={{ opacity: 0, y: 50 }} animate={controls}>{children}</motion.div>;
};

export default ScrollAnimation;
