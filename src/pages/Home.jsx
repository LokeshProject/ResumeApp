import PageWrapper from "../components/PageWrapper";
import { resumeData } from "../data/resumeData";
import { motion } from "framer-motion";
import profile from "../assets/lokesh.jpg";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

export default function Home() {
  return (
    <PageWrapper>
      <motion.div
        className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants}>
          <motion.p
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="text-white/70 text-sm uppercase tracking-widest font-medium"
          >
            👋 Welcome to my portfolio
          </motion.p>

          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl font-extrabold mt-4 leading-tight bg-gradient-primary"
          >
            {resumeData.name}
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 mt-4 font-semibold"
          >
            {resumeData.role}
          </motion.p>

          <motion.p
            variants={itemVariants}
            className="text-white/60 mt-6 leading-relaxed text-base md:text-lg"
          >
            {resumeData.summary}
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="mt-8 flex gap-3 flex-wrap"
          >
            <motion.a
              href="/projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="px-6 py-3 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold hover:shadow-lg hover:shadow-purple-500/50 transition-all"
            >
              View Projects
            </motion.a>
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="px-6 py-3 rounded-2xl border-2 border-white/30 text-white hover:border-white/60 hover:bg-white/10 transition-all font-semibold"
            >
              Get In Touch
            </motion.a>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="mt-10 flex items-center gap-8"
          >
            <div>
              <p className="text-white/50 text-sm">📍 Location</p>
              <p className="text-white font-semibold">{resumeData.location}</p>
            </div>
            <div className="w-px h-12 bg-white/20" />
            <div className="flex gap-4">
              <motion.a
                href={`mailto:${resumeData.email}`}
                whileHover={{ scale: 1.2 }}
                className="text-2xl text-white/70 hover:text-white/100 transition-colors"
              >
                <FaEnvelope />
              </motion.a>
              <motion.a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.2 }}
                className="text-2xl text-white/70 hover:text-white/100 transition-colors"
              >
                <FaLinkedin />
              </motion.a>
              <motion.a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.2 }}
                className="text-2xl text-white/70 hover:text-white/100 transition-colors"
              >
                <FaGithub />
              </motion.a>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="relative"
        >
          <motion.div
            className="absolute -inset-3 rounded-[40px] bg-gradient-to-r from-blue-500/30 to-purple-600/30 blur-3xl"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 4, repeat: Infinity }}
          />
          <motion.div
            className="absolute -inset-1 rounded-[40px] bg-gradient-to-r from-blue-500/20 to-purple-600/20 blur-xl"
            animate={{ scale: [1.05, 1, 1.05] }}
            transition={{ duration: 3, repeat: Infinity }}
          />
          <div className="relative rounded-[40px] border-2 border-white/20 bg-white/5 backdrop-blur-xl p-4 card-hover shadow-2xl">
            <img
              src={profile}
              alt="Lokesh Das"
              className="w-full max-w-md mx-auto rounded-[30px] shadow-lg"
            />
          </div>
          <motion.div
            className="absolute top-0 right-0 text-4xl opacity-20"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            ✨
          </motion.div>
        </motion.div>
      </motion.div>
    </PageWrapper>
  );
}
