type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  body?: string;
};

export function SectionHeader({ eyebrow, title, body }: SectionHeaderProps) {
  return (
    <div className="mx-auto mb-10 max-w-3xl text-center">
      {eyebrow ? (
        <p className="mb-3 text-sm font-black uppercase tracking-[0.22em] text-hemp">{eyebrow}</p>
      ) : null}
      <h2 className="text-3xl font-black tracking-tight text-white md:text-5xl">{title}</h2>
      {body ? <p className="mt-5 text-lg leading-8 text-zinc-300">{body}</p> : null}
    </div>
  );
}
