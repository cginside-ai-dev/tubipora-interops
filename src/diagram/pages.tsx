import { DiagramViewer, type DiagramManifest } from "@interops/diagram-viewer";
import sample from "./sample.json";

// 다이어그램 뷰어를 셸 콘텐츠 영역에 가득 채워 띄운다. 샘플 매니페스트를
// 미리 실어 즉시 렌더되며, 파일 드래그-드롭으로 다른 매니페스트로 교체된다.
export function DiagramPage() {
  return (
    <div className="h-full">
      <DiagramViewer manifest={sample as DiagramManifest} />
    </div>
  );
}
