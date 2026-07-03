import type { ApplicationMatrix, DocumentItem, Material, PipelineProject, Solution } from "../types";

export const materials: Material[] = [
  {
    name: "纳米纤维膜",
    english: "Nano Fiber Membrane",
    position: "纳米呼吸膜 / 防水透湿功能膜 / 轻量防护膜",
    description: "具有微孔结构的高性能功能膜材料，可在防水、防风的同时保持透湿和轻量化，适合用于户外防护、功能服装、医护防护、应急装备和工业工装复合。",
    tags: ["纳米微孔", "防水透湿", "轻量防护", "功能复合"],
    functions: ["防水", "透湿", "防风", "轻量化"],
    scenarios: ["冲锋衣", "防护服", "医护材料", "应急装备", "工业工装", "外贸功能面料"]
  },
  {
    name: "聚酰亚胺功能纤维",
    english: "Polyimide Functional Fiber",
    position: "航天级功能纤维 / 高性能保暖阻燃材料",
    description: "具备阻燃、保暖、远红外、抑菌、轻量等功能特征，适合用于特种防护、消防应急、能源作业、医护保暖、功能内衣、护具和床品等应用场景。",
    tags: ["航天级材料", "阻燃保暖", "远红外", "抑菌轻量"],
    functions: ["阻燃", "保暖", "抑菌", "远红外", "轻量"],
    scenarios: ["消防内衬", "特种工装", "防寒装备", "功能内衣", "护具", "医疗护理"]
  },
  {
    name: "玄武岩纤维",
    english: "Basalt Fiber",
    position: "火山岩基高性能复合纤维 / 工业级防护材料",
    description: "源于天然火山岩材料，具备高强度、耐高温、耐腐蚀、绝缘、阻燃等性能，适合用于电力能源、石化工业、复合材料和特种防护场景。",
    tags: ["火山岩基", "高强度", "耐高温", "绝缘阻燃"],
    functions: ["高强度", "耐高温", "耐腐蚀", "绝缘", "阻燃"],
    scenarios: ["电力作业", "石化防护", "工业工装", "复合材料", "高温作业", "特种防护"]
  },
  {
    name: "PI × 纳米膜复合体系",
    english: "PI x Nano Membrane System",
    position: "保暖阻燃 × 防水透湿复合方案",
    description: "以聚酰亚胺功能纤维和纳米纤维膜进行功能叠加，面向消防内衬、工装、防寒装备和应急防护场景。",
    tags: ["双核复合", "防护内层", "可送样复测", "场景适配"],
    functions: ["阻燃", "保暖", "防风", "透湿"],
    scenarios: ["消防应急", "电力能源", "国企工装", "户外功能服装"]
  },
  {
    name: "三核复合材料体系",
    english: "Nano Membrane x PI x Basalt System",
    position: "天盾高性能防护材料体系 / N+1 标准适配体系",
    description: "面向高风险工业、能源、石化和特种防护场景，将功能膜、PI 纤维和玄武岩纤维组合为可采购、可检测、可交付的材料方案。",
    tags: ["三核复合", "N+1 适配", "工业防护", "采购方案"],
    functions: ["阻燃", "绝缘", "防风", "耐高温", "轻量化"],
    scenarios: ["石化工业", "电力能源", "公安特警", "特种防护"]
  }
];

export const functions = ["防水", "透湿", "防风", "阻燃", "保暖", "抑菌", "远红外", "轻量化"];

export const solutions: Solution[] = [
  { name: "消防应急", needs: ["阻燃", "保暖", "轻量", "防风", "舒适内穿"], solution: "PI 功能纤维 + 纳米纤维膜复合体系，可用于消防内衬、防寒内衣、应急保暖装备、防护服材料。", materials: ["聚酰亚胺功能纤维", "纳米纤维膜"] },
  { name: "公安特警 / 特种作业", needs: ["轻量", "灵活", "防护", "快速响应"], solution: "轻量化功能复合面料，兼顾舒适性和防护能力，适合训练、执勤、户外巡防等场景。", materials: ["纳米纤维膜", "PI × 纳米膜复合体系"] },
  { name: "电力能源", needs: ["阻燃", "绝缘", "耐高温", "防风保暖"], solution: "PI + 玄武岩纤维 + 功能膜复合，可用于电力检修、户外高压作业、能源场站工装。", materials: ["聚酰亚胺功能纤维", "玄武岩纤维"] },
  { name: "石化工业", needs: ["阻燃", "防静电", "耐腐蚀", "工业防护"], solution: "高性能阻燃防护材料体系，适合石化、化工、工业园区作业服和防护内层。", materials: ["玄武岩纤维", "三核复合材料体系"] },
  { name: "医疗机构", needs: ["抑菌", "远红外", "保暖", "轻量舒适"], solution: "PI 功能纤维可用于医护保暖、康养护具、床品、功能内衣等方向。", materials: ["聚酰亚胺功能纤维"] },
  { name: "国企 / 园区工装", needs: ["统一形象", "功能升级", "集采交付", "成本可控"], solution: "按岗位、场景、季节和预算，定制功能工装材料与成品方案。", materials: ["纳米纤维膜", "PI × 纳米膜复合体系"] },
  { name: "户外功能服装", needs: ["防水", "透湿", "轻量", "防风"], solution: "以纳米纤维膜为核心，支持功能面料复合、样品测试和品牌化应用。", materials: ["纳米纤维膜"] },
  { name: "外贸防护用品", needs: ["资料完整", "样品可测", "出口合作", "渠道适配"], solution: "为海外 B 端客户提供材料目录、样品包、OEM/ODM 开发与分销合作支持。", materials: ["三核复合材料体系"] }
];

export const clientTypes = ["国内 G 端", "国企 / 园区", "工业 B 端", "外贸 B 端", "代理 / 分销", "品牌方"];

export const documents: DocumentItem[] = [
  { name: "项目介绍", audience: "政企 / 合作方", type: "PDF", updatedAt: "2026-06-20", action: "申请获取" },
  { name: "材料规格书", audience: "采购 / 技术", type: "PDF", updatedAt: "2026-06-18", action: "申请获取" },
  { name: "检测报告", audience: "G端 / 工业客户", type: "Report", updatedAt: "2026-06-12", action: "申请获取" },
  { name: "样品申请表", audience: "采购 / 代理", type: "Form", updatedAt: "2026-06-10", action: "下载模板" },
  { name: "采购方案", audience: "政企 / 国企", type: "Proposal", updatedAt: "2026-06-08", action: "申请获取" },
  { name: "外贸合作资料", audience: "海外 B 端", type: "Deck", updatedAt: "2026-06-05", action: "Request" },
  { name: "OEM/ODM 开发说明", audience: "品牌方", type: "PDF", updatedAt: "2026-05-28", action: "申请获取" },
  { name: "License 合作说明", audience: "代理 / 负责人", type: "PDF", updatedAt: "2026-05-22", action: "申请获取" }
];

export const pipelines: PipelineProject[] = [
  { id: "KRZ-001", clientType: "国内 G 端", region: "华东", scenario: "消防应急", material: "PI × 纳米膜复合体系", stage: "已寄样", owner: "赵晨", nextAction: "等待复测反馈" },
  { id: "KRZ-002", clientType: "国企 / 园区", region: "华北", scenario: "国企工装", material: "纳米纤维膜", stage: "报价中", owner: "王敏", nextAction: "提交框架报价" },
  { id: "KRZ-003", clientType: "工业 B 端", region: "华中", scenario: "电力能源", material: "玄武岩纤维", stage: "测试中", owner: "陈静", nextAction: "补充绝缘参数" },
  { id: "KRZ-004", clientType: "工业 B 端", region: "华南", scenario: "石化工业", material: "三核复合材料体系", stage: "已发资料", owner: "周航", nextAction: "安排技术会议" },
  { id: "KRZ-005", clientType: "医疗机构", region: "西南", scenario: "医疗机构", material: "聚酰亚胺功能纤维", stage: "已沟通", owner: "林蔚", nextAction: "寄送样品包" },
  { id: "KRZ-006", clientType: "外贸 B 端", region: "欧洲", scenario: "户外功能服装", material: "纳米纤维膜", stage: "报价中", owner: "Noah", nextAction: "提供 MOQ 与交期" },
  { id: "KRZ-007", clientType: "代理 / 分销", region: "东南亚", scenario: "国企工装", material: "PI × 纳米膜复合体系", stage: "试点中", owner: "林蔚", nextAction: "收集试穿反馈" },
  { id: "KRZ-008", clientType: "外贸 B 端", region: "中东", scenario: "外贸防护用品", material: "玄武岩纤维", stage: "新线索", owner: "Omar", nextAction: "发送英文目录" },
  { id: "KRZ-009", clientType: "品牌方", region: "北美", scenario: "户外功能服装", material: "纳米纤维膜", stage: "已发资料", owner: "Mia", nextAction: "确认样衣开发方向" },
  { id: "KRZ-010", clientType: "外贸 B 端", region: "欧洲", scenario: "外贸防护用品", material: "三核复合材料体系", stage: "成交", owner: "Noah", nextAction: "进入批量交付" }
];

export const matrix: ApplicationMatrix[] = [
  { material: "纳米纤维膜", function: "防水透湿", scenario: "户外功能服装", clientType: "品牌方", documentStatus: "资料完整", sampleStatus: "可寄样" },
  { material: "聚酰亚胺功能纤维", function: "阻燃保暖", scenario: "消防应急", clientType: "国内 G 端", documentStatus: "需补报告", sampleStatus: "可寄样" },
  { material: "玄武岩纤维", function: "耐高温绝缘", scenario: "电力能源", clientType: "工业 B 端", documentStatus: "资料完整", sampleStatus: "小样可测" },
  { material: "PI × 纳米膜复合体系", function: "防风保暖", scenario: "国企工装", clientType: "国企 / 园区", documentStatus: "资料完整", sampleStatus: "打样中" },
  { material: "三核复合材料体系", function: "工业防护", scenario: "石化工业", clientType: "工业 B 端", documentStatus: "方案准备中", sampleStatus: "需评估" }
];

export const partnerAccounts = [
  { id: "boss", name: "总部视角", role: "运营管理", scope: "全部地区与合作项目", orders: 186, sales: 12680000, commission: 842000 },
  { id: "east", name: "华东政企伙伴", role: "G端项目资源", scope: "中国华东、国企园区、应急消防", orders: 38, sales: 2680000, commission: 184300 },
  { id: "sea", name: "东南亚渠道伙伴", role: "海外区域渠道", scope: "东南亚工装、分销与代理项目", orders: 26, sales: 860000, commission: 60200 },
  { id: "brand", name: "品牌合作方", role: "品牌/小B订货", scope: "品牌订单、样品测试与复购项目", orders: 12, sales: 390000, commission: 27600 }
];

export const orderRegions = [
  { id: "china", name: "中国华东", type: "G端 / 国企园区", x: 60, y: 47, orders: 38, sales: 2680000, commission: 184300, owner: "华东政企伙伴", status: "已落地", accountId: "east" },
  { id: "sea", name: "东南亚", type: "工装代理 / 分销", x: 66, y: 61, orders: 26, sales: 860000, commission: 60200, owner: "东南亚渠道伙伴", status: "已落地", accountId: "sea" },
  { id: "europe", name: "欧洲", type: "功能面料客户", x: 47, y: 34, orders: 18, sales: 740000, commission: 48100, owner: "海外业务", status: "已落地", accountId: "boss" },
  { id: "north-america", name: "北美", type: "户外品牌 / 小B", x: 24, y: 41, orders: 12, sales: 390000, commission: 27600, owner: "品牌合作方", status: "样品后落地", accountId: "brand" },
  { id: "middle-east", name: "中东", type: "PPE 采购商", x: 54, y: 47, orders: 9, sales: 260000, commission: 17100, owner: "中东渠道", status: "开拓中", accountId: "boss" },
  { id: "africa", name: "非洲", type: "询盘储备", x: 50, y: 67, orders: 3, sales: 62000, commission: 2800, owner: "待分配", status: "观察中", accountId: "boss" }
];

export const recentB2BOrders = [
  { id: "KRZ-O-62018", region: "中国华东", client: "上海启辰智能制造", type: "G端 / 园区集采", material: "PI × 纳米膜复合体系", amount: 128000, commission: 9600, accountId: "east" },
  { id: "KRZ-O-62011", region: "中国华东", client: "苏州朗月设备", type: "国企工装", material: "纳米纤维膜", amount: 42000, commission: 2520, accountId: "east" },
  { id: "KRZ-O-61980", region: "东南亚", client: "SEA Workwear Agent", type: "海外代理", material: "聚酰亚胺功能纤维", amount: 152000, commission: 10640, accountId: "sea" },
  { id: "KRZ-O-61708", region: "北美", client: "Pacific Outdoor Brand", type: "品牌订货", material: "纳米纤维膜", amount: 174000, commission: 12180, accountId: "brand" },
  { id: "KRZ-O-61663", region: "欧洲", client: "Munich Atlas GmbH", type: "功能面料客户", material: "纳米纤维膜", amount: 128000, commission: 8320, accountId: "boss" },
  { id: "KRZ-O-61408", region: "中东", client: "Gulf Vista Trading", type: "PPE 采购商", material: "玄武岩纤维", amount: 64000, commission: 4480, accountId: "boss" }
];

export const money = (value: number) => "¥" + value.toLocaleString("zh-CN", { maximumFractionDigits: 0 });
