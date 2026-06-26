import type { CatalogCategory } from "../shared/types/catalog";

// 카테고리 → 항목 시드. 항목은 두 종류: playbook(자체) / link(외부 앱).
// 카테고리는 열린 분류 — 팀원이 새 항목을 해당 카테고리에 추가.
export const catalog: CatalogCategory[] = [
  {
    name: "회의·협업",
    entries: [
      { id: "minutes", label: "회의록", kind: "playbook", status: "stub", route: "/playbook/minutes" },
    ],
  },
  {
    name: "보고·경영",
    entries: [
      { id: "weekly", label: "주간보고", kind: "playbook", status: "stub", route: "/playbook/weekly" },
    ],
  },
  {
    name: "영업·제안",
    entries: [
      { id: "proposal", label: "사업제안서", kind: "playbook", status: "stub", route: "/playbook/proposal" },
    ],
  },
  {
    name: "인사·총무",
    entries: [
      { id: "intern", label: "인턴 관리", kind: "playbook", status: "stub", route: "/playbook/intern" },
    ],
  },
  {
    name: "개발·엔지니어링",
    entries: [
      { id: "diagram", label: "다이어그램", kind: "playbook", status: "active", route: "/diagram", badge: "뷰어" },
    ],
  },
  {
    name: "회계·재무",
    entries: [
      { id: "accounting", label: "회계·정산", kind: "link", status: "external", href: "https://login.office.hiworks.com/ihopper.co.kr", badge: "하이웍스" },
    ],
  },
];
