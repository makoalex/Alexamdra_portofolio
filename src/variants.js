export const fadeIn = (direction, delay) => {
  return {
    hidden: {
      y: direction === "up" ? 60 : direction === "down" ? -60 : 0,
      opacity: 0,
      x: direction === "left" ? 60 : direction === "right" ? -60 : 0,
    },
    show: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        type: "tween",
        duration: 1.4,
        delay: delay,
        ease: [0.25, 0.25, 0.25, 0.75],
      },
    },
  };
};


export const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,

  },
  animate: (index) => ({
    opacity: 1,
    y: 0,
   
    transition: {
      delay: 0.1* index,
    },
  }),
};
