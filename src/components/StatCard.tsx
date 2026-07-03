import type { LucideIcon } from "lucide-react";

export default function StatCard({
  label,
  value,
  hint,
  icon: Icon,
  tone = "cyan"
}: {
  label: string;
  value: string;
  hint: string;
  icon: LucideIcon;
  tone?: "cyan" | "green" | "orange" | "red" | "blue";
}) {
  const toneClass = {
    cyan: "from-cyan/18 to-primary/5 text-cyan",
    green: "from-success/18 to-primary/5 text-success",
    orange: "from-warning/18 to-primary/5 text-warning",
    red: "from-risk/18 to-primary/5 text-risk",
    blue: "from-primary/20 to-cyan/5 text-blue-200"
  }[tone];

  return (
    <div className="group rounded-lg border border-primary/20 bg-gradient-to-br p-4 shadow-card transition duration-200 hover:-translate-y-0.5 hover:border-cyan/50 hover:shadow-glow">
      <div className="mb-5 flex items-center justify-between gap-3">
        <span className="text-xs font-semibold uppercase tracking-[0.18em] text-textSoft">{label}</span>
        <span className={`grid h-9 w-9 place-items-center rounded-lg bg-gradient-to-br ${toneClass}`}>
          <Icon size={18} />
        </span>
      </div>
      <div className="text-2xl font-black tracking-tight text-textMain">{value}</div>
      <div className="mt-2 text-xs text-textSoft">{hint}</div>
    </div>
  );
}
