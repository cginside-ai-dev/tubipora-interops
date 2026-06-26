# tubipora-interops — Internal Ops

사내 반복 운영 업무 보조 도구. 코드네임 없음(솔루션급 백본 아님 → 도메인명 그대로).
**프론트(웹 UI) 전용 셸** — 백엔드 없음. React 19 + Vite + TS + Tailwind v4 (Xenia 디자인 시스템).

## 실행

```bash
npm install
npm run dev      # 개발 서버
npm run build    # 프로덕션 빌드
```

## 구조 (feature-based)

```
src/
├─ shared/            # 공용 커널 (디자인토큰·TopBar·플러그인 계약 타입)
│  ├─ styles/theme.css        # Xenia 토큰 (@theme)
│  ├─ components/             # TopBar, ErrorPage
│  └─ types/catalog.ts        # CatalogEntry = 플러그인 계약(초안)
├─ catalog/           # 셸: 카테고리별 카탈로그 사이드바 + STUB 화면
├─ minutes/           # 회의록 플레이북 (첫 기능, 1인 풀스택 소유 단위)
├─ AppLayout.tsx      # TopBar + Sidebar + Outlet 합성
└─ App.tsx            # 기능 라우트 집약
```

- 항목 두 종류: **playbook**(자체, md 산출물) / **link**(외부 앱 하이퍼링크).
- 산출물 기본 = Markdown, export = docx/pdf/hwpx. **파일 서버 없음 — 다운로드만**(→ Notion·메일).
- 새 플레이북 = `src/{name}/` 폴더로 추가 → 자기 라우트를 `index.tsx`에서 export → `App.tsx`가 등록. 카탈로그 항목은 `catalog/data.ts`에 추가.

## 기획 문서

- 요구사항: `../docs/specs/internal-ops.brief.md`
