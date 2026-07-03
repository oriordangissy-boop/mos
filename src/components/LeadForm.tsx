import { useState } from "react";
import { materials, solutions } from "../data/mockData";

export default function LeadForm() {
  const [submitted, setSubmitted] = useState(false);
  if (submitted) {
    return (
      <div className="rounded-lg border border-success/35 bg-success/10 p-5 text-textMain">
        感谢提交需求。我们的项目负责人将根据材料类型、应用场景和采购阶段进行评估，并提供对应资料包或样品测试方案。
      </div>
    );
  }
  return (
    <div className="grid grid-cols-2 gap-4">
      {["姓名", "公司名称", "国家 / 地区", "联系方式", "预计采购量"].map((label) => (
        <label key={label} className="text-sm text-textSoft">{label}<input className="blue-input mt-2 h-11 w-full rounded-lg px-3" /></label>
      ))}
      <label className="text-sm text-textSoft">客户类型<select className="blue-input mt-2 h-11 w-full rounded-lg px-3"><option>国内 G 端</option><option>国企 / 园区</option><option>工业 B 端</option><option>外贸 B 端</option><option>代理 / 分销</option><option>品牌方</option></select></label>
      <label className="text-sm text-textSoft">关注材料<select className="blue-input mt-2 h-11 w-full rounded-lg px-3">{materials.map((m) => <option key={m.name}>{m.name}</option>)}</select></label>
      <label className="text-sm text-textSoft">应用场景<select className="blue-input mt-2 h-11 w-full rounded-lg px-3">{solutions.map((s) => <option key={s.name}>{s.name}</option>)}</select></label>
      <label className="text-sm text-textSoft">是否需要样品<select className="blue-input mt-2 h-11 w-full rounded-lg px-3"><option>需要样品</option><option>暂不需要</option></select></label>
      <label className="text-sm text-textSoft">是否需要检测资料<select className="blue-input mt-2 h-11 w-full rounded-lg px-3"><option>需要检测资料</option><option>先了解项目</option></select></label>
      <label className="col-span-2 text-sm text-textSoft">备注<textarea className="blue-input mt-2 min-h-28 w-full rounded-lg p-3" /></label>
      <button onClick={() => setSubmitted(true)} className="col-span-2 rounded-lg bg-cyan px-5 py-3 font-black text-[#031120]">提交项目需求</button>
    </div>
  );
}
