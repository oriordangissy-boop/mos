import { Search } from "lucide-react";

export default function Toolbar({
  search,
  onSearch,
  children
}: {
  search: string;
  onSearch: (value: string) => void;
  children?: React.ReactNode;
}) {
  return (
    <div className="flex flex-wrap items-center gap-3 border-b border-primary/20 px-4 py-3">
      <div className="flex h-10 min-w-72 items-center gap-2 rounded-lg border border-primary/20 bg-[#07111F]/70 px-3">
        <Search size={16} className="text-cyan" />
        <input className="w-full bg-transparent text-sm text-textMain outline-none placeholder:text-textSoft" placeholder="搜索表格内容" value={search} onChange={(event) => onSearch(event.target.value)} />
      </div>
      {children}
    </div>
  );
}
