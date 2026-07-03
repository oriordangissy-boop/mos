import { useState } from "react";
import type { ReactElement } from "react";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import About from "./pages/About";
import Contact from "./pages/Contact";
import DashboardMock from "./pages/DashboardMock";
import Documents from "./pages/Documents";
import GlobalB2B from "./pages/GlobalB2B";
import Government from "./pages/Government";
import Home from "./pages/Home";
import Materials from "./pages/Materials";
import OperationModel from "./pages/OperationModel";
import Partnership from "./pages/Partnership";
import Solutions from "./pages/Solutions";
import type { PageKey } from "./types";

const pages: Record<PageKey, ReactElement> = {
  home: <Home />,
  about: <About />,
  materials: <Materials />,
  solutions: <Solutions />,
  government: <Government />,
  globalB2B: <GlobalB2B />,
  operation: <OperationModel />,
  documents: <Documents />,
  partnership: <Partnership />,
  contact: <Contact />,
  dashboard: <DashboardMock />
};

export default function App() {
  const [activePage, setActivePage] = useState<PageKey>("home");

  return (
    <div className="min-h-screen">
      <Sidebar active={activePage} onChange={setActivePage} />
      <Topbar role="项目展示 / 线索承接 / 运营展示" />
      <main className="ml-64 px-6 py-6 max-md:ml-0 max-md:px-3 max-md:py-4">{pages[activePage]}</main>
    </div>
  );
}
