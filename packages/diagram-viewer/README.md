# @interops/diagram-viewer

`DiagramManifest`(ERD · 아키텍처 · 플로우차트) JSON을 React Flow로 렌더링하는 **임베드용 다이어그램 뷰어 패키지**. 백엔드 없이 매니페스트를 받아 자동 배치·라우팅하고, 노드를 드래그로 다듬은 뒤 PNG/SVG/레이아웃 JSON으로 내보낸다.

interops 웹앱이 소스 alias(`@interops/diagram-viewer`)로 임베드해 쓴다.

## 사용

```tsx
import { DiagramViewer, type DiagramManifest } from "@interops/diagram-viewer";

<DiagramViewer manifest={manifest} />;
```

## 독립 실행 (개발용)

```bash
npm run dev   # 드래그-드롭으로 매니페스트를 열어 확인
```
