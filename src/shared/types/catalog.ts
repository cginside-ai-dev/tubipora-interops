// 플러그인 계약(초안): 카탈로그에 등록되는 항목의 공통 형태.
// 셸은 이 타입만 알고, 각 기능(플레이북)이 STUB을 채운다.

export type EntryStatus = "active" | "stub" | "external";
export type EntryKind = "playbook" | "link";

export interface CatalogEntry {
  id: string;
  label: string;
  kind: EntryKind;
  status: EntryStatus;
  /** kind=playbook 일 때 셸 내부 라우트 (NavLink to) */
  route?: string;
  /** kind=link 일 때 외부 앱 하이퍼링크 */
  href?: string;
  /** 우측 배지 텍스트 (준비중 / 커스텀 / 더존 ↗ 등) */
  badge?: string;
}

export interface CatalogCategory {
  name: string;
  entries: CatalogEntry[];
}

/** 산출물 포맷 — md 기본 + export */
export type OutputFormat = "md" | "docx" | "pdf" | "hwpx";
