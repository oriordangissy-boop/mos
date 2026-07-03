import type { LucideIcon } from "lucide-react";

export type PageKey =
  | "home"
  | "about"
  | "materials"
  | "solutions"
  | "government"
  | "globalB2B"
  | "operation"
  | "documents"
  | "partnership"
  | "contact"
  | "dashboard";

export type StatusTone = "blue" | "cyan" | "green" | "orange" | "red" | "gray" | "purple";

export interface NavItem {
  key: PageKey;
  label: string;
  icon: LucideIcon;
}

export interface Material {
  name: string;
  english: string;
  position: string;
  description: string;
  tags: string[];
  functions: string[];
  scenarios: string[];
}

export interface Solution {
  name: string;
  needs: string[];
  solution: string;
  materials: string[];
}

export interface DocumentItem {
  name: string;
  audience: string;
  type: string;
  updatedAt: string;
  action: string;
}

export interface PipelineProject {
  id: string;
  clientType: string;
  region: string;
  scenario: string;
  material: string;
  stage: string;
  owner: string;
  nextAction: string;
}

export interface ApplicationMatrix {
  material: string;
  function: string;
  scenario: string;
  clientType: string;
  documentStatus: string;
  sampleStatus: string;
}
