export const cardVariants = {
  hidden: (direction: 'left' | 'right' | 'bottom') => ({
    opacity: 0,
    x: direction === 'left' ? -100 : direction === 'right' ? 100 : 0,
    y: direction === 'bottom' ? 100 : 0,
  }),
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      type: 'spring',
      duration: 3.8,
      ease: 'easeInOut',
    },
  },
};
