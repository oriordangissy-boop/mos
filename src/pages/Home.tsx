import { Building2, ChevronRight, Crown, Globe2, Landmark, Sparkles, Trophy, WalletCards } from "lucide-react";
import { useMemo, useState } from "react";
import DataTable from "../components/DataTable";
import GlassCard from "../components/GlassCard";
import StatCard from "../components/StatCard";
import { money, orderRegions, partnerAccounts, recentB2BOrders } from "../data/mockData";

export default function Home() {
  const [accountId, setAccountId] = useState("boss");
  const [selectedRegion, setSelectedRegion] = useState(orderRegions[0]);
  const account = partnerAccounts.find((item) => item.id === accountId) ?? partnerAccounts[0];
  const myOrders = useMemo(
    () => accountId === "boss" ? recentB2BOrders : recentB2BOrders.filter((order) => order.accountId === accountId),
    [accountId]
  );
  const totalSales = orderRegions.reduce((sum, item) => sum + item.sales, 0);
  const totalOrders = orderRegions.reduce((sum, item) => sum + item.orders, 0);
  const totalSettlement = orderRegions.reduce((sum, item) => sum + item.commission, 0);

  return (
    <div className="space-y-5">
      <section className="grid gap-5 lg:grid-cols-[1.35fr_420px]">
        <div className="glass relative min-h-[620px] overflow-hidden rounded-lg p-7 max-md:min-h-[720px] max-md:p-4 max-sm:min-h-[760px]">
          <img
            src="./assets/global-hero-earth.png"
            alt=""
            className="absolute inset-0 h-full w-full object-cover opacity-90"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,11,24,.92)_0%,rgba(5,11,24,.62)_44%,rgba(5,11,24,.18)_100%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_68%_44%,rgba(0,213,255,.16),transparent_31%),linear-gradient(180deg,rgba(5,11,24,.10),rgba(5,11,24,.80))]" />
          <div className="absolute left-1/2 top-1/2 h-[300px] w-[760px] -translate-x-1/2 -translate-y-1/2 rounded-[50%] border border-cyan/15 max-md:w-[520px]" />
          <svg className="absolute inset-0 h-full w-full">
            {orderRegions.slice(1).map((region, index) => (
              <line
                key={region.id}
                x1="60%"
                y1="47%"
                x2={`${region.x}%`}
                y2={`${region.y}%`}
                stroke={region.status.includes("落地") ? "rgba(0,213,255,.72)" : "rgba(255,176,32,.45)"}
                strokeWidth="1.5"
                strokeDasharray={region.status.includes("落地") ? "0" : "7 8"}
                className="origin-center animate-pulse"
                style={{ animationDelay: `${index * 200}ms` }}
              />
            ))}
          </svg>

          <div className="relative z-10 max-w-3xl">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan/30 bg-cyan/10 px-3 py-1 text-xs font-black text-cyan">
              <Sparkles size={14} /> 项目落地区域实时点亮
            </div>
            <h1 className="text-5xl font-black leading-tight text-textMain max-md:text-3xl">
              全球项目版图，<br />合作权益清晰可见。
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-7 text-textSoft max-md:text-sm">
              从中国材料与供应链能力出发，连接政企采购、区域渠道、品牌订单与海外代理。合作方登录后，可以看到自己参与的项目、贡献合同额和预计结算权益。
            </p>
          </div>

          {orderRegions.map((region) => (
            <button
              key={region.id}
              onClick={() => setSelectedRegion(region)}
              className="absolute z-20 -translate-x-1/2 -translate-y-1/2 text-left max-sm:-translate-x-1/3"
              style={{ left: `${region.x}%`, top: `${region.y}%` }}
            >
              <span className={`block h-4 w-4 rounded-full ${region.status.includes("落地") ? "bg-cyan shadow-[0_0_28px_rgba(0,213,255,.95)]" : region.status === "开拓中" ? "bg-warning shadow-[0_0_26px_rgba(255,176,32,.8)]" : "bg-slate-400 shadow-[0_0_18px_rgba(148,163,184,.55)]"}`} />
              <span className="mt-2 block min-w-28 rounded-md border border-primary/20 bg-[#07111F]/80 px-2 py-1 text-xs text-textMain backdrop-blur max-sm:min-w-20 max-sm:text-[10px]">
                {region.name}
              </span>
            </button>
          ))}

          <div className="absolute bottom-6 left-7 right-7 z-10 grid grid-cols-4 gap-3 max-md:bottom-4 max-md:left-4 max-md:right-4 max-md:grid-cols-2">
            <GlassCard className="p-4"><div className="text-xs text-textSoft">项目合同额</div><div className="mt-2 text-2xl font-black">{money(totalSales)}</div></GlassCard>
            <GlassCard className="p-4"><div className="text-xs text-textSoft">覆盖区域</div><div className="mt-2 text-2xl font-black">{orderRegions.length}</div></GlassCard>
            <GlassCard className="p-4"><div className="text-xs text-textSoft">落地项目</div><div className="mt-2 text-2xl font-black">{totalOrders}</div></GlassCard>
            <GlassCard className="p-4"><div className="text-xs text-textSoft">合作权益池</div><div className="mt-2 text-2xl font-black">{money(totalSettlement)}</div></GlassCard>
          </div>
        </div>

        <div className="space-y-4">
          <GlassCard className="p-5">
            <div className="mb-3 text-xs font-black uppercase tracking-[0.16em] text-cyan">合作方账号视角</div>
            <select className="blue-input h-11 w-full rounded-lg px-3" value={accountId} onChange={(event) => setAccountId(event.target.value)}>
              {partnerAccounts.map((item) => (
                <option key={item.id} value={item.id}>{item.name} · {item.role}</option>
              ))}
            </select>
            <div className="mt-4 rounded-lg border border-primary/20 bg-white/[0.035] p-4">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-xl font-black">{account.name}</div>
                  <div className="mt-1 text-sm text-textSoft">{account.scope}</div>
                </div>
                <Crown className="text-cyan" />
              </div>
            </div>
          </GlassCard>

          <StatCard label="预计结算权益" value={money(account.commission)} hint="按合作项目自动汇总" icon={WalletCards} tone="green" />
          <StatCard label="参与项目额" value={money(account.sales)} hint={`${account.orders} 个项目 / 订单`} icon={Building2} />

          <GlassCard className="p-5">
            <div className="mb-3 flex items-center justify-between">
              <h3 className="font-black text-textMain">{selectedRegion.name}</h3>
              <span className="rounded-full border border-cyan/35 bg-cyan/10 px-2.5 py-1 text-xs font-semibold text-cyan">{selectedRegion.status}</span>
            </div>
            <div className="grid grid-cols-2 gap-3 text-sm">
              <div className="rounded-lg border border-primary/15 bg-white/[0.035] p-3"><span className="block text-textSoft">项目类型</span><b>{selectedRegion.type}</b></div>
              <div className="rounded-lg border border-primary/15 bg-white/[0.035] p-3"><span className="block text-textSoft">落地数量</span><b>{selectedRegion.orders}</b></div>
              <div className="rounded-lg border border-primary/15 bg-white/[0.035] p-3"><span className="block text-textSoft">项目金额</span><b>{money(selectedRegion.sales)}</b></div>
              <div className="rounded-lg border border-primary/15 bg-white/[0.035] p-3"><span className="block text-textSoft">权益额度</span><b>{money(selectedRegion.commission)}</b></div>
            </div>
          </GlassCard>
        </div>
      </section>

      <div className="grid gap-5 lg:grid-cols-[1fr_420px]">
        <GlassCard>
          <div className="flex items-center justify-between gap-3 border-b border-primary/20 px-4 py-3 max-md:flex-col max-md:items-start">
            <h3 className="font-black text-textMain">我的项目贡献与结算</h3>
            <span className="text-xs text-textSoft">账号：{account.name}</span>
          </div>
          <DataTable
            data={myOrders}
            columns={[
              { key: "id", header: "项目编号", render: (row) => row.id },
              { key: "region", header: "地区", render: (row) => row.region },
              { key: "client", header: "客户", render: (row) => row.client },
              { key: "type", header: "类型", render: (row) => row.type },
              { key: "material", header: "材料/方案", render: (row) => row.material },
              { key: "amount", header: "项目金额", render: (row) => <span className="font-bold">{money(row.amount)}</span> },
              { key: "commission", header: "预计权益", render: (row) => <span className="font-bold text-success">{money(row.commission)}</span> }
            ]}
          />
        </GlassCard>

        <GlassCard className="p-5">
          <div className="mb-4 flex items-center gap-2">
            <Trophy className="text-warning" />
            <h3 className="text-lg font-black">区域项目排行</h3>
          </div>
          <div className="space-y-3">
            {[...orderRegions].sort((a, b) => b.sales - a.sales).map((region, index) => (
              <button key={region.id} onClick={() => setSelectedRegion(region)} className="flex w-full items-center justify-between rounded-lg border border-primary/15 bg-white/[0.035] p-3 text-left hover:border-cyan/40">
                <div className="flex items-center gap-3">
                  <span className="grid h-8 w-8 place-items-center rounded-md bg-cyan/10 text-sm font-black text-cyan">{index + 1}</span>
                  <div>
                    <div className="font-bold text-textMain">{region.name}</div>
                    <div className="text-xs text-textSoft">{region.type} · {region.orders} 个项目</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-black">{money(region.sales)}</div>
                  <div className="text-xs text-success">权益 {money(region.commission)}</div>
                </div>
                <ChevronRight size={16} className="text-textSoft" />
              </button>
            ))}
          </div>
        </GlassCard>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <GlassCard className="p-5"><Landmark className="mb-3 text-cyan" /><h3 className="font-black">政企与大 B 项目</h3><p className="mt-2 text-sm leading-6 text-textSoft">面向掌握政企、国企、园区、应急消防、电力能源资源的合作伙伴，展示项目承接与履约能力。</p></GlassCard>
        <GlassCard className="p-5"><Building2 className="mb-3 text-cyan" /><h3 className="font-black">品牌与小 B 订货</h3><p className="mt-2 text-sm leading-6 text-textSoft">面向品牌、工装企业、功能服装客户，展示材料方案如何转化为稳定订单。</p></GlassCard>
        <GlassCard className="p-5"><Globe2 className="mb-3 text-cyan" /><h3 className="font-black">海外渠道合作</h3><p className="mt-2 text-sm leading-6 text-textSoft">面向海外代理、分销和采购商，展示区域进展、样品测试和长期供应空间。</p></GlassCard>
      </div>
    </div>
  );
}
