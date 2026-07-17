import { motion, useReducedMotion } from "framer-motion";

export default function SectionTitle({ title, subtitle, kicker }) {
  const reduceMotion = useReducedMotion();

  if (reduceMotion) {
    return (
      <div className="mb-10 max-w-2xl">
        {kicker ? <p className="section-kicker mb-3">{kicker}</p> : null}
        <h1 className="font-display text-4xl font-bold tracking-tight text-ink md:text-5xl">
          {title}
        </h1>
        {subtitle ? (
          <p className="mt-3 text-lg leading-relaxed text-ink-mute">{subtitle}</p>
        ) : null}
        <div className="mt-6 h-[3px] w-14 bg-teal" />
      </div>
    );
  }

  return (
    <motion.div
      className="mb-10 max-w-2xl"
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5 }}
    >
      {kicker ? <p className="section-kicker mb-3">{kicker}</p> : null}
      <h1 className="font-display text-4xl font-bold tracking-tight text-ink md:text-5xl">
        {title}
      </h1>
      {subtitle ? (
        <p className="mt-3 text-lg leading-relaxed text-ink-mute">{subtitle}</p>
      ) : null}
      <motion.div
        className="mt-6 h-[3px] origin-left bg-teal"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        style={{ width: 56 }}
      />
    </motion.div>
  );
}