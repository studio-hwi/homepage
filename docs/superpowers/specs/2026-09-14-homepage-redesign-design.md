# STUDIO HWI 홈페이지 개편 — 설계

작성일: 2026-09-14

## 목표

www.studiohwi.kr 을 1인 개발 스튜디오 STUDIO HWI의 포트폴리오 페이지로 개편한다.
운영 중인 세 앱(가계부부, Praise Hub, Baby Flow)을 소개하고, 전문성 있고 샤프한
블랙 & 화이트 인상을 준다.

## 확정된 결정

- **톤**: 다크 베이스 고정. 팔레트는 CSS 변수로 두어 나중에 시스템 설정에 따른
  라이트 반전을 붙일 수 있게 하되, 이번에는 라이트/다크 전환 없음.
- **레이아웃**: A안 "에디토리얼 원페이지". 큰 타이포 히어로 → 번호 매긴 프로젝트 행
  → 하는 일 → 스택 → Contact. 프로젝트 행에는 B안의 스토어 배지(App Store /
  Google Play 텍스트 배지)를 넣는다.
- **노출 범위**: 브랜드(STUDIO HWI)로 소개. 실명은 쓰지 않는다.
- **연락처**: admin@studiohwi.kr
- **링크**: GitHub(https://github.com/hwiVeloper), Instagram(https://instagram.com/studio.hwi.app)
- **스택 표기**: Java, Spring, Next.js, React Native (이 네 개만)
- **언어**: 한국어 본문, 라벨/메타 정보는 영문 모노스페이스.

## 페이지 구성 (단일 페이지, 위에서 아래로)

1. **Nav** — 고정 상단. 좌측 워드마크 "STUDIO HWI", 우측 Work / About / Contact
   앵커. `mix-blend-mode: difference` 로 흰 배경 위를 지날 때 자동 반전.
2. **Hero** — 화면 높이 가득. 모노 아이브로우("Independent developer — Seoul, KR"),
   대형 헤드라인 "아이디어를 / 제품으로." (둘째 줄 아웃라인), 부제
   "iOS·Android 앱과 웹을 기획부터 출시까지, 한 사람이 끝까지 만듭니다.",
   하단에 숫자 3개(03 Apps shipped / 02 Platforms / 01 Developer)와 스크롤 힌트.
3. **Ticker** — 얇은 마퀴 한 줄. 앱 이름과 STUDIO HWI 반복.
4. **Work** — "Selected Work (03)". 행마다 번호 / 이름 / 한 줄 소개 / 스토어 배지 /
   화살표. 행 전체가 프로젝트 사이트 링크이고, 배지는 각 스토어로 간다.
   hover 시 행이 흰색으로 채워지며(위→아래 wipe) 글자가 검정으로 반전되고,
   우측에 앱 스크린샷이 기울어진 채로 떠오른다.
   - 01 가계부부 — 연인·부부를 위한 공유 가계부 — ggbb.studiohwi.kr
   - 02 Praise Hub — 찬양팀을 위한 올인원 협업 앱 — praise-hub.studiohwi.kr
   - 03 Baby Flow — 부모와 시터를 위한 육아 기록 — babyflow.studiohwi.kr
5. **About (What I do)** — 스튜디오 소개 한 단락 + 3열(앱 개발 / 웹 개발 / 백엔드),
   열 사이 hairline.
6. **Stack** — Java, Spring, Next.js, React Native 를 큰 글자 목록으로. 각 항목 옆에
   용도 라벨(Backend / Backend / Web / Mobile).
7. **Contact** — 큰 헤드라인 "같이 만들 이야기가 있다면.", 이메일 링크(mailto),
   GitHub ↗ / Instagram ↗.
8. **Footer** — © 연도 STUDIO HWI · Seoul, KR · GitHub · Instagram.

## 비주얼 시스템

- 색: 배경 #0A0A0A, 글자 #F2F2F2, 보조 #8A8A8A, 선 rgba(255,255,255,.14).
  라운드 없음(0px), 그림자 없음. 구분은 1px hairline 으로만.
- 서체: 본문 Pretendard Variable(npm `pretendard`, 동적 서브셋 CSS),
  라벨/숫자 Geist Mono(npm `geist`). 헤드라인은 -0.04em 자간, 0.95 행간.
- 모션: 히어로 텍스트 줄 단위 rise-in(로드 시), 섹션 스크롤 진입 시 fade-up
  (IntersectionObserver), 행 hover wipe, 티커 마퀴, 링크 밑줄 슬라이드.
  `prefers-reduced-motion` 이면 모두 끈다.
- 반응형: 모바일(≤768px)에서 행은 세로로 쌓이고(번호+이름 / 소개 / 배지),
  스크린샷 미리보기는 숨긴다. 헤드라인은 clamp 로 축소.

## 코드 구조

- `src/app/layout.tsx` — 메타데이터(title/description/OG, lang="ko"), 폰트 로드.
- `src/app/globals.css` — 토큰(@theme inline + :root 변수), 키프레임, 유틸.
- `src/app/page.tsx` — 섹션 조립만.
- `src/data/projects.ts`, `src/data/site.ts` — 프로젝트/링크/스택 데이터.
- `src/components/` — Nav, Hero, Ticker, Work(ProjectRow), About, Stack, Contact,
  Footer, Reveal(client, IntersectionObserver).
- `public/projects/` — 앱 아이콘, 스크린샷.

## 범위 밖

- 라이트 테마 전환, 다국어, 블로그, 프로젝트 상세 페이지, 폼 기반 문의.
