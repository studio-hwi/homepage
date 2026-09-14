export const site = {
  name: "STUDIO HWI",
  url: "https://www.studiohwi.kr",
  title: "STUDIO HWI — 1인 개발 스튜디오",
  description:
    "iOS·Android 앱과 웹을 기획부터 출시까지, 한 사람이 끝까지 만드는 1인 개발 스튜디오. 가계부부, Praise Hub, Baby Flow를 만들었습니다.",
  email: "admin@studiohwi.kr",
  location: "Seoul, KR",
  since: "2025",
  links: [
    { label: "GitHub", href: "https://github.com/hwiVeloper" },
    { label: "Instagram", href: "https://instagram.com/studio.hwi.app" },
  ],
  nav: [
    { label: "Work", href: "#work" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ],
  stats: [
    { value: "03", label: "Apps shipped" },
    { value: "02", label: "Platforms" },
    { value: "01", label: "Developer" },
  ],
  services: [
    {
      index: "01",
      title: "앱 개발",
      body: "React Native로 iOS와 Android를 한 번에. 위젯, 실시간 동기화, 푸시 알림, 스토어 심사와 출시까지 직접 챙깁니다.",
    },
    {
      index: "02",
      title: "웹 개발",
      body: "Next.js로 만드는 랜딩 페이지와 서비스 웹. 빠르고 가볍게, 검색 노출까지 신경 씁니다.",
    },
    {
      index: "03",
      title: "백엔드",
      body: "Java와 Spring으로 API와 데이터 구조를 설계합니다. 앱이 커져도 흔들리지 않게.",
    },
  ],
  stack: [
    { name: "Java", role: "Backend" },
    { name: "Spring", role: "Backend · API" },
    { name: "Next.js", role: "Web" },
    { name: "React Native", role: "iOS · Android" },
  ],
} as const;
