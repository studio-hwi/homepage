export type Project = {
  index: string;
  name: string;
  tagline: string;
  description: string;
  year: string;
  url: string;
  appStore?: string;
  googlePlay?: string;
  preview?: {
    src: string;
    width: number;
    height: number;
    alt: string;
  };
};

export const projects: Project[] = [
  {
    index: "01",
    name: "가계부부",
    tagline: "연인·부부를 위한 공유 가계부",
    description:
      "실시간 동기화, 월 예산, 카테고리 통계, 할부·반복 내역까지. 함께 사는 두 사람을 위한 가장 쉬운 가계부.",
    year: "2025",
    url: "https://ggbb.studiohwi.kr",
    appStore: "https://apps.apple.com/app/id6743708760",
    googlePlay: "https://play.google.com/store/apps/details?id=dev.hwiveloper.ggbb",
    preview: {
      src: "/projects/ggbb-shot.jpg",
      width: 615,
      height: 1334,
      alt: "가계부부 앱 화면",
    },
  },
  {
    index: "02",
    name: "Praise Hub",
    tagline: "찬양팀을 위한 올인원 협업 앱",
    description:
      "콘티 구성과 공유, 펜·하이라이트가 실시간으로 맞춰지는 악보 뷰어, 일정·출석·공지까지 한 곳에서.",
    year: "2026",
    url: "https://praise-hub.studiohwi.kr",
    appStore: "https://apps.apple.com/app/id6781876923",
    googlePlay:
      "https://play.google.com/store/apps/details?id=dev.hwiveloper.praisehub",
    preview: {
      src: "/projects/praise-hub-shot.jpg",
      width: 615,
      height: 1334,
      alt: "Praise Hub 앱 화면",
    },
  },
  {
    index: "03",
    name: "Baby Flow",
    tagline: "부모와 시터를 위한 육아 기록",
    description:
      "위젯과 Live Activity로 손대지 않고 기록하고, 아기의 리듬을 계산해 다음 수유·낮잠 시간대를 미리 알려줍니다.",
    year: "2026",
    url: "https://babyflow.studiohwi.kr",
    appStore: "https://apps.apple.com/app/id6810622505",
    googlePlay:
      "https://play.google.com/store/apps/details?id=dev.hwiveloper.babyflow",
    preview: {
      src: "/projects/baby-flow-og.png",
      width: 1200,
      height: 630,
      alt: "Baby Flow",
    },
  },
];
