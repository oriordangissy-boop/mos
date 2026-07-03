import DocumentCard from "../components/DocumentCard";
import PageHeader from "../components/PageHeader";
import { documents } from "../data/mockData";

export default function Documents() {
  return (
    <div>
      <PageHeader eyebrow="检测与资料支持" title="资料包、检测报告、样品流程" description="先使用 mock 文件卡片，真实版本可接文件权限和申请流程。" />
      <div className="grid grid-cols-4 gap-4">{documents.map((item) => <DocumentCard key={item.name} doc={item} />)}</div>
    </div>
  );
}
