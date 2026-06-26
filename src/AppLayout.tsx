import { Outlet } from "react-router-dom";
import { TopBar } from "./shared/components/TopBar";
import { Sidebar } from "./catalog";

// 앱 레벨 합성: 공용 TopBar + 카탈로그 Sidebar + 기능 화면(Outlet)
export function AppLayout() {
  return (
    <div className="grid h-screen grid-cols-[280px_1fr] grid-rows-[56px_1fr]">
      <header className="col-span-2 border-b border-border bg-surface">
        <TopBar />
      </header>
      <aside className="overflow-y-auto border-r border-border bg-surface-muted">
        <Sidebar />
      </aside>
      <main className="overflow-y-auto">
        <Outlet />
      </main>
    </div>
  );
}
