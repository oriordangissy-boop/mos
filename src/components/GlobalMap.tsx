import { Activity, MapPin } from "lucide-react";
import StatusBadge from "./StatusBadge";

const nodes = [
  { name: "中国总部", x: "58%", y: "49%", status: "Opened" },
  { name: "东南亚", x: "64%", y: "61%", status: "Opened" },
  { name: "欧洲", x: "47%", y: "34%", status: "Developing" },
  { name: "北美", x: "24%", y: "41%", status: "Observing" },
  { name: "中东", x: "54%", y: "47%", status: "Developing" },
  { name: "非洲", x: "50%", y: "67%", status: "Not Started" }
];

const lines = [
  ["58%", "49%", "64%", "61%"],
  ["58%", "49%", "47%", "34%"],
  ["58%", "49%", "24%", "41%"],
  ["58%", "49%", "54%", "47%"],
  ["58%", "49%", "50%", "67%"]
];

export default function GlobalMap() {
  return (
    <div className="relative min-h-[420px] overflow-hidden rounded-lg border border-primary/20 bg-[#061426]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_48%,rgba(47,128,255,0.32),transparent_32%),radial-gradient(circle_at_58%_48%,rgba(0,213,255,0.16),transparent_22%)]" />
      <div className="absolute left-1/2 top-1/2 h-[330px] w-[330px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan/25 shadow-[0_0_70px_rgba(0,213,255,0.18)]" />
      <div className="absolute left-1/2 top-1/2 h-[250px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-[50%] border border-primary/20" />
      <div className="absolute left-1/2 top-1/2 h-[520px] w-[210px] -translate-x-1/2 -translate-y-1/2 rounded-[50%] border border-primary/15" />
      <svg className="absolute inset-0 h-full w-full">
        {lines.map((line, index) => (
          <line
            key={index}
            x1={line[0]}
            y1={line[1]}
            x2={line[2]}
            y2={line[3]}
            stroke={index < 2 ? "rgba(0,213,255,.72)" : "rgba(255,176,32,.45)"}
            strokeWidth="1.5"
            strokeDasharray={index < 2 ? "0" : "6 8"}
          />
        ))}
      </svg>
      {nodes.map((node) => {
        const tone =
          node.status === "Opened"
            ? "bg-cyan shadow-[0_0_26px_rgba(0,213,255,.9)]"
            : node.status === "Developing"
              ? "bg-warning shadow-[0_0_24px_rgba(255,176,32,.75)]"
              : node.status === "Observing"
                ? "bg-slate-400 shadow-[0_0_18px_rgba(148,163,184,.45)]"
                : "bg-risk shadow-[0_0_20px_rgba(255,77,109,.55)]";
        return (
          <div key={node.name} className="absolute" style={{ left: node.x, top: node.y }}>
            <div className={`h-3 w-3 rounded-full ${tone}`} />
            <div className="mt-2 -translate-x-2 whitespace-nowrap rounded-md border border-primary/20 bg-[#061426]/80 px-2 py-1 text-xs text-textMain backdrop-blur">
              {node.name}
            </div>
          </div>
        );
      })}
      <div className="absolute left-5 top-5 max-w-md">
        <div className="mb-3 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-cyan">
          <Activity size={15} />
          B2B 区域拓展总盘
        </div>
        <h3 className="text-3xl font-black leading-tight text-textMain">中国总部连接全球企业客户市场</h3>
        <p className="mt-3 text-sm leading-6 text-textSoft">
          用抽象全球网络展示 B2B 子网站、地区市场、企业客户线索和合同订单流向，管理层先看市场态势，再下钻到订单、佣金和拨款。
        </p>
      </div>
      <div className="absolute bottom-5 left-5 flex flex-wrap gap-2">
        <StatusBadge status="Opened" />
        <StatusBadge status="Developing" />
        <StatusBadge status="Observing" />
        <StatusBadge status="Paused" />
      </div>
      <div className="absolute bottom-5 right-5 flex items-center gap-2 rounded-lg border border-primary/20 bg-white/[0.04] px-3 py-2 text-xs text-textSoft">
        <MapPin size={15} className="text-cyan" />
        6 个地区 · 8 个子网站 · B2B mock 数据流
      </div>
    </div>
  );
}
