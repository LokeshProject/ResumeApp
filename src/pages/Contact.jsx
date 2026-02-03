import PageWrapper from "../components/PageWrapper";
import SectionTitle from "../components/SectionTitle";
import { resumeData } from "../data/resumeData";
import { useState } from "react";
import { FaCheckCircle, FaExclamationCircle, FaSpinner, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState(null);
  const [statusMessage, setStatusMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus("error");
      setStatusMessage("Please fill in all fields!");
      setTimeout(() => setStatus(null), 4000);
      return;
    }

    setStatus("loading");

    // Simulate message sending with a delay
    // To enable real email sending, configure EmailJS:
    // 1. Go to https://www.emailjs.com/
    // 2. Create a free account and get your Service ID, Template ID, and Public Key
    // 3. Replace the placeholder values below with your actual credentials
    
    setTimeout(async () => {
      try {
        // Option 1: Use EmailJS (uncomment and add your credentials)
        /*
        const response = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            service_id: "YOUR_SERVICE_ID",
            template_id: "YOUR_TEMPLATE_ID",
            user_id: "YOUR_PUBLIC_KEY",
            template_params: {
              to_email: resumeData.email,
              from_name: formData.name,
              from_email: formData.email,
              message: formData.message,
            },
          }),
        });
        */

        // Option 2: For now, simulate success
        // Remove this code once you set up EmailJS above
        setStatus("success");
        setStatusMessage("Message saved! I'll get back to you soon 📧");
        setFormData({ name: "", email: "", message: "" });
        
        // Log the message for now
        console.log("Message received:", {
          name: formData.name,
          email: formData.email,
          message: formData.message,
          timestamp: new Date().toISOString(),
        });
        
        setTimeout(() => setStatus(null), 4000);
      } catch (error) {
        console.error("Error sending message:", error);
        setStatus("error");
        setStatusMessage("Network error. Please try again!");
        setTimeout(() => setStatus(null), 4000);
      }
    }, 1500); // Simulate network delay
  };

  const contactMethods = [
    { icon: FaEnvelope, label: "Email", value: resumeData.email, link: `mailto:${resumeData.email}`, color: "from-blue-500 to-cyan-500" },
    { icon: FaPhone, label: "Phone", value: resumeData.phone, link: `tel:${resumeData.phone}`, color: "from-green-500 to-emerald-500" },
    { icon: FaMapMarkerAlt, label: "Location", value: resumeData.location, link: null, color: "from-purple-500 to-pink-500" },
  ];

  return (
    <PageWrapper>
      <div className="max-w-6xl mx-auto">
        <SectionTitle title="Contact" subtitle="Let's collaborate and create something amazing" />

        <div className="grid md:grid-cols-2 gap-8">
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

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] card-hover relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-600/10" />
            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-white mb-6">Send me a Message</h3>
              
              {status === "success" && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-4 p-4 rounded-2xl bg-green-500/20 border border-green-500/50 flex items-center gap-3"
                >
                  <FaCheckCircle className="text-green-400 text-xl flex-shrink-0" />
                  <span className="text-green-300 font-medium">{statusMessage}</span>
                </motion.div>
              )}
              {status === "error" && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-4 p-4 rounded-2xl bg-red-500/20 border border-red-500/50 flex items-center gap-3"
                >
                  <FaExclamationCircle className="text-red-400 text-xl flex-shrink-0" />
                  <span className="text-red-300 font-medium">{statusMessage}</span>
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <motion.input
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileFocus={{ scale: 1.02 }}
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  disabled={status === "loading"}
                  className="w-full px-4 py-3 rounded-2xl bg-white/10 border border-white/20 text-white placeholder:text-white/40 outline-none focus:border-white/40 focus:bg-white/15 transition disabled:opacity-50"
                  placeholder="Your Name"
                />
                <motion.input
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 }}
                  whileFocus={{ scale: 1.02 }}
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  disabled={status === "loading"}
                  className="w-full px-4 py-3 rounded-2xl bg-white/10 border border-white/20 text-white placeholder:text-white/40 outline-none focus:border-white/40 focus:bg-white/15 transition disabled:opacity-50"
                  placeholder="Your Email"
                />
                <motion.textarea
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  whileFocus={{ scale: 1.02 }}
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  disabled={status === "loading"}
                  className="w-full px-4 py-3 rounded-2xl bg-white/10 border border-white/20 text-white placeholder:text-white/40 outline-none focus:border-white/40 focus:bg-white/15 transition disabled:opacity-50 h-32 resize-none"
                  placeholder="Your Message..."
                />
                <motion.button
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full px-6 py-3 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold hover:shadow-lg hover:shadow-purple-500/50 transition-all disabled:opacity-50 flex items-center justify-center gap-2"
                >
                  {status === "loading" ? (
                    <>
                      <FaSpinner className="animate-spin" />
                      Sending...
                    </>
                  ) : (
                    "Send Message"
                  )}
                </motion.button>
              </form>
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
