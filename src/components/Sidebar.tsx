import {
  Boxes,
  Building2,
  ClipboardCheck,
  FileText,
  Globe2,
  LayoutDashboard,
  Mail,
  Network,
  ShieldCheck,
  Users,
  Workflow
} from "lucide-react";
import type { NavItem, PageKey } from "../types";

const navItems: NavItem[] = [
  { key: "home", label: "首页", icon: LayoutDashboard },
  { key: "about", label: "看人之大", icon: Building2 },
  { key: "materials", label: "材料体系", icon: Boxes },
  { key: "solutions", label: "场景方案", icon: ShieldCheck },
  { key: "government", label: "G端采购", icon: ClipboardCheck },
  { key: "globalB2B", label: "Global B2B", icon: Globe2 },
  { key: "operation", label: "运营模式", icon: Workflow },
  { key: "documents", label: "检测资料", icon: FileText },
  { key: "partnership", label: "合作模式", icon: Users },
  { key: "contact", label: "提交需求", icon: Mail },
  { key: "dashboard", label: "运营总盘", icon: Network }
];

export default function Sidebar({
  active,
  onChange
}: {
  active: PageKey;
  onChange: (page: PageKey) => void;
}) {
  return (
    <aside className="fixed inset-y-0 left-0 z-20 flex w-64 flex-col border-r border-primary/20 bg-[#050B18]/90 px-4 py-5 backdrop-blur-xl max-md:sticky max-md:top-0 max-md:inset-x-0 max-md:h-auto max-md:w-full max-md:border-b max-md:border-r-0 max-md:px-3 max-md:py-3">
      <div className="mb-6 flex items-center gap-3 px-2 max-md:mb-3">
        <div className="grid h-11 w-11 place-items-center rounded-lg bg-gradient-to-br from-cyan to-primary text-lg font-black text-[#031120] shadow-glow max-md:h-9 max-md:w-9">
          M
        </div>
        <div>
          <div className="font-black text-textMain max-md:text-sm">看人之大国际</div>
          <div className="text-xs text-textSoft">Global Materials OS</div>
        </div>
      </div>
      <nav className="grid gap-1 max-md:flex max-md:overflow-x-auto max-md:pb-1">
        {navItems.map((item) => {
          const Icon = item.icon;
          const activeClass = active === item.key ? "border-cyan/35 bg-cyan/10 text-textMain" : "border-transparent text-textSoft hover:border-primary/25 hover:bg-white/[0.035] hover:text-textMain";
          return (
            <button key={item.key} className={`flex items-center gap-3 rounded-lg border px-3 py-2.5 text-left text-sm font-semibold transition max-md:min-w-max max-md:py-2 ${activeClass}`} onClick={() => onChange(item.key)}>
              <Icon size={18} className={active === item.key ? "text-cyan" : "text-primary"} />
              {item.label}
            </button>
          );
        })}
      </nav>
      <div className="mt-auto rounded-lg border border-primary/20 bg-white/[0.035] p-3 text-xs leading-5 text-textSoft max-md:hidden">
        材料 {"->"} 标准 {"->"} 场景 {"->"} 样品 {"->"} 试点 {"->"} 采购 {"->"} 长期合作。
      </div>
    </aside>
  );
}
