export default function SectionTitle({ title, subtitle }) {
  return (
    <div className="mb-8">
      <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">{title}</h2>
      {subtitle ? <p className="text-white/70 mt-2">{subtitle}</p> : null}
      <div className="h-[2px] w-20 bg-white/30 mt-4 rounded-full" />
    </div>
  );
}
