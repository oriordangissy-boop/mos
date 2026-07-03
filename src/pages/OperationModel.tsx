import GlassCard from "../components/GlassCard";
import OperationFlow from "../components/OperationFlow";
import PageHeader from "../components/PageHeader";

export default function OperationModel() {
  const pools = ["技术资源池：纳米纤维膜、聚酰亚胺、玄武岩纤维、复合面料、功能成品开发。", "资质资料池：检测报告、参数、规格书、采购资料包、样品测试、复测流程。", "产业供应链池：面料复合、成品打样、工装开发、批量生产、外贸交付。"];
  const lines = ["License 授权合作", "材料供应", "场景解决方案", "品牌与渠道应用"];
  return (
    <div className="space-y-5">
      <PageHeader eyebrow="项目运营模式" title="材料 → 标准 → 场景 → 样品 → 采购 → 数据反馈" description="让客户和合作方看到项目怎么运转，而不是只看到某一种材料。" />
      <GlassCard className="p-5"><OperationFlow /></GlassCard>
      <div className="grid grid-cols-3 gap-4">{pools.map((item) => <GlassCard key={item} className="p-5 text-sm leading-7 text-textSoft">{item}</GlassCard>)}</div>
      <div className="grid grid-cols-4 gap-4">{lines.map((item) => <GlassCard key={item} className="p-5 text-center font-black">{item}</GlassCard>)}</div>
    </div>
  );
}
