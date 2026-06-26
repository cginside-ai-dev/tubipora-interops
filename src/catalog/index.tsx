import { StubPage } from "./components/StubPage";

export { Sidebar } from "./components/Sidebar";
export { catalog } from "./data";

// 미구현 플레이북은 STUB 화면으로. (정적 경로 minutes 가 우선 매칭됨)
export const stubRoutes = [{ path: "playbook/:playbookId", element: <StubPage /> }];
