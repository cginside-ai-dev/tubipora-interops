// Public entry for the embeddable diagram viewer package.
// React Flow's base stylesheet MUST load before our index.css — index.css
// strips the default .react-flow__node-group box (same specificity, so order
// decides). When embedded, index.ts drives load order, so import base first
// here; otherwise the default solid box returns and double-draws with our
// dashed boundary.
import "@xyflow/react/dist/style.css";
import "./index.css";

export { DiagramViewer } from "./App";
export type { DiagramManifest } from "./manifest";
