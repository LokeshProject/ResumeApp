import PageWrapper from "../components/PageWrapper";
import SectionTitle from "../components/SectionTitle";
import { resumeData } from "../data/resumeData";
import { motion } from "framer-motion";
import { FaMedal } from "react-icons/fa";

export default function Certifications() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <PageWrapper>
      <div className="max-w-6xl mx-auto">
        <SectionTitle title="Certifications" subtitle="Professional credentials and achievements" />

        <motion.div
          className="space-y-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {resumeData.certifications.map((c, index) => (
            <motion.div
              key={c}
              variants={itemVariants}
              whileHover={{ x: 10 }}
              className="group p-6 rounded-2xl border border-white/10 bg-gradient-to-r from-white/5 to-white/[0.02] hover:border-white/30 transition-all duration-300 card-hover flex items-start gap-4 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/10 to-orange-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative z-10 flex items-start gap-4 w-full">
                <motion.div
                  className="p-3 rounded-lg bg-gradient-to-r from-yellow-500 to-orange-600 text-white flex-shrink-0"
                  initial={{ scale: 0.8 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: 0.1 }}
                >
                  <FaMedal className="text-xl" />
                </motion.div>
                <motion.p
                  className="text-white/90 group-hover:text-white transition-colors font-medium text-lg leading-relaxed"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.15 }}
                >
                  {c}
                </motion.p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Achievements Counter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 p-8 rounded-2xl border border-white/10 bg-gradient-to-r from-blue-500/10 to-purple-600/10 text-center"
        >
          <div className="text-4xl font-bold bg-gradient-to-r from-yellow-400 to-orange-400 text-transparent bg-clip-text">
            {resumeData.certifications.length}+
          </div>
          <p className="text-white/70 mt-2 text-lg font-medium">Professional Certifications & Courses</p>
        </motion.div>
      </div>
    </PageWrapper>
  );
}
