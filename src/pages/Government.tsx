import { ClipboardCheck, FileText, FlaskConical, PackageCheck } from "lucide-react";
import GlassCard from "../components/GlassCard";
import OperationFlow from "../components/OperationFlow";
import PageHeader from "../components/PageHeader";

export default function Government() {
  const targets = ["政务采购", "消防 / 应急", "公安 / 特警", "国企 / 园区", "电力能源", "石化工业", "医疗机构", "民生保障项目"];
  const docs = ["项目介绍", "材料规格书", "功能参数", "检测报告", "样品信息", "报价参考", "应用建议"];
  return (
    <div className="space-y-5">
      <PageHeader eyebrow="国内 G 端采购支持" title="可信、可测、可采购、可落地" description="国内 G 端最关心的不是漂亮，而是资料完整、样品可测、流程可走、试点可落地。" />
      <div className="grid grid-cols-4 gap-3">{targets.map((item) => <GlassCard key={item} className="p-4 text-center font-bold">{item}</GlassCard>)}</div>
      <div className="grid grid-cols-[1fr_1fr] gap-4">
        <GlassCard className="p-5"><FileText className="mb-4 text-cyan" /><h3 className="text-xl font-black">采购资料包</h3><div className="mt-4 flex flex-wrap gap-2">{docs.map((item) => <span key={item} className="rounded-full border border-primary/20 px-3 py-1 text-sm text-textSoft">{item}</span>)}</div></GlassCard>
        <GlassCard className="p-5"><PackageCheck className="mb-4 text-cyan" /><h3 className="text-xl font-black">G 端价值</h3><p className="mt-3 text-sm leading-7 text-textSoft">降低选材沟通成本，缩短采购评估周期，支持复测与样品验证，可按场景定制，并形成采购目录和项目方案。</p></GlassCard>
      </div>
      <GlassCard className="p-5"><h3 className="mb-4 text-xl font-black">标准采购流程</h3><OperationFlow /></GlassCard>
      <div className="flex gap-3">{["申请政企资料包", "预约项目沟通", "提交采购需求", "申请样品"].map((item) => <button key={item} className="rounded-lg border border-primary/25 px-4 py-2 text-cyan">{item}</button>)}</div>
    </div>
  );
}
