import PageWrapper from "../components/PageWrapper";
import SectionTitle from "../components/SectionTitle";
import { resumeData } from "../data/resumeData";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Contact() {
  const wpPhoneRaw = resumeData.wpPhone || resumeData.phone || "";
  const wpDigits = wpPhoneRaw.replace(/\D/g, "");
  const waNumber = wpDigits.length === 10 ? `91${wpDigits}` : wpDigits;

  const methods = [
    {
      icon: FaEnvelope,
      label: "Email",
      value: resumeData.email,
      href: `mailto:${resumeData.email}`,
    },
    {
      icon: FaPhone,
      label: "Phone",
      value: resumeData.phone,
      href: `tel:${resumeData.phone}`,
    },
    {
      icon: FaWhatsapp,
      label: "WhatsApp",
      value: wpPhoneRaw,
      href: `https://wa.me/${waNumber}`,
      external: true,
    },
    {
      icon: FaMapMarkerAlt,
      label: "Location",
      value: resumeData.location,
      href: null,
    },
  ];

  return (
    <PageWrapper>
      <div className="page-shell">
        <SectionTitle
          kicker="Connect"
          title="Contact"
          subtitle="Open to full-time roles, freelance builds, and collaborations that matter."
        />

        <div className="grid gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="max-w-md text-lg leading-relaxed text-ink-soft">
              I build web and mobile products with React, React Native, and modern backend
              stacks. Reach out for roles, consulting, or a quick technical chat.
            </p>
            <div className="mt-8 space-y-3 text-sm text-ink-mute">
              <p>Usually replies within 24 hours.</p>
              <p>Best for deep dives: email. Quick sync: phone or WhatsApp.</p>
            </div>
          </motion.div>

          <motion.ul
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
            className="divide-y divide-line border-y border-line"
          >
            {methods.map((m) => {
              const Icon = m.icon;
              const inner = (
                <>
                  <span className="flex h-10 w-10 items-center justify-center rounded-md bg-teal-mist text-teal-deep">
                    <Icon />
                  </span>
                  <span>
                    <span className="block text-xs font-semibold uppercase tracking-wider text-ink-mute">
                      {m.label}
                    </span>
                    <span className="mt-0.5 block font-medium text-ink">{m.value}</span>
                  </span>
                </>
              );

              return (
                <li key={m.label}>
                  {m.href ? (
                    <a
                      href={m.href}
                      target={m.external ? "_blank" : undefined}
                      rel={m.external ? "noreferrer" : undefined}
                      className="flex items-center gap-4 py-4 transition hover:bg-white/50"
                    >
                      {inner}
                    </a>
                  ) : (
                    <div className="flex items-center gap-4 py-4">{inner}</div>
                  )}
                </li>
              );
            })}
          </motion.ul>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-14 rounded-md bg-ink px-6 py-8 text-paper md:px-10"
        >
          <h2 className="font-display text-2xl font-bold md:text-3xl">
            Let&apos;s build something people rely on.
          </h2>
          <p className="mt-3 max-w-xl text-paper/70">
            Share the product vision, the users, and the hard constraints — I&apos;ll help chart
            a clear path from idea to shipped release.
          </p>
          <a href={`mailto:${resumeData.email}`} className="btn-spark mt-6 inline-flex">
            Email Lokesh
          </a>
        </motion.div>
      </div>
    </PageWrapper>
  );
}
