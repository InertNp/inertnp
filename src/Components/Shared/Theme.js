export const containerVariant = {
  hidden: {
    opacity: 0,
    y: "100vh",
  },
  visible: {
    opacity: 1,
    y: "0vh",
    transition: { duration: 0.5 },
  },
  exit: {
    y: "100vh",
    transition: { duration: 1, ease: "easeInOut" },
  },
};
