import user from "../assets/user.png";
import calendar from "../assets/calendar.png";
import map from "../assets/map.png";
import telephone from "../assets/telephone.png";
import email from "../assets/email.png";
import pencil from "../assets/pencil.png";

import front from "../assets/Front.png";
import back from "../assets/back.png";
import others from "../assets/others.png";

import github from "../assets/github.png";
import velog from "../assets/velog.png";

const aboutData = [
  {
    img: user,
    title: "이름",
    contents: "정재민",
  },
  {
    img: calendar,
    title: "생년월일",
    contents: "94.05.22",
  },
  {
    img: map,
    title: "주소지",
    contents: "경기도 군포시",
  },
  {
    img: telephone,
    title: "연락처",
    contents: "010-4083-7507",
  },
  {
    img: email,
    title: "이메일",
    contents: "james940522@gmail.com",
  },
  {
    img: pencil,
    title: "교육",
    contents: ["코드스테이츠", "(30기 수료)"],
  },
];

const stacks = [
  { title: "Front-end", img: front },
  { title: "Back-end", img: back },
  { title: "Others", img: others },
];

const links = [
  {
    title: github,
    id: "github",
    link: "https://github.com/James940522",
    contents: "소스 코드 저장소입니다.",
    explain: [
      "과거 프로젝트 소스 코드",
      "코딩 연습 소스코드",
      "스터디 레파지토리",
    ],
  },
  {
    title: velog,
    id: "velog",
    link: "https://velog.io/@woals3000",
    contents: "공부 및 회고 목적 블로그입니다.",
    explain: [
      "공부한 것을 진정한 나의 것으로 만들기 위한 기록",
      "웹 개발자의 길을 걸으며 공부한 웹 관련 지식 정리",
      "나 자신을 돌아보는 회고 기록",
    ],
  },
];
export { aboutData, stacks, links };
