import { createBrowserRouter, Navigate } from "react-router-dom";
import { AppLayout } from "./AppLayout";
import { ErrorPage } from "./shared/components/ErrorPage";
import { diagramRoutes } from "./diagram";
import { stubRoutes } from "./catalog";

// 셸이 각 기능의 라우트를 모아 구성한다. (기능은 자기 라우트를 index에서 export)
export const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Navigate to="/diagram" replace /> },
      ...diagramRoutes,
      ...stubRoutes,
    ],
  },
], {
  // 서브패스(/tubipora-interops/)로 배포되므로 라우터도 같은 base를 알아야
  // 경로가 매칭된다. 없으면 전부 no-match → ErrorPage. dev에선 BASE_URL이 "/".
  basename: import.meta.env.BASE_URL,
});
