import { useParams } from "react-router-dom";
import { catalog } from "../data";

// 아직 채워지지 않은 플레이북(STUB) 자리. 담당자가 이 라우트에 실제 기능을 채운다.
export function StubPage() {
  const { playbookId } = useParams();
  const entry = catalog.flatMap((c) => c.entries).find((e) => e.id === playbookId);
  return (
    <div className="grid h-full place-items-center p-10 text-center">
      <div>
        <div className="text-5xl text-border">◐</div>
        <h1 className="mt-4">{entry?.label ?? "플레이북"}</h1>
        <p className="mt-1 text-on-surface-muted">아직 STUB입니다 — 담당자가 채워나갈 자리예요.</p>
      </div>
    </div>
  );
}
