import GlassCard from "../components/GlassCard";
import PageHeader from "../components/PageHeader";

export default function GlobalB2B() {
  const partners = ["Overseas distributors", "Industrial safety suppliers", "Functional fabric buyers", "Workwear brands", "Outdoor apparel brands", "PPE product companies", "Importers and sourcing agents"];
  const directions = ["Material Supply", "Functional Fabric Development", "OEM / ODM Products", "Protective Uniform Solutions", "Private Label Cooperation", "Distributor Partnership", "Sample Testing", "Export Documentation Support"];
  return (
    <div className="space-y-5">
      <PageHeader eyebrow="Global B2B Cooperation" title="High-performance protective materials for global partners" description="For distributors, industrial safety suppliers, workwear brands and functional fabric buyers." />
      <GlassCard className="p-6 text-lg leading-8 text-textSoft">We provide high-performance protective materials and application-ready solutions for global B2B partners, including functional membranes, PI-based thermal and flame-retardant materials, basalt fiber composites, OEM/ODM development support, sample testing and export-ready cooperation packages.</GlassCard>
      <div className="grid grid-cols-4 gap-3">{partners.map((item) => <GlassCard key={item} className="p-4 text-sm font-bold text-textMain">{item}</GlassCard>)}</div>
      <div className="grid grid-cols-4 gap-3">{directions.map((item) => <GlassCard key={item} className="p-4 text-sm text-cyan">{item}</GlassCard>)}</div>
      <div className="flex gap-3">{["Request Material Catalog", "Apply for Samples", "Submit B2B Inquiry", "Become a Distributor"].map((item) => <button key={item} className="rounded-lg border border-primary/25 px-4 py-2 text-cyan">{item}</button>)}</div>
    </div>
  );
}
