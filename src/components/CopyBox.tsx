import { Check, Copy } from 'lucide-react';
import { useState } from 'react';

type CopyBoxProps = {
  title: string;
  text: string;
  buttonLabel: string;
};

export function CopyBox({ title, text, buttonLabel }: CopyBoxProps) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
      alert('Copy failed. Select the text manually and copy it.');
    }
  }

  return (
    <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-5 shadow-purple backdrop-blur md:p-7">
      <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <h3 className="text-2xl font-black tracking-tight text-white">{title}</h3>
        <button
          onClick={handleCopy}
          className="inline-flex items-center justify-center gap-2 rounded-full bg-hemp px-5 py-3 text-sm font-black uppercase tracking-wide text-black transition hover:scale-[1.02] hover:bg-white"
        >
          {copied ? <Check size={18} /> : <Copy size={18} />}
          {copied ? 'Copied' : buttonLabel}
        </button>
      </div>
      <pre className="max-h-[520px] overflow-auto whitespace-pre-wrap rounded-2xl border border-white/10 bg-black/45 p-5 font-sans text-sm leading-7 text-zinc-100 md:text-base">
        {text}
      </pre>
    </div>
  );
}
