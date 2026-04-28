import { ArrowUpRight } from 'lucide-react';

type ActionCardProps = {
  title: string;
  description: string;
  href: string;
  cta: string;
};

export function ActionCard({ title, description, href, cta }: ActionCardProps) {
  return (
    <a
      href={href}
      target={href.startsWith('http') ? '_blank' : undefined}
      rel={href.startsWith('http') ? 'noreferrer' : undefined}
      className="group rounded-3xl border border-white/10 bg-white/[0.04] p-6 transition hover:-translate-y-1 hover:border-hemp/60 hover:bg-hemp/10 hover:shadow-glow"
    >
      <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-full bg-hemp text-black">
        <ArrowUpRight size={22} />
      </div>
      <h3 className="text-xl font-black text-white">{title}</h3>
      <p className="mt-3 min-h-[84px] text-sm leading-6 text-zinc-300">{description}</p>
      <p className="mt-5 text-sm font-black uppercase tracking-wide text-hemp group-hover:text-white">{cta}</p>
    </a>
  );
}
