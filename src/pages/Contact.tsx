import GlassCard from "../components/GlassCard";
import LeadForm from "../components/LeadForm";
import PageHeader from "../components/PageHeader";

export default function Contact() {
  return (
    <div className="grid grid-cols-[420px_1fr] gap-5">
      <div>
        <PageHeader eyebrow="提交项目需求" title="获取资料、样品或采购方案" description="表单用于承接 G 端采购、工业 B 端、外贸 B 端、代理分销和品牌方线索。" />
        <GlassCard className="p-5 text-sm leading-7 text-textSoft">提交后，我们会根据材料类型、应用场景和采购阶段进行评估，并提供对应资料包或样品测试方案。</GlassCard>
      </div>
      <GlassCard className="p-5"><LeadForm /></GlassCard>
    </div>
  );
}
