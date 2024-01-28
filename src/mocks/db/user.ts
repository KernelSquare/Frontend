import { ACCOUNT_STATUS, User } from "@/interfaces/user"

export const mockUsers = [
  {
    id: 1,
    email: "testUser1@email.com",
    password: "Password1!",
    nickname: "zi존",
    experience: 10,
    level: 2,
    authorities: ["ROLE_USER"],
    account_status: ACCOUNT_STATUS.FALSE,
    image_url:
      "https://images.unsplash.com/photo-1520085601670-ee14aa5fa3e8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    introduction: "코딩 zi존의 페이지",
  },
  {
    id: 2,
    email: "testMentor1@email.com",
    password: "Mentor1!",
    nickname: "홍주광",
    experience: 2000,
    level: 7,
    authorities: ["ROLE_USER", "ROLE_MENTOR"],
    account_status: ACCOUNT_STATUS.TRUE,
    image_url:
      "https://images.unsplash.com/photo-1497493292307-31c376b6e479?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    introduction:
      "안녕하세요, 홍주광입니다. Spring Boot를 사용하는 백엔드 개발자입니다.주로 RESTful API를 개발하며, 효율적이고 확장 가능한 솔루션을 찾는 것을 즐깁니다. 테스트 주도 개발과 코드 품질에 중점을 두어 유지보수가 용이하고 안정적인 코드를 작성하는 것이 제 목표입니다. 새로운 기술에 대한 학습과 협업을 중요시하며, 함께 성장하고자 합니다.",
  },
  {
    id: 3,
    email: "ryanOh@kernel.com",
    password: "RyanOh1!",
    nickname: "RyanOh",
    experience: 5000,
    level: 7,
    authorities: ["ROLE_USER", "ROLE_MENTOR"],
    account_status: ACCOUNT_STATUS.TRUE,
    image_url:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    introduction:
      "안녕하세요 :) 저는 개발자 Ryan입니다. \n웹 개발과 애플리케이션 개발에 열정을 가지고 있습니다. 주로 프론트엔드 개발에 집중하고 있으며, 최신 웹 기술과 프레임워크에 관심이 있습니다. \n팀에서의 협업을 잘하기 위해 소통하면서 문제를 해결하려고 노력합니다. 항상 새로운 기술과 도구에 열려있습니다. 협업과 창의적인 문제 해결을 통해 최상의 결과물을 제공하는 개발자로서, 성공적인 프로젝트를 위해 노력합니다.\n감사합니다 :)",
  },
  {
    id: 4,
    email: "testUser2@email.com",
    password: "Password2!",
    nickname: "Mocks",
    experience: 2000,
    level: 5,
    authorities: ["ROLE_MENTOR"],
    account_status: ACCOUNT_STATUS.TRUE,
    image_url: null,
    introduction: "console.log('hello world')",
  },
  {
    id: 5,
    email: "testUser5@email.com",
    password: "Password5!",
    nickname: "Mocks",
    experience: 2000,
    level: 5,
    authorities: ["ROLE_MENTOR"],
    account_status: ACCOUNT_STATUS.TRUE,
    image_url: null,
    introduction: "console.log('hello world')",
  },
] as Array<User & { id: number; password: string }>
