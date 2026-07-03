const steps = ["材料资源池", "检测资料与参数封装", "场景解决方案", "样品测试", "G端 / B端沟通", "小批量试点", "批量采购 / 渠道合作", "数据反馈", "产品升级"];

export default function OperationFlow() {
  return (
    <div className="grid grid-cols-3 gap-3">
      {steps.map((step, index) => (
        <div key={step} className="relative rounded-lg border border-primary/20 bg-white/[0.035] p-4">
          <div className="mb-3 text-xs font-black text-cyan">{String(index + 1).padStart(2, "0")}</div>
          <div className="font-bold text-textMain">{step}</div>
          {index < steps.length - 1 ? <div className="absolute -right-2 top-1/2 h-px w-4 bg-cyan/50" /> : null}
        </div>
      ))}
    </div>
  );
}
