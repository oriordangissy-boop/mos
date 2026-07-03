import type { StatusTone } from "../types";

const toneMap: Record<StatusTone, string> = {
  blue: "border-primary/40 bg-primary/10 text-blue-200",
  cyan: "border-cyan/45 bg-cyan/10 text-cyan",
  green: "border-success/45 bg-success/10 text-success",
  orange: "border-warning/45 bg-warning/10 text-warning",
  red: "border-risk/45 bg-risk/10 text-risk",
  gray: "border-slate-500/35 bg-slate-500/10 text-slate-300",
  purple: "border-violet-400/40 bg-violet-400/10 text-violet-200"
};

export function statusTone(status: string): StatusTone {
  if (["Opened", "Completed", "Paid", "Approved", "Active", "Success"].includes(status)) return "green";
  if (["Developing", "Reviewing", "Submitted", "Pending", "Pending Payout", "Reportable", "Testing"].includes(status)) return "orange";
  if (["Paused", "Frozen", "Rejected", "Refunded", "Failed", "Abnormal", "Cancelled"].includes(status)) return "red";
  if (["Observing", "Unsettled", "Draft", "Not Started"].includes(status)) return "gray";
  if (["Super Admin", "Finance"].includes(status)) return "cyan";
  return "blue";
}

const statusText: Record<string, string> = {
  Opened: "已开拓",
  Developing: "开拓中",
  Observing: "观察中",
  Paused: "暂停",
  "Not Started": "未启动",
  Completed: "已完成",
  Pending: "待处理",
  Refunded: "已退款",
  "Partially Refunded": "部分退款",
  Abnormal: "异常",
  Unsettled: "未结算",
  Reportable: "可上报",
  Reviewing: "审核中",
  Paid: "已拨款",
  Frozen: "冻结",
  Approved: "已通过",
  Rejected: "已驳回",
  Submitted: "已提交",
  Draft: "草稿",
  "Pending Payout": "待拨款",
  Active: "启用",
  Success: "成功",
  Failed: "失败",
  Cancelled: "已取消",
  Testing: "测试中",
  "Super Admin": "超级管理员",
  Finance: "财务",
  "Regional Manager": "区域负责人",
  Salesperson: "销售顾问",
  "Read Only": "只读"
};

export default function StatusBadge({ status, tone }: { status: string; tone?: StatusTone }) {
  return (
    <span className={`inline-flex items-center rounded-full border px-2.5 py-1 text-xs font-semibold ${toneMap[tone ?? statusTone(status)]}`}>
      {statusText[status] ?? status}
    </span>
  );
}
