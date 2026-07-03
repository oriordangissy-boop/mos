import PageHeader from "../components/PageHeader";
import SolutionCard from "../components/SolutionCard";
import { solutions } from "../data/mockData";

export default function Solutions() {
  return (
    <div>
      <PageHeader eyebrow="场景解决方案" title="按照真实采购场景组织材料方案" description="不要只展示材料，要让客户看到消防、电力、石化、医疗、工装、外贸分别怎么落地。" />
      <div className="grid grid-cols-2 gap-4">{solutions.map((item) => <SolutionCard key={item.name} solution={item} />)}</div>
    </div>
  );
}
