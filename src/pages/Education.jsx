import PageWrapper from "../components/PageWrapper";
import SectionTitle from "../components/SectionTitle";
import { resumeData } from "../data/resumeData";
import { motion } from "framer-motion";
import { FaGraduationCap, FaAward } from "react-icons/fa";

export default function Education() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <PageWrapper>
      <div className="max-w-6xl mx-auto">
        <SectionTitle title="Education" subtitle="Academic qualifications and achievements" />

        <motion.div
          className="grid md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {resumeData.education.map((e) => (
            <motion.div
              key={e.degree}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className="group p-8 rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] hover:border-white/30 transition-all duration-300 card-hover relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative z-10">
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white">
                    <FaGraduationCap className="text-2xl" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all">
                      {e.degree}
                    </h3>
                    <p className="text-white/70 mt-1 font-medium">{e.institute}</p>
                  </div>
                </div>

                <div className="space-y-3 ml-0 md:ml-16">
                  <motion.div
                    className="flex items-center gap-2 text-white/60 text-sm"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.1 }}
                  >
                    <span className="text-blue-400">📅</span>
                    <span>{e.period}</span>
                  </motion.div>

                  <motion.div
                    className="flex items-center gap-2 text-white/80 font-semibold"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.15 }}
                  >
                    <FaAward className="text-yellow-400" />
                    <span>{e.score}</span>
                  </motion.div>

                  {e.extra && (
                    <motion.p
                      className="text-white/60 text-sm italic"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.2 }}
                    >
                      {e.extra}
                    </motion.p>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </PageWrapper>
  );
}
