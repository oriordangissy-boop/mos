import { Bell, ChevronDown, RadioTower } from "lucide-react";
import { useMemo } from "react";

export default function Topbar({ role }: { role: string }) {
  const time = useMemo(
    () =>
      new Intl.DateTimeFormat("zh-CN", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit"
      }).format(new Date()),
    []
  );

  return (
    <header className="sticky top-0 z-10 ml-64 flex h-16 items-center justify-between border-b border-primary/20 bg-[#050B18]/74 px-6 backdrop-blur-xl max-md:ml-0 max-md:h-auto max-md:flex-col max-md:items-start max-md:gap-3 max-md:px-4 max-md:py-3">
      <div className="flex items-center gap-3 text-sm text-textSoft max-md:w-full max-md:flex-wrap">
        <RadioTower size={18} className="text-cyan" />
        <span className="font-semibold text-textMain">KANRENZHIDA Global Materials OS</span>
        <span className="h-1 w-1 rounded-full bg-cyan" />
        <span className="max-md:hidden">当前角色：{role}</span>
      </div>
      <div className="flex items-center gap-3 max-md:w-full max-md:justify-between">
        <span className="rounded-full border border-primary/20 px-3 py-1 text-xs text-textSoft">{time}</span>
        <button className="relative rounded-lg border border-primary/20 p-2 text-textSoft hover:border-cyan/50 hover:text-cyan">
          <Bell size={18} />
          <span className="absolute right-1.5 top-1.5 h-2 w-2 rounded-full bg-risk" />
        </button>
        <button className="flex items-center gap-2 rounded-lg border border-primary/20 px-2 py-1.5 text-sm text-textMain">
          <span className="grid h-8 w-8 place-items-center rounded-md bg-gradient-to-br from-cyan to-primary text-xs font-black text-[#031120]">SA</span>
          <ChevronDown size={15} className="text-textSoft" />
        </button>
      </div>
    </header>
  );
}
