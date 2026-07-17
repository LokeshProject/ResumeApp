import { motion, useReducedMotion } from "framer-motion";

export default function PageWrapper({ children, className = "" }) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.main
      initial={reduceMotion ? false : { opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: reduceMotion ? 0 : 0.45, ease: [0.22, 1, 0.36, 1] }}
      className={`min-h-[calc(100vh-72px)] pb-16 pt-8 md:pt-12 ${className}`}
    >
      {children}
    </motion.main>
  );
}
