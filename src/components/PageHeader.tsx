import type { ReactNode } from "react";

export default function PageHeader({
  eyebrow,
  title,
  description,
  actions
}: {
  eyebrow: string;
  title: string;
  description: string;
  actions?: ReactNode;
}) {
  return (
    <div className="mb-5 flex items-start justify-between gap-5">
      <div>
        <div className="text-xs font-black uppercase tracking-[0.18em] text-cyan">{eyebrow}</div>
        <h1 className="mt-2 text-3xl font-black text-textMain">{title}</h1>
        <p className="mt-2 text-sm text-textSoft">{description}</p>
      </div>
      {actions ? <div className="flex gap-2">{actions}</div> : null}
    </div>
  );
}
