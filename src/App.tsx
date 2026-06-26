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
]);
