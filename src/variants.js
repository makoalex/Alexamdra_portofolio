export const fadeIn = (direction, delay) => {
    return {
      hidden: {
        y: direction === 'up' ? 100 : direction === 'down' ? -70 : 0,
        opacity: 0,
        x: direction === 'left' ? 80 : direction === 'right' ? -70 : 0,
      },
      show: {
        y: 0,
        x: 0,
        opacity: 1,
        transition: {
          type: 'tween',
          duration: 1.4,
          delay: delay,
          ease: [0.25, 0.25, 0.25, 0.75],
        },
      },
    };
  };
  