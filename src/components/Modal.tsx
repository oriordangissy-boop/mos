import { X } from "lucide-react";
import type { ReactNode } from "react";

export default function Modal({
  title,
  open,
  onClose,
  children
}: {
  title: string;
  open: boolean;
  onClose: () => void;
  children: ReactNode;
}) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 grid place-items-center bg-black/60 p-6">
      <section className="glass max-h-[88vh] w-full max-w-3xl overflow-auto rounded-lg">
        <header className="flex items-center justify-between border-b border-primary/20 px-5 py-4">
          <h3 className="text-lg font-bold text-textMain">{title}</h3>
          <button className="rounded-lg border border-primary/20 p-2 text-textSoft hover:border-cyan/50 hover:text-cyan" onClick={onClose} aria-label="Close">
            <X size={18} />
          </button>
        </header>
        <div className="p-5">{children}</div>
      </section>
    </div>
  );
}
