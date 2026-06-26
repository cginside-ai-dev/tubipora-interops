import { useRouteError } from "react-router-dom";

export function ErrorPage() {
  const err = useRouteError();
  const message = err instanceof Error ? err.message : "알 수 없는 오류";
  return (
    <div className="grid h-screen place-items-center p-10 text-center">
      <div>
        <h1>문제가 발생했어요</h1>
        <p className="mt-2 text-on-surface-muted">{message}</p>
      </div>
    </div>
  );
}
