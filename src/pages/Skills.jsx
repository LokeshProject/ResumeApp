import PageWrapper from "../components/PageWrapper";
import SectionTitle from "../components/SectionTitle";
import { resumeData } from "../data/resumeData";
import { motion } from "framer-motion";
import { FaReact, FaMobile, FaServer, FaDatabase, FaTools, FaPlug, FaRobot, FaCloudUploadAlt } from "react-icons/fa";

const getSkillIcon = (title) => {
  const iconMap = {
    "Frontend": <FaReact className="text-4xl text-blue-400" />,
    "Mobile Development": <FaMobile className="text-4xl text-purple-400" />,
    "Backend": <FaServer className="text-4xl text-green-400" />,
    "Database": <FaDatabase className="text-4xl text-orange-400" />,
    "Developer Tools": <FaTools className="text-4xl text-cyan-400" />,
    "APIs & Integrations": <FaPlug className="text-4xl text-pink-400" />,
    "AI Tools": <FaRobot className="text-4xl text-indigo-400" />,
    "Deployment": <FaCloudUploadAlt className="text-4xl text-teal-400" />,
  };
  return iconMap[title] || null;
};

function SkillCard({ title, items }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -8 }}
      viewport={{ once: true }}
      className="group p-6 rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] hover:border-white/30 transition-all duration-300 card-hover relative overflow-hidden"
    >
      {/* Gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      <div className="relative z-10">
        <div className="flex items-center gap-3 mb-4">
          {getSkillIcon(title)}
          <h3 className="text-lg font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all">
            {title}
          </h3>
        </div>
        <div className="flex flex-wrap gap-2">
          {items.map((s) => (
            <motion.span
              key={s}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05 }}
              className="px-3 py-1.5 rounded-full bg-gradient-to-r from-white/10 to-white/5 border border-white/20 text-sm text-white/90 hover:text-white transition-all hover:border-white/40 hover:from-white/15 hover:to-white/10"
            >
              {s}
            </motion.span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function Skills() {
  const s = resumeData.skills;
  
  const skillsArray = [
    { title: "Frontend", items: s.frontend },
    { title: "Mobile Development", items: s.mobile },
    { title: "Backend", items: s.backend },
    { title: "Database", items: s.database },
    { title: "Developer Tools", items: s.tools },
    { title: "APIs & Integrations", items: s.integrations },
    { title: "AI Tools", items: s.aiTools },
    { title: "Deployment", items: s.deployment },
  ];

  return (
    <PageWrapper>
      <div className="max-w-6xl mx-auto">
        <SectionTitle title="Skills" subtitle="Technologies & expertise that power my projects" />

        <motion.div
          className="grid md:grid-cols-2 gap-6 mt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          {skillsArray.map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: index * 0.05 }}
              viewport={{ once: true }}
            >
              <SkillCard title={skill.title} items={skill.items} />
            </motion.div>
          ))}
        </motion.div>

        {/* Skills Summary Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 p-8 rounded-2xl border border-white/10 bg-gradient-to-r from-blue-500/5 to-purple-600/5 backdrop-blur-xl"
        >
          <h3 className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
            Expertise Highlights
          </h3>
          <div className="grid md:grid-cols-3 gap-6 text-white/80 text-sm leading-relaxed">
            <p>✨ <span className="text-white font-semibold">Full-Stack Development:</span> React, React Native, Node.js, and beyond</p>
            <p>🚀 <span className="text-white font-semibold">App Deployment:</span> Published apps on App Store & Play Store</p>
            <p>🤖 <span className="text-white font-semibold">AI Integration:</span> OpenAI, Deepgram, TensorFlow, and modern AI tools</p>
          </div>
        </motion.div>
      </div>
    </PageWrapper>
  );
}
