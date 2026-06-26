// 공용 상단바 — 브랜드 + 사용자. 어느 기능에도 종속되지 않는다.
export function TopBar() {
  return (
    <div className="flex h-full items-center justify-between px-5">
      <div className="flex items-center gap-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-primary ring-4 ring-primary/10" />
        <span className="text-[15px] font-bold text-on-secondary">Internal Ops</span>
      </div>
      <button className="rounded-lg bg-primary px-4 py-1.5 text-sm font-semibold text-on-primary hover:bg-primary-hover">
        로그인
      </button>
    </div>
  );
}
