# STUDIO HWI — studiohwi.kr

1인 개발 스튜디오 STUDIO HWI의 홈페이지이자 포트폴리오.
운영 중인 앱(가계부부, Praise Hub, Baby Flow)을 소개합니다.

## 개발

```bash
npm install
npm run dev
```

http://localhost:3000 에서 확인합니다.

```bash
npm run build   # 프로덕션 빌드 (타입 체크 포함)
npm start       # 빌드 결과 실행
```

## 구조

- `src/app/` — 레이아웃, 페이지, 전역 스타일(`globals.css`에 디자인 토큰), OG 이미지
- `src/components/` — 섹션 컴포넌트 (Nav, Hero, Ticker, Work, About, Stack, Contact, Footer)
- `src/data/` — 사이트 정보(`site.ts`)와 프로젝트 목록(`projects.ts`). 내용 수정은 여기서.
- `public/projects/` — 앱 아이콘과 스크린샷
- `docs/superpowers/specs/` — 설계 문서

## 스택

Next.js 15 (App Router) · React 19 · Tailwind CSS 4 · Pretendard · Geist Mono
