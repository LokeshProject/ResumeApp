import PageWrapper from "../components/PageWrapper";
import SectionTitle from "../components/SectionTitle";
import { resumeData } from "../data/resumeData";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Contact() {
  const contactMethods = [
    { icon: FaEnvelope, label: "Email", value: resumeData.email, link: `mailto:${resumeData.email}`, color: "from-blue-500 to-cyan-500" },
    { icon: FaPhone, label: "Phone", value: resumeData.phone, link: `tel:${resumeData.phone}`, color: "from-green-500 to-emerald-500" },
    { icon: FaPhone, label: "WP Phone", value: resumeData.wpPhone || resumeData.phone, link: `tel:${resumeData.wpPhone || resumeData.phone}`, color: "from-emerald-500 to-lime-400" },
    { icon: FaMapMarkerAlt, label: "Location", value: resumeData.location, link: null, color: "from-purple-500 to-pink-500" },
  ];

  return (
    <PageWrapper>
      <div className="max-w-6xl mx-auto">
        <SectionTitle title="Contact" subtitle="Let's collaborate and create something amazing" />

        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {contactMethods.map((method, index) => {
              const Icon = method.icon;
              return (
                <motion.a
                  key={method.label}
                  href={method.link || "#"}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ x: 10 }}
                  className="group p-6 rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] hover:border-white/30 transition-all duration-300 card-hover relative overflow-hidden"
                >
                  <div className={`absolute inset-0 bg-gradient-to-r ${method.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                  <div className="relative z-10 flex items-start gap-4">
                    <div className={`p-4 rounded-xl bg-gradient-to-r ${method.color} text-white flex-shrink-0`}>
                      <Icon className="text-2xl" />
                    </div>
                    <div>
                      <p className="text-white/60 text-sm font-medium">{method.label}</p>
                      <p className="text-white font-semibold mt-1 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 transition-all">
                        {method.value}
                      </p>
                    </div>
                  </div>
                </motion.a>
              );
            })}
          </motion.div>

          {/* Right Side Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] card-hover relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10" />
            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-bold text-white leading-tight">
                Let's Connect and Build Something Meaningful
              </h3>

              <p className="mt-4 text-white/75 leading-relaxed">
                I am open to full-time roles, freelance projects, and collaborations in
                React.js, React Native, and modern frontend development.
              </p>

              <div className="mt-6 space-y-4">
                <div className="p-4 rounded-xl border border-white/10 bg-white/5">
                  <p className="text-white font-semibold">Available for</p>
                  <p className="text-white/70 text-sm mt-1">Web apps, mobile apps, UI improvements, and performance optimization.</p>
                </div>
                <div className="p-4 rounded-xl border border-white/10 bg-white/5">
                  <p className="text-white font-semibold">Response Time</p>
                  <p className="text-white/70 text-sm mt-1">Usually within 24 hours via email or phone.</p>
                </div>
                <div className="p-4 rounded-xl border border-white/10 bg-white/5">
                  <p className="text-white font-semibold">Preferred Contact</p>
                  <p className="text-white/70 text-sm mt-1">Email for detailed discussion, phone for quick communication.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Additional CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 p-8 rounded-2xl border border-white/10 bg-gradient-to-r from-blue-500/10 to-purple-600/10 text-center"
        >
          <h3 className="text-2xl font-bold text-white mb-3">
            Let's build something great together! 🚀
          </h3>
          <p className="text-white/70 text-lg">
            Whether you have a question or just want to say hi, feel free to reach out!
          </p>
        </motion.div>
      </div>
    </PageWrapper>
  );
}
