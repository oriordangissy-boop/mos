import { ArrowRight } from "lucide-react";
import GlassCard from "./GlassCard";
import type { Material } from "../types";

export default function MaterialCard({ material }: { material: Material }) {
  return (
    <GlassCard className="p-5 transition hover:-translate-y-0.5 hover:border-cyan/50">
      <div className="text-xs font-black uppercase tracking-[0.18em] text-cyan">{material.english}</div>
      <h3 className="mt-3 text-xl font-black text-textMain">{material.name}</h3>
      <p className="mt-2 text-sm leading-6 text-textSoft">{material.position}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {material.tags.map((tag) => (
          <span key={tag} className="rounded-full border border-primary/20 bg-white/[0.035] px-2.5 py-1 text-xs text-textSoft">{tag}</span>
        ))}
      </div>
      <p className="mt-4 line-clamp-4 text-sm leading-6 text-textSoft">{material.description}</p>
      <button className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-cyan">
        查看详情 <ArrowRight size={15} />
      </button>
    </GlassCard>
  );
}
