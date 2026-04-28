import { Copy, Phone } from 'lucide-react';
import { phoneScript } from '../data/siteContent';

export function StickyMobileCta() {
  async function copyScript() {
    try {
      await navigator.clipboard.writeText(phoneScript);
    } catch {
      alert('Copy failed. Scroll to the phone script and copy it manually.');
    }
  }

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-white/10 bg-black/90 p-3 backdrop-blur md:hidden">
      <div className="mx-auto grid max-w-md grid-cols-2 gap-3">
        <a
          href="tel:2022243121"
          className="flex items-center justify-center gap-2 rounded-full bg-hemp px-4 py-3 text-sm font-black text-black"
        >
          <Phone size={17} /> Call Congress
        </a>
        <button
          onClick={copyScript}
          className="flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-3 text-sm font-black text-white"
        >
          <Copy size={17} /> Copy Script
        </button>
      </div>
    </div>
  );
}
