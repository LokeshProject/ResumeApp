import { motion } from "framer-motion";

export default function PageWrapper({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      exit={{ opacity: 0, y: -10, filter: "blur(6px)" }}
      transition={{ duration: 0.5 }}
      className="min-h-[calc(100vh-80px)] px-5 md:px-10 py-10"
    >
      {children}
    </motion.div>
  );
}
