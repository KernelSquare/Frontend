import badge_url from "@/assets/images/badges"
import { Question } from "@/interfaces/question"

export const mockQuestions: Array<Question> = [
  {
    id: 1,
    question_image_url: "",
    nickname: "zl존",
    image_url: "",
    level: 4,
    level_image_url: badge_url[4],
    skills: ["java", "jpa"],
    title: "Array to Object with nesting childs in js",
    content:
      "i have the Array in js, but how to convert to object with nesting childs ? \n This is my array: \n ```javascript const arr = [{ no: 1 }, { no: 2 }, { no: 3 }];```",
    view_count: 98,
    close_status: false,
    member_image_url:
      "https://mobirise.com/bootstrap-template//profile-template/assets/images/timothy-paul-smith-256424-1200x800.jpg",
    created_date: "2023-12-16T23:10:12",
    modified_date: "2023-12-16T23:10:12",
    list: [],
  },
  {
    id: 2,
    title:
      "question2질문2question2질문2question 2질문2 question2질문2 question2질문2question2질문2 question2질문2",
    content:
      "### 🖥️ TTV - Time To View - 사용자가 웹 사이트를 볼 수 있는 시간\n### 🖱️ TTI  - Time To Interact - 사용자가 웹 사이트와 상호작용(클릭 등)을 할 수 있는 시간",
    question_image_url: "",
    view_count: 46,
    close_status: false,
    nickname: "홍주광",
    member_image_url:
      "https://mobirise.com/bootstrap-template//profile-template/assets/images/timothy-paul-smith-256424-1200x800.jpg",
    level: 3,
    level_image_url: badge_url[3],
    skills: ["docker"],
    created_date: "2023-12-16T22:00:00",
    modified_date: "2023-12-16T22:00:00",
    list: [],
  },
  {
    id: 3,
    title:
      "질문3질문3질문3질문3질문3질문3질문3질문3질문3질문3질문3질문3질문3질문3질문3질문3질문3질문3질문3질문3질문3질문3",
    content:
      "### <code>getServerSideProps( )</code> \n ```js function Page({ data }) \n { // 데이터를 렌더링하는 코드~ } \n // 모든 요청에서 호출된다.```",
    question_image_url: "",
    view_count: 32,
    close_status: false,
    nickname: "zi존",
    member_image_url:
      "https://mobirise.com/bootstrap-template//profile-template/assets/images/timothy-paul-smith-256424-1200x800.jpg",
    level: 4,
    level_image_url:
      "https://mobirise.com/bootstrap-template//profile-template/assets/images/timothy-paul-smith-256424-1200x800.jpg",
    skills: ["javascript", "react"],
    created_date: "2023-12-16T18:09:02",
    modified_date: "2023-12-16T18:09:02",
    list: [],
  },
  {
    id: 4,
    title: "질문4",
    content:
      "## 🥏 다시 돌아온 SSR! \n - 이전에 Next.js를 사용하게 된 이유에서도 정리했지만,\n - React, Angular, Vue와 같은 SPA 프레임워크들이 사용하던 CSR 방식에 문제점이 발견되기 시작했다.",
    question_image_url:
      "https://mobirise.com/bootstrap-template//profile-template/assets/images/timothy-paul-smith-256424-1200x800.jpg",
    view_count: 9,
    nickname: "zl존",
    member_image_url:
      "https://mobirise.com/bootstrap-template//profile-template/assets/images/timothy-paul-smith-256424-1200x800.jpg",
    close_status: false,
    level: 4,
    level_image_url:
      "https://mobirise.com/bootstrap-template//profile-template/assets/images/timothy-paul-smith-256424-1200x800.jpg",
    skills: ["java", "docker", "jpa"],
    created_date: "2023-12-16T17:00:22",
    modified_date: "2023-12-16T17:00:22",
    list: [],
  },
  {
    id: 5,
    title: "질문5",
    content:
      "### 🖥️ TTV - Time To View - 사용자가 웹 사이트를 볼 수 있는 시간\n### 🖱️ TTI  - Time To Interact - 사용자가 웹 사이트와 상호작용(클릭 등)을 할 수 있는 시간",
    question_image_url: "",
    view_count: 9,
    close_status: false,
    nickname: "zl존",
    member_image_url:
      "https://mobirise.com/bootstrap-template//profile-template/assets/images/timothy-paul-smith-256424-1200x800.jpg",
    level: 4,
    level_image_url:
      "https://mobirise.com/bootstrap-template//profile-template/assets/images/timothy-paul-smith-256424-1200x800.jpg",
    skills: ["java"],
    created_date: "2023-12-16T12:01:01",
    modified_date: "2023-12-16T12:01:01",
    list: [],
  },
  {
    id: 6,
    title: "질문6",
    content:
      "### <code>getServerSideProps( )</code> ```js function Page({ data }) { // 데이터를 렌더링하는 코드~ } // 모든 요청에서 호출된다. export async function getServerSideProps() { // 외부 API에서 전송되는 데이터를 fetch const res = await fetch(`https://.../data`); const data = await res.json(); // Props를 사용해 페이지로 데이터를 전달한다. return { props: { data } };} export default Page;```",
    question_image_url: "",
    view_count: 9,
    close_status: false,
    nickname: "zl존",
    member_image_url:
      "https://mobirise.com/bootstrap-template//profile-template/assets/images/timothy-paul-smith-256424-1200x800.jpg",
    level: 4,
    level_image_url:
      "https://mobirise.com/bootstrap-template//profile-template/assets/images/timothy-paul-smith-256424-1200x800.jpg",
    skills: ["python"],
    created_date: "2023-12-16T07:20:55",
    modified_date: "2023-12-16T07:20:55",
    list: [],
  },
  {
    id: 7,
    title: "질문7",
    content: "콘텐츠7",
    question_image_url: "",
    view_count: 9,
    close_status: false,
    nickname: "zl존",
    member_image_url:
      "https://mobirise.com/bootstrap-template//profile-template/assets/images/timothy-paul-smith-256424-1200x800.jpg",
    level: 4,
    level_image_url:
      "https://mobirise.com/bootstrap-template//profile-template/assets/images/timothy-paul-smith-256424-1200x800.jpg",
    skills: ["next.js", "react"],
    created_date: "2023-12-15T22:10:12",
    modified_date: "2023-12-15T22:10:12",
    list: [],
  },
  {
    id: 8,
    title: "질문8",
    content: "콘텐츠8",
    question_image_url: "",
    view_count: 9,
    close_status: false,
    nickname: "zl존",
    member_image_url:
      "https://mobirise.com/bootstrap-template//profile-template/assets/images/timothy-paul-smith-256424-1200x800.jpg",
    level: 4,
    level_image_url:
      "https://mobirise.com/bootstrap-template//profile-template/assets/images/timothy-paul-smith-256424-1200x800.jpg",
    skills: ["java"],
    created_date: "2023-12-14T02:30:35",
    modified_date: "2023-12-14T02:30:35",
    list: [],
  },
  {
    id: 9,
    title: "질문9",
    content: "콘텐츠9",
    question_image_url: "",
    view_count: 9,
    close_status: false,
    nickname: "zl존",
    member_image_url:
      "https://mobirise.com/bootstrap-template//profile-template/assets/images/timothy-paul-smith-256424-1200x800.jpg",
    level: 4,
    level_image_url:
      "https://mobirise.com/bootstrap-template//profile-template/assets/images/timothy-paul-smith-256424-1200x800.jpg",
    skills: ["typescript", "react"],
    created_date: "2023-12-14T02:09:00",
    modified_date: "2023-12-14T02:09:00",
    list: [],
  },
  {
    id: 10,
    title: "질문10",
    content: "콘텐츠10",
    question_image_url: "",
    view_count: 9,
    close_status: false,
    nickname: "zl존",
    member_image_url:
      "https://mobirise.com/bootstrap-template//profile-template/assets/images/timothy-paul-smith-256424-1200x800.jpg",
    level: 4,
    level_image_url:
      "https://mobirise.com/bootstrap-template//profile-template/assets/images/timothy-paul-smith-256424-1200x800.jpg",
    skills: ["node.js"],
    created_date: "2023-12-13T22:41:12",
    modified_date: "2023-12-13T22:41:12",
    list: [],
  },
  {
    id: 11,
    title: "질문11",
    content: "콘텐츠11",
    question_image_url: "",
    view_count: 9,
    close_status: false,
    nickname: "zl존",
    member_image_url:
      "https://mobirise.com/bootstrap-template//profile-template/assets/images/timothy-paul-smith-256424-1200x800.jpg",
    level: 4,
    level_image_url:
      "https://mobirise.com/bootstrap-template//profile-template/assets/images/timothy-paul-smith-256424-1200x800.jpg",
    skills: ["java", "java"],
    created_date: "2023-12-13T08:37:21",
    modified_date: "2023-12-13T08:37:21",
    list: [],
  },
  {
    id: 12,
    title: "질문12",
    content: "콘텐츠12",
    question_image_url: "",
    view_count: 9,
    close_status: false,
    nickname: "zl존",
    member_image_url:
      "https://mobirise.com/bootstrap-template//profile-template/assets/images/timothy-paul-smith-256424-1200x800.jpg",
    level: 4,
    level_image_url:
      "https://mobirise.com/bootstrap-template//profile-template/assets/images/timothy-paul-smith-256424-1200x800.jpg",
    skills: ["java"],
    created_date: "2023-12-13T06:10:12",
    modified_date: "2023-12-13T06:10:12",
    list: [],
  },
  {
    id: 13,
    title: "질문13",
    content: "콘텐츠13",
    question_image_url: "",
    view_count: 9,
    close_status: false,
    nickname: "zl존",
    member_image_url:
      "https://mobirise.com/bootstrap-template//profile-template/assets/images/timothy-paul-smith-256424-1200x800.jpg",
    level: 4,
    level_image_url:
      "https://mobirise.com/bootstrap-template//profile-template/assets/images/timothy-paul-smith-256424-1200x800.jpg",
    skills: ["java"],
    created_date: "2023-12-12T05:51:50",
    modified_date: "2023-12-15T05:51:50",
    list: [],
  },
  {
    id: 14,
    title: "질문14",
    content: "콘텐츠14",
    question_image_url: "",
    view_count: 9,
    close_status: false,
    nickname: "zl존",
    member_image_url:
      "https://mobirise.com/bootstrap-template//profile-template/assets/images/timothy-paul-smith-256424-1200x800.jpg",
    level: 4,
    level_image_url:
      "https://mobirise.com/bootstrap-template//profile-template/assets/images/timothy-paul-smith-256424-1200x800.jpg",
    skills: ["java"],
    created_date: "2023-12-11T12:10:12",
    modified_date: "2023-12-11T12:10:12",
    list: [],
  },
]
