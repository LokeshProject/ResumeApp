import PageWrapper from "../components/PageWrapper";
import SectionTitle from "../components/SectionTitle";
import { resumeData } from "../data/resumeData";
import { motion } from "framer-motion";
import { FaBriefcase, FaCheckCircle } from "react-icons/fa";

export default function Experience() {
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
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <PageWrapper>
      <div className="max-w-6xl mx-auto">
        <SectionTitle title="Experience" subtitle="Professional roles and key responsibilities" />

        <motion.div
          className="space-y-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {resumeData.experience.map((exp, index) => (
            <motion.div
              key={exp.title}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className="group p-8 rounded-2xl border border-white/10 bg-gradient-to-r from-white/5 to-white/[0.02] hover:border-white/30 transition-all duration-300 card-hover relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative z-10">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white">
                      <FaBriefcase className="text-xl" />
                    </div>
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all">
                        {exp.title}
                      </h3>
                      <p className="text-white/70 mt-1 font-medium">{exp.company}</p>
                    </div>
                  </div>
                  <motion.div
                    className="px-4 py-2 rounded-lg bg-gradient-to-r from-blue-500/20 to-purple-600/20 border border-white/10 whitespace-nowrap text-white/90 text-sm font-semibold"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    {exp.period}
                  </motion.div>
                </div>

                <motion.ul
                  className="space-y-3 ml-0 md:ml-16"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.1 }}
                >
                  {exp.points.map((p, idx) => (
                    <motion.li
                      key={p}
                      className="flex items-start gap-3 text-white/70 group-hover:text-white/90 transition-colors"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 + idx * 0.05 }}
                    >
                      <FaCheckCircle className="text-green-400 mt-1 flex-shrink-0" />
                      <span>{p}</span>
                    </motion.li>
                  ))}
                </motion.ul>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </PageWrapper>
  );
}
