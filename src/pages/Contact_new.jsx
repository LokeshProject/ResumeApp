import PageWrapper from "../components/PageWrapper";
import SectionTitle from "../components/SectionTitle";
import { resumeData } from "../data/resumeData";
import { useState } from "react";
import { FaCheckCircle, FaExclamationCircle, FaSpinner } from "react-icons/fa";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState(null); // null, loading, success, error
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

    try {
      // Using EmailJS - Install: npm install @emailjs/browser
      // Initialize with your EmailJS credentials
      const response = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          service_id: "service_example", // Replace with your service ID
          template_id: "template_example", // Replace with your template ID
          user_id: "user_example", // Replace with your public key
          template_params: {
            to_email: resumeData.email,
            from_name: formData.name,
            from_email: formData.email,
            message: formData.message,
          },
        }),
      });

      if (response.ok) {
        setStatus("success");
        setStatusMessage("Message sent successfully! 🎉");
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setStatus(null), 4000);
      } else {
        setStatus("error");
        setStatusMessage("Failed to send message. Please try again!");
        setTimeout(() => setStatus(null), 4000);
      }
    } catch (error) {
      console.error("Error sending message:", error);
      setStatus("error");
      setStatusMessage("Network error. Please try again!");
      setTimeout(() => setStatus(null), 4000);
    }
  };

  return (
    <PageWrapper>
      <div className="max-w-6xl mx-auto">
        <SectionTitle title="Contact" subtitle="Let's work together" />

        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-6 rounded-3xl border border-white/10 bg-white/5">
            <h3 className="text-xl font-bold">Details</h3>
            <div className="mt-4 text-white/70 space-y-2">
              <div><span className="text-white/50">Email:</span> {resumeData.email}</div>
              <div><span className="text-white/50">Phone:</span> {resumeData.phone}</div>
              <div><span className="text-white/50">Location:</span> {resumeData.location}</div>
            </div>
          </div>

          <div className="p-6 rounded-3xl border border-white/10 bg-white/5">
            <h3 className="text-xl font-bold">Quick Message</h3>
            
            {/* Status Messages */}
            {status === "success" && (
              <div className="mt-3 p-3 rounded-2xl bg-green-500/20 border border-green-500/50 flex items-center gap-2">
                <FaCheckCircle className="text-green-400" />
                <span className="text-green-300 text-sm">{statusMessage}</span>
              </div>
            )}
            {status === "error" && (
              <div className="mt-3 p-3 rounded-2xl bg-red-500/20 border border-red-500/50 flex items-center gap-2">
                <FaExclamationCircle className="text-red-400" />
                <span className="text-red-300 text-sm">{statusMessage}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="mt-4 space-y-3">
              <input 
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                disabled={status === "loading"}
                className="w-full px-4 py-3 rounded-2xl bg-black/30 border border-white/10 outline-none focus:border-white/30 transition disabled:opacity-50"
                placeholder="Your Name" 
              />
              <input 
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                disabled={status === "loading"}
                className="w-full px-4 py-3 rounded-2xl bg-black/30 border border-white/10 outline-none focus:border-white/30 transition disabled:opacity-50"
                placeholder="Your Email" 
              />
              <textarea 
                name="message"
                value={formData.message}
                onChange={handleChange}
                disabled={status === "loading"}
                className="w-full px-4 py-3 rounded-2xl bg-black/30 border border-white/10 outline-none focus:border-white/30 transition disabled:opacity-50 h-28 resize-none"
                placeholder="Message..." 
              />
              <button 
                type="submit"
                disabled={status === "loading"}
                className="w-full px-5 py-3 rounded-2xl bg-white text-black font-bold hover:opacity-90 transition disabled:opacity-50 flex items-center justify-center gap-2"
              >
                {status === "loading" ? (
                  <>
                    <FaSpinner className="animate-spin" />
                    Sending...
                  </>
                ) : (
                  "Send"
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}
