import { FileText } from "lucide-react";
import GlassCard from "./GlassCard";
import type { DocumentItem } from "../types";

export default function DocumentCard({ doc }: { doc: DocumentItem }) {
  return (
    <GlassCard className="p-5">
      <div className="mb-4 flex items-center justify-between">
        <span className="grid h-10 w-10 place-items-center rounded-lg bg-cyan/10 text-cyan"><FileText size={19} /></span>
        <span className="text-xs text-textSoft">{doc.type}</span>
      </div>
      <h3 className="text-lg font-black text-textMain">{doc.name}</h3>
      <p className="mt-2 text-sm text-textSoft">适用对象：{doc.audience}</p>
      <p className="mt-1 text-xs text-textSoft">更新时间：{doc.updatedAt}</p>
      <button className="mt-4 rounded-lg border border-primary/25 px-3 py-2 text-sm text-cyan">{doc.action}</button>
    </GlassCard>
  );
}
