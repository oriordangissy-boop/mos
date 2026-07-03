import GlassCard from "../components/GlassCard";
import OperationFlow from "../components/OperationFlow";
import PageHeader from "../components/PageHeader";

export default function Partnership() {
  const types = [
    ["G 端项目合作", "适合政企、国企、园区、应急、消防、电力、石化、医疗等采购单位。"],
    ["B 端材料合作", "适合材料商、工装企业、功能服装品牌、外贸客户。"],
    ["License 授权合作", "适合区域代理、项目负责人、渠道合伙人。"],
    ["OEM / ODM 开发", "适合海外品牌、功能服装品牌、工装品牌。"],
    ["样品测试合作", "适合还在评估阶段的客户，先样品测试，再进入试点采购。"]
  ];
  return (
    <div className="space-y-5">
      <PageHeader eyebrow="合作模式" title="从样品测试到长期供应" description="围绕不同客户类型设计合作入口，方便销售和代理推进。" />
      <div className="grid grid-cols-3 gap-4">{types.map(([title, copy]) => <GlassCard key={title} className="p-5"><h3 className="text-xl font-black">{title}</h3><p className="mt-3 text-sm leading-6 text-textSoft">{copy}</p></GlassCard>)}</div>
      <GlassCard className="p-5"><h3 className="mb-4 text-xl font-black">合作流程</h3><OperationFlow /></GlassCard>
    </div>
  );
}
