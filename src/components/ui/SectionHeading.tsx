export default function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mb-10 max-w-2xl">
      <span className="chip mb-4 !border-lime/40 !bg-lime/10 !text-lime-soft uppercase tracking-widest">
        <span className="h-1.5 w-1.5 rounded-full bg-lime" />
        {eyebrow}
      </span>
      <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">{title}</h2>
      {description && <p className="mt-3 text-stone-400">{description}</p>}
    </div>
  );
}
