import GlassCard from "../components/GlassCard";
import PageHeader from "../components/PageHeader";

export default function About() {
  const pools = [
    ["技术资源池", "纳米纤维膜、聚酰亚胺、玄武岩纤维、高性能复合面料。"],
    ["资质资源池", "检测报告、参数资料、规格书、样品复测、采购资料包。"],
    ["产业资源池", "面料复合、成品开发、工装定制、供应链交付、批量生产。"]
  ];
  const lines = ["License 授权合作", "高性能材料供应", "场景解决方案", "品牌与渠道应用"];
  return (
    <div className="space-y-5">
      <PageHeader eyebrow="关于看人之大国际" title="面向政企采购、工业防护与全球 B2B 市场的材料科技运营平台" description="我们不只提供材料本身，更提供材料应用、检测资料、样品测试、场景方案和供应链交付能力。" />
      <GlassCard className="p-6 text-lg leading-8 text-textSoft">看人之大国际，是中国特种防护材料全球化运营平台。项目以高性能材料为核心，以 N+1 标准适配为抓手，连接材料、检测、场景、供应链、政企采购、外贸渠道和品牌应用。</GlassCard>
      <div className="grid grid-cols-3 gap-4">{pools.map(([title, copy]) => <GlassCard key={title} className="p-5"><h3 className="text-xl font-black">{title}</h3><p className="mt-3 text-sm leading-6 text-textSoft">{copy}</p></GlassCard>)}</div>
      <div className="grid grid-cols-4 gap-4">{lines.map((line) => <GlassCard key={line} className="p-5 text-center font-black text-textMain">{line}</GlassCard>)}</div>
      <GlassCard className="p-6"><h3 className="text-xl font-black">平台价值</h3><div className="mt-4 grid grid-cols-2 gap-3 text-sm text-textSoft"><p>帮助 G 端看懂材料价值。</p><p>帮助 B 端降低选材成本。</p><p>帮助外贸客户快速拿到可讲、可测、可卖的材料方案。</p><p>帮助销售和代理用统一资料推动客户决策。</p></div></GlassCard>
    </div>
  );
}
