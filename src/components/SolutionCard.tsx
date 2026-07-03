import GlassCard from "./GlassCard";
import type { Solution } from "../types";

export default function SolutionCard({ solution }: { solution: Solution }) {
  return (
    <GlassCard className="p-5">
      <div className="flex items-start justify-between gap-4">
        <h3 className="text-xl font-black text-textMain">{solution.name}</h3>
        <span className="rounded-full border border-cyan/30 bg-cyan/10 px-3 py-1 text-xs text-cyan">场景方案</span>
      </div>
      <div className="mt-4 flex flex-wrap gap-2">
        {solution.needs.map((need) => (
          <span key={need} className="rounded-md border border-primary/20 bg-white/[0.035] px-2 py-1 text-xs text-textSoft">{need}</span>
        ))}
      </div>
      <p className="mt-4 text-sm leading-6 text-textSoft">{solution.solution}</p>
      <div className="mt-4 text-xs text-cyan">适配材料：{solution.materials.join(" / ")}</div>
    </GlassCard>
  );
}
