import type { ReactNode } from "react";

export default function GlassCard({
  children,
  className = ""
}: {
  children: ReactNode;
  className?: string;
}) {
  return <section className={`glass rounded-lg ${className}`}>{children}</section>;
}
