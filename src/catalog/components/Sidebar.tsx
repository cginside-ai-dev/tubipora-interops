import { NavLink } from "react-router-dom";
import { catalog } from "../data";
import type { CatalogEntry, EntryStatus } from "../../shared/types/catalog";

const GLYPH: Record<EntryStatus, { mark: string; cls: string }> = {
  active: { mark: "●", cls: "text-emerald-500" },
  stub: { mark: "◐", cls: "text-amber-500" },
  external: { mark: "↗", cls: "text-primary" },
};

const ROW = "flex items-center gap-2.5 rounded-lg px-2.5 py-2 text-[14px] cursor-pointer";

// 횡단 인프라(메신저·문서 허브) — 특정 역량 슬롯이 아니라 상시 바로가기. 푸터에 고정.
const TOOLS = [
  { role: "메신저", label: "Teams", href: "https://teams.microsoft.com/v2/" },
  { role: "위키", label: "Notion", href: "https://app.notion.com/p/cginside/3881847f058f8018a54eef689deff138" },
];

function EntryRow({ entry }: { entry: CatalogEntry }) {
  const g = GLYPH[entry.status];
  const inner = (
    <>
      <span className={`w-4 text-center text-xs ${g.cls}`}>{g.mark}</span>
      <span>{entry.label}</span>
      {entry.badge && (
        <span className="ml-auto rounded-full bg-secondary px-2 py-0.5 text-[10px] text-on-surface-muted">
          {entry.badge}
        </span>
      )}
    </>
  );

  if (entry.kind === "link") {
    return (
      <a href={entry.href} target="_blank" rel="noreferrer" className={`${ROW} text-neutral hover:bg-secondary`}>
        {inner}
      </a>
    );
  }

  return (
    <NavLink
      to={entry.route!}
      className={({ isActive }) =>
        `${ROW} ${isActive ? "bg-primary/10 font-semibold text-primary" : "text-neutral hover:bg-secondary"}`
      }
    >
      {inner}
    </NavLink>
  );
}

// 카탈로그 사이드바 = 셸의 핵심. 카테고리별로 항목을 나열한다.
export function Sidebar() {
  return (
    <nav className="flex h-full flex-col p-2.5">
      {catalog.map((cat) => (
        <div key={cat.name}>
          <div className="px-2.5 pb-1 pt-4 text-[11px] font-bold uppercase tracking-wide text-on-surface-muted">
            {cat.name}
          </div>
          {cat.entries.map((entry) => (
            <EntryRow key={entry.id} entry={entry} />
          ))}
        </div>
      ))}

      <div className="mt-auto border-t border-border pt-3">
        <div className="px-2.5 pb-1 text-[11px] font-bold uppercase tracking-wide text-on-surface-muted">
          도구
        </div>
        {TOOLS.map((t) => (
          <a
            key={t.label}
            href={t.href}
            target="_blank"
            rel="noreferrer"
            className={`${ROW} text-neutral hover:bg-secondary`}
          >
            <span className="w-4 text-center text-xs text-primary">↗</span>
            <span>{t.role}</span>
            <span className="ml-auto text-[12px] text-on-surface-muted">{t.label}</span>
          </a>
        ))}

        <div className="mt-3 flex flex-wrap gap-x-3 gap-y-1 px-2.5 pt-3 text-[11px] text-on-surface-muted">
          <span>
            <b className="text-emerald-500">●</b> 사용가능
          </span>
          <span>
            <b className="text-amber-500">◐</b> 준비중
          </span>
          <span>
            <b className="text-primary">↗</b> 외부링크
          </span>
        </div>
      </div>
    </nav>
  );
}
