import { Boxes, FileText, FlaskConical, Globe2, Handshake, Map, ShieldCheck, Users } from "lucide-react";
import DataTable from "../components/DataTable";
import GlassCard from "../components/GlassCard";
import OperationFlow from "../components/OperationFlow";
import PageHeader from "../components/PageHeader";
import StatCard from "../components/StatCard";
import StatusBadge from "../components/StatusBadge";
import { matrix, pipelines } from "../data/mockData";
import type { ApplicationMatrix, PipelineProject } from "../types";

export default function DashboardMock() {
  const stats = [
    ["G端项目线索", "18", "政企/国企/园区", ShieldCheck],
    ["外贸 B 端线索", "42", "海外采购与渠道", Globe2],
    ["样品申请", "26", "待寄样/测试中", FlaskConical],
    ["检测资料申请", "31", "报告/规格书", FileText],
    ["合作代理", "9", "区域与渠道", Handshake],
    ["进行中试点", "7", "小批量验证", Users],
    ["已覆盖场景", "8", "应用场景池", Boxes],
    ["已覆盖地区", "6", "国内外市场", Map]
  ] as const;
  return (
    <div className="space-y-5">
      <PageHeader eyebrow="内部运营总盘" title="KANRENZHIDA Materials Operation Dashboard" description="展示材料 → 场景 → 客户 → 样品 → 试点 → 采购的整体运营状态。" />
      <div className="grid grid-cols-4 gap-4">{stats.map(([label, value, hint, Icon]) => <StatCard key={label} label={label} value={value} hint={hint} icon={Icon} />)}</div>
      <GlassCard className="p-5"><OperationFlow /></GlassCard>
      <div className="grid grid-cols-1 gap-5">
        <GlassCard>
          <div className="border-b border-primary/20 px-4 py-3 font-black">项目管线</div>
          <DataTable<PipelineProject> data={pipelines} columns={[
            { key: "id", header: "Project ID", render: (r) => r.id },
            { key: "type", header: "Client Type", render: (r) => r.clientType },
            { key: "region", header: "Region", render: (r) => r.region },
            { key: "scenario", header: "Scenario", render: (r) => r.scenario },
            { key: "material", header: "Material", render: (r) => r.material },
            { key: "stage", header: "Stage", render: (r) => <StatusBadge status={r.stage} /> },
            { key: "owner", header: "Owner", render: (r) => r.owner },
            { key: "next", header: "Next Action", render: (r) => r.nextAction }
          ]} />
        </GlassCard>
        <GlassCard>
          <div className="border-b border-primary/20 px-4 py-3 font-black">材料应用矩阵</div>
          <DataTable<ApplicationMatrix> data={matrix} columns={[
            { key: "material", header: "Material", render: (r) => r.material },
            { key: "function", header: "Function", render: (r) => r.function },
            { key: "scenario", header: "Scenario", render: (r) => r.scenario },
            { key: "type", header: "Client Type", render: (r) => r.clientType },
            { key: "doc", header: "Document Status", render: (r) => r.documentStatus },
            { key: "sample", header: "Sample Status", render: (r) => r.sampleStatus }
          ]} />
        </GlassCard>
      </div>
    </div>
  );
}
