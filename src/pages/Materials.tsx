import MaterialCard from "../components/MaterialCard";
import PageHeader from "../components/PageHeader";
import { materials } from "../data/mockData";

export default function Materials() {
  return (
    <div>
      <PageHeader eyebrow="高性能材料体系" title="材料卡片与应用详情" description="纳米纤维膜、聚酰亚胺功能纤维、玄武岩纤维，以及双核/三核复合体系。" />
      <div className="grid grid-cols-2 gap-4">{materials.map((item) => <MaterialCard key={item.name} material={item} />)}</div>
    </div>
  );
}
